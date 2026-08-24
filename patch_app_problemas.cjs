const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace("import { ArmarEfetuarSelectPage } from './pages/ArmarEfetuarSelect';", "import { ArmarEfetuarSelectPage } from './pages/ArmarEfetuarSelect';\nimport { ProblemasSelectPage } from './pages/ProblemasSelect';");
data = data.replace("import { ArmarEfetuarTaskRunnerPage } from './pages/ArmarEfetuarTaskRunner';", "import { ArmarEfetuarTaskRunnerPage } from './pages/ArmarEfetuarTaskRunner';\nimport { ProblemasTaskRunnerPage } from './pages/ProblemasTaskRunner';");

data = data.replace('<Route path="materia/matematica/armar-efetuar" element={<ArmarEfetuarSelectPage />} />', 
  `<Route path="materia/matematica/armar-efetuar" element={<ArmarEfetuarSelectPage />} />
            <Route path="materia/matematica/problemas" element={<ProblemasSelectPage />} />`);

data = data.replace('<Route path="tarefa/armar-efetuar/:op" element={<ArmarEfetuarTaskRunnerPage />} />',
  `<Route path="tarefa/armar-efetuar/:op" element={<ArmarEfetuarTaskRunnerPage />} />
            <Route path="tarefa/problemas/:op" element={<ProblemasTaskRunnerPage />} />`);

fs.writeFileSync('src/App.tsx', data, 'utf8');
console.log('Patched App.tsx for Problemas');
