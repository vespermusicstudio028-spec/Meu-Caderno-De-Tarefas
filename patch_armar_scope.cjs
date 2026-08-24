const fs = require('fs');
let data = fs.readFileSync('src/pages/ArmarEfetuarTaskRunner.tsx', 'utf8');

// Find the handleInputChange definition and move it up.
data = data.replace(
  "if (!isTest) {",
  `if (!questions.length) return <div className="p-8 text-center">Carregando...</div>;

  const handleInputChange = (id: string, value: string) => {
    if (value && !/^\\d+$/.test(value)) return;
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  if (!isTest) {`
);

// Now remove the old handleInputChange and questions check
data = data.replace(
  `if (!questions.length) return <div className="p-8 text-center">Carregando...</div>;

  const handleInputChange = (id: string, value: string) => {
    if (value && !/^\\d+$/.test(value)) return;
    setAnswers(prev => ({ ...prev, [id]: value }));
  };`,
  ""
);

fs.writeFileSync('src/pages/ArmarEfetuarTaskRunner.tsx', data, 'utf8');
console.log('Moved handleInputChange up');
