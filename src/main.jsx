import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import layout from './layouts';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
// import App from './App';
import './app.scss';
import Login from './routes/Login';

const AboutComponent = layout(About);
const ContactComponent = layout(Contact);
const HomeComponent = layout(Home);
const LoginComponent = layout(Login);

const router = createBrowserRouter(
  [
    { path: '/', element: <HomeComponent /> },
    { path: '/contact', element: <ContactComponent /> },
    { path: '/about', element: <AboutComponent /> },
    { path: '/login', element: <LoginComponent />},
  ],
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
