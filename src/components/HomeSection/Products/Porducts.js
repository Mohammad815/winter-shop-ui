import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'
import { getProducts } from '../../../redux/slices/winterSlice';

const Products = () => {
    
  // const toyProduct = products.slice(0, 6)
   
    const dispatch = useDispatch();
  const { users } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);   

    return (
        <div className='mt-5'>
          <div className='text-center'>
            <p className="display-4 text-center">Trending Product</p>
            <h3>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</h3>
          </div>
      <Container>
      <div className="services ">
        <div className="row container ">
          {(users)?.map((pd, index) => (
            <div className="col-md-6 col-lg-4 toy-img mb-3">
              
              <Card className='h-100'>
                   <Card.Img variant="top" src={pd?.image} />
                        <Card.Body className=''>
                        <h2>{pd.name}</h2>
                            <p className='fs-5'>{pd.description}</p>
                            <p className='fs-5'>{pd.price}</p>
                            
                        </Card.Body>
                        <Card.Footer>
                        <Link className='common card-footer1' to={`/products/${pd._id}`}>
                              <button className="button1 bolder btn p-1 fs-3">Order Now</button>
                            </Link>
    </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
    );
};

export default Products;