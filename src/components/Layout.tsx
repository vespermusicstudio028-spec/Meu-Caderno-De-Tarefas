import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, User, BookOpen, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAppContext } from '../store/AppContext';

export function Layout() {
  const { pathname } = useLocation();
  const { profile } = useAppContext();

  const isHome = pathname === '/';

  const navItems = [
    { to: '/', icon: Home, label: 'Início' },
    { to: '/historico', icon: BookOpen, label: 'Trabalhos' },
    { to: '/perfil', icon: User, label: 'Perfil' },
    { to: '/pais', icon: Settings, label: 'Pais' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB] flex flex-col font-sans text-[#2D3436]">
      <header className="bg-[#FFFBEB] px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Meu Caderno de Tarefas" className="w-10 h-10 object-contain rounded-xl drop-shadow-sm hover:scale-105 transition-transform" />
          <h1 className="text-2xl font-black text-[#FF7675] uppercase tracking-tight" style={{ fontFamily: '"Arial Black", sans-serif' }}>
            Meu Caderno
          </h1>
        </Link>
        {profile && (
          <div className="flex gap-3">
            <div className="hidden sm:flex flex-col bg-white border-4 border-[#2D3436] rounded-2xl px-4 py-1 shadow-[4px_4px_0px_0px_#2D3436]">
              <span className="text-[10px] font-black uppercase text-[#B2BEC3]">Nível</span>
              <span className="text-sm font-bold uppercase leading-none">Iniciante</span>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-[#2D3436] bg-[#FAB1A0] flex items-center justify-center text-xl shadow-[4px_4px_0px_0px_#2D3436] overflow-hidden font-black">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                profile.name.charAt(0).toUpperCase()
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 w-full max-w-2xl mx-auto p-4 sm:p-6 pb-32">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
        <div className="max-w-md mx-auto flex items-center justify-between bg-[#2D3436] rounded-3xl p-2 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.3)] pointer-events-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-2xl transition-all",
                  isActive ? "bg-[#FF7675] text-white" : "text-white opacity-70 hover:opacity-100"
                )}
              >
                <Icon className="w-6 h-6 mb-1" strokeWidth={isActive ? 3 : 2} />
                <span className="text-[10px] font-black uppercase tracking-wider">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
