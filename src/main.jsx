import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import layout from './layouts';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import './stylesheets/app.scss';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Admin from './routes/Admin';
import store from './redux/store';

const AboutComponent = layout(About);
const ContactComponent = layout(Contact);
const LoginComponent = layout(Login);
const SkillsComponent = layout(Skills);
const ProjectsComponent = layout(Projects);
const AdminComponent = layout(Admin);

const router = createBrowserRouter(
  [
    { path: '/', element: <AboutComponent /> },
    { path: '/contact', element: <ContactComponent /> },
    { path: '/login', element: <LoginComponent /> },
    { path: '/skills', element: <SkillsComponent /> },
    { path: '/projects', element: <ProjectsComponent /> },
    { path: '/admin', element: <AdminComponent /> },
  ],
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
