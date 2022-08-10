class List{
    constructor(){
        this.data=[];
    }
    add(nome){
        this.data.push(nome);
        console.log(this.data);
    }
}

class ToList extends List{
    constructor() {
        super();
        this.usuario="Davi"
    }
    getUsuario(){
        console.log(this.usuario)
    }
    
    static soma (a,b){
        return a+b
    }
}

/* const tolist = new ToList()

document.getElementById('novotodo').onclick = function(){
    tolist.add('Davi');
    tolist.getUsuario();
} */

//constantes

//Var é universal
//var nome = 'Davi'

//Const não muda
const nome = {primeiro_nome: "Davi"}

nome.primeiro_nome = "João"

console.log(nome);


//Let pode apenas ser definido dentro do escopo de uma função
function teste(x){
    let y = 4;
    if (x>2){y=6
    console.log(x,y)}
}
console.log(teste(10))
