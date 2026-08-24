import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Button } from '../components/ui/Button';
import { ArrowLeft, BookOpen, Lock, CheckCircle2 } from 'lucide-react';
import { portugueseCurriculum } from '../data/portugueseCurriculum';

export function SubjectPortuguesePage() {
  const navigate = useNavigate();
  const { profile, portugueseProgress } = useAppContext();

  if (!profile) return null;

  const units = portugueseCurriculum[profile.grade] || [];
  const progressForGrade = portugueseProgress[profile.grade] || {};

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
        <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <div className="flex-1 text-center">
          <h2 className="text-2xl font-black text-[#2D3436] uppercase tracking-tight flex items-center justify-center gap-2" style={{ fontFamily: '"Arial Black", sans-serif' }}>
            <span>📖</span> PORTUGUÊS
          </h2>
          <p className="text-sm font-bold text-[#636E72] mt-1 uppercase">{profile.grade}</p>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="space-y-4">
        {units.length === 0 && (
          <div className="text-center p-8 bg-white rounded-[24px] border-4 border-[#2D3436] shadow-[4px_4px_0px_0px_#2D3436]">
            <p className="font-bold text-[#636E72]">Nenhum conteúdo disponível para esta série no momento.</p>
          </div>
        )}
        
        {units.map((unit, index) => {
          const uProgress = progressForGrade[unit.id];
          
          // Determine if it's locked.
          // First unit is always unlocked. Others are unlocked if the previous unit is 'completed'
          let isLocked = false;
          if (index > 0) {
            const prevUnit = units[index - 1];
            const prevProgress = progressForGrade[prevUnit.id];
            if (!prevProgress || prevProgress.status !== 'completed') {
              isLocked = true;
            }
          }

          const status = uProgress?.status || 'locked';

          return (
            <button
              key={unit.id}
              disabled={isLocked}
              onClick={() => navigate(`/materia/portugues/unidade/${unit.id}`)}
              className={`w-full flex items-center gap-4 p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] transition-all text-left ${isLocked ? 'bg-gray-100 opacity-70' : status === 'completed' ? 'bg-[#55E6C1] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] active:scale-95' : 'bg-white hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] active:scale-95'}`}
            >
              <div className={`w-14 h-14 rounded-full border-4 border-[#2D3436] flex items-center justify-center shrink-0 ${isLocked ? 'bg-gray-200' : 'bg-[#81ECEC]'}`}>
                {isLocked ? <Lock size={24} /> : status === 'completed' ? <CheckCircle2 size={24} /> : <BookOpen size={24} />}
              </div>
              <div className="flex-1">
                <span className="text-xs font-black uppercase text-[#636E72]">UNIDADE {index + 1}</span>
                <h3 className="text-lg font-black text-[#2D3436] leading-tight">{unit.title}</h3>
                <p className="text-sm font-bold text-[#636E72] line-clamp-1">{unit.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
