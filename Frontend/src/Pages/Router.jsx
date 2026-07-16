import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Landing/Landing';
import SignUp from './Auth/SignUp';
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import Cart from "./Cart/Cart";

function Routering() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routering;