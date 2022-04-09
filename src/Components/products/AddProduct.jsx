import { Component } from "react";
import {Link} from 'react-router-dom'
import productsCRUD from "./productsModel";
class NewProduct extends Component {
  state = {
    Id: 0,
    Name: "",
    Price: 0,
    Quantity: 0,
    Description: "",
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  SaveObject = () => {
    let newProduct = {
      id: this.state.Id,
      name: this.state.Name,
      price: this.state.Price,
      quantity: this.state.Quantity,
      image: "images/logo512.png",
      description: this.state.Description,
    };
    if(newProduct.id===''|| newProduct.name===''||newProduct.price===''||newProduct.quantity===''||newProduct.description==='')
    {
      document.getElementsByClassName('error')[0].style.visibility = 'visible';
    }
    else
    {
      productsCRUD.add(newProduct);
      this.props.history.push("/products");
    }
    
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="card m-3 border-0">
            <div className="card-header m-1 border-0 text-light" style={{backgroundColor:"blue"}}>New Product</div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type={"number"}
                  className="form-control"
                  id="id"
                  name="Id"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Name</label>
                <input
                  type={"text"}
                  className="form-control"
                  id="name"
                  name="Name"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="price">Price</label>
                <input
                  type={"number"}
                  className="form-control"
                  id="price"
                  name="Price"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type={"number"}
                  className="form-control"
                  id="quantity"
                  name="Quantity"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="description">Description</label>
                <input
                  type={"text"}
                  className="form-control"
                  id="description"
                  name="Description"
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
            <div className="error" style={{visibility:'hidden',color:'red',margin:'10px auto'}} >All fields are required</div>
            <input
              type={"button"}
              className="btn btn-outline-primary mx-auto"
              value="Save"
              style={{width:200+"px",borderRadius:0}}
              onClick={this.SaveObject}
            />
            <Link className="btn btn-danger" to={"/products"}  style={{borderRadius:0,width:150+"px"}}>
              Back to List
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default NewProduct;
