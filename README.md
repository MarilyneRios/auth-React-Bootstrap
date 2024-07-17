# auth-React-Bootstrap

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

## Bootstrap

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

## Organisation src

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


## index.html

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
//---------------------------------------------------------------

# Créer le Server/ Backend

Le but est d'éxécuter le frontend à partir du backend.

1. npm init -y à la racine

-> Pour créer le package.json :

````
{
  "name": "mern-auth-bootstrap",
  "version": "1.0.0",
  "description": " Starter-mern-auth-Bootstrap",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "nodemon api/index.js",
    "start": "node api/index.js"
  },
  "keywords": [],
  "author": "Marilyne Rios",
  "license": "ISC"
}

````

**"type": "module"** => exportée à l’aide du mot-clé export et importe à l’aide du mot-clé import.

**"test": "echo \"Error: no test specified\" && exit 1"** => pour exécuter des tests unitaires dans votre application. 

**"dev": "nodemon api/index.js"** => pour exécuter le fichier index.js dans le dossier api. 
nodemon est un utilitaire qui redémarre automatiquement votre serveur Node.js lorsque des modifications de fichier sont détectées.

**"start": "node api/index.js"** => pour démarrer l’application en exécutant le fichier index.js dans le dossier api avec Node.js ou avec npm run start.

2. créer un dossier api à la racine puis un fichier index.js

mkdir api
cd api
touch index.js

3. Express.js :

https://expressjs.com/fr/starter/installing.html

npm install express

4. index.js

````
import express from 'express';

const app = express();

app.listen(3000, ()=> {
    console.log('server is running on port 3000');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
  });
````  

> ps: Pour lancer le serveur à la racine du projet : 
- 1/ si vous avez installer nodemon (https://www.npmjs.com/package/nodemon) => nodemon api/index.js 
- 2/ sinon => node api/index.js

5. Lancer le server et lire :

- dans la console : server is running on port 3000

- dans le navigateur -> localhost:3000 : hello world


## Cacher les données sensibles

1. Copier le .gitignore du dossier client et le mettre à la racine

Puis, y écrire .env dans les 2 .gitignore

2. installer dotenv

https://www.npmjs.com/package/dotenv

npm install dotenv --save

3. touch .env à la racine

````
PORT=3000
````

4. index.js

````
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT

// server on port process.env.PORT
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
  });
````

5. Tester le serveur et tester le git push afin de s'assurer que le .env soit inexistant sur le dépôt.

## connecter à MongoDB

1. mkdir config dans api

2. touch db.js dans config

````
import mongoose from 'mongoose';

const connectDB = async () => {
try {
    const conn = await mongoose.connect(process.env.VITE_DB_CONNECTION_STRING);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
};

export default connectDB;

````

2. Dans .env

VITE_DB_CONNECTION_STRING="votre lien de connexion mongoDB/nom_de_App"

3. Dans index.js

````
import connectDB from './config/db.js';


connectDB();
````

4. Installer mongoose à la racine 

Pourquoi à la racine ? 
Parce que le package.json du serveur est à la racine.

https://www.npmjs.com/package/mongoose 

- npm install mongoose

5. Vérification dans le terminal :

Server listening on port 3000 

MongoDB Connected:.......mongodb.net

6.  Vérification dans le package.json

"mongoose": "^8.4.1"


## User model

1. organisation :

- mkdir models dans api
- cd models
-  touch userModel.js

2. userModel.js :

````
import mongoose from 'mongoose';

// Définition du Schéma user
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
  },
  { timestamps: true }
);

//  Création du Modèle user
const User = mongoose.model('User', userSchema);

export default User;
````
{ timestamps: true } => ajoute automatiquement deux champs au schéma : createdAt et updatedAt

## route API

1. Organisation :

- mkdir routes dans api
- cd routes
- touch userRoutes.js

2. userRoutes.js

```` import express from 'express';

 const router = express.Router();

 router.get('/', (req, res) => {
     res.json({message :'hello world'});
   });

 export default router;
````

3. index.js :

````
import userRoutes from './routes/userRoute.js'

//routes
app.use('/api/user', userRoutes);
````

4. tester la route

http://localhost:3000/api/user

Vous devez lire quelque comme ceci :{"message":"hello world on api/user"}

> Pour avoir une meilleure pratique, il faut décomposer les étapes avec userRoutes.js et userController.js
 - userRoutes.js  est responsable de la définition des routes/endpoints de votre API. Chaque route est associée à une fonction spécifique dans le contrôleur correspondant. 
 
 (Par exemple, la route GET ‘/’ est associée à la fonction display du contrôleur utilisateur.)

 - userController.js contient les fonctions qui sont exécutées lorsque les routes correspondantes sont appelées. Ces fonctions = logique métier de votre application.
 
  (Par exemple, la fonction display renvoie un message JSON lorsque la route GET ‘/’ est appelée.)

