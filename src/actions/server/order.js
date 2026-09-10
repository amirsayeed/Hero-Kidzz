"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { orderInvoiceTemplate } from "@/lib/orderInvoice";
import { sendEmail } from "@/lib/sendEmail";

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user){
        return {
            success: false
        }
    }

    const cart = await getCart();
    if(cart.length == 0){
        return {success: false};
    }

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const newOrder = {
        createdAt: new Date().toISOString(),
        items: cart,
        ...payload,
        totalPrice
    }

    const result = await orderCollection.insertOne(newOrder);
    
    if(Boolean(result.insertedId)){
        const result = await clearCart();
    }

    await sendEmail({
        to: user.email,
        subject: "🎉Your Order Invoice - Hero Kidz",
        html:orderInvoiceTemplate({
            orderId: result.insertedId.toString(),
            items: cart,
            totalPrice
        })
    })

    return {
        success: result.insertedId
    }

}