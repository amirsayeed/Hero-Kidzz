"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const cartCollection = dbConnect(collections.CART);

export const handleCart = async (productId) =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return {success: false};

    //getCartItem -> user.email && productId
    const query = { email: user?.email, productId: new ObjectId(productId)};

    const isAdded = await cartCollection.findOne(query);
    if(isAdded){
        const updatedData = {
            $inc:{
                quantity: 1
            }
        }

        const result = await cartCollection.updateOne(query, updatedData);
        return {success: Boolean(result.modifiedCount)};
    }else{
        const product = await dbConnect(collections.PRODUCTS).findOne({
            _id: new ObjectId(productId)
        });

        const newData={
            productId: product?._id,
            email: user.email,
            title: product?.title,
            image: product?.image,
            quantity: 1,
            price: product.price - (product.price * product.discount) / 100,
            username: user?.name,
        }
        const result = await cartCollection.insertOne(newData);
        return {success: result.acknowledged}
    }
}

export const getCart = async() =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return [];

    const query = { email: user?.email};
    const result = await cartCollection.find(query).toArray();
    return result;
}

export const deleteItemsFromCart = async(id) =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return {success: false};

    if(id?.length != 24) return {success: false};
    
    const query = {_id: new ObjectId(id), email: user?.email};
    const result = await cartCollection.deleteOne(query);
    revalidatePath("/cart");
    return {success: Boolean(result.deletedCount)};
}

export const increaseItemDB = async(id, quantity) =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return {success: false};

    if(quantity > 10) return {success: false, message: "You can not add more than 10 items"};

    const query = {_id: new ObjectId(id), email: user?.email};

    const updatedData = {
        $inc: {
            quantity: 1
        }
    }

    const result = await cartCollection.updateOne(query, updatedData);
    return {success: Boolean(result.modifiedCount)};
}

export const decreaseItemDB = async(id, quantity) =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return {success: false};
    
    if(quantity <= 1) return {success: false, message: "You can not decrease less than 1 item"};

    const query = {_id: new ObjectId(id), email: user?.email};
    const updatedData = {
        $inc: {
            quantity: -1
        }
    }
    const result = await cartCollection.updateOne(query, updatedData);
    return {success: Boolean(result.modifiedCount)};
}

export const clearCart = async () =>{
    const {user} = (await getServerSession(authOptions)) || {};
    if(!user) return {success: false};

    const query = { email: user.email };
    const result = await cartCollection.deleteMany(query);
    return result;
}