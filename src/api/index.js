import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://95.216.159.188:7003/api',
  baseURL: '/api',
  timeout: 1000,
  headers: {}
});


const GET = (url, config = {}) => {
  return instance.get(url, config)  
}

const POST = () => {

}

const PUT = () => {
    
}

const DElETE = () => {
    
}

export {GET, POST, PUT, DElETE}