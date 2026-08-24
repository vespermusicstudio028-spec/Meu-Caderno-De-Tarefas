import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { generateProblemasTask } from '../utils/generators/math';
import { useAppContext } from '../store/AppContext';
import { TaskResult, Question } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Check } from 'lucide-react';

export function ProblemasTaskRunnerPage() {
  const { op } = useParams<{ op: string }>();
  const navigate = useNavigate();
  const { profile, saveTask, problemasProgress, advanceProblemasDay, studyDaysCount } = useAppContext();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [taskId, setTaskId] = useState('');

  useEffect(() => {
    if (op) {
      setQuestions(generateProblemasTask(op));
      setTaskId(uuidv4());
    }
  }, [op]);

  const currentDay = (problemasProgress && problemasProgress[op || '']) || 1;
  const isTest = currentDay > studyDaysCount;

  const getOpName = () => {
    switch (op) {
      case 'adicao': return 'ADIÇÃO';
      case 'subtracao': return 'SUBTRAÇÃO';
      case 'multiplicacao': return 'MULTIPLICAÇÃO';
      case 'divisao': return 'DIVISÃO';
      case 'mistos': return 'MISTOS';
      default: return 'PROBLEMAS';
    }
  };
  
  const getOpColor = () => {
    switch (op) {
      case 'adicao': return '#55E6C1';
      case 'subtracao': return '#A29BFE';
      case 'multiplicacao': return '#74B9FF';
      case 'divisao': return '#FDCB6E';
      case 'mistos': return '#FF9F43';
      default: return '#FF9F43';
    }
  };

  if (!questions.length) return <div className="p-8 text-center">Carregando...</div>;

  const handleInputChange = (id: string, value: string) => {
    if (value && !/^\d+$/.test(value)) return;
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  if (!isTest) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
          <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica/problemas')} className="p-2 -ml-2 text-[#2D3436]">
            <ArrowLeft size={24} />
          </Button>
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-black uppercase" style={{ color: getOpColor(), fontFamily: '"Arial Black", sans-serif' }}>
              TREINO DE {getOpName()}
            </h2>
            <p className="text-sm text-[#636E72] font-bold">Dia {currentDay} de {studyDaysCount}</p>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="bg-[#FFEAA7] p-6 rounded-[32px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] mb-8 text-center">
          <h3 className="text-2xl font-black text-[#2D3436] uppercase mb-4">Como treinar:</h3>
          <p className="text-lg font-bold text-[#636E72]">
            Leia com atenção, use um caderno de rascunho se precisar, e anote a resposta correta.
          </p>
        </div>

        <div className="mb-8">
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <Card key={q.id} className="p-4 sm:p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#FDCB6E] font-black text-xl mt-1">🚀</span>
                  <div>
                    <h4 className="text-[#FDCB6E] font-black uppercase mb-1">Problema {idx + 1}</h4>
                    <p className="text-lg font-bold text-[#2D3436] whitespace-pre-line">{q.text}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 self-end mt-2">
                  <span className="text-[#636E72] font-black uppercase text-sm">Resposta:</span>
                  <input
                    type="tel"
                    value={answers[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    className="w-32 px-4 py-3 text-3xl font-black text-center bg-white border-4 border-[#2D3436] rounded-xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
                    placeholder="?"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-4 pb-8">
          <Button size="xl" onClick={() => { advanceProblemasDay(op || ''); navigate('/materia/matematica/problemas'); }} className="w-full flex items-center justify-center gap-2">
            <Check size={28} />
            <span className="uppercase">Concluir Dia {currentDay}</span>
          </Button>
        </div>
      </div>
    );
  }

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
    
    if (Object.keys(answers).length < questions.length) {
      const confirmSubmit = window.confirm("Você não respondeu todas as perguntas. Deseja entregar mesmo assim?");
      if (!confirmSubmit) return;
    }

    const score = calculateScore();
    const taskResult: TaskResult = {
      id: taskId,
      date: new Date().toISOString(),
      subject: 'Matemática',
      topic: `Problemas - ${getOpName()}`,
      score,
      maxScore: questions.length,
      questions,
      answers
    };

    saveTask(taskResult);
    setSubmitted(true);
    
    navigate(`/resultado/${taskId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
        <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica/problemas')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-black uppercase" style={{ color: getOpColor(), fontFamily: '"Arial Black", sans-serif' }}>
            TESTE DE {getOpName()}
          </h2>
          <p className="text-sm text-[#636E72] font-bold">Nome: {profile?.name}</p>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2" style={{ color: getOpColor() }}>
          <span>🧠</span> RESOLVA OS PROBLEMAS
        </h3>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <Card key={q.id} className="p-4 sm:p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FF7675] font-black text-xl mt-1">⭐</span>
                <div>
                  <h4 className="text-[#FF7675] font-black uppercase mb-1">Problema {idx + 1}</h4>
                  <p className="text-lg font-bold text-[#2D3436] whitespace-pre-line">{q.text}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 self-end mt-2">
                <span className="text-[#636E72] font-black uppercase text-sm">Resposta:</span>
                <input
                  type="tel"
                  value={answers[q.id] || ''}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                  className="w-32 px-4 py-3 text-3xl font-black text-center bg-white border-4 border-[#2D3436] rounded-xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
                  placeholder="?"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-8">
        <Button size="xl" onClick={handleSubmit} className="w-full flex items-center justify-center gap-2">
          <Check size={28} />
          <span>ENTREGAR TRABALHO</span>
        </Button>
      </div>
    </div>
  );
}
