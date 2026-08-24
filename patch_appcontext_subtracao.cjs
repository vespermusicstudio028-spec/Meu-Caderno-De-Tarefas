const fs = require('fs');
let data = fs.readFileSync('src/store/AppContext.tsx', 'utf8');

data = data.replace('adicaoProgress: Record<string, number>;', 'adicaoProgress: Record<string, number>;\n  subtracaoProgress: Record<string, number>;');
data = data.replace('advanceAdicaoDay: (n: number) => void;', 'advanceAdicaoDay: (n: number) => void;\n  advanceSubtracaoDay: (n: number) => void;');

data = data.replace(/const \[adicaoProgress, setAdicaoProgress\] = useState[^\n]+\n[^\n]+\n[^\n]+\n[^\n]+\n/g, 
`const [adicaoProgress, setAdicaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:adicaoProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [subtracaoProgress, setSubtracaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:subtracaoProgress');
    return saved ? JSON.parse(saved) : {};
  });\n`);

data = data.replace(/useEffect\(\(\) => \{\n    localStorage.setItem\('@caderno:adicaoProgress', JSON.stringify\(adicaoProgress\)\);\n  \}, \[adicaoProgress\]\);/g,
`useEffect(() => {
    localStorage.setItem('@caderno:adicaoProgress', JSON.stringify(adicaoProgress));
  }, [adicaoProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:subtracaoProgress', JSON.stringify(subtracaoProgress));
  }, [subtracaoProgress]);`);

data = data.replace('setAdicaoProgress({});', 'setAdicaoProgress({});\n    setSubtracaoProgress({});');
data = data.replace("localStorage.removeItem('@caderno:adicaoProgress');", "localStorage.removeItem('@caderno:adicaoProgress');\n    localStorage.removeItem('@caderno:subtracaoProgress');");

data = data.replace(/const advanceAdicaoDay = \(n: number\) => \{[\s\S]*?\};\n/g, 
`const advanceAdicaoDay = (n: number) => {
    setAdicaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceSubtracaoDay = (n: number) => {
    setSubtracaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };\n`);

data = data.replace('tabuadaProgress, adicaoProgress, portugueseProgress', 'tabuadaProgress, adicaoProgress, subtracaoProgress, portugueseProgress');
data = data.replace('advanceTabuadaDay, advanceAdicaoDay, resetApp', 'advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, resetApp');

fs.writeFileSync('src/store/AppContext.tsx', data, 'utf8');
console.log('Patched AppContext.tsx for Subtracao');
