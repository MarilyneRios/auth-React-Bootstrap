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


# SignUp avec auth API route

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

thunder client = usename unique ou requis... ex: errmsg: 'E11000 duplicate key error collection: basic-auth.users index: username_1 dup key: { username: "user1" }',

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