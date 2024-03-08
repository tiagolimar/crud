import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

const produtos = [
    { nome: "Goiaba Rosa", preco: 2.15 },
    { nome: "Abacaxi Verde", preco: 5.50 },
    { nome: "Manga", preco: 3.75 },
    { nome: "Laranja", preco: 4.25 },
    { nome: "Morango", preco: 2.50 },
    { nome: "Uva", preco: 3.00 },
    { nome: "Banana", preco: 1.75 },
    { nome: "Pera", preco: 3.50 },
    { nome: "Kiwi", preco: 5.00 },
    { nome: "Limão", preco: 2.25 }
];

app.use(cors());

app.get('/',(_,res)=>{
    res.send({message:"Server is on..."});
})

app.get('/listar',(req,res)=>{
    res.send(produtos);
})

app.listen(port,()=>{
    console.log(`Server is on http://localhost:${port}`);
})