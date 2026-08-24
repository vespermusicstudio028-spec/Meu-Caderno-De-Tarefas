import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Card } from '../components/ui/Card';

const subjects = [
  { id: 'matematica', name: 'MATEMÁTICA', icon: '➗', color: 'bg-[#FFEAA7] text-[#2D3436]' },
  { id: 'portugues', name: 'PORTUGUÊS', icon: '📖', color: 'bg-[#81ECEC] text-[#2D3436]' },
  { id: 'geografia', name: 'GEOGRAFIA', icon: '🌎', color: 'bg-[#74B9FF] text-[#2D3436]' },
  { id: 'ciencias', name: 'CIÊNCIAS', icon: '🔬', color: 'bg-[#55E6C1] text-[#2D3436]' },
  { id: 'historia', name: 'HISTÓRIA', icon: '🏛️', color: 'bg-[#A29BFE] text-[#2D3436]' },
  { id: 'ingles', name: 'INGLÊS', icon: '🇺🇸', color: 'bg-[#FD79A8] text-[#2D3436]' },
  { id: 'artes', name: 'ARTES', icon: '🎨', color: 'bg-[#FDCB6E] text-[#2D3436]' },
  { id: 'desafios', name: 'DESAFIOS', icon: '🧠', color: 'bg-[#D63031] text-white' },
];

export function HomePage() {
  const { profile } = useAppContext();
  const navigate = useNavigate();

  if (!profile) {
    return <Navigate to="/perfil" replace />;
  }

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <h2 className="text-2xl font-black text-[#2D3436]">
          Olá, {profile.name}! 👋
        </h2>
        <p className="text-lg text-[#636E72] mt-1 font-bold">
          Escolha uma matéria para começar!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {subjects.map((sub) => (
          <button
            key={sub.id}
            onClick={() => navigate(`/materia/${sub.id}`)}
            className={`flex flex-col items-center justify-center p-6 rounded-[32px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] transition-all active:scale-95 ${sub.color}`}
          >
            <span className="text-6xl mb-4 block">{sub.icon}</span>
            <span className="text-lg font-black uppercase tracking-wider">{sub.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
