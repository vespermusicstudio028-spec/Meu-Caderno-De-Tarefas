const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace("import { DivisaoSelectPage } from './pages/DivisaoSelect';", "import { DivisaoSelectPage } from './pages/DivisaoSelect';\nimport { ArmarEfetuarSelectPage } from './pages/ArmarEfetuarSelect';");
data = data.replace("import { DivisaoTaskRunnerPage } from './pages/DivisaoTaskRunner';", "import { DivisaoTaskRunnerPage } from './pages/DivisaoTaskRunner';\nimport { ArmarEfetuarTaskRunnerPage } from './pages/ArmarEfetuarTaskRunner';");

data = data.replace('<Route path="materia/matematica/divisao" element={<DivisaoSelectPage />} />', 
  `<Route path="materia/matematica/divisao" element={<DivisaoSelectPage />} />
            <Route path="materia/matematica/armar-efetuar" element={<ArmarEfetuarSelectPage />} />`);

data = data.replace('<Route path="tarefa/divisao/:n" element={<DivisaoTaskRunnerPage />} />',
  `<Route path="tarefa/divisao/:n" element={<DivisaoTaskRunnerPage />} />
            <Route path="tarefa/armar-efetuar/:op" element={<ArmarEfetuarTaskRunnerPage />} />`);

fs.writeFileSync('src/App.tsx', data, 'utf8');
console.log('Patched App.tsx for ArmarEfetuar');
