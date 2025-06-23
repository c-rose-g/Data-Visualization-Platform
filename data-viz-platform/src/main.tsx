import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout.tsx";
import Dashboard from "./pages/Dashboard.tsx"
import Login from './pages/Login.tsx';

const root = document.getElementById('root');
if (!root) throw new Error('Failed to find root element');

ReactDOM.createRoot(root as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>
  );
