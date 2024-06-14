# React + Vite

# Starter-mern-auth-Bootstrap

**npm create vite@latest client**

   - Select a framework: » React

   - Select a variant: » JavaScript + SWC

  - cd client

   - npm install

**Attention certains packages npm sont dépréciés**

> npm install lru-cache @eslint/config-array rimraf@latest glob@latest @eslint/object-schema

   - npm run dev

**effacer les index.css et App.css**

1. App.jsx

````
//styles
import './App.css'

function App() {

  return (
    <>
  
      <h1>App test</h1>
     
    </>
  )
}

export default App
````

# Bootstrap

https://react-bootstrap.github.io/docs/getting-started/introduction

> npm install react-bootstrap bootstrap

https://react-icons.github.io/react-icons/

> npm install react-icons --save
> npm install bootstrap

1. main.jsx

````
//styles
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
````

2. test Bootstrap

- Création dossier components dans src et fichier Header.jsx
copie d'un exemple : https://react-bootstrap.netlify.app/docs/components/navbar

````
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
````


- dans App.jsx

````
import Header from './components/Header';
//styles
import './App.css'
//test bootstrap
import Button from 'react-bootstrap/Button';
import { BsArrowThroughHeartFill } from "react-icons/bs";

function App() {
  return (
    <div>
    <Header/>
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh', gap: '20px' }}>
      <h1 className='display-1 text-center'>App test</h1>
      <Button variant="outline-primary">Primary</Button>
      <BsArrowThroughHeartFill color='red' size='25' />
    </div>
    </div>
  )
}

export default App;
````

# Organisation src

1. pages

dans client/src

mkdir pages
cd pages
touch SignIn.jsx SignUp.jsx About.jsx Home.jsx Profile.jsx

Puis **rfc** pour générer rapidement une structure de composant fonctionnel dans React pour chaque page.


2. npm i react-router-dom (dans client)

pour en savoir plus : https://www.npmjs.com/package/react-router-dom

Un routage déclaratif , une sorte de plan pour les applications web React.

3. App.jsx

````
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
//styles
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;

````

4. tester les routes avec le navigateur:

ex :
http://localhost:5173/about puis 
http://localhost:5173/profile ect...

