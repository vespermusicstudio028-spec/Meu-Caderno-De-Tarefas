import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Printer, Download, Trash2, Lock, Eye, EyeOff, KeyRound, LogOut, Calendar } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function ParentsAreaPage() {
  const { tasks, clearHistory, profile, resetApp, parentsUnlocked, unlockParents, lockParents, studyDaysCount, setStudyDaysCount } = useAppContext();
  const [pin, setPin] = useState('');
  const [pinVisible, setPinVisible] = useState(false);
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [newPinVisible, setNewPinVisible] = useState(false);
  const [isChangingDays, setIsChangingDays] = useState(false);
  const [newDaysCount, setNewDaysCount] = useState(studyDaysCount.toString());
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);
  const [confirmResetProfile, setConfirmResetProfile] = useState(false);
  const navigate = useNavigate();

  const savedPin = localStorage.getItem('@caderno:pin') || '1234';
  const isDefaultPin = savedPin === '1234';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === savedPin) {
      unlockParents();
      setErrorMsg('');
    } else {
      setErrorMsg('PIN incorreto. Tente novamente.');
    }
  };

  if (!parentsUnlocked) {
    return (
      <div className="max-w-xs mx-auto mt-12 text-center space-y-6">
        <div className="w-20 h-20 bg-[#FFEAA7] border-4 border-[#2D3436] text-[#2D3436] rounded-full flex items-center justify-center mx-auto shadow-[6px_6px_0px_0px_#2D3436]">
          <Lock size={40} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-[#FF7675] uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>Área dos Pais</h2>
          <p className="text-[#636E72] font-bold mt-2">Digite o PIN para acessar {isDefaultPin && '(Dica: 1234)'}</p>
        </div>
        <form onSubmit={handleUnlock} className="space-y-4">
          {errorMsg && (
            <div className="text-sm font-black uppercase tracking-widest text-white bg-[#FF7675] p-3 rounded-xl border-4 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
              {errorMsg}
            </div>
          )}
          <div className="relative">
            <input
              type={pinVisible ? "text" : "password"}
              maxLength={4}
              value={pin}
              inputMode="numeric"
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              className="w-full text-center tracking-widest text-3xl font-black px-4 py-4 bg-white border-4 border-[#2D3436] rounded-2xl shadow-[6px_6px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[4px_4px_0px_0px_#2D3436] transition-all"
              placeholder="****"
            />
            <button
              type="button"
              onClick={() => setPinVisible(!pinVisible)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#636E72] hover:text-[#2D3436] transition-colors p-2"
            >
              {pinVisible ? <EyeOff size={28} /> : <Eye size={28} />}
            </button>
          </div>
          <Button type="submit" size="lg" className="w-full">ACESSAR</Button>
        </form>
      </div>
    );
  }

  const averageScore = tasks.length > 0 
    ? tasks.reduce((acc, task) => acc + (task.score / task.maxScore) * 10, 0) / tasks.length 
    : 0;

  const totalQuestions = tasks.reduce((acc, task) => acc + task.maxScore, 0);
  const totalCorrect = tasks.reduce((acc, task) => acc + task.score, 0);

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    if (newPin.length !== 4) {
      setErrorMsg('O PIN deve ter exatos 4 números.');
      return;
    }
    localStorage.setItem('@caderno:pin', newPin);
    setSuccessMsg('PIN alterado com sucesso!');
    setNewPin('');
    setTimeout(() => {
      setIsChangingPin(false);
      setSuccessMsg('');
    }, 2000);
  };

  const handleSaveDays = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const days = parseInt(newDaysCount, 10);
    if (isNaN(days) || days < 1 || days > 30) {
      setErrorMsg('Por favor, digite um número entre 1 e 30.');
      return;
    }

    setStudyDaysCount(days);
    setSuccessMsg('Dias de estudo alterados com sucesso!');
    setTimeout(() => {
      setIsChangingDays(false);
      setSuccessMsg('');
    }, 2000);
  };

  const handleSavePDF = async () => {
    const element = document.getElementById('report-content');
    if (!element) return;
    
    // Create a clone to render temporarily for PDF without UI clutter if needed
    // But since we just want to print the stats and history, we can just use the element.
    try {
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`relatorio_${profile?.name || 'aluno'}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF', error);
      alert('Erro ao gerar o PDF. Tente novamente.');
    }
  };

  return (
    <div className="space-y-6" id="report-content">
      <div className="text-center py-2">
        <h2 className="text-2xl font-black text-[#FF7675] uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>👨‍👩‍👦 Área dos Pais</h2>
        <p className="text-[#636E72] font-bold mt-1">Estatísticas de {profile?.name}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center bg-[#81ECEC] cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => navigate('/historico')}>
          <div className="text-4xl font-black text-[#2D3436]">{tasks.length}</div>
          <div className="text-[10px] font-black text-[#2D3436] uppercase mt-2 tracking-widest">Trabalhos<br/>Realizados</div>
        </Card>
        <Card className="p-4 text-center bg-[#55E6C1]">
          <div className="text-4xl font-black text-[#2D3436]">{averageScore.toFixed(1)}</div>
          <div className="text-[10px] font-black text-[#2D3436] uppercase mt-2 tracking-widest">Média<br/>Geral</div>
        </Card>
        <Card className="p-4 text-center col-span-2 bg-[#FFEAA7]">
          <div className="text-3xl font-black text-[#2D3436]">
            {totalCorrect} / {totalQuestions}
          </div>
          <div className="text-[10px] font-black text-[#2D3436] uppercase mt-2 tracking-widest">Questões Respondidas Corretamente</div>
        </Card>
      </div>

      {tasks.length > 0 && (
        <Card className="p-5 border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] print:shadow-none">
          <h3 className="font-black text-[#2D3436] uppercase mb-4 flex items-center gap-2">
            <span>⚠️</span> Pontos de Atenção
          </h3>
          <div className="space-y-3">
            {Array.from(new Set(
              tasks.filter(t => (t.score / t.maxScore) < 0.6).map(t => t.topic)
            )).map(topic => (
              <div key={topic} className="flex justify-between items-center bg-[#FFEAA7] p-3 rounded-xl border-4 border-[#D63031]">
                <span className="font-bold text-[#D63031] text-sm">{topic}</span>
                <span className="text-xs font-black uppercase text-white bg-[#D63031] px-2 py-1 rounded-md ml-2 text-center whitespace-nowrap">Precisa praticar</span>
              </div>
            ))}
            {tasks.filter(t => (t.score / t.maxScore) < 0.6).length === 0 && (
              <div className="text-sm font-bold text-[#636E72]">
                Nenhum ponto de atenção identificado. Ótimo trabalho!
              </div>
            )}
          </div>
        </Card>
      )}

      <div className="space-y-3 pt-6 border-t-4 border-[#2D3436] print:hidden">
        <h3 className="font-black text-[#2D3436] uppercase">Ações</h3>
        <Button variant="outline" className="w-full justify-start gap-3" onClick={() => window.print()}>
          <Printer size={20} />
          <span className="font-bold">Imprimir Relatório</span>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3" onClick={handleSavePDF}>
          <Download size={20} />
          <span className="font-bold">Salvar como PDF</span>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3" onClick={() => { setIsChangingDays(!isChangingDays); setIsChangingPin(false); setErrorMsg(''); setSuccessMsg(''); setNewDaysCount(studyDaysCount.toString()); }}>
          <Calendar size={20} />
          <span className="font-bold">Configurar Dias de Estudo</span>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3" onClick={() => { setIsChangingPin(!isChangingPin); setIsChangingDays(false); setErrorMsg(''); setSuccessMsg(''); }}>
          <KeyRound size={20} />
          <span className="font-bold">Mudar Senha (PIN)</span>
        </Button>
        <Button variant="danger" className="w-full justify-start gap-3 mt-4" onClick={() => setConfirmClear(true)}>
          <Trash2 size={20} />
          <span className="font-bold">Apagar Histórico</span>
        </Button>
        <Button variant="danger" className="w-full justify-start gap-3 mt-4" onClick={() => setConfirmResetProfile(true)}>
          <Trash2 size={20} />
          <span className="font-bold">Apagar Perfil (Zerar Tudo)</span>
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 mt-4 text-[#D63031] border-4 border-[#D63031] hover:bg-[#D63031] hover:text-white" onClick={() => { lockParents(); navigate('/'); }}>
          <LogOut size={20} />
          <span className="font-bold">Sair da Área dos Pais (Bloquear)</span>
        </Button>
      </div>

      {confirmClear && (
        <Card className="p-5 border-4 border-[#2D3436] bg-[#FF7675] text-white shadow-[6px_6px_0px_0px_#2D3436] print:hidden">
          <h3 className="font-black uppercase mb-2">Apagar tudo?</h3>
          <p className="font-bold mb-4">Tem certeza que deseja apagar todo o histórico? Isso não pode ser desfeito.</p>
          <div className="flex gap-3">
            <Button className="flex-1 bg-white text-[#2D3436] border-[#2D3436] hover:bg-slate-100" onClick={() => setConfirmClear(false)}>Cancelar</Button>
            <Button className="flex-1 bg-[#2D3436] text-white border-white hover:bg-black" onClick={() => { clearHistory(); setConfirmClear(false); }}>Sim, Apagar</Button>
          </div>
        </Card>
      )}

      {confirmResetProfile && (
        <Card className="p-5 border-4 border-[#2D3436] bg-[#FF7675] text-white shadow-[6px_6px_0px_0px_#2D3436] print:hidden">
          <h3 className="font-black uppercase mb-2">Apagar Perfil?</h3>
          <p className="font-bold mb-4">Tem certeza que deseja apagar o perfil, a senha e todo o histórico? Você voltará para a tela inicial para criar um novo perfil.</p>
          <div className="flex gap-3">
            <Button className="flex-1 bg-white text-[#2D3436] border-[#2D3436] hover:bg-slate-100" onClick={() => setConfirmResetProfile(false)}>Cancelar</Button>
            <Button className="flex-1 bg-[#2D3436] text-white border-white hover:bg-black" onClick={() => { resetApp(); navigate('/'); }}>Sim, Apagar Perfil</Button>
          </div>
        </Card>
      )}

      {isChangingPin && (
        <Card className="p-5 border-4 border-[#2D3436] bg-[#FFEAA7] shadow-[6px_6px_0px_0px_#2D3436] print:hidden">
          <h3 className="font-black text-[#2D3436] uppercase mb-4">Nova Senha</h3>
          <form onSubmit={handleChangePin} className="space-y-4">
            {errorMsg && (
              <div className="text-sm font-black uppercase tracking-widest text-white bg-[#FF7675] p-3 rounded-xl border-4 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="text-sm font-black uppercase tracking-widest text-[#2D3436] bg-[#55E6C1] p-3 rounded-xl border-4 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                {successMsg}
              </div>
            )}
            <div className="relative">
              <input
                type={newPinVisible ? "text" : "password"}
                maxLength={4}
                value={newPin}
                inputMode="numeric"
                onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
                className="w-full text-center tracking-widest text-2xl font-black px-4 py-3 bg-white border-4 border-[#2D3436] rounded-xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
                placeholder="****"
                required
              />
              <button
                type="button"
                onClick={() => setNewPinVisible(!newPinVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#636E72] hover:text-[#2D3436] transition-colors p-2"
              >
                {newPinVisible ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>
            <Button type="submit" size="md" className="w-full">Salvar Novo PIN</Button>
          </form>
        </Card>
      )}

      {isChangingDays && (
        <Card className="p-5 border-4 border-[#2D3436] bg-[#74B9FF] shadow-[6px_6px_0px_0px_#2D3436] print:hidden">
          <h3 className="font-black text-[#2D3436] uppercase mb-2">Dias de Estudo</h3>
          <p className="font-bold text-[#2D3436] mb-4 text-sm leading-tight">Escolha quantos dias a criança deve revisar a multiplicação antes de fazer o Teste Final (1 a 30):</p>
          <form onSubmit={handleSaveDays} className="space-y-4">
            {errorMsg && (
              <div className="text-sm font-black uppercase tracking-widest text-white bg-[#FF7675] p-3 rounded-xl border-4 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="text-sm font-black uppercase tracking-widest text-[#2D3436] bg-[#55E6C1] p-3 rounded-xl border-4 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436]">
                {successMsg}
              </div>
            )}
            <input
              type="number"
              min="1"
              max="30"
              value={newDaysCount}
              onChange={(e) => setNewDaysCount(e.target.value)}
              className="w-full text-center text-2xl font-black px-4 py-3 bg-white border-4 border-[#2D3436] rounded-xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
              required
            />
            <Button type="submit" size="md" className="w-full">Salvar Dias</Button>
          </form>
        </Card>
      )}

      {/* Printable Area - Only visible in PDF/Print */}
      <div className="hidden print:block mt-8">
        <h3 className="text-xl font-black text-[#2D3436] mb-4 uppercase border-b-4 border-[#2D3436] pb-2">Histórico de Trabalhos</h3>
        {tasks.length === 0 ? (
          <p className="font-bold">Nenhum trabalho realizado ainda.</p>
        ) : (
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="border-4 border-[#2D3436] p-4 rounded-xl page-break-inside-avoid">
                <div className="flex justify-between items-center font-black">
                  <span className="uppercase text-lg">{task.subject} - {task.topic}</span>
                  <span className="text-xl">{(task.score / task.maxScore * 10).toFixed(1)}</span>
                </div>
                <div className="text-sm font-bold mt-2">
                  Data: {new Date(task.date).toLocaleDateString('pt-BR')} | Acertos: {task.score}/{task.maxScore}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
