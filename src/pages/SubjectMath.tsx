import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

const mathTopics = [
  { id: 'adicao', name: 'ADIÇÃO', icon: '➕' },
  { id: 'subtracao', name: 'SUBTRAÇÃO', icon: '➖' },
  { id: 'multiplicacao', name: 'MULTIPLICAÇÃO', icon: '✖️' },
  { id: 'divisao', name: 'DIVISÃO', icon: '➗' },
  { id: 'armar-efetuar', name: 'ARMAR E EFETUAR', icon: '🧮' },
  { id: 'problemas', name: 'PROBLEMAS MATEMÁTICOS', icon: '🧠' },
  { id: 'desafio', name: 'DESAFIO FINAL', icon: '🏆' },
];

export function MathSubjectPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="p-2 -ml-2 text-slate-500">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
          <span>➗</span> MATEMÁTICA
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {mathTopics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => {
              if (topic.id === 'multiplicacao') {
                navigate('/materia/matematica/multiplicacao');
              } else if (topic.id === 'adicao') {
                navigate('/materia/matematica/adicao');
              } else if (topic.id === 'subtracao') {
                navigate('/materia/matematica/subtracao');
              } else if (topic.id === 'divisao') {
                navigate('/materia/matematica/divisao');
              } else if (topic.id === 'armar-efetuar') {
                navigate('/materia/matematica/armar-efetuar');
              } else if (topic.id === 'problemas') {
                navigate('/materia/matematica/problemas');
              } else if (topic.id === 'desafio') {
                navigate('/tarefa/desafio');
              } else {
                alert('Em breve! Tente outra opção por enquanto.');
              }
            }}
            className="flex items-center gap-4 p-4 rounded-[24px] border-4 border-[#2D3436] bg-[#FFEAA7] text-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] transition-all active:scale-95 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#2D3436] flex items-center justify-center text-2xl flex-shrink-0">
              {topic.icon}
            </div>
            <span className="text-lg font-black uppercase">{topic.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
