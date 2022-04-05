import "./App.css";
import { ProductsProvider } from "./context/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <ProductsProvider>
        <Header />
        <Users />
        <Footer />
      </ProductsProvider>
    </div>
  );
}

export default App;