5. mkdir controllers dans api

Les contrôleurs sont responsables de traiter les requêtes, interagir avec les modèles (base de données), et renvoyer les réponses appropriées.

6. touch userController.js dans controller

7. code :

````
// dans userController.js

export const display = (req, res) => {
    res.json({
      message: 'hello world on api/userRoutes and userController',
    });
};
````

````
// dans userRoutes.js

import express from 'express';
import {display} from '../controllers/userController.js'

const router = express.Router();

router.get('/', display);

export default router;
````

8. test

http://localhost:3000/api/user 

=> hello world on api/userRoutes and userController


## SignUp avec auth API route

1. Pour le système d'authentification, on crée 2 fichiers:

- authRoute.js

````
//authRoutes

import express from 'express';
import { signin, signup, signout } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);

export default router;

````

- authControllers.js

````
//authControllers.js
import User from '../models/userModel.js';

export const display = (req, res) => {
    res.json({
        message: 'hello world on api/authRoutes and authControllers',
    });
};

export const signup = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Inscription réussie',
    });
};

export const signin = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Connexion réussie',
    });
};

export const signout = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Déconnexion réussie',
    });
};

````


2. index.js

Ajouter la route authRoutes et app.use(express.json())
(pour permettre d'accéder directement aux données JSON via req.body.)
````
import authRoutes from './routes/authRoute.js';

app.use(express.json());

app.use('/api/auth', authRoutes);
````

3. test

thunderClient > body >json

{
  "username": "user1",
  "email": "user1@email.com",
  "password": "password123"
}

**post** **http://localhost:3000/api/auth/signup** 

Dans la console :

{
  "username": "user1",
  "email": "user1@email.com",
  "password": "password123"
}

Dans thunderClient: on va la réponse : Status: 200 OK 
  ```` 
  {
    "message": "Inscription réussie",
    "data": {
      "username": "user1",
      "email": "user1@email.com",
      "password": "password123"
    }
  }
````
### Sauver les données dans mongoDB

1.authControllers.js -> signup

````
export const signup = async  (req, res) => {
    //console.log(req.body);
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json({
        message: 'Inscription réussie',
    });
};
````

2. On test avec thunder ou insomnia ou autre : 
- Dans le JSON:
{
  "username": "user2",
  "email": "user2@email.com",
  "password": "user2@email.com"
}

- La réponse:

{
	"message": "Inscription réussie"
}

3. vérifier dans mongoDB si cela a créer un new user.

4. On peut tester les meg d'erreur :

insomnia = Error: Failure when receiving data from the peer

5. Pour voir un  msg d'erreur 

````
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password});
    try {
        await newUser.save();
        res.status(201).json({ message: 'Inscription réussie' });
      } catch (error) {
        next(error);
      }
};
````
{
	"message": "Erreur du serveur"
}

### Pbm de mot de passe lisible dans MongoDB

Ceci est un pbm car si qlq a acces à la dataBase, on peut lire les passwords des users. Et cela représente une faille de sécurité pour les informations sensibles des users.

1. 
    Crypter les passwords avec bcryptjs :

https://www.npmjs.com/package/bcryptjs

npm install bcryptjs

2. authController

**const hashedPassword = bcryptjs.hashSync(password, 10);** 
=> La fonction **hashSync** de la bibliothèque bcryptjs prend 2 paramètres : 

- **password** (qui est le mot de passe à hacher). 

- **10** (qui est le nombre de tours de hachage). 

````
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: 'Inscription réussie' });
      } catch (error) {
        next(error);
      }
};
````

3. Test et lire dans mongoDB.

- nouvelle saisie:
{
  "username": "user3",
  "email": "user3@email.com",
  "password": "user3@email.com"
}

- lire dans mongoDB et comparer le user2 et user3 et vérifier que le mot de passe du user3 soit crypté.

````
username
"user2"
email
"user2@email.com"
password
"user2@email.com"

````

````
username
"user3"
email
"user3@email.com"
password
"$2a$10$XJx3p2gpQziexOCSiQgCXeWO2kpvYvoK64MUC/XEux.gdqTF5YeOG"

````

## Créer un middleware errors

1. Créer un dossier utils ou middlewares

2. Puis un fichier error.js

- Cette fonction crée un nouvel objet d’erreur avec  2 paramètres : **statusCode** (qui représente le code d’état HTTP) et **message** (qui est le message d’erreur).

- La fonction retourne cet objet d’erreur, qui peut ensuite être utilisé pour gérer les erreurs dans ton code.


export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

et dans index.js ajouter :

