const fs = require('fs');
let data = fs.readFileSync('src/pages/SubjectMath.tsx', 'utf8');

data = data.replace(
  `} else if (topic.id === 'subtracao') {
                navigate('/materia/matematica/subtracao');
              } else {
                alert('Em breve! Escolha ADIÇÃO, SUBTRAÇÃO ou MULTIPLICAÇÃO por enquanto.');
              }`,
  `} else if (topic.id === 'subtracao') {
                navigate('/materia/matematica/subtracao');
              } else if (topic.id === 'divisao') {
                navigate('/materia/matematica/divisao');
              } else {
                alert('Em breve! Escolha uma das 4 operações por enquanto.');
              }`
);

fs.writeFileSync('src/pages/SubjectMath.tsx', data, 'utf8');
console.log('Patched SubjectMath.tsx for Divisao');
