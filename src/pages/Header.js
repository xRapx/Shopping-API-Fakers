import React from "react";
import { Navbar, Container, FormControl,Dropdown, Badge, Button } from "react-bootstrap";
import "../css/Header.css";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {

  const {
    state:{ cart },
    dispatch
 } = CartState()

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              planceholder="Search Some Thing...."
              className="m-auto"
            />
          </Navbar.Text>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25px"/>
                <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth:370,margin: 0 , marginLeft:-284}} >
                {cart.length > 0? (
                <>
                  {cart.map((prod) =>(
                    <span className="cartitem" key={prod.id}>
                      <img 
                        src={prod.avatar}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>${prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize= "20px"
                        style={{cursor:"pointer"}}
                        onClick={() => 
                          dispatch({
                            type:"REMOVE_TO_CART",
                            payload:prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                      <Button style={{width:"95%", margin:"0 10px"}}>
                          Go to Cart
                      </Button>
                  </Link>
                </>
                ) : (
                <span style={{padding:10}}>Cart is Empty</span>
                )
                }
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default Header;
