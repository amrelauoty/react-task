import { Component } from "react";
import {Link} from "react-router-dom"
import productsCRUD from "./productsModel";
class Details extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    product:{name:"",quantity:""}
  };
  componentDidMount()
  {
    productsCRUD.getById(this.props.match.params.id).then((result)=>{
      this.setState({
        product:result.data
      })
    })
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="card m-3">
            <div
              className="card-header text-light"
              style={{ backgroundColor: "#418193" }}
            >
              Product Details
            </div>
            <div className="card-body">
              Name is: {this.state.product.name}
              <br />
              Quantity: {this.state.product.quantity}
            </div>
            <div className="card-footer">
              <Link
                className="btn btn-danger"
                to="/products"
                style={{ borderRadius: 0 }}
              >
                Back to List
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Details;
