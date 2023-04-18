import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import layout from './layouts';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Login from './routes/Login';
// import App from './App';
import './stylesheets/app.scss';
import Skills from './routes/Skills';

const AboutComponent = layout(About);
const ContactComponent = layout(Contact);
const LoginComponent = layout(Login);
const SkillsComponent = layout(Skills);

const router = createBrowserRouter(
  [
    { path: '/', element: <AboutComponent /> },
    { path: '/contact', element: <ContactComponent /> },
    { path: '/login', element: <LoginComponent /> },
    { path: '/skills', element: <SkillsComponent /> },
  ],
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
