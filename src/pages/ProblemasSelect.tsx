import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAppContext } from '../store/AppContext';

export function ProblemasSelectPage() {
  const navigate = useNavigate();
  const { problemasProgress, studyDaysCount } = useAppContext();
  
  const ops = [
    { id: 'adicao', name: 'ADIÇÃO', icon: '➕', color: '#55E6C1' },
    { id: 'subtracao', name: 'SUBTRAÇÃO', icon: '➖', color: '#A29BFE' },
    { id: 'multiplicacao', name: 'MULTIPLICAÇÃO', icon: '✖️', color: '#74B9FF' },
    { id: 'divisao', name: 'DIVISÃO', icon: '➗', color: '#FDCB6E' },
    { id: 'mistos', name: 'MISTOS', icon: '🎲', color: '#FF9F43' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-2xl font-black text-[#2D3436] uppercase tracking-tight flex items-center gap-2" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          <span>🧠</span> PROBLEMAS
        </h2>
      </div>

      <div className="text-center py-2">
        <p className="text-lg text-[#636E72] font-bold">Escolha qual tipo de problema quer resolver:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ops.map((op) => {
          const currentDay = (problemasProgress && problemasProgress[op.id]) || 1;
          const isTest = currentDay > studyDaysCount;
          return (
            <button
              key={op.id}
              onClick={() => navigate(`/tarefa/problemas/${op.id}`)}
              className="flex flex-col items-center justify-center p-6 rounded-[32px] border-4 border-[#2D3436] text-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] transition-all active:scale-95"
              style={{ backgroundColor: op.color }}
            >
              <span className="text-6xl font-black mb-4">{op.icon}</span>
              <span className="text-xl font-black uppercase mb-4">{op.name}</span>
              {isTest ? (
                <span className="text-sm font-black uppercase bg-[#FF7675] text-white px-3 py-1.5 rounded-md border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                  ⭐ Teste Final
                </span>
              ) : (
                <span className="text-sm font-black uppercase bg-white text-[#2D3436] px-3 py-1.5 rounded-md border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                  Dia {currentDay}/{studyDaysCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