````
// Middleware de gestion des erreurs
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });
````
Identification de l'erreur : Si quelque chose ne va pas, comme un nom d'utilisateur incorrect ou un problème de connexion à la base de données, cette erreur est capturée et envoyée à ce middleware.

Préparation de la réponse : Le middleware vérifie l'erreur et obtient des détails comme le code d'erreur (par exemple, 404 pour "introuvable") et un message explicatif.

Envoi de la réponse : Ensuite, il envoie une réponse JSON contenant ces détails à l'utilisateur, afin qu'il sache ce qui s'est passé.

3. Test avec insomnia :

Pour :
{
  "username": "user3",
  "email": "user3@email.com",
  "password": "user3@email.com"
}

On obtient :
{
	"success": false,
	"message": "E11000 duplicate key error collection: mern-auth-bootstrap.users index: username_1 dup key: { username: \"user3\" }",
	"statusCode": 500
}

Pour en savoir plus à propos des stautscode:

https://developer.mozilla.org/fr/docs/Web/HTTP/Status


//-------------------------

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

//---------------------------------

# SignIn Api route Back

1. authRoute.js

````
router.post('/signin', signin);
````

2. authControllers.js

````
import { errorHandler } from '../utils/error.js';
````

````
export const signin = async (req, res, next) => {
   
    const { email, password } = req.body;
  
    try{
        //vérif si email est correct
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        //vérif le psw ne pas dire que le psw est incorrect sinon on facilite le travail des hackers
        //compareSync comparer les passwords (mongoDB et saisie)
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
        } catch (error) {
        next(error)
    }
};
````

3. Créer le token et le mettre dans un cookie:

Afin d'éviter d'utiliser le ID de la database.

https://www.npmjs.com/package/jsonwebtoken

````
import jwt from 'jsonwebtoken';
````

````
//token
 const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
const expiryDate = new Date(Date.now() + 28800000); // 8 heures
res
  .cookie('access_token', token, { httpOnly: true, expires: expiryDate })  
  .status(200)
  .json(rest);
````
**res.cookie('access_token', token, { httpOnly: true,})** : 

- Crée un nouveau cookie nommé **access_token** et y stocke le token JWT. 

- **httpOnly: true** signifie que le cookie ne peut **pas** être **accédé** ou modifié par des scripts **côté client** 

**const expiryDate = new Date(Date.now() + 28800000);** : 
- Crée une  date d'expiration qui est 8 heures plus tard que l’heure actuelle.

**const { password: hashedPassword, ...rest } = validUser._doc;** :

> **...rest** est utilisé pour envoyer toutes les infos du user au client, **sauf le mot de passe**. C'est une déstrucutation pour séparer le psw car ce n'est pas sécure de le garder.

4. .env :

Le Token avec une clé secrète qui est stockée dans une variable d’environnement :
**JWT_SECRET** => pour plus de sécurité

5. test avec thunder, insomnia ou postman

> POST http://localhost:3000/api/auth/signin
- avec les infos correctes
- avec des infos erronées

//------------------------
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

# Redux

https://redux-toolkit.js.org/


1. npm install @reduxjs/toolkit dans client

2. npm install react-redux dans client

3. Créer le dossier redux dans src

4. Créer le fichier store.js dans redux

````
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
````
- **configureStore** : une fonction de @reduxjs/toolkit qui simplifie la configuration d'un store Redux.

- **reducer: {}** : aucun reducer n'a été fourni pour l'instant.

- **getDefaultMiddleware**: middlewares par défaut utilisés par @reduxjs/toolkit.

- **serializableCheck: false**: un middleware de vérification de la sérialisation désactivé.

5. main.js

````
//redux
import { store} from './redux/store.js';
import { Provider } from 'react-redux';

//---------

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
);


````

6. userSlice.js

````
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentUser: null,
    loading: false,
    error: false,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
      },
      signInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = false;
      },
      signInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const {
    signInStart,
    signInSuccess,
    signInFailure,
  } = userSlice.actions;
  
  export default userSlice.reducer;

````

- **createSlice** :  permet de créer un slice.

ps:  Un **slice** dans **Redux Toolkit** permet la gestion de l’état dans une application.

- Réducteurs (reducers) : Ce sont des fonctions qui définissent comment l’état de l’application change en réponse à des actions.
> exemple: signInSuccess :

    Cette action est déclenchée lorsque la connexion réussit, met à jour currentUser avec les informations du user fournies dans action.payload, et définit loading à false et error à false.

- État initial (initial state) : C’est l’état de départ.

- Actions : Ce sont des objets qui décrivent ce qui se passe dans l’application.

En bref : 
- Déclencher le début d'une tentative de connexion (signInStart).

- Mettre à jour l'état lorsque la connexion réussit (signInSuccess).

