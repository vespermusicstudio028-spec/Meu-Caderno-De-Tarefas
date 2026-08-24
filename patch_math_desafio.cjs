const fs = require('fs');
let data = fs.readFileSync('src/pages/SubjectMath.tsx', 'utf8');

data = data.replace(
  `} else if (topic.id === 'problemas') {
                navigate('/materia/matematica/problemas');
              } else {
                alert('Em breve! Tente outra opção por enquanto.');
              }`,
  `} else if (topic.id === 'problemas') {
                navigate('/materia/matematica/problemas');
              } else if (topic.id === 'desafio') {
                navigate('/tarefa/desafio');
              } else {
                alert('Em breve! Tente outra opção por enquanto.');
              }`
);

fs.writeFileSync('src/pages/SubjectMath.tsx', data, 'utf8');
console.log('Patched SubjectMath.tsx for Desafio');
