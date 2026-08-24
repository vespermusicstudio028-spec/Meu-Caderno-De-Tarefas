import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Save, Camera } from 'lucide-react';

export function ProfilePage() {
  const { profile, saveProfile } = useAppContext();
  const navigate = useNavigate();

  const [name, setName] = useState(profile?.name || '');
  const [age, setAge] = useState(profile?.age || '');
  const [grade, setGrade] = useState(profile?.grade || '');
  const [photo, setPhoto] = useState(profile?.photo || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ages = ['5', '6', '7', '8', '9', '10', '11', '12'];
  const grades = [
    'Educação Infantil',
    '1º Ano',
    '2º Ano',
    '3º Ano',
    '4º Ano',
    '5º Ano',
    '6º Ano'
  ];

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 150;
          const MAX_HEIGHT = 150;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
          setPhoto(canvas.toDataURL('image/jpeg', 0.8));
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !grade) return;
    
    saveProfile({ name, age, grade, photo });
    
    // If it's a first-time setup, redirect to home
    if (!profile) {
      navigate('/');
    } else {
      alert('Perfil atualizado com sucesso!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div 
            className="inline-flex items-center justify-center w-28 h-28 bg-[#FAB1A0] border-4 border-[#2D3436] shadow-[6px_6px_0px_0px_#2D3436] rounded-full mb-6 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => fileInputRef.current?.click()}
          >
            {photo ? (
              <img src={photo} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-5xl">👦</span>
            )}
          </div>
          <button 
            type="button"
            className="absolute bottom-6 right-0 bg-white p-2 rounded-full border-4 border-[#2D3436] shadow-[2px_2px_0px_0px_#2D3436] hover:bg-slate-100 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera size={20} className="text-[#2D3436]" />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handlePhotoChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
        <h2 className="text-2xl font-black text-[#FF7675] uppercase" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          {profile ? 'Meu Perfil' : 'Bem-vindo(a)!'}
        </h2>
        <p className="text-[#636E72] font-bold mt-2">
          {profile ? 'Atualize seus dados abaixo.' : 'Vamos criar o seu perfil para começar.'}
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label className="block text-sm font-black text-[#2D3436] uppercase mb-2">
              Seu Nome:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: João"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white border-4 border-[#2D3436] rounded-2xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all text-lg font-bold"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-[#2D3436] uppercase mb-2">
              Sua Idade:
            </label>
            <select
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 bg-white border-4 border-[#2D3436] rounded-2xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all text-lg font-bold appearance-none"
            >
              <option value="" disabled>Selecione...</option>
              {ages.map(a => <option key={a} value={a}>{a} anos</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-black text-[#2D3436] uppercase mb-2">
              Ano Escolar:
            </label>
            <select
              required
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-3 bg-white border-4 border-[#2D3436] rounded-2xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all text-lg font-bold appearance-none"
            >
              <option value="" disabled>Selecione...</option>
              {grades.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <Button type="submit" size="lg" className="w-full mt-6 flex items-center justify-center gap-2">
            <Save size={24} />
            <span className="uppercase">SALVAR PERFIL</span>
          </Button>
        </form>
      </Card>
    </div>
  );
}