- Gérer les erreurs en cas d'échec de la connexion (signInFailure).

7. store.js

````
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice.js";

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

````
ps: nous pouvons **changer  le nom** en userReducer parce que dans userSlice.js on a utilisé :  **export default** userSlice.reducer;

8. SignIn.jsx

on peut utiliser le reducer :

````
import {  signInStart,signInSuccess, signInFailure,} from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
//------------------------------
const [formData, setFormData] = useState({});
const { loading, error } = useSelector((state) => state.user);

//------------------------------

const dispatch = useDispatch();

//------------------------------
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      dispatch(signInStart());

      console.log("Sending request to /api/auth/signin with data:", formData);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      //setLoading(false);

      if (data.success === false) {
        dispatch(signInFailure(data));
      return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
````

## Redux persist

https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration

Redux Persist est une bibliothèque qui  permet de sauvegarder l'état de Redux dans un moteur de stockage, tel que localStorage ou sessionStorage afin d'éviter de perdre la session après un raffraichissement.

1. npm install redux-persist

2. store.js

> Combiner tous les réduceurs => const rootReducer 

````
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//......
const rootReducer = combineReducers({ user: userReducer });

````
> Définir  un objet de configuration : persisConfig  pour Redux Persist.
Le rôle de cette clé 'root' est d'utiliser 'root' comme préfixe pour les entrées de stockage.

````
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
````

> Créer un réduceur persistant à partir de redux avec 2 arguments : la configuration de persistance (persistConfig) et le réduceur racine (rootReducer)

````
import { persistReducer, persistStore } from 'redux-persist';
//.....
const persistedReducer = persistReducer(persistConfig, rootReducer);
````

> Configuration du store

- un store Redux 

-  un réducteur racine persistant 

- Personnalise les middlewares pour désactiver la vérification de la sérialisation

````
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
````

> Initialise le persistor

````
export const persistor = persistStore(store);
````

En bref,

````
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// importation les reducers
import userReducer from "./userSlice.js"; 

const rootReducer = combineReducers({
  user: userReducer,
  // Ajoutez les autres reducers ici
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
````

3. main.jsx

````
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
//style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// importation composants
import App from './App';
import PrivateRoute from './components/PrivateRoute';
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
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
````


4. PrivateRoutes.jsx

````
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector(state => state.user);

  return currentUser ? <Outlet /> : <Navigate to='/sign-in' replace/>;
}


````
# Auth Google

## OAuth.jsx dans components

1. style btn page

````
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button,  } from "react-bootstrap";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
   
  };

  return (
    <Button
      type='button'
      variant="outline-dark"
      onClick={handleGoogleClick}
      className='w-100 d-flex align-items-center justify-content-center gap-2'
    >
    <img
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google"
            height="25"
            width="25"
          />
      Continue with google
    </Button>
  );
}
````

2.  firebase google :

https://console.firebase.google.com/

- créer un projet
- nom du projet : auth-React-Bootstrap
- désactiver le google analytics pour ce projet (trainning projet)
- continuer
- clique "</>"
- Pseudo de l'application : auth-React-Bootstrap
- Enregistrer l'application

- **installer firebase** coté client : 
npm install firebase

- fichier firebase.js dans libs

````
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGERIESENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}
export { app };
````

- créer un .env dans client et ajouter des infos sensible

- sur firebase : Authentication
- choisr google
- cliquer sur activer
- Méthode de connexion :
> Nom public du projet : auth-React-Bootstrap
> son email
- sauvegarder
- dans paramètres : lien Association de comptes utilisateur. Sur l'onglet domaine autorisé : localhost par défaut
ps: Quand il faudra déployer l'application, il faudra ajouter l'URL

3. Fonction asynchrone handleGoogleClick 
https://firebase.google.com/docs/auth/web/google-signin?hl=fr

Pour vous connecter avec une fenêtre pop-up, appelez signInWithPopup :

L’instance d’authentification Firebase est obtenue en utilisant la fonction getAuth.

````
const handleGoogleClick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const result = await signInWithPopup(auth, provider);
        console.log(result)
       
    } catch (error) {
        console.log('connexion avec google impossible', error);
    }
  };
````

et vérifier dans la console >  les metas données :
**UserCredentialImpl** et trouver : **photoURL** copier le lien et le mettre dans le navigateur, votre photo devrait s'afficher

4. Const res avec fetch

````
  const handleGoogleClick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);

        const result = await signInWithPopup(auth, provider);
                
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        });
        const data = await res.json();
        console.log(data);
        dispatch(signInSuccess(data));
        navigate('/');
       
    } catch (error) {
        console.log('connexion avec google impossible', error);
    }
  };

````

## routes > userRoute.js dans api

