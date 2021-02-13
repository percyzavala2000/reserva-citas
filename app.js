import Servidor from './server/servidor.js';
import dotenv from 'dotenv';
dotenv.config();

console.clear();

//instaciar servidor
const server= new Servidor();

server.listen();








