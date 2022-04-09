import { Table } from "react-bootstrap";
import { Component } from "react";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import productsCRUD from "./productsModel";
class List extends Component {
  state = {
    products:[],
    DetailsObject: {},
  };
  componentDidMount() {
    productsCRUD
    .getAll()
    .then((result) => {
     this.setState({
       products: result.data,
     });
   });
  }
  remove(id){
    let d = productsCRUD.delete(id);
    console.log(d);
  }
  render() {
      return (
        <>
          <div className="container mt-2">
            <Link
              type={"button"}
              to="/products/add"
              className="btn btn-primary m-1"
              style={{width:200+"px",borderRadius:0}}
              
            >Add <FontAwesomeIcon icon={faCirclePlus}/></Link>
            <Table className="m-3 mx-auto">
              <thead className="bg-info text-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                
                {
                this.state.products.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <img
                            src={item.image}
                            alt="React"
                            title="React"
                            style={{ width: 30, height: 30 }}
                          />
                        </td>
                        <td>{item.description}</td>
                        <td>
                          <Link
                            to={`/products/details/${item.id}`}
                            style={{borderRadius:0}}
                            className="m-2"
                          ><FontAwesomeIcon icon={faEye} className="text-primary" title="Details"></FontAwesomeIcon></Link>
  
                          <Link
                           
                            to={`/products/update/${item.id}`}
                            style={{borderRadius:0}}
                            className="m-2"
                          ><FontAwesomeIcon icon={faPen} className="text-warning" title="Update"></FontAwesomeIcon></Link>
                          <span
                            style={{borderRadius:0}}
                            className="m-2"
                            onClick={() => this.remove(item.id)}
                          ><FontAwesomeIcon icon={faTrash} style={{color:'red',cursor:"pointer"}} title="Delete"></FontAwesomeIcon></span>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </Table>
          </div>
        </>
      );
  }
}

export default List;