````
import { signin, signup, google, signout } from '../

//........
router.post('/google', google);
````

## authController.js > controller dans api

````
export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 28800000); // 8 heures
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 28800000); // 8 heures
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
````

# Construire des routes privées

## Header.jsx

> Condition d'affichage basée sur currentUser:

  - Si **currentUser**  est connecté alors le bloc <Link> contenant l'image de profil est affiché.

  - Sinon, les boutons de connexion et d'inscription sont affichés.

````
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/logoDevGreen.png";
/...
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
/...
  {/** Titre */}
    <Image
      src={Logo}
       className="rounded-circle mx-3 img-fluid"
      alt="Logo"
      style={{
         height: "3rem",
         width: "3rem",
         objectFit: "cover",
      }}
    />
    <Navbar.Brand as={Link} to="/"   className="text-success fs-4">
       Auth React-Bootstrap
    </Navbar.Brand>
//...
      <div className="d-none d-lg-flex align-items-center">
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <Image
                    src={currentUser.profilePicture}
                    alt="profile"
                    roundedCircle
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "defaultProfilePicture.png";
                    }}
                    style={{
                      height: "3.5rem",
                      width: "3.5rem",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/sign-in" className="p-0">
                  <Button variant="outline-success" className="mx-1">
                    <FaSignInAlt /> Connexion
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/sign-up" className="p-0">
                  <Button variant="success" className="mx-1">
                    <FaSignOutAlt /> Inscription
                  </Button>
                </Nav.Link>
              </>
            )}
          </div>
````

## Rappels :

1. PrivateRopute.jsx :

Le but de PrivateRoute est de protéger certaines routes de l'application, **permettant uniquement aux utilisateurs connectés d'y accéder**.

````
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  // accès à l'état redux
  const { currentUser } = useSelector(state => state.user);
  // rendu conditionnel
  //Si currentUser connecté alors <Outlet /> rendu
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' replace/>;
}
````
2. main.jsx :

````
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
````

Toutes les routes privées doivent être  dans :

````
<Route path='' element={<PrivateRoute />}> 
// ici
</Route>
````

# Page Profile.jsx

## UI PRofile

s'inpirer des la page signUp

````
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Profile() {
  const { currentUser, loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: "",
    passwordConfirm: "",
    profilePicture: currentUser.profilePicture,
  });

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [localError, setLocalError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileRef = useRef(null);

  // Fonction de gestion du changement de valeur des champs du formulaire
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Fonction de validation de fichier (exemple)
  const validateFile = (file) => {
    return true;
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  const { username, email, password, passwordConfirm } = formData;

  return (
    <FormContainer>
      <h1 className="d-flex justify-content-center text-dark">Profil</h1>
      <Form onSubmit={handleSubmit}>
        {/* Image de profil */}
        <Form.Group className="my-2 d-flex justify-content-center ">
          <Image
            src={formData.profilePicture || currentUser.profilePicture}
            alt="image de profil"
            className="cursor-pointer rounded-circle object-cover mt-2 border border-dark"
            style={{ width: "100px", height: "100px" }}
            onClick={() => fileRef.current.click()}
          />
          <Form.Control
            type="file"
            accept="image/*"
            ref={fileRef}
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              if (validateFile(file)) {
                setFormData({
                  ...formData,
                  profilePicture: URL.createObjectURL(file),
                });
              }
            }}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="text"
            id="username"
            placeholder="Pseudo"
            value={username}
            onChange={handleChange}
            autoComplete="username"
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
          />
        </Form.Group>

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visiblePassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handleChange}
              autoComplete="current-password"
              className="me-2"
            />
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

        <Form.Group className="my-2">
          <div className="d-flex">
            <Form.Control
              type={visibleConfirmPassword ? "text" : "password"}
              id="passwordConfirm"
              placeholder="Confirmation du mot de passe"
              value={passwordConfirm}
              onChange={handleChange}
              autoComplete="new-password"
              className="me-2"
            />
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

        <Button
          type="submit"
          variant="outline-dark"
          className="my-3 w-100"
          disabled={loading}
        >
          Enregistrer
        </Button>
        <div className="d-flex justify-content-between mt-3">
        <span
         
          className="btn text-danger "
        >
          Supprimer le compte
        </span>

        <span className="btn text-danger ">
          Déconnexion
        </span>
      </div>
        <div>
          <p className="text-danger mt-5">{"Quelque chose ne pas !"}</p>

          <p className="text-danger mt-5">
            {"Les modifications sont mise à jour avec succès !"}
          </p>
        </div>
      </Form>
    </FormContainer>
  );
}

````
## Updload Images avec firebase

1. Explication useRef()

