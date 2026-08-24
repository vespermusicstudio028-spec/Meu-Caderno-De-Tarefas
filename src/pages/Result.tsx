import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Trophy, ArrowRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

export function ResultPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tasks } = useAppContext();

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return <div className="p-8 text-center">Trabalho não encontrado.</div>;
  }

  const percentage = (task.score / task.maxScore) * 100;
  
  let message = '';
  let emoji = '';
  let bgColor = '';
  let textColor = '';

  if (percentage >= 90) {
    message = 'EXCELENTE!\nVocê está indo muito bem!';
    emoji = '🏆';
    bgColor = 'bg-[#55E6C1]';
    textColor = 'text-[#2D3436]';
  } else if (percentage >= 70) {
    message = 'MUITO BOM!\nContinue praticando!';
    emoji = '👏';
    bgColor = 'bg-[#74B9FF]';
    textColor = 'text-[#2D3436]';
  } else if (percentage >= 50) {
    message = 'BOM TRABALHO!\nVocê está aprendendo!';
    emoji = '💪';
    bgColor = 'bg-[#FFEAA7]';
    textColor = 'text-[#2D3436]';
  } else {
    message = 'NÃO DESISTA!\nVamos praticar mais um pouco!';
    emoji = '🌟';
    bgColor = 'bg-[#FF7675]';
    textColor = 'text-white';
  }

  const wordProblems = task.questions.filter(q => q.type === 'word_problem');
  const direct = task.questions.filter(q => q.type === 'direct');
  const arme = task.questions.filter(q => q.type === 'arme_efetue');
  const challenge = task.questions.filter(q => q.type === 'challenge');

  const countCorrect = (questions: any[]) => {
    return questions.filter(q => {
      const u = task.answers[q.id];
      return u !== undefined && parseInt(String(u), 10) === q.correctAnswer;
    }).length;
  };

  // 10 point scale grade
  const grade = ((task.score / task.maxScore) * 10).toFixed(1);

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`p-8 rounded-[32px] text-center border-4 border-[#2D3436] shadow-[10px_10px_0px_0px_#2D3436] ${bgColor} ${textColor}`}
      >
        <div className="text-6xl mb-4">{emoji}</div>
        <h2 className={`text-2xl font-black mb-2 whitespace-pre-line uppercase`}>
          {message}
        </h2>
        <div className="mt-6 bg-white border-4 border-[#2D3436] p-4 rounded-2xl inline-block shadow-[4px_4px_0px_0px_#2D3436]">
          <div className="text-sm font-black uppercase tracking-wider text-[#636E72] mb-1">SUA NOTA</div>
          <div className={`text-5xl font-black text-[#2D3436]`}>{grade}</div>
        </div>
      </motion.div>

      <Card className="p-6">
        <h3 className="text-lg font-black text-[#2D3436] uppercase mb-4 border-b-4 border-[#2D3436] pb-2">
          RESUMO
        </h3>
        <div className="space-y-4 font-bold text-[#2D3436]">
          <div className="flex justify-between items-center">
            <span>🚀 Desafios</span>
            <span className="font-black">{countCorrect(wordProblems)} / {wordProblems.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>✏️ Multiplicação Direta</span>
            <span className="font-black">{countCorrect(direct)} / {direct.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>🧮 Arme e Efetue</span>
            <span className="font-black">{countCorrect(arme)} / {arme.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>🧠 Desafio Final</span>
            <span className="font-black">{countCorrect(challenge)} / {challenge.length}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t-4 border-[#2D3436] flex justify-between items-center text-lg">
          <span className="font-black text-[#2D3436] uppercase">Total de Acertos</span>
          <span className="font-black text-[#FF7675]">{task.score} / {task.maxScore}</span>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button variant="outline" size="lg" onClick={() => navigate('/')} className="flex-1 flex items-center justify-center gap-2">
          <Home size={20} /> Início
        </Button>
        <Button size="lg" onClick={() => navigate('/materia/matematica')} className="flex-1 flex items-center justify-center gap-2">
          Continuar <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}
