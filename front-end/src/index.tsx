import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './features/navigators/HomePage';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>

    <Routes>

          <Route path = "/" element={<App />}>
          
          <Route path = "/" element={<HomePage />} />

          </Route></Routes>

    </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);