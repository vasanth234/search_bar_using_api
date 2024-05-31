
import axios from 'axios'
export async function Api(){
    return await axios.get(`http://localhost:3000/products`)
    
}