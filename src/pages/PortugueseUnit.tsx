import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Lock, CheckCircle2, Play, Calendar } from 'lucide-react';
import { portugueseCurriculum } from '../data/portugueseCurriculum';

export function PortugueseUnitPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  const { profile, portugueseProgress } = useAppContext();

  if (!profile || !unitId) return null;

  const units = portugueseCurriculum[profile.grade] || [];
  const unit = units.find(u => u.id === unitId);
  const uProgress = (portugueseProgress[profile.grade] || {})[unitId] || { currentDayIndex: 0, completedDays: {}, status: 'in_progress' };

  if (!unit) return <div>Unidade não encontrada.</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-[24px] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436]">
        <Button variant="ghost" size="sm" onClick={() => navigate('/materia/portugues')} className="p-2 -ml-2 text-[#2D3436]">
          <ArrowLeft size={24} />
        </Button>
        <div className="flex-1 text-center">
          <p className="text-xs font-black uppercase text-[#636E72]">{profile.grade}</p>
          <h2 className="text-xl font-black text-[#2D3436] uppercase tracking-tight line-clamp-1" style={{ fontFamily: '"Arial Black", sans-serif' }}>
            {unit.title}
          </h2>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="space-y-4">
        {unit.days.map((day, index) => {
          const isCompleted = !!uProgress.completedDays[index];
          const isLocked = index > uProgress.currentDayIndex;
          const isCurrent = index === uProgress.currentDayIndex;

          const isExam = day.type === 'exam' || day.type === 'recuperation';

          return (
            <div key={day.id} className="relative">
              {/* Connecting line */}
              {index < unit.days.length - 1 && (
                <div className={`absolute left-9 top-14 bottom-[-16px] w-1.5 ${isCompleted ? 'bg-[#55E6C1]' : 'bg-gray-200'} z-0`}></div>
              )}
              
              <button
                disabled={isLocked}
                onClick={() => navigate(`/tarefa/portugues/${unitId}/${index}`)}
                className={`relative z-10 w-full flex items-center gap-4 p-4 rounded-[24px] border-4 border-[#2D3436] transition-all text-left ${
                  isLocked ? 'bg-gray-100 opacity-70 shadow-none' : 
                  isCompleted ? 'bg-[#55E6C1] shadow-[4px_4px_0px_0px_#2D3436] hover:translate-y-1 active:scale-95' : 
                  'bg-[#74B9FF] shadow-[6px_6px_0px_0px_#2D3436] hover:translate-y-1 active:scale-95'
                }`}
              >
                <div className={`w-12 h-12 rounded-full border-4 border-[#2D3436] flex items-center justify-center shrink-0 bg-white`}>
                  {isLocked ? <Lock size={20} className="text-gray-400" /> : 
                   isCompleted ? <CheckCircle2 size={24} className="text-[#2D3436]" /> : 
                   isExam ? <span className="text-xl">📝</span> : <Calendar size={20} className="text-[#2D3436]" />}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-black ${isCompleted ? 'text-[#2D3436]' : isLocked ? 'text-gray-500' : 'text-white'}`}>{day.title}</h3>
                  {isExam && !isCompleted && !isLocked && (
                     <p className="text-xs font-bold text-white uppercase bg-[#2D3436] inline-block px-2 py-0.5 rounded-full mt-1">Liberado!</p>
                  )}
                  {isExam && isLocked && (
                     <p className="text-xs font-bold text-gray-500 uppercase mt-1">Complete os estudos para liberar</p>
                  )}
                  {isCurrent && !isExam && (
                     <p className="text-xs font-bold text-[#2D3436] uppercase mt-1">Estudar Agora</p>
                  )}
                </div>
                {!isLocked && !isCompleted && (
                  <div className="w-10 h-10 bg-white border-2 border-[#2D3436] rounded-full flex items-center justify-center text-[#2D3436]">
                    <Play size={16} className="ml-1" />
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
