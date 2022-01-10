import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { productId } = useParams();
    const [product, setProdcut]=useState({})
    useEffect(() => {
        fetch(`https://glacial-dusk-25869.herokuapp.com/singleProduct/${productId}`)
          .then((res) => res.json())
          .then((data) => setProdcut(data));
      }, []);
      console.log(product)
    return (
        <div className='detail'>
            <div className=''>
            <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>Name: {product.name}</Card.Title>
                <Card.Text>
                Description: {product.description}
                </Card.Text>
                <p>Price: {product.price}</p>
            </Card.Body>
        </Card>
            </div>
        </div>
    );
};

export default Details;