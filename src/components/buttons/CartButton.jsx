"use client";

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({product}) => {
  const session = useSession();
  const isLogin = session.status === "authenticated";
  const router = useRouter();
  const path = usePathname();

  const add2Cart = async () => {
   if(isLogin){
    const result = await handleCart({product, inc:true});
    if(result.success){
      Swal.fire("Added to Cart", product?.title, "success");
    }else{
      Swal.fire("Error", "Failed to add to cart", "error");
    }
   }
   else{
    router.push(`/login?callbackUrl=${path}`)   
   }
  } 

  return (
    <div>
      <button onClick={add2Cart}
        className="btn btn-primary w-full flex gap-2"
      >
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;