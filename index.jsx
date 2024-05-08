import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '/src/pages/Home.jsx';
import Recipes from '/src/pages/Recipes.jsx';
import FuturePage from '/src/pages/FuturePage.jsx';
import '/src/scss/index.sass';

// BEGIN: firebase backend connect
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBn1f1QB0dGwzT0MKEahGtceao1vnTGzP0',
  authDomain: 'letseat-48596.firebaseapp.com',
  projectId: 'letseat-48596',
  storageBucket: 'letseat-48596.appspot.com',
  messagingSenderId: '510150631608',
  appId: '1:510150631608:web:216c19d6bc7e4445bb144d',
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'recipes');

// get collection data
getDocs(colRef).then(snapshot => {
  let recipes = [];
  snapshot.docs.forEach(doc => {
    recipes.push({ ...doc.data(), id: doc.id });
  });
  console.log(recipes);
});

// END: firebase backend connect

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='recipes' element={<Recipes />} />
        <Route path='futurepage' element={<FuturePage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

export default Index;
