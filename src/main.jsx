import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './app.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';

const AboutComponent = Layout(About);
const ContactComponent = Layout(Contact);
const HomeComponent = Layout(Home);

const router = createBrowserRouter(
  [
    { path: '/', component: HomeComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/about', component: AboutComponent },
  ],
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
