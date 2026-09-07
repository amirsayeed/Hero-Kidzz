"use client";

import { decreaseItemDB, deleteItemsFromCart, increaseItemDB } from "@/actions/server/cart";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const CartItem = ({ item, removeItem, updateQuantity }) => {
  const { title, image, quantity, price, _id } = item;

  const handleDeleteCart = async () =>{
    alert("Delete Cart Item: " + _id);
    const result = await deleteItemsFromCart(_id);
    if(result.success){
        Swal.fire("Success", "Item removed from cart", "success");
        removeItem(_id);
    }else{
        Swal.fire("Error", "Failed to remove item from cart", "error");
    }
  }

  const onIncrease = async () =>{
    const result = await increaseItemDB(_id, quantity);

    if(result.success){
        Swal.fire("Success", "Item quantity increased", "success");
        updateQuantity(_id, quantity + 1);
    }else{
        Swal.fire("Error", result.message || "Failed to increase item quantity", "error");
    }
  }

  const onDecrease = async()=>{
    const result = await decreaseItemDB(_id, quantity);

    if(result.success){
        Swal.fire("Success", "Item quantity decreased", "success");
        updateQuantity(_id, quantity - 1);
    }else{
        Swal.fire("Error", result.message || "Failed to decrease item quantity", "error");
    }
  }


  return (
    <div className="flex items-center gap-4 p-4 bg-base-100  border-primary shadow rounded-xl">
      {/* Image */}
      <div className="w-20 h-20 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        <p className="text-sm text-gray-500">Price: ৳ {price}</p>

        {/* Quantity controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            className="btn btn-xs btn-outline"
            disabled={quantity === 1}
            onClick={onDecrease}
          >
            <FaMinus />
          </button>

          <span className="px-3 font-medium">{quantity}</span>

          <button onClick={onIncrease}
            className="btn btn-xs btn-outline"
            disabled={quantity === 10}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Total + Remove */}
      <div className="text-right space-y-2">
        <p className="font-semibold">৳ {price * quantity}</p>

        <button onClick={handleDeleteCart}
          className="btn btn-sm btn-error btn-outline"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;