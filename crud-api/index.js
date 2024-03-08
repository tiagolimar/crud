import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 5000;

let produtos = [
    { id:0, nome: "Goiaba Rosa", preco: 2.15 },
    { id:1, nome: "Abacaxi Verde", preco: 5.50 },
    { id:2, nome: "Manga", preco: 3.75 },
    { id:3, nome: "Laranja", preco: 4.25 },
    { id:4, nome: "Morango", preco: 2.50 },
    { id:5, nome: "Uva", preco: 3.00 },
    { id:6, nome: "Banana", preco: 1.75 },
    { id:7, nome: "Pera", preco: 3.50 },
    { id:8, nome: "Kiwi", preco: 5.00 },
    { id:9, nome: "Limão", preco: 2.25 }
];

let id = produtos.length;


app.get('/',(_,res)=>{
    res.send({message:"Server is on..."});
})

app.get('/listar',(req,res)=>{
    res.send(produtos);
})

app.post('/inserir',(req,res)=>{
    const { nome, preco } = req.body;
    const novo_produto = { id, nome, preco};

    produtos.push(novo_produto);
    id += 1;
    res.send(novo_produto);
})

app.delete('/remover/:id', (req, res) => {
    let { id } = req.params;
    let produto = produtos.find( produto => produto.id == +id);
    produtos = produtos.filter(produto => produto.id !== +id);
    res.send(produto);
});

app.listen(port,()=>{
    console.log(`Server is on http://localhost:${port}`);
})
