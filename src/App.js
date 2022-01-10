import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/HomeSection/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AddProduct from './components/AddProduct/AddProduct';
import Main from './components/HomeSection/WomenCollection/Main/Main';
import Details from './components/HomeSection/Details/Details';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main/*" element={<Main />}>
       
           {/* <Route path="cloth" element={<Clothing />} />
           <Route path="handbag" element={<HandBag />} /> */}
        </Route>
        <Route path="/products/:productId" element={<Details />}/>
       
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