````
const fileRef = useRef(null); 
````
=>  Crée une référence à un élément DOM ou à un composant React. Dans ce cas, elle est utilisée pour créer une référence à un élément de contrôle de formulaire de type fichier.


````
<Form.Control
    type="file"
    accept="image/*"
    ref={fileRef}
    hidden
    onChange={(e) => {
      const file = e.target.files[0];
      if (validateFile(file)) {
       setFormData({...formData,
                  profilePicture: URL.createObjectURL(file),
       });
      }
   }}
/>
````         
**Form.Control** de type **file** qui est caché (**hidden**). Il est lié avec **ref={fileRef}**, donc quand on clique sur l’image, cela déclenche un clic sur cet élément de contrôle de fichier, ce qui ouvre la boîte de dialogue de sélection de fichier. Pour finir, **accept="image/*"** afin d'accepter tous les type d'images.

````
<Image
   src={formData.profilePicture || currentUser.profilePicture}
   alt="image de profil"
    className="cursor-pointer rounded-circle object-cover mt-2 border border-dark"
    style={{ width: "100px", height: "100px" }}
    onClick={() => fileRef.current.click()}
/>
````
**onClick={() => fileRef.current.click()}**:

- **fileRef** est une ****référence** à l’élément de contrôle de formulaire de type **file**. 
- **current** est **une propriété de l’objet ref** qui renvoie l’élément DOM référencé. 
- **click()** est une méthode qui simule un clic ddu User sur cet élément DOM.

- En bref, quand l’utilisateur clique sur l’image, cela déclenche un clic sur l’élément de contrôle de fichier. Cela ouvre la boîte de dialogue de sélection de fichier, permettant à l’utilisateur de choisir un nouveau fichier à télécharger.

> ps: une fonction callback ou  fonction de rappel qui est passée à une autre fonction en tant qu’argument et qui est exécutée après que certaines conditions ont été remplies.

2. Firebase :

- build ou créer

- storage

- get started ou commencer

- set up cloud storage ou Configurer cloud storage:

> start in production mode ou Démarrer en mode de production + next ou ok

> choisir un emplacement proche + done ou ok

> rules ou règles : 

````
rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*')
    }
  }
}
````
+ publier

-> **allow read;** : Cette règle permet à tous les users de lire tous les fichiers.

-> **allow write: if request.resource.size < 2 _ 1024 _ 1024 && request.resource.contentType.matches('image/.*')** : Cette règle permet aux users d’écrire (télécharger) des fichiers si deux conditions sont validées :

- ps : La taille du fichier est inférieure à 2 Mo (2 _ 1024 _ 1024 octets).
Le type de contenu du fichier correspond à une image.
Récupérer les images dans notre App


### Fontions :

1. Initialisation et sélection de l’image

````
 const [image, setImage] = useState(undefined);
   console.log(image)
```` 
````
<Form.Control
  type="file"
  accept="image/*"
  ref={fileRef}
        hidden
  onChange={(e) => {
    const file = e.target.files[0];
    if (validateFile(file)) {
      setImagePercent(0);
      setImage(file);
    }
  }}
/>
````

on obtient quelque chose comme ceci:
````
 File {
    name: 'Capture d\'écran 2023-06-12 070848.png',
    lastModified: 1686546527435,
    lastModifiedDate: new Date('2023-06-12T05:08:47.000Z'),
    webkitRelativePath: '',
    size: 148829,
    type: 'image/png'
  }
````
> Pour télécharger l'image dans le storage et notre dataBase => useEffect

````
import { useState, useRef,useEffect } from "react";
````
2. Téléchargement de l’image avec useEffect et handleFileUpload

````
 useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
````  

````
  const handleFileUpload = async (image) => {
    console.log(image);
  };
````

=> On va pouvoir l'ajouter à notre storage

3. Intégration avec le stockage Firebase

````
import {  getDownloadURL,  getStorage,  ref,  uploadBytesResumable,} from 'firebase/storage';
import { app } from "../firebase";
````

````
const [imagePercent, setImagePercent] = useState(0);
const [imageError, setImageError] = useState("");
const [updateSuccess, setUpdateSuccess] = useState(false);
````  

````
const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };
 ```` 

 4. Message si pbm avec l'image

 ````
   const validateFile = (file) => {
    if (!file.type.startsWith('image/')) {
      setImageError("Le fichier doit être une image");
      return false;
    }
    if (file.size > 2 * 1024 * 1024) { // 2 MB
      setImageError("L'image doit être inférieure à 2 Mo");
      return false;
    }
    setImageError(""); // Réinitialiser les erreurs
    return true;
  };
  ````

  5. chargement de l'image


  > npm install react-spinners

  > inclure le cercle de chargement :

````
  import { RingLoader } from "react-spinners";
