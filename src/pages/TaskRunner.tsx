import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { generateTabuadaTask } from '../utils/generators/math';
import { useAppContext } from '../store/AppContext';
import { TaskResult, Question } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';

export function TaskRunnerPage() {
  const { n } = useParams<{ n: string }>();
  const navigate = useNavigate();
  const { profile, saveTask, tabuadaProgress, advanceTabuadaDay, studyDaysCount } = useAppContext();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [taskId, setTaskId] = useState('');

  useEffect(() => {
    if (n) {
      setQuestions(generateTabuadaTask(parseInt(n, 10)));
      setTaskId(uuidv4());
    }
  }, [n]);

  const currentDay = tabuadaProgress[n || ''] || 1;
  const isTest = currentDay > studyDaysCount;

  if (!isTest) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
          <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica/multiplicacao')} className="p-2 -ml-2 text-[#2D3436]">
            <ArrowLeft size={24} />
          </Button>
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-black text-[#FF7675] uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>REVISÃO DO {n}</h2>
            <p className="text-sm text-[#636E72] font-bold">Dia {currentDay} de {studyDaysCount}</p>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="bg-[#FFEAA7] p-6 rounded-[32px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] mb-8">
          <h3 className="text-xl font-black text-[#2D3436] uppercase text-center mb-6">Leia e memorize:</h3>
          <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
              <div key={i} className="bg-white border-4 border-[#2D3436] rounded-2xl p-3 text-center text-2xl font-black text-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#2D3436] transition-all">
                {n} × {i} = <span className="text-[#FF7675]">{Number(n) * i}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 pb-8">
          <Button size="xl" onClick={() => { advanceTabuadaDay(Number(n)); navigate('/materia/matematica/multiplicacao'); }} className="w-full flex items-center justify-center gap-2">
            <Check size={28} />
            <span className="uppercase">Concluir Dia {currentDay}</span>
          </Button>
        </div>
      </div>
    );
  }

  if (!questions.length) return <div className="p-8 text-center">Carregando...</div>;

  const handleInputChange = (id: string, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      const userAnswer = parseInt(answers[q.id] || '0', 10);
      if (userAnswer === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    if (submitted) return;
    
    // Check if all answered? We can allow submitting incomplete but maybe warn
    if (Object.keys(answers).length < questions.length) {
      const confirmSubmit = window.confirm("Você não respondeu todas as perguntas. Deseja entregar mesmo assim?");
      if (!confirmSubmit) return;
    }

    const score = calculateScore();
    const taskResult: TaskResult = {
      id: taskId,
      date: new Date().toISOString(),
      subject: 'Matemática',
      topic: `Multiplicação do ${n}`,
      score,
      maxScore: questions.length,
      questions,
      answers
    };

    saveTask(taskResult);
    setSubmitted(true);
    
    // Navigate to result page
    navigate(`/resultado/${taskId}`);
  };

  const renderSection = (title: string, icon: string, types: string[]) => {
    const sectionQuestions = questions.filter(q => types.includes(q.type));
    if (sectionQuestions.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-xl font-black text-[#FF7675] uppercase mb-4 flex items-center gap-2">
          <span>{icon}</span> {title}
        </h3>
        <div className="space-y-4">
          {sectionQuestions.map((q, idx) => (
            <Card key={q.id} className="p-4 sm:p-5">
              {q.type === 'word_problem' && (
                <div className="mb-4">
                  <h4 className="text-[#FF7675] font-black uppercase mb-2">Desafio {idx + 1}</h4>
                  <p className="text-[#2D3436] font-bold text-lg whitespace-pre-line">{q.text}</p>
                </div>
              )}
              
              {q.type === 'arme_efetue' && (
                <div className="mb-4">
                  <span className="text-[#B2BEC3] font-black mr-2">{idx + 1}.</span>
                  <span className="text-xl font-black">{q.text}</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                {q.type === 'direct' && (
                  <span className="text-xl font-black w-20 text-right">{q.text}</span>
                )}
                {q.type === 'challenge' && (
                  <span className="text-lg font-bold text-[#2D3436]">{q.text}</span>
                )}
                
                {(q.type === 'word_problem' || q.type === 'arme_efetue') && (
                  <span className="text-[#636E72] font-black">Resposta:</span>
                )}
                
                <input
                  type="tel"
                  value={answers[q.id] || ''}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  className="w-24 px-4 py-2 text-2xl font-black text-center bg-white border-4 border-[#2D3436] rounded-xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
                  placeholder="?"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
        <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica/multiplicacao')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-black text-[#FF7675] uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>MULTIPLICAÇÃO DO {n}</h2>
          <p className="text-sm text-[#636E72] font-bold">Nome: {profile?.name}</p>
        </div>
        <div className="w-10"></div>
      </div>

      {renderSection('Situações Problema', '🚀', ['word_problem'])}
      {renderSection(`Multiplicação do ${n}`, '✏️', ['direct'])}
      {renderSection('Arme e Efetue', '🧮', ['arme_efetue'])}
      {renderSection('Desafio Final (Sem olhar)', '🧠', ['challenge'])}

      <div className="pt-4 pb-8">
        <Button size="xl" onClick={handleSubmit} className="w-full flex items-center justify-center gap-2">
          <Check size={28} />
          <span>ENTREGAR TRABALHO</span>
        </Button>
      </div>
    </div>
  );
}
