import { Suspense, useState } from "react";
import Stats from "./components/stats/Stats";
import NavBar from "./components/nav/NavBar";
import Banner from "./components/banner/Banner";
import Products from './components/products/Products';
import './App.css'
import Plans from "./components/plans/Plans";
import Steps from "./components/steps/Steps";
import Trial from "./components/trial/Trial";
import Footer from "./components/footer/Footer";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  const [cartArray, setCartArray] = useState([]);
  return (
    <>
      <NavBar cartArray={cartArray} />

      <Banner />

      <Stats />

      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <Products productsPromise={productsPromise} cartArray={cartArray} setCartArray={setCartArray} />
      </Suspense>

      <Steps />

      <Plans />

      <Trial />

      <Footer />
    </>
  )
}

export default App