````

````
  const [imagePercent, setImagePercent] = useState(0);
  console.log(imagePercent);

````

````
 uploadTask.on(
  "state_changed",
  (snapshot) => {
    // Calcul du pourcentage de progression du téléchargement
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    // Mise à jour de l'état de progression de l'image
    setImagePercent(Math.round(progress));
  },
  (error) => {
    // Affichage de l'erreur dans la console
    console.error(error);
    // Mise à jour de l'état de l'erreur de l'image
    setImageError("Erreur lors du téléchargement de l'image");
  },
  () => {
    // Obtention de l'URL de téléchargement une fois le téléchargement terminé
    getDownloadURL(uploadTask.snapshot.ref)
      .then((downloadURL) => {
        // Mise à jour des données du formulaire avec l'URL de l'image téléchargée
        setFormData((prevData) => ({
          ...prevData,
          profilePicture: downloadURL,
        }));
        // Indication que la mise à jour a réussi
        setUpdateSuccess(true);
        // Mise à jour de l'état de progression de l'image à 100%
        setImagePercent(100);
      })
      .catch((error) => {
        // Affichage de l'erreur dans la console
        console.error(error);
        // Mise à jour de l'état de l'erreur de l'image
        setImageError("Erreur lors de l'obtention de l'URL de téléchargement");
      });
  }
);

````        

````
    {/* Image de profil */}
 <Form.Group className="my-2 d-flex justify-content-center">
  <div className="position-relative d-flex flex-column align-items-center" style={{ width: "100px", height: "130px" }}>
    <div className="position-relative cursor-pointer" style={{ width: "100px", height: "100px" }} onClick={() => fileRef.current.click()}>
      <Image src={formData.profilePicture || currentUser.profilePicture} alt="image de profil" className="rounded-circle object-cover border border-dark" style={{ width: "100px", height: "100px" }} />
      {imagePercent > 0 && imagePercent < 100 && (
        <div className="position-absolute top-50 start-50 translate-middle" style={{ width: "100px", height: "100px" }}>
          <RingLoader size={100} color="#208537" loading={true} />
        </div>
      )}
    </div>
    <p className="text-center mt-2" style={{ display: "inline-block", width: "250px" }}>
      {imageError ? (
        <span className="text-danger">{imageError}</span>
      ) : imagePercent > 0 && imagePercent < 100 ? (
        <span className="text-dark">{`Téléchargement : ${imagePercent}%`}</span>
      ) : imagePercent === 100 ? (
        <span className="text-success">Image téléchargée avec succès</span>
      ) : (
        ""
      )}
    </p>
  </div>
  <Form.Control type="file" accept="image/*" ref={fileRef} hidden onChange={(e) => {
    const file = e.target.files[0];
    if (validateFile(file)) {
      setImagePercent(0);
      setImage(file);
    }
  }} />
  {imageError && (<p className="text-danger text-center">{imageError}</p>)}
</Form.Group>

````
## Update images coté serveur API

### api > routes > userRoutes.js

````
import express from 'express';
import {display,  updateUser,
} from '../controllers/userController.js'
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', display);
router.post('/update/:id', verifyToken, updateUser);

export default router;
````

- **router.post('/update/:id', verifyToken, updateUser);** associe la méthode POST à la fonction updateUser, en passant un paramètre id.
- Rappels : La méthode POST est principalement utilisée pour soumettre des données au serveur pour la création ou mise à jour. La méthode POST envoie les données dans le corps de la requête HTTP(S) contrairement à la méthode GET, qui envoie des données via l’URL.

#### utils > verifyUser.js

1. cookies :

- **const token = req.cookies.access_token;**
On déclare une variable **token**, qui récupère la valeur du cookie nommé access_token à partir de l’objet req.cookies. Ce qui signifie qu'elle  stocke le jeton d’accès (ou “token”) dans la variable token.

> On doit installer cookie-parser : npm i cookie-parser côté api.

C'est un middleware pour Express.js qui facilite la gestion des cookies.

https://www.npmjs.com/package/cookie-parser

- **if (!token) return next(errorHandler(401, 'Problem authentication!'));** : Si aucun token n’est présent, la fonction appelle next avec une erreur indiquant que le user n’est pas authentifié.

- **jwt.verify(token, process.env.JWT_SECRET, (err, user) => { ... });** : Vérifie le token JWT. process.env.JWT_SECRET est la clé secrète utilisée pour vérifier le token.

- **if (err) return next(errorHandler(403, 'Token is not valid!'));** : Si une erreur se produit lors de la vérification du token, la fonction appelle next avec une erreur indiquant que le token n’est pas valide.

- **req.user = user; next();** : Si le token est valide, le token est décodé du token et attaché à la requête et la fonction next est appelée pour passer au prochain middleware.

````
import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) return next(errorHandler(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, 'Token is not valid!'));

        req.user = user;
        next();
    });


}
````
### index.js

````
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json()); 
// Middleware pour parser cookies

//Routes
app.use('/api/user', userRoutes);  
app.use('/api/auth', authRoutes);

//.....


````

### userController.js

1. Vérification du USER **if (req.user.id !== req.params.id)**: Vérifie si l’ID du USER est le même que l’ID du USER qui est censé être mis à jour. 

Si ce n’est pas le cas, erreur 401, indiquant qudu User ne peut mettre à jour que son propre compte.

2. Mise à jour du mot de passe : Si le mot de passe est fourni dans la demande, on est crypté avant d’être stocké **pour la sécurité des données**.

3. Mise à jour du User : Ensuite, on utilise la méthode **findByIdAndUpdate** de l’objet **User** pour mettre à jour du User dans la base de données. on met à jour les champs username, email, password et profilePicture avec les nouvelles valeurs fournies dans la demande.

4. Réponse : Si la mise à jour est réussie, on renvoie le nouvel User (sans le mot de passe pour des raisons de sécurité) avec un statut 200, indiquant que la demande a été traitée avec succès.

5. Gestion des erreurs : Si une erreur se produit à un moment quelconque, elle est capturée et passée à la fonction next pour être traitée par le gestionnaire d’erreurs.

````
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

//.....

// Mise à jour le user
export const updateUser = async (req, res, next) => {
  //sécurité vérif user
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
// pour mettre à jour l'utilisateur dans la base de données
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
// Si la mise à jour est réussie, renvoie le nouvel utilisateur 
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    // Si une erreur passée à la fonction next pour être traitée par le gestionnaire d'erreurs    
    next(error);
  }
}  
````

### test avec thunderClient ou insomnia

1. modification username

> POST: localhost:3000/api/user/update/id

````
{
	"username": "manu update"
}
````

ps: pensez bien à sign in avant

2. Vérifer dans MongoDB

3. Vérifer dans le navigateur (frontend)


## Relier update image front et back

### client > Profile.jsx

1. Gestion du Formulaire et Affichage des Données dans la Console

````
  // Fonction de gestion du changement de valeur des champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setLocalError("");
  };

  //.....

   // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };
````

Dans la console : 

````
formData:
  username: 'manu ',

  email: 'manu@gmail.com',

  password: '',

  passwordConfirm: '',

  profilePicture: 

    'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg'

````
2. client > redux > userSlice.js


Trois états possibles : 
- le chargement (lorsque la demande est en cours), 
- le succès (lorsque la demande a réussi) 
- et l’échec (lorsque la demande a échoué)

> Afin d'aider à gérer l’état de l’application de manière efficace et prévisible, tout en facilitant le débogage et la gestion de l’état asynchrone
````
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = false;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
````

3. handleSubmit


````
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../redux/userSlice";
````

- Prévenir le comportement par défaut : e.preventDefault(); est utilisé pour empêcher le comportement par défaut du navigateur lors de la soumission d’un formulaire, qui est de recharger la page.

- Vérifier la correspondance des mots de passe : Elle vérifie si le mot de passe et la confirmation du mot de passe sont identiques. Si ce n’est pas le cas, elle définit une erreur locale avec le message “Les mots de passe ne correspondent pas !” et arrête l’exécution de la fonction.

- Début de la mise à jour de l’utilisateur : Elle envoie une action updateUserStart pour signaler le début de la mise à jour de l’utilisateur.

- Envoi de la requête de mise à jour : Elle envoie une requête POST à l’API pour mettre à jour les informations de l’utilisateur. Les données du formulaire sont converties en JSON et incluses dans le corps de la requête.

- Traitement de la réponse : Elle attend la réponse de l’API, la convertit en JSON, puis vérifie si la mise à jour a réussi. Si la mise à jour a échoué (data.success === false), elle envoie une action updateUserFailure avec les données reçues et arrête l’exécution de la fonction.

- Succès de la mise à jour : Si la mise à jour a réussi, elle envoie une action updateUserSuccess avec les données reçues et définit setUpdateSuccess à true.

- Gestion des erreurs : Si une erreur se produit lors de l’envoi de la requête à l’API, elle envoie une action updateUserFailure avec l’erreur.


````
// Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setLocalError("Les mots de passe ne correspondent pas !");
      return;
    }
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
  ````

4. Message d'erreur ou réussite

````
        <div>
          <p className="text-danger mt-5">{localError && "Quelque chose ne va pas !"}</p>
          <p className="text-success mt-5">
            {updateSuccess && "Les modifications sont mises à jour avec succès !"}
          </p>
        </div>

````