import React from 'react';
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
function App() {
  return (
    <div className="App">
      hello
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
