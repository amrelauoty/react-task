import { Component } from "react";
import { Link } from "react-router-dom";
import productsCRUD from "./productsModel";
class UpdateProduct extends Component {
  state = {
    Id: "",
    Name: "",
    Price: "",
    Quantity: "",
    Description: "",
  };
  componentDidMount()
  {
    productsCRUD.getById(this.props.match.params.id).then((result)=>{
      this.setState({
        Id: result.data.id,
        Name: result.data.name,
        Price: result.data.price,
        Quantity: result.data.quantity,
        Description: result.data.description,
      })
    })
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  update = () => {
    let updatedProduct = {
      id: this.state.Id,
      name: this.state.Name,
      price: this.state.Price,
      quantity: this.state.Quantity,
      image: "images/logo512.png",
      description: this.state.Description,
    };
    
    if(updatedProduct.id===''|| updatedProduct.name===''||updatedProduct.price===''||updatedProduct.quantity===''||updatedProduct.description==='')
    {
      document.getElementsByClassName('error')[0].style.visibility = 'visible';
    }
    else
    {
      productsCRUD.update(this.props.match.params.id,updatedProduct);
      this.props.history.push("/products");
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="card m-3 border-0">
            <div className="card-header border-0">Update Product</div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                  type={"number"}
                  className="form-control"
                  id="id"
                  name="Id"
                  onChange={this.handleOnChange}
                  value={this.state.Id}
                disabled/>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Name</label>
                <input
                  type={"text"}
                  className="form-control"
                  id="name"
                  name="Name"
                  onChange={this.handleOnChange}
                  value={this.state.Name}
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
                  value={this.state.Price}
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
                  value={this.state.Quantity}
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
                  value={this.state.Description}
                />
              </div>
            </div>
            
            <div className="error" style={{visibility:'hidden',color:'red',margin:'10px auto'}} >All fields are required</div>
            <input
              type={"button"}
              className="btn btn-outline-warning mx-auto"
              value="Update"
              style={{width:200+"px",borderRadius:0}}
              onClick={this.update}
            />
            <Link className="btn btn-danger" style={{borderRadius:0,width:150+"px"}} to="/products">
              Back to List
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default UpdateProduct;
