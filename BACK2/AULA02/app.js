//ler arquivo externo usando node
//vamos usar a lib fs (file system)
const fs=require("fs");
fs.readFile("./dados.csv",(erro,data)=>{
    if (erro){
        console.log(erro);
    }else{
        console.log(data.toString());
    }
})