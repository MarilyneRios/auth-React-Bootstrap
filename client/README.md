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

# index.html

````
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>mern-auth-bootstrap</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

````


#  Frontend page

## Style Header

````
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      data-bs-theme="light"
      className="border-bottom border-success"
    >
      <Container fluid>
        {/** Titre */}
        <Navbar.Brand as={Link} to="/" className="text-success fs-4">
          Auth React-Bootstrap
        </Navbar.Brand>

        {/** Btns on small screens */}
        <div className="d-lg-none d-flex align-items-center">
          <Nav.Link as={Link} to="/sign-in" className="p-0">
            <Button variant="success" className="mx-1">
              <FaSignInAlt /> Connexion
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-up" className="p-0">
            <Button variant="outline-success" className="mx-1">
              <FaSignOutAlt /> Inscription
            </Button>
          </Nav.Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/** Liens and buttons on large screens */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between w-100">
          <div className="d-flex justify-content-center flex-grow-1">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <Nav.Link as={Link} to="/" className="my-auto">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="my-auto">
                A propos
              </Nav.Link>
            </Nav>
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <Nav.Link as={Link} to="/sign-in" className="p-0">
              <Button variant="success" className="mx-1">
                <FaSignInAlt /> Connexion
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-up" className="p-0">
              <Button variant="outline-success" className="mx-1">
                <FaSignOutAlt /> Inscription
              </Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

// Pour afficher le nom du user qaund connecté
/**
 <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
 </Navbar.Collapse>
 */

````

## SignUp page

### Hero component

**Hero** peut être réutilisé sur différentes pages avec des contenus ou des styles différents.

**Avantage** : 
- Toutes modifications du style ou au comportement de votre section hero, ce fait en un seul endroit, et ces changements seront reflétés partout où le composant est utilisé.

- Harmonisation du style.

1. Hero.jsx
````
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className=' py-5'>
    <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75 border border-success'>
                <h1 className='text-center mb-4 text-success'> Bienvenue sur cette application MERN (MongoDB, Express, React,
                Node.js) avec Bootstrap.</h1>
            <p className='text-center mb-4'>
            Ceci est un modèle d&lsquo; application Web full-stack construite avec
          des fonctionnalités d&lsquo;authentification (JWT) qui peut vous servir de
          template (starter) afin de créer votre APP.
            </p>
            <p className='text-center mb-4'>
            Elle permet aux utilisateurs de s&lsquo;inscrire, de se connecter et de
          se déconnecter, et donne accès à itinéraires protégés uniquement pour
          les utilisateurs authentifiés.
            </p>
            <div className='d-flex'>
                <Link to='/sign-in'>
                    <Button variant='outline-success'  className='me-3'>
                        Connexion
                    </Button>
                </Link>
                <Link to='/sign-up'>
                    <Button variant='outline-success'>
                        Inscription
                    </Button>
                </Link>
            </div>
        </Card>
    </Container>
 </div>
  )
}
````
2. Home.jsx

````
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

````
# Test amélioration 

Utilisation react-router-dom pour la gestion des routes imbriquées, tout en ajoutant la persistance de l'état global avec redux-persist.


## App.jsx
````
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
````
npm install --save react-toastify

## SignIn et SignUP UI

### FormContainer

Modèle de mise en forme pour les formulaires de SignIn et SignUP

