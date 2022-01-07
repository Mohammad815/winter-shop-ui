import React from 'react';
import {
    Outlet,
    Link
  } from "react-router-dom";


const Collection = () => {
    return (
        <div>
        <nav>
          <Link to="/collection/cloth">Jacket</Link> |{" "}
          <Link to="/collection/handbag">handbag</Link>
        </nav>
        <Outlet />
      </div>
    );
};

export default Collection;