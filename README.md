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
    <Navbar expand="lg" bg="light" variant="light" data-bs-theme="light" className="border-bottom border-success">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-success fs-4">Auth React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link}  to="/" className="my-auto">
              Home
            </Nav.Link>
            <Nav.Link as={Link}  to="/about" className="my-auto">
              A propos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link}  to="/sign-up">
              <Button variant="outline-success" className="mx-1">
                <FaSignOutAlt />
                Inscription
              </Button>
            </Nav.Link>
            <Nav.Link as={Link}  to="/sign-in">
              <Button variant="outline-success" className="mx-1">
                <FaSignInAlt /> Connexion
              </Button>
            </Nav.Link>
          </Nav>
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