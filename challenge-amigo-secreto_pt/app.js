let amigos = [];
const listaResultado = document.getElementById("resultado");

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == '') {
        alert("Por favor, insira um nome.");
        return;
    } 
    listaResultado.innerHTML = "";
    amigos.push(amigo);
    console.log('amigos: ', amigos);
    listarAmigos()
    document.getElementById("amigo").value = "";
}

function listarAmigos() {
    console.log('chamou listarAmigos...');
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(value of amigos) {
        console.log('iterando... amigo:', value);
        const item = document.createElement("li");
        item.textContent = value;
        
        listaAmigos.appendChild(item);
    }
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione mais de um amigo para sortear.');
        return;
    }
    
    listaResultado.innerHTML = "";
    let indice = gerarNumeroAleatorio(amigos.length);
    const sorteado = document.createElement("li");
    sorteado.textContent = amigos[indice];

    listaResultado.appendChild(sorteado);
}

function gerarNumeroAleatorio(max) {// gera número aleatório entre 0 e max - 1
    console.log('sorteando...');
    return Math.floor(Math.random() * max);
}