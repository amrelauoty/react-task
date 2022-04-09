import Header from "./Header";
import Footer from "./Footer";
import { Component } from "react";
import { Route,Redirect } from "react-router-dom";
import ProductsRouter from "./products/ProductsRouter";
import CategoriesRouter from "./categories/CategoriesRouter";
class App extends Component {
  
  
  render() {
    return (
      <>
        <Header/>
        <Redirect from="/" to="/products" exact/>
        <Route path="/products" component={ProductsRouter} />
        <Route path="/categories" component={CategoriesRouter}/>
        <Footer/>
      </>
    );
  }
}

export default App;
