import Navbar from "./components/Navbar";
import Categories from "./components/categories";
import Footer from "./components/Footer";
import About  from "./pages/About/About";
export default function App(){
    return(
        <div>
            <h1>Welcome to ZenEats</h1>
            <Navbar/>
            <Categories/>
            <Footer/>
            <About/>
            
        </div>
    )
}