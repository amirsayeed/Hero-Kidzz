"use client";

import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartButton = () => {

  return (
    <div>
      <button
        className="btn btn-primary w-full flex gap-2"
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;