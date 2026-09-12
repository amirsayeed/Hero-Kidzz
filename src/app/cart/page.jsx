import { getCart } from '@/actions/server/cart';
import Cart from '@/components/home/Cart';
import React from 'react';

const CartPage = async() => {
    const cartItems = await getCart();
    const formattedItems = cartItems.map((item)=>({
        ...item,
        _id: item._id.toString(),
        productId: item.productId.toString()
    }))

   
    return (
        <div>
            <div className="">
                <h2 className="text-4xl font-bold py-4 border-l-8 border-primary pl-8">My Cart</h2>
                <p className="py-3">
                    <span className="text-primary font-bold">{cartItems.length}</span>{" "} Items found in your cart
                </p>
            </div>
            {cartItems.length === 0 ? (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-semibold">Your cart is empty</h3>
                </div>
            ) : (
                <div className="space-y-4">
                    <Cart cartItem={formattedItems} />
                </div>
            )}
        </div>
    );
};

export default CartPage;