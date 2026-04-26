const express = require("express"); 
const app = express(); 

// Define a porta correta para o Railway 
const PORT = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site atualizado!</h1>");
})

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>");
})

app.get("/consulta/:parametro", function(req,res){
    res.send("retorno consulta:" + req.params.parametro);
})

// Cadastro com nome (parâmetro obrigatório para esta rota) 
app.get("/cadastro/:nome", function(req, res) {
    var nome = req.params.nome;
    res.send("<h1>produto " + nome + " criado!</h1>");
});

// Cadastro sem nome (rota base)
app.get("/cadastro", function(req, res) {
    res.send("produto criado!");
});

app.listen(PORT, function(erro){ 
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log(`Servidor rodando na porta ${PORT}`);
    }
});