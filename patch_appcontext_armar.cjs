const fs = require('fs');
let data = fs.readFileSync('src/store/AppContext.tsx', 'utf8');

data = data.replace('divisaoProgress: Record<string, number>;', 'divisaoProgress: Record<string, number>;\n  armarEfetuarProgress: Record<string, number>;');
data = data.replace('advanceDivisaoDay: (n: number) => void;', 'advanceDivisaoDay: (n: number) => void;\n  advanceArmarEfetuarDay: (op: string) => void;');

data = data.replace(/const \[divisaoProgress, setDivisaoProgress\] = useState[^\n]+\n[^\n]+\n[^\n]+\n[^\n]+\n/g, 
`const [divisaoProgress, setDivisaoProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:divisaoProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [armarEfetuarProgress, setArmarEfetuarProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:armarEfetuarProgress');
    return saved ? JSON.parse(saved) : {};
  });\n`);

data = data.replace(/useEffect\(\(\) => \{\n    localStorage.setItem\('@caderno:divisaoProgress', JSON.stringify\(divisaoProgress\)\);\n  \}, \[divisaoProgress\]\);/g,
`useEffect(() => {
    localStorage.setItem('@caderno:divisaoProgress', JSON.stringify(divisaoProgress));
  }, [divisaoProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:armarEfetuarProgress', JSON.stringify(armarEfetuarProgress));
  }, [armarEfetuarProgress]);`);

data = data.replace('setDivisaoProgress({});', 'setDivisaoProgress({});\n    setArmarEfetuarProgress({});');
data = data.replace("localStorage.removeItem('@caderno:divisaoProgress');", "localStorage.removeItem('@caderno:divisaoProgress');\n    localStorage.removeItem('@caderno:armarEfetuarProgress');");

data = data.replace(/const advanceDivisaoDay = \(n: number\) => \{[\s\S]*?\};\n/g, 
`const advanceDivisaoDay = (n: number) => {
    setDivisaoProgress(prev => {
      const current = prev[String(n)] || 1;
      return { ...prev, [String(n)]: current + 1 };
    });
  };

  const advanceArmarEfetuarDay = (op: string) => {
    setArmarEfetuarProgress(prev => {
      const current = prev[op] || 1;
      return { ...prev, [op]: current + 1 };
    });
  };\n`);

data = data.replace('tabuadaProgress, adicaoProgress, subtracaoProgress, divisaoProgress, portugueseProgress', 'tabuadaProgress, adicaoProgress, subtracaoProgress, divisaoProgress, armarEfetuarProgress, portugueseProgress');
data = data.replace('advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, advanceDivisaoDay, resetApp', 'advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, advanceDivisaoDay, advanceArmarEfetuarDay, resetApp');

fs.writeFileSync('src/store/AppContext.tsx', data, 'utf8');
console.log('Patched AppContext.tsx for ArmarEfetuar');
