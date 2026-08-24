import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Card } from '../components/ui/Card';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function HistoryPage() {
  const { tasks } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="text-center py-2">
        <h2 className="text-2xl font-black text-[#FF7675] uppercase flex items-center justify-center gap-2" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          📚 Meus Trabalhos
        </h2>
        <p className="text-[#636E72] font-bold mt-1">
          Veja tudo o que você já fez!
        </p>
      </div>

      {tasks.length === 0 ? (
        <Card className="p-8 text-center bg-[#FFEAA7] border-dashed">
          <div className="text-4xl mb-3">📭</div>
          <p className="text-[#2D3436] font-bold">Você ainda não fez nenhum trabalho.</p>
          <p className="text-[#636E72] text-sm mt-1 font-black uppercase">Vá em Início e escolha uma matéria!</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => {
            const grade = ((task.score / task.maxScore) * 10).toFixed(1);
            return (
              <Card key={task.id} className="p-4 flex items-center justify-between cursor-pointer hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#2D3436] transition-all" onClick={() => navigate(`/resultado/${task.id}`)}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-[#2D3436] uppercase bg-[#FFEAA7] border-2 border-[#2D3436] px-2 py-1 rounded-md shadow-[2px_2px_0px_0px_#2D3436]">
                      📅 {format(parseISO(task.date), "dd/MM/yyyy", { locale: ptBR })}
                    </span>
                    <span className="text-[10px] font-black text-[#2D3436] uppercase bg-[#81ECEC] border-2 border-[#2D3436] px-2 py-1 rounded-md shadow-[2px_2px_0px_0px_#2D3436]">
                      {task.subject}
                    </span>
                  </div>
                  <h4 className="font-black text-[#2D3436] text-lg uppercase">{task.topic}</h4>
                  <p className="text-sm font-bold text-[#636E72]">
                    Acertos: {task.score}/{task.maxScore}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-[#FF7675]">
                    {grade}
                  </div>
                  <div className="text-[10px] font-black text-[#B2BEC3] uppercase tracking-widest">
                    Nota
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
