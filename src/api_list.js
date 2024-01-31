import axios from "axios";


export const axiosInstance = axios.create()
axiosInstance.defaults.withCredentials = true



/////////    base url mein backend ka url daal dena 
///////  proxy remove kr dena pkg.json se


const base_url = ''

export  const login_api = `${base_url}/signin`


export  const signup_api = `${base_url}/signup`
