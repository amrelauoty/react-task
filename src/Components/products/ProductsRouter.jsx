import { Component } from "react";
import { Route } from "react-router-dom";
import NewProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Details from "./ShowProduct";
import List from "./ProductsList";
class ProductsRouter extends Component {
  render() {
    return (
      <>
        <Route
          path="/products"
          component={(props) => <List {...props} />}
          exact
        />

        <Route
          path="/products/add"
          component={(props) => <NewProduct {...props} />}
        />

        <Route
          path="/products/details/:id"
          component={(props) => <Details {...props} />}
        />

        <Route
          path="/products/update/:id"
          component={(props) => <UpdateProduct {...props} />}
        />
      </>
    );
  }
}

export default ProductsRouter;
