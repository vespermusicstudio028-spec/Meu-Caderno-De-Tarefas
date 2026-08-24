const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace("import { AdicaoSelectPage } from './pages/AdicaoSelect';", "import { AdicaoSelectPage } from './pages/AdicaoSelect';\nimport { SubtracaoSelectPage } from './pages/SubtracaoSelect';");
data = data.replace("import { AdicaoTaskRunnerPage } from './pages/AdicaoTaskRunner';", "import { AdicaoTaskRunnerPage } from './pages/AdicaoTaskRunner';\nimport { SubtracaoTaskRunnerPage } from './pages/SubtracaoTaskRunner';");

data = data.replace('<Route path="materia/matematica/adicao" element={<AdicaoSelectPage />} />', 
  `<Route path="materia/matematica/adicao" element={<AdicaoSelectPage />} />
            <Route path="materia/matematica/subtracao" element={<SubtracaoSelectPage />} />`);

data = data.replace('<Route path="tarefa/adicao/:n" element={<AdicaoTaskRunnerPage />} />',
  `<Route path="tarefa/adicao/:n" element={<AdicaoTaskRunnerPage />} />
            <Route path="tarefa/subtracao/:n" element={<SubtracaoTaskRunnerPage />} />`);

fs.writeFileSync('src/App.tsx', data, 'utf8');
console.log('Patched App.tsx for Subtracao');
