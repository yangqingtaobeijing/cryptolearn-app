/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import WhitepapersPage from './pages/WhitepapersPage';
import CoinsPage from './pages/CoinsPage';
import HistoryPage from './pages/HistoryPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/history" replace />} />
          <Route path="resources" element={<HomePage />} />
          <Route path="whitepapers" element={<WhitepapersPage />} />
          <Route path="coins" element={<CoinsPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
