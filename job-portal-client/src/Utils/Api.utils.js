import { ApiConfig } from "./Api.config";
import axiosclient from "./Axios-Client";

const {LOGIN, SIGNUP, CONTACTUS} = ApiConfig

export const login = async (data) =>{
    try{
        const response = await axiosclient.post(LOGIN, data)
        return response
    }catch(err){
        console.error("Login API Error:", err?.response?.data || err.message);
        throw err;
        
    }
}

export const signup = async (data) =>{
    try{
        const response = await axiosclient.post(SIGNUP, data)
        return response.data
    }catch(err){
        console.error("Signup API Error:", err?.response?.data || err.message);
        throw err;
        
    }
}

export const contacts = async (data) =>{
    try{
        const response = await axiosclient.post(CONTACTUS, data)
        return response.data
    }catch(err){
        console.error("Contact API Error:", err?.response?.data || err.message);
        throw err;
        
    }
}