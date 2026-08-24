const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace("import { ProblemasTaskRunnerPage } from './pages/ProblemasTaskRunner';", "import { ProblemasTaskRunnerPage } from './pages/ProblemasTaskRunner';\nimport { DesafioTaskRunnerPage } from './pages/DesafioTaskRunner';");

data = data.replace('<Route path="tarefa/problemas/:op" element={<ProblemasTaskRunnerPage />} />',
  `<Route path="tarefa/problemas/:op" element={<ProblemasTaskRunnerPage />} />
            <Route path="tarefa/desafio" element={<DesafioTaskRunnerPage />} />`);

fs.writeFileSync('src/App.tsx', data, 'utf8');
console.log('Patched App.tsx for Desafio');
