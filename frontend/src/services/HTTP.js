import axios from "axios";

const http =axios.create({
    baseURL:import.meta.env.VITE_API_META_URL
})

export const getMain =async ()=>{
    try {
        const {data} =await http.get("/api/")
        return data;
    } catch (err) {
        console.log(err)
    }
} 