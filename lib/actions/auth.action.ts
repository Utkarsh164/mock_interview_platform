"use server"

import { db } from "@/firebase/admin";
import { success } from "zod/v4";

export async function signUp(params:SignUpParams) 
{
    const {uid,name,email}=params;
    try {
        const userRecord=await db.collection('users').doc(uid).get();
        if(userRecord.exists){
            return {
                success:false,
                message:'User already exists.'
            }
        }
        await db.collection('users').doc(uid).set({
            name,email
        })
    } catch (error:any) {
        console.log('Error While Signup:',error)
        if(error.code==='auth/email-already-exists'){
            return{
                success:false,
                message:'This email  is already in use.'
            }
        }
        return{
            success:false,
            message:'Failed to create account'
        }
    }
}

export async function setSessionCookie(idToken:String) {
    
}