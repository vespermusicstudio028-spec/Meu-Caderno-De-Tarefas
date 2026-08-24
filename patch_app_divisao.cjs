const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace("import { SubtracaoSelectPage } from './pages/SubtracaoSelect';", "import { SubtracaoSelectPage } from './pages/SubtracaoSelect';\nimport { DivisaoSelectPage } from './pages/DivisaoSelect';");
data = data.replace("import { SubtracaoTaskRunnerPage } from './pages/SubtracaoTaskRunner';", "import { SubtracaoTaskRunnerPage } from './pages/SubtracaoTaskRunner';\nimport { DivisaoTaskRunnerPage } from './pages/DivisaoTaskRunner';");

data = data.replace('<Route path="materia/matematica/subtracao" element={<SubtracaoSelectPage />} />', 
  `<Route path="materia/matematica/subtracao" element={<SubtracaoSelectPage />} />
            <Route path="materia/matematica/divisao" element={<DivisaoSelectPage />} />`);

data = data.replace('<Route path="tarefa/subtracao/:n" element={<SubtracaoTaskRunnerPage />} />',
  `<Route path="tarefa/subtracao/:n" element={<SubtracaoTaskRunnerPage />} />
            <Route path="tarefa/divisao/:n" element={<DivisaoTaskRunnerPage />} />`);

fs.writeFileSync('src/App.tsx', data, 'utf8');
console.log('Patched App.tsx for Divisao');
