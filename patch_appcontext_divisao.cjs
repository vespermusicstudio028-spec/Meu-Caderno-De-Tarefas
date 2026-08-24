const fs = require('fs');
let data = fs.readFileSync('src/store/AppContext.tsx', 'utf8');

data = data.replace('subtracaoProgress: Record<string, number>;', 'subtracaoProgress: Record<string, number>;\n  divisaoProgress: Record<string, number>;');
data = data.replace('advanceSubtracaoDay: (n: number) => void;', 'advanceSubtracaoDay: (n: number) => void;\n  advanceDivisaoDay: (n: number) => void;');

data = data.replace(/const \[subtracaoProgress, setSubtracaoProgress\] = useState[^\n]+\n[^\n]+\n[^\n]+\n[^\n]+\n/g, 
`const [subtracaoProgress, setSubtracaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:subtracaoProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [divisaoProgress, setDivisaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:divisaoProgress');
    return saved ? JSON.parse(saved) : {};
  });\n`);

data = data.replace(/useEffect\(\(\) => \{\n    localStorage.setItem\('@caderno:subtracaoProgress', JSON.stringify\(subtracaoProgress\)\);\n  \}, \[subtracaoProgress\]\);/g,
`useEffect(() => {
    localStorage.setItem('@caderno:subtracaoProgress', JSON.stringify(subtracaoProgress));
  }, [subtracaoProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:divisaoProgress', JSON.stringify(divisaoProgress));
  }, [divisaoProgress]);`);

data = data.replace('setSubtracaoProgress({});', 'setSubtracaoProgress({});\n    setDivisaoProgress({});');
data = data.replace("localStorage.removeItem('@caderno:subtracaoProgress');", "localStorage.removeItem('@caderno:subtracaoProgress');\n    localStorage.removeItem('@caderno:divisaoProgress');");

data = data.replace(/const advanceSubtracaoDay = \(n: number\) => \{[\s\S]*?\};\n/g, 
`const advanceSubtracaoDay = (n: number) => {
    setSubtracaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceDivisaoDay = (n: number) => {
    setDivisaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };\n`);

data = data.replace('tabuadaProgress, adicaoProgress, subtracaoProgress, portugueseProgress', 'tabuadaProgress, adicaoProgress, subtracaoProgress, divisaoProgress, portugueseProgress');
data = data.replace('advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, resetApp', 'advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, advanceDivisaoDay, resetApp');

fs.writeFileSync('src/store/AppContext.tsx', data, 'utf8');
console.log('Patched AppContext.tsx for Divisao');