````
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    // Centrer et Aligner le contenu
    <Container>
    {/** Créer une ligne dans le système de grille de Bootstrap */}
      <Row className='justify-content-md-center mt-3'>
      {/** Créer une colonne dans le système de grille de Bootstrap */}
      {/** Pour petits écrans (xs) => 12 colonnes  */}
      {/** Pour petits écrans (md) => 6 colonnes  */}
        <Col xs={12} md={6} className='card p-5'>
              {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
````

**children** = propriété spéciale en React pour passer des composants comme données à d'autres composants 


### SignIn 1er style


````
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

//import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-success">Connexion</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2" controlId="email">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              autoComplete="password"
              className="me-2"
            ></Form.Control>
            {visiblePassword ? (
              <FaEyeSlash
                onClick={() => setVisiblePassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisiblePassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Button type="submit" variant="outline-success" className="my-3 w-100">
          Se connecter
        </Button>

        <Button
          variant="outline-dark"
          className="w-100 d-flex align-items-center justify-content-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            height="25"
            width="25"
          />
          Continue avec Google
        </Button>
      </Form>

      <Row className="py-3 ">
        <Col>
          Avez-vous un compte ?{" "}
          <Link to="/sign-up" className="text-success">
            Inscription
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
````

### SignUp 1er style

````
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    switch (id) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-success">Inscription</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2" controlId="username">
          <Form.Control
            type="text"
            id="username"
            placeholder="Pseudo"
            value={username}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handleChange}
              autoComplete="password"
              className="me-2"
            ></Form.Control>
            {visiblePassword ? (
              <FaEyeSlash
                onClick={() => setVisiblePassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisiblePassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <div className="d-flex">
            <Form.Control
              type={visibleConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirmation du mot de passe"
              value={confirmPassword}
              onChange={handleChange}
              autoComplete="confirmPassword"
              className="me-2"
            ></Form.Control>
            {visibleConfirmPassword ? (
              <FaEyeSlash
                onClick={() => setVisibleConfirmPassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisibleConfirmPassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Button type="submit" variant="outline-success" className="my-3 w-100">
          S&rsquo;inscrire
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-center">
          Avez-vous déjà un compte ?{" "}
          <Link to="/sign-in" className="text-success">
            Se connecter
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}
````

### SingUp fonction frontend


1. handleChange : mise à jour les données du formulaire

````
// Les états
 const [formData, setFormData] = useState({});
 //eyes icon
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
// gestion erreurs et chargement
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

````

**const handleChange**:  gère les changements des champs d’entrée/saisie. 

Lorsqu’une valeur est saisie dans un champ, il le met à jour l’état formData avec la nouvelle valeur :
- **e.target.id** = clé,  
- **e.target.value** = nouvelle valeur pour cette clé.

> Dans la console :

````
 {
    username: 'test',
    email: 'testemail',
    password: 'psw',
    confirmPassword: 'pswconfirm'
  }
````

2. handleChange : 

````
 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
  };
````
> Dans la console : 'submit'

3. Proxy vite:

````
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
````

En local on est en http et https donc secure: false,

4. handleSubmit :

````
const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
      console.log(data);
}
````

5. test + vérification :

dans la console.log : 
{message: 'Inscription réussie'}

dans mongoDB vérifier que le nouveau user est créé.
````
_id
ObjectId('gugourgguorhoiughiorhgihrihgioh')
username
"user1"
email
"user1@gmail.com"
password
"$2a$10$wkrKCj2g9YL.kQprPRiSJOmFm117NFJ7nEaXWZGZg.U8gRQSHsNuK"
profilePicture
"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vect…"
createdAt
2024-06-24T08:42:54.952+00:00
updatedAt
2024-06-24T08:42:54.952+00:00

````
## Gestion des erreurs et chargements

````
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      //console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

//--------------

  <Button type="submit" variant="outline-success" className="my-3 w-100"  disabled={loading}>
    {loading ? "Loading..." : " S'enregistrer"}
  </Button>


//---------
<Row className="py-3">
 <Col className="text-center">
    Avez-vous déjà un compte ?{" "}
    <Link to="/sign-in" className="text-success">
            Se connecter
    </Link>
    <p className="text-danger mt-5">
      {error &&
      (typeof error === "string"
      ? error
      : "Le Pseudo ou l'email est déjà utilisé!")}
    </p>
  </Col>
 </Row>

````

## gestion de la confirmation du password avec erreur

1. état
````
  // gestion de la confirmation du psw
  const [passwordConfirm, setPasswordConfirm] = useState("");
````

2. saisie
````
 const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "passwordConfirm") {
      setPasswordConfirm(value);
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };
````

3. fonction vérif si identique
````
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas !");
      return;
    }
    //......
  }    
````

4. valeur confirmPassword

````
 value={passwordConfirm}

```` 

5. vérifier dans mongoDB et console

//--------------------------------------------

# SignIn frontend

## SignIn UI

````
 <FormContainer>
      <h1 className="d-flex justify-content-center text-success">Connexion</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2" >
          <Form.Control
           type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            autoComplete="email"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              autoComplete="current-password"
              className="me-2"
            ></Form.Control>
            {visiblePassword ? (
              <FaEyeSlash
                onClick={() => setVisiblePassword(false)}
                className="m-3"
                size={20}
              />
            ) : (
              <FaEye
                onClick={() => setVisiblePassword(true)}
                size={20}
                className="m-3"
              />
            )}
          </div>
        </Form.Group>

        <Button type="submit" variant="outline-success" className="my-3 w-100" disabled={loading}>
          
          {loading ? "Loading..." : "Se connecter"}
        </Button>

        <Button
          variant="outline-dark"
          className="w-100 d-flex align-items-center justify-content-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            height="25"
            width="25"
          />
          Continue avec Google
        </Button>
      </Form>

      <Row className="py-3 ">
        <Col>
          Avez-vous un compte ?{" "}
          <Link to="/sign-up" className="text-success">
            Inscription
          </Link>
          <p className="text-danger mt-5">
            {error &&
              (typeof error === "string"
                ? error
                : "Le Pseudo ou l'email est déjà utilisé!")}
          </p>
        </Col>
      </Row>
    </FormContainer>
````

## SignIn fct

````
const [formData, setFormData] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("Sending request to /api/auth/signin with data:", formData);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", res.status);

      const data = await res.json();
      setLoading(false);

      console.log("Response data:", data);

      if (data.success === false) {
        setError("Le pseudo ou l'email est incorrect !");
        return;
      }

      navigate("/");
    } catch (error) {
      console.error("Error during fetch:", error);
      setLoading(false);
      setError(true);
    }
  };
````

Puis test avec navigateur, voir dans l'inspecteur> réseau.

## SignUp 

ajout de :

- **import { Link, useNavigate  } from "react-router-dom";**
- **const navigate = useNavigate();** 
- **navigate("/sign-in");** 

