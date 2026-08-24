import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { generateDesafioTask } from '../utils/generators/math';
import { useAppContext } from '../store/AppContext';
import { TaskResult, Question } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ArrowLeft, Check, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export function DesafioTaskRunnerPage() {
  const navigate = useNavigate();
  const { profile, saveTask } = useAppContext();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [taskId, setTaskId] = useState('');

  useEffect(() => {
    setQuestions(generateDesafioTask());
    setTaskId(uuidv4());
  }, []);

  if (!questions.length) return <div className="p-8 text-center">Carregando...</div>;

  const handleOptionSelect = (id: string, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
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
      topic: 'Desafio Final',
      score,
      maxScore: questions.length,
      questions,
      answers
    };

    saveTask(taskResult);
    setSubmitted(true);
    
    // Trigger confetti if high score
    if (score / questions.length > 0.8) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    navigate(`/resultado/${taskId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
        <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <Trophy size={28} color="#FF9F43" />
          <h2 className="text-2xl font-black text-[#2D3436] uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>
            DESAFIO FINAL
          </h2>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="bg-[#FFEAA7] p-6 rounded-[32px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] mb-8 text-center">
        <h3 className="text-2xl font-black text-[#2D3436] uppercase mb-4">Teste de Mestre!</h3>
        <p className="text-lg font-bold text-[#636E72]">
          Mostre tudo que aprendeu nas 4 operações. Você consegue!
        </p>
      </div>

      <div className="mb-8">
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <Card key={q.id} className="p-4 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[#FF7675] font-black text-xl">{idx + 1}.</span>
                <span className="text-3xl font-black tracking-wider text-[#2D3436]">{q.text}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {q.options?.map((opt, i) => {
                  const isSelected = answers[q.id] === opt;
                  return (
                    <button
                      key={i}
                      onClick={() => handleOptionSelect(q.id, opt)}
                      className={`
                        py-3 px-2 text-2xl font-black rounded-2xl border-4 transition-all
                        ${isSelected 
                          ? 'bg-[#74B9FF] border-[#2D3436] text-[#2D3436] shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,0.2)] translate-y-1' 
                          : 'bg-white border-[#2D3436] text-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#2D3436]'
                        }
                      `}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="pt-4 pb-8">
        <Button size="xl" onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 bg-[#FF9F43] hover:bg-[#ff8c1a]">
          <Check size={28} />
          <span>ENTREGAR DESAFIO</span>
        </Button>
      </div>
    </div>
  );
}
