import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../image/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div  className="banner1 " style={{  
            backgroundImage: `url(${img1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
           

          }} >
            <div className="mt-5">
               
               <Link className="navLink " to="/explore"><button className="btn btn-info p-2 fs-4">Expolore Here me</button></Link>
            </div>
        </div>
    );
};

export default Banner;