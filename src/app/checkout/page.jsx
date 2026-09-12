import { getCart } from '@/actions/server/cart';
import CheckOut from '@/components/home/CheckOut';
import React from 'react';

const CheckoutPage = async() => {
    const cartItems = await getCart();
    const formattedItems = cartItems.map(item =>({
        ...item,
        _id: item._id.toString(),
        productId: item.productId.toString()
    }))

    return (
        <div>
            <div className="">
                <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">Check Out Page</h2>
            </div>
         {cartItems.length === 0 ? (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-semibold">Your cart is empty</h3>
                </div>
            ) : (
                <CheckOut cartItems={formattedItems} />
            )}
        </div>
    );
};

export default CheckoutPage;