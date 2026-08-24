const fs = require('fs');
let data = fs.readFileSync('src/pages/SubjectMath.tsx', 'utf8');

data = data.replace(
  `if (topic.id === 'multiplicacao') {
                navigate('/materia/matematica/multiplicacao');
              } else {
                alert('Em breve! Escolha MULTIPLICAÇÃO por enquanto.');
              }`,
  `if (topic.id === 'multiplicacao') {
                navigate('/materia/matematica/multiplicacao');
              } else if (topic.id === 'adicao') {
                navigate('/materia/matematica/adicao');
              } else {
                alert('Em breve! Escolha ADIÇÃO ou MULTIPLICAÇÃO por enquanto.');
              }`
);

fs.writeFileSync('src/pages/SubjectMath.tsx', data, 'utf8');
console.log('Patched SubjectMath.tsx');
