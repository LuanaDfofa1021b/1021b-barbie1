use("patissier");
db.createCollection("cake");

use("patissier");
db.cake.insertOne({
    _id:ObjectId("111111111111"),
    nome:"Bolo de chocolate",
    preco: 60,
    ingredientes:[{
        nome: "ovo",
        quantidade: "3"
    },
    {
        nome: "trigo",
        quantidade: "3 xicaras"
    },

    {
        nome: "leite",
        quantidade: "1 litro"
    },
    {
        nome: "chocolate",
        quantidade: "2 xicaras"
        
    },
    {
        nome: "fermento",
        quantidade: "1 colher de sopa"
        
    }
]
}
)
use("patissier");
db.cake.insertOne({
    _id:ObjectId("222222222222"),
    nome:"Bolo de 4 leite",
    preco: 90,
    ingredientes:[{
        nome: "trigo",
        quantidade: "3 xicaras" 
    },
    {
        nome: "ovo",
        quantidade: "3 ovos"
    },
    {
        nome: "leite",
        quantidade: "3 xicaras"
    },

    {
        nome: "baunilha",
        quantidade: "3 gotas"
    },
    {
        nome: "leite ninho",
        quantidade: "2 xicaras"
    },
    {
        nome: "fermento",
        quantidade: "1 colher de sopa"
    }
]
}
)
use("patissier");
db.cake.insertOne({
    _id:ObjectId("333333333333"),
    nome:"Bolo de cenoura",
    preco: 35,
    ingredientes:[{
        nome: "trigo",
        quantidade: "3 xicaras"
    },
    {
        nome: "leite",
        quantidade: "3 xicaras"
    },
    {
        nome: "cenoura",
        quantidade: "3 cenouras inteiras"
    },

    {
        nome: "acucar",
        quantidade: "3 xicaras"
    },
    {
        nome: "ovo",
        quantidade: "3 ovos"
    },
    {
        nome: "oleo",
        quantidade: "1 xicara"
    }
    
]
}
)
use("patissier");
db.cake.insertOne({
    _id:ObjectId("444444444444"),
    nome:"Bolo de fuba",
    preco: 35,
    ingredientes:[{
        nome: "trigo",
        quantidade: "3 xicaras"
    },
    {
        nome: "leite",
        quantidade: "3 xicaras"
    },
    {
        nome: "fuba",
        quantidade: "1kg"
    },

    {
        nome: "acucar",
        quantidade: "3 xicaras"
    },
    {
        nome: "ovo",
        quantidade: "3 ovos"
    },
    {
        nome: "oleo",
        quantidade: "1 xicara"
    }
    
]
}
)
//3-  Excluir o document cake com _id:1
use("patissier");
db.cake.deleteOne({ _id: ObjectId("111111111111") });

//4- Listar o nome e preço de todos os bolo
use("patissier");
db.cake.find({}, { nome: 1, preco: 1, _id: 0 });

// 5-Listar o nome eo preço de todos os bolos com o preço menor ou igual a 70
use("patissier");
db.cake.find({ preco: { $lte: 70 } }, { nome: 1, preco: 1, _id: 0 });

//6- Criar uma consulta que mude(tem que usar o uptade) o nome, peso e acrescente 1 ingrediente no bolo de _id:2 
use("patissier");
db.cake.updateOne(
  { _id: ObjectId("222222222222") },
  {
    $set: {
      nome: "bolo de cereija",
      preco: 90,
    },
    $push: {
      ingredientes: {
        nome: "cereija",
        quantidade: "1 caixa",
      },
    },
  }
)

//7-  Criar um update que modifique 1 ingrediente de um bolo para ovos e quantidade 3
use("patissier");
db.cake.updateOne(
  { _id: ObjectId("111111111111"), "ingredientes.nome": "ovo" },
  {
    $set: {
      "ingredientes.$.quantidade": "6",
    },
  }
);






