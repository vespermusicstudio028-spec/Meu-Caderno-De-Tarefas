import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { ProfilePage } from './pages/Profile';
import { MathSubjectPage } from './pages/SubjectMath';
import { TabuadaSelectPage } from './pages/TabuadaSelect';
import { AdicaoSelectPage } from './pages/AdicaoSelect';
import { SubtracaoSelectPage } from './pages/SubtracaoSelect';
import { DivisaoSelectPage } from './pages/DivisaoSelect';
import { ArmarEfetuarSelectPage } from './pages/ArmarEfetuarSelect';
import { ProblemasSelectPage } from './pages/ProblemasSelect';
import { TaskRunnerPage } from './pages/TaskRunner';
import { AdicaoTaskRunnerPage } from './pages/AdicaoTaskRunner';
import { SubtracaoTaskRunnerPage } from './pages/SubtracaoTaskRunner';
import { DivisaoTaskRunnerPage } from './pages/DivisaoTaskRunner';
import { ArmarEfetuarTaskRunnerPage } from './pages/ArmarEfetuarTaskRunner';
import { ProblemasTaskRunnerPage } from './pages/ProblemasTaskRunner';
import { DesafioTaskRunnerPage } from './pages/DesafioTaskRunner';
import { SubjectPortuguesePage } from './pages/SubjectPortuguese';
import { PortugueseUnitPage } from './pages/PortugueseUnit';
import { PortugueseTaskPage } from './pages/PortugueseTask';
import { ResultPage } from './pages/Result';
import { HistoryPage } from './pages/History';
import { ParentsAreaPage } from './pages/ParentsArea';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="perfil" element={<ProfilePage />} />
            <Route path="materia/matematica" element={<MathSubjectPage />} />
            <Route path="materia/matematica/multiplicacao" element={<TabuadaSelectPage />} />
            <Route path="materia/matematica/adicao" element={<AdicaoSelectPage />} />
            <Route path="materia/matematica/subtracao" element={<SubtracaoSelectPage />} />
            <Route path="materia/matematica/divisao" element={<DivisaoSelectPage />} />
            <Route path="materia/matematica/armar-efetuar" element={<ArmarEfetuarSelectPage />} />
            <Route path="materia/matematica/problemas" element={<ProblemasSelectPage />} />
            <Route path="tarefa/multiplicacao/:n" element={<TaskRunnerPage />} />
            <Route path="tarefa/adicao/:n" element={<AdicaoTaskRunnerPage />} />
            <Route path="tarefa/subtracao/:n" element={<SubtracaoTaskRunnerPage />} />
            <Route path="tarefa/divisao/:n" element={<DivisaoTaskRunnerPage />} />
            <Route path="tarefa/armar-efetuar/:op" element={<ArmarEfetuarTaskRunnerPage />} />
            <Route path="tarefa/problemas/:op" element={<ProblemasTaskRunnerPage />} />
            <Route path="tarefa/desafio" element={<DesafioTaskRunnerPage />} />
            <Route path="materia/portugues" element={<SubjectPortuguesePage />} />
            <Route path="materia/portugues/unidade/:unitId" element={<PortugueseUnitPage />} />
            <Route path="tarefa/portugues/:unitId/:dayIndex" element={<PortugueseTaskPage />} />
            <Route path="resultado/:id" element={<ResultPage />} />
            <Route path="historico" element={<HistoryPage />} />
            <Route path="pais" element={<ParentsAreaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
