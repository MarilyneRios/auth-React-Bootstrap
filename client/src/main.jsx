import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
//import { store, persistor } from './store';

//styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import App from './App.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
 
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
   
);
 /*
import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */