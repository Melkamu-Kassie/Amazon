import React from 'react'
import { FaSearch } from "react-icons/fa";

function Reserv() {
  return (
    <section>
      <section>
        <div>
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="Amazon logo"
            />
          </a>
          <span></span>
          <div>
            <p>Delivered To</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Product" />
          <FaSearch />
        </div>
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/960px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png"
              alt=" American Flag"
            />
            <select name="" id="">
              En
            </select>
          </div>
          {/* three components */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a to={"/cart"}>
            {/* icon */}
            <span>0</span>
          </a>
        </div>
      </section>
    </section>
  );
}
export default Reserv