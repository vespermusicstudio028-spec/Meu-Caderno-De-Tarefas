import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAppContext } from '../store/AppContext';

export function AdicaoSelectPage() {
  const navigate = useNavigate();
  const { adicaoProgress, studyDaysCount } = useAppContext();
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate('/materia/matematica')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-2xl font-black text-[#74B9FF] uppercase tracking-tight flex items-center gap-2" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          <span>➕</span> ADIÇÃO
        </h2>
      </div>

      <div className="text-center py-2">
        <p className="text-lg text-[#636E72] font-bold">Escolha qual número você quer treinar:</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {numbers.map((num) => {
          const currentDay = (adicaoProgress && adicaoProgress[String(num)]) || 1;
          const isTest = currentDay > studyDaysCount;
          return (
            <button
              key={num}
              onClick={() => navigate(`/tarefa/adicao/${num}`)}
              className="aspect-square flex flex-col items-center justify-center p-4 rounded-[32px] border-4 border-[#2D3436] bg-[#55E6C1] text-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] transition-all active:scale-95"
            >
              <span className="text-6xl font-black mb-2">+{num}</span>
              {isTest ? (
                <span className="text-xs font-black uppercase bg-[#FF7675] text-white px-2 py-1 rounded-md border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                  ⭐ Teste
                </span>
              ) : (
                <span className="text-xs font-black uppercase bg-white text-[#2D3436] px-2 py-1 rounded-md border-2 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
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
