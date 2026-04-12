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
import { ToastContainer } from "react-toastify";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  const [cartArray, setCartArray] = useState({});
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <NavBar cartCount={cartCount} />

      <Banner />

      <Stats />

      <Suspense fallback={

        <div className="w-full text-center p-6">
          <h1 className="text-4xl text-center mx-6 text-dark">
            Loading Products...
          </h1>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>

      }>
        <Products productsPromise={productsPromise} cartArray={cartArray} setCartArray={setCartArray} cartCount={cartCount} setCartCount={setCartCount} />
      </Suspense>

      <Steps />

      <Plans />

      <Trial />

      <Footer />

      <ToastContainer />
    </>
  )
}

export default App



