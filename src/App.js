import './App.css';
import Explore from './components/explore/Explore';
import Header from './components/header/Header'
import Slider from './components/homeslider/Slider';
import Other from './components/otherstuff/Other';
import ProductFeatured from './components/product/ProductFeatured';
import Seen from './components/otherstufftwo/Seen';
import Fav from './components/fav/Fav'
import Discover from './components/discover/Discover';
import Footer from './components/footer/Footer';
import MyRoute from './MyRoutes/MyRoute';

function App() {
  return (
   <>
    <Header/>
    <MyRoute/>
    <Footer/>  
 
  </>
  );
}

export default App;
