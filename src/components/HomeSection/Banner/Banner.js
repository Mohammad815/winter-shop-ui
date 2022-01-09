import React from 'react';
import img1 from '../../../image/banner1.png'
import {Container,Row,Col} from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner1" style={{  
            backgroundImage:`url(${img1})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundColor:'#DDE6E7',
          }}>
            <div className="mt-5 banner2 container">
               
               {/* <Link className="navLink " to="/explore"><button className="btn btn-info p-2 fs-4">Expolore Here</button></Link> */}
               <Container>
                    <h3>Winter Fashion</h3>
                    <h1 className="fashion">Fashion</h1>
                    <h1 className="fashion">Collection 2021</h1>
               </Container>
            </div>
        </div>
    );
};

export default Banner;