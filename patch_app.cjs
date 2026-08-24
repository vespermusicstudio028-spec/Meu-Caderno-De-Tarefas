const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace("import { TabuadaSelectPage } from './pages/TabuadaSelect';", "import { TabuadaSelectPage } from './pages/TabuadaSelect';\nimport { AdicaoSelectPage } from './pages/AdicaoSelect';");
data = data.replace("import { TaskRunnerPage } from './pages/TaskRunner';", "import { TaskRunnerPage } from './pages/TaskRunner';\nimport { AdicaoTaskRunnerPage } from './pages/AdicaoTaskRunner';");

data = data.replace('<Route path="materia/matematica/multiplicacao" element={<TabuadaSelectPage />} />', 
  `<Route path="materia/matematica/multiplicacao" element={<TabuadaSelectPage />} />
            <Route path="materia/matematica/adicao" element={<AdicaoSelectPage />} />`);

data = data.replace('<Route path="tarefa/multiplicacao/:n" element={<TaskRunnerPage />} />',
  `<Route path="tarefa/multiplicacao/:n" element={<TaskRunnerPage />} />
            <Route path="tarefa/adicao/:n" element={<AdicaoTaskRunnerPage />} />`);

fs.writeFileSync('src/App.tsx', data, 'utf8');
console.log('Patched App.tsx');
