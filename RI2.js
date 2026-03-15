// function Cliente(nome, telefone, email, endereco){
//     this.nome = nome;
//     this.telefone = telefone;
//     this.email = email;
//     this.endereco = endereco;
// }

class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd;
        this.numero = numero;
    }

    get ddd() {return this._ddd;} //tive que por _ para evitar loop eterno, pq?
    set ddd(valor) {this._ddd = valor;}

    get numero() {return this._numero;}
    set numero(valor) {this._numero = valor;}
}

class Endereco{
    constructor(rua, numero, bairro, cidade, estado){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    
    get rua() {return this._rua;}
    set rua(valor) {this._rua = valor;}

    get numero() {return this._numero;}
    set numero(valor) {this._numero = valor;}

    get bairro() {return this._bairro;}
    set bairro(valor) {this._bairro = valor;}

    get cidade() {return this._cidade;}
    set cidade(valor) {this._cidade = valor;}

    get estado() {return this._estado;}
    set estado(valor) {this._estado = valor;}

    ruaCaixaAlta(){
        return String(this._rua).toUpperCase();}
    ruaCaixaBaixa(){
        return String(this._rua).toLowerCase();}

    bairroCaixaAlta(){
        return String(this._bairro).toUpperCase();}
    bairroCaixaBaixa(){
        return String(this._bairro).toLowerCase();}

    cidadeCaixaAlta(){
        return String(this._cidade).toUpperCase();}
    cidadeCaixaBaixa(){
        return String(this._cidade).toLowerCase();}

    estadoCaixaAlta(){
        return String(this._estado).toUpperCase();}
    estadoCaixaBaixa(){
        return String(this._estado).toLowerCase();}
}

class Cliente{
    constructor(nome, telefone, email, endereco){
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }

    get nome() {return this._nome;}
    set nome(valor) {this._nome = valor;}

    get telefone() {return this._telefone;}
    set telefone(valor) {this._telefone = valor;}

    get email() {return this._email;}
    set email(valor) {this._email = valor;}

    get endereco() {return this._endereco;}
    set endereco(valor) {this._endereco = valor;}

    nomeCaixaAlta(){
        return String(this._nome).toUpperCase();}
    nomeCaixaBaixa(){
        return String(this._nome).toLowerCase();}

    emailCaixaAlta(){
        return String(this._email).toUpperCase();}
    emailCaixaBaixa(){
        return String(this._email).toLowerCase();}

get descricao(){
    return "Cliente: " + this.nome + "\nTelefone: (" + this.telefone.ddd + ") " + this.telefone.numero + "\nEmail: " + this.email + "\nEndereco: " + this.endereco.rua + ", " + this.endereco.numero + " - " + this.endereco.bairro + ", " + this.endereco.cidade + " - " + this.endereco.estado; //JS é confuso.
}
}

function ordenarClientesPorNome(clientes) {
    return clientes.sort((a, b) => a.nome.localeCompare(b.nome)); //localeCompare é uma função de comparação de strings levando em conta ascentuação e numera a variável em ordem alfabética, o sort vai ordernar de acordo com o valor da variável.
}

let telefone1 = new Telefone(11, 999999999);
let endereco1 = new Endereco("Rua das Flores", 123, "Jardim Primavera", "São Paulo", "SP");
let cliente1 = new Cliente("João Silva", telefone1, "joao.silva@email.com", endereco1);

console.log(cliente1.descricao+"\n");

let telefone2 = new Telefone(21, 888888888);
let endereco2 = new Endereco("Avenida Central", 456, "Centro", "Rio de Janeiro", "RJ");
let cliente2 = new Cliente("Maria Oliveira", telefone2, "maria.oliveira@email.com", endereco2);

console.log(cliente2.descricao+"\n");

let telefone3 = new Telefone(31, 777777777);
let endereco3 = new Endereco("Praça da Liberdade", 789, "Savassi", "Belo Horizonte", "MG");
let cliente3 = new Cliente("Carlos Pereira", telefone3, "carlos.pereira@email.com", endereco3);

console.log(cliente3.descricao +"\n");

let clientes = [cliente1, cliente2, cliente3];
let clientesOrdenados = ordenarClientesPorNome(clientes);  
console.log("\nLista de Clientes:");
clientesOrdenados.forEach(cliente => console.log(cliente.nome));