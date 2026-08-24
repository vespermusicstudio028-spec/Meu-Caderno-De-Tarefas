import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { portugueseCurriculum } from '../data/portugueseCurriculum';

export function PortugueseTaskPage() {
  const { unitId, dayIndex } = useParams<{ unitId: string, dayIndex: string }>();
  const navigate = useNavigate();
  const { profile, portugueseProgress, updatePortugueseProgress, saveTask } = useAppContext();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(true);

  if (!profile || !unitId || dayIndex === undefined) return null;

  const units = portugueseCurriculum[profile.grade] || [];
  const unit = units.find(u => u.id === unitId);
  const dayIndexNum = parseInt(dayIndex, 10);
  const day = unit?.days[dayIndexNum];

  useEffect(() => {
    if (!day) return;
    if (!day.explanation) {
      setShowExplanation(false);
    }
  }, [day]);

  if (!unit || !day) return <div>Conteúdo não encontrado.</div>;

  const handleAnswer = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQIndex < day.questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    }
  };

  const finishTask = () => {
    // Calculate score
    let correctCount = 0;
    const questionsWithResults = day.questions.map(q => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) correctCount++;
      return {
        ...q,
        isCorrect,
        userAnswer: answers[q.id] || '',
        text: q.prompt // for TaskResult compatibility
      };
    });

    const maxScore = day.questions.length;
    const finalScore = (correctCount / maxScore) * 10;
    setScore(finalScore);
    setIsFinished(true);

    // Save standard task
    saveTask({
      id: `portuguese-${unit.id}-${day.id}-${Date.now()}`,
      date: new Date().toISOString(),
      subject: 'Português',
      topic: `${unit.title} - ${day.title}`,
      score: correctCount,
      maxScore,
      questions: questionsWithResults as any,
      answers: answers
    });

    // Update specific Portuguese progress
    const currentProgress = (portugueseProgress[profile.grade] || {})[unitId] || { currentDayIndex: 0, completedDays: {}, status: 'in_progress' };
    
    let newStatus = currentProgress.status;
    let newDayIndex = currentProgress.currentDayIndex;
    let examScore = currentProgress.examScore;

    if (day.type === 'exam' || day.type === 'recuperation') {
      if (finalScore >= 6) {
        newStatus = 'completed';
        examScore = finalScore;
        // The next unit unlocks automatically because this one is 'completed'
      } else {
        newStatus = 'recuperation';
        // Need to add a recuperation day if not already there?
        // Actually, the prompt says they can redo. They just can't advance.
      }
    } else {
      // Just advance to the next day if we are at the current edge
      if (dayIndexNum === currentProgress.currentDayIndex) {
        newDayIndex = dayIndexNum + 1;
      }
    }

    updatePortugueseProgress(profile.grade, unitId, {
      ...currentProgress,
      status: newStatus,
      currentDayIndex: newDayIndex,
      examScore,
      completedDays: {
        ...currentProgress.completedDays,
        [dayIndexNum]: {
          date: new Date().toISOString(),
          score: finalScore,
          maxScore: 10,
          status: 'completed'
        }
      }
    });
  };

  if (isFinished) {
    const isExam = day.type === 'exam' || day.type === 'recuperation';
    const passed = score >= 6;

    return (
      <div className="space-y-6 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-24 h-24 bg-white border-4 border-[#2D3436] rounded-full flex items-center justify-center text-6xl shadow-[6px_6px_0px_0px_#2D3436] mb-4">
          {isExam ? (passed ? '🏆' : '🌟') : '✅'}
        </div>
        
        <h2 className="text-3xl font-black text-[#2D3436] uppercase text-center" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          {isExam ? (passed ? 'EXCELENTE!' : 'VAMOS TENTAR NOVAMENTE!') : 'DIA CONCLUÍDO!'}
        </h2>
        
        <div className="bg-white p-6 rounded-[24px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] text-center max-w-sm w-full">
          <p className="text-lg font-bold text-[#636E72] mb-2">{day.title}</p>
          <div className="text-5xl font-black text-[#2D3436] mb-4">
            {score.toFixed(1)} <span className="text-xl text-[#636E72]">/ 10</span>
          </div>
          
          {isExam && !passed && (
            <p className="font-bold text-[#D63031] bg-[#FFEAA7] p-3 rounded-xl border-2 border-[#D63031]">
              Você precisa revisar este conteúdo. Não se preocupe, você pode tentar de novo!
            </p>
          )}
          {isExam && passed && (
            <p className="font-bold text-[#2D3436]">
              Você dominou este conteúdo!
            </p>
          )}
        </div>

        <Button size="xl" onClick={() => navigate(`/materia/portugues/unidade/${unitId}`)} className="w-full max-w-sm mt-8">
          CONTINUAR
        </Button>
      </div>
    );
  }

  if (showExplanation && day.explanation) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
          <Button variant="ghost" size="sm" onClick={() => navigate(`/materia/portugues/unidade/${unitId}`)} className="p-2 -ml-2 text-[#2D3436]">
            <ArrowLeft size={24} />
          </Button>
          <div className="flex-1 text-center">
            <h2 className="text-xl font-black text-[#2D3436] uppercase tracking-tight" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              {day.title}
            </h2>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="bg-white p-6 rounded-[24px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436]">
          <div className="w-16 h-16 bg-[#81ECEC] rounded-full border-4 border-[#2D3436] flex items-center justify-center text-3xl mb-4 shadow-[4px_4px_0px_0px_#2D3436]">
            📖
          </div>
          <h3 className="text-2xl font-black text-[#2D3436] mb-4">Vamos Aprender!</h3>
          <p className="text-lg font-bold text-[#2D3436] leading-relaxed">
            {day.explanation}
          </p>
        </div>

        <Button size="xl" onClick={() => setShowExplanation(false)} className="w-full mt-4">
          COMEÇAR EXERCÍCIOS
        </Button>
      </div>
    );
  }

  const q = day.questions[currentQIndex];
  const isLastQ = currentQIndex === day.questions.length - 1;
  const hasAnsweredCurrent = !!answers[q.id];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
        <Button variant="ghost" size="sm" onClick={() => navigate(`/materia/portugues/unidade/${unitId}`)} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <div className="flex-1 text-center">
          <p className="text-xs font-black text-[#636E72] uppercase">
            Questão {currentQIndex + 1} de {day.questions.length}
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden border-2 border-[#2D3436]">
            <div className="bg-[#55E6C1] h-full" style={{ width: `${((currentQIndex + 1) / day.questions.length) * 100}%` }}></div>
          </div>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="bg-white p-6 rounded-[24px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436]">
        <h3 className="text-2xl font-black text-[#2D3436] mb-6 leading-tight">
          {q.prompt}
        </h3>

        {q.type === 'multiple_choice' && (
          <div className="space-y-3">
            {q.options?.map((opt, i) => {
              const isSelected = answers[q.id] === opt;
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(q.id, opt)}
                  className={`w-full p-4 rounded-[16px] border-4 border-[#2D3436] text-left font-bold text-lg transition-all ${
                    isSelected 
                      ? 'bg-[#FFEAA7] shadow-none translate-y-1' 
                      : 'bg-white shadow-[4px_4px_0px_0px_#2D3436] hover:bg-slate-50'
                  }`}
                >
                  <span className="inline-block w-8 h-8 rounded-full border-2 border-[#2D3436] bg-white text-center leading-7 mr-3">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        )}
        
        {/* add other types if necessary */}
      </div>

      <Button 
        size="xl" 
        disabled={!hasAnsweredCurrent}
        onClick={isLastQ ? finishTask : nextQuestion} 
        className="w-full flex items-center justify-center gap-2 mt-4"
      >
        <Check size={28} />
        <span className="uppercase">{isLastQ ? 'FINALIZAR' : 'PRÓXIMA'}</span>
      </Button>
    </div>
  );
}
