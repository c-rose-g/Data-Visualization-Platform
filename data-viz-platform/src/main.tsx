import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.tsx"
import Dashboard from "./pages/Dashboard.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </App>
    </BrowserRouter>
  </React.StrictMode>
);
