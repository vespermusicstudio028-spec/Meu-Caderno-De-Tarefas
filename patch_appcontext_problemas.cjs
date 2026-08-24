const fs = require('fs');
let data = fs.readFileSync('src/store/AppContext.tsx', 'utf8');

data = data.replace('armarEfetuarProgress: Record<string, number>;', 'armarEfetuarProgress: Record<string, number>;\n  problemasProgress: Record<string, number>;');
data = data.replace('advanceArmarEfetuarDay: (op: string) => void;', 'advanceArmarEfetuarDay: (op: string) => void;\n  advanceProblemasDay: (op: string) => void;');

data = data.replace(/const \[armarEfetuarProgress, setArmarEfetuarProgress\] = useState[^\n]+\n[^\n]+\n[^\n]+\n[^\n]+\n/g, 
`const [armarEfetuarProgress, setArmarEfetuarProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:armarEfetuarProgress');
    return saved ? JSON.parse(saved) : {};
  });
  const [problemasProgress, setProblemasProgress] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('@caderno:problemasProgress');
    return saved ? JSON.parse(saved) : {};
  });\n`);

data = data.replace(/useEffect\(\(\) => \{\n    localStorage.setItem\('@caderno:armarEfetuarProgress', JSON.stringify\(armarEfetuarProgress\)\);\n  \}, \[armarEfetuarProgress\]\);/g,
`useEffect(() => {
    localStorage.setItem('@caderno:armarEfetuarProgress', JSON.stringify(armarEfetuarProgress));
  }, [armarEfetuarProgress]);
  
  useEffect(() => {
    localStorage.setItem('@caderno:problemasProgress', JSON.stringify(problemasProgress));
  }, [problemasProgress]);`);

data = data.replace('setArmarEfetuarProgress({});', 'setArmarEfetuarProgress({});\n    setProblemasProgress({});');
data = data.replace("localStorage.removeItem('@caderno:armarEfetuarProgress');", "localStorage.removeItem('@caderno:armarEfetuarProgress');\n    localStorage.removeItem('@caderno:problemasProgress');");

data = data.replace(/const advanceArmarEfetuarDay = \(op: string\) => \{[\s\S]*?\};\n/g, 
`const advanceArmarEfetuarDay = (op: string) => {
    setArmarEfetuarProgress(prev => {
      const current = prev[op] || 1;
      return { ...prev, [op]: current + 1 };
    });
  };

  const advanceProblemasDay = (op: string) => {
    setProblemasProgress(prev => {
      const current = prev[op] || 1;
      return { ...prev, [op]: current + 1 };
    });
  };\n`);

data = data.replace('tabuadaProgress, adicaoProgress, subtracaoProgress, divisaoProgress, armarEfetuarProgress, portugueseProgress', 'tabuadaProgress, adicaoProgress, subtracaoProgress, divisaoProgress, armarEfetuarProgress, problemasProgress, portugueseProgress');
data = data.replace('advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, advanceDivisaoDay, advanceArmarEfetuarDay, resetApp', 'advanceTabuadaDay, advanceAdicaoDay, advanceSubtracaoDay, advanceDivisaoDay, advanceArmarEfetuarDay, advanceProblemasDay, resetApp');

fs.writeFileSync('src/store/AppContext.tsx', data, 'utf8');
console.log('Patched AppContext.tsx for Problemas');
