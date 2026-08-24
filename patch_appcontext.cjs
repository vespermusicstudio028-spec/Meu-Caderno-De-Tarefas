const fs = require('fs');
let data = fs.readFileSync('src/store/AppContext.tsx', 'utf8');

data = data.replace('tabuadaProgress: Record<string, number>;', 'tabuadaProgress: Record<string, number>;\n  adicaoProgress: Record<string, number>;');
data = data.replace('advanceTabuadaDay: (n: number) => void;', 'advanceTabuadaDay: (n: number) => void;\n  advanceAdicaoDay: (n: number) => void;');
data = data.replace(/const \[tabuadaProgress, setTabuadaProgress\] = useState[^\n]+\n[^\n]+\n[^\n]+\n[^\n]+\n/g, 
`const [tabuadaProgress, setTabuadaProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:tabuadaProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [adicaoProgress, setAdicaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:adicaoProgress');
    return saved ? JSON.parse(saved) : {};
  });\n`);

data = data.replace(/useEffect\(\(\) => \{\n    localStorage.setItem\('@caderno:tabuadaProgress', JSON.stringify\(tabuadaProgress\)\);\n  \}, \[tabuadaProgress\]\);/g,
`useEffect(() => {
    localStorage.setItem('@caderno:tabuadaProgress', JSON.stringify(tabuadaProgress));
  }, [tabuadaProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:adicaoProgress', JSON.stringify(adicaoProgress));
  }, [adicaoProgress]);`);

data = data.replace('setTabuadaProgress({});', 'setTabuadaProgress({});\n    setAdicaoProgress({});');
data = data.replace("localStorage.removeItem('@caderno:tabuadaProgress');", "localStorage.removeItem('@caderno:tabuadaProgress');\n    localStorage.removeItem('@caderno:adicaoProgress');");

data = data.replace(/const advanceTabuadaDay = \(n: number\) => \{[\s\S]*?\};\n/g, 
`const advanceTabuadaDay = (n: number) => {
    setTabuadaProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceAdicaoDay = (n: number) => {
    setAdicaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };\n`);

data = data.replace('tabuadaProgress, portugueseProgress', 'tabuadaProgress, adicaoProgress, portugueseProgress');
data = data.replace('advanceTabuadaDay, resetApp', 'advanceTabuadaDay, advanceAdicaoDay, resetApp');

fs.writeFileSync('src/store/AppContext.tsx', data, 'utf8');
console.log('Patched AppContext.tsx');
