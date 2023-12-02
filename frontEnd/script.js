function submitForm() {
    //Cliente
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var status = document.getElementById("status").value;
    var logradouro = document.getElementById("logradouro").value;
    var numero = document.getElementById("numero").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var pais = document.getElementById("pais").value;
    var telefone = document.getElementById("telefone").value;

    //veiculo
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var cor = document.getElementById("cor").value;
    var chassi = document.getElementById("chassi").value;
    var quantidade = document.getElementById("quantidade").value;
    var valor = document.getElementById("valor").value;

    //funcionario
    var cargo = document.getElementById("cargo").value;
    var comissao = document.getElementById("comissao").value;

    // Envia os dados para o backend
    if (document.getElementById("select") === "cliente") {
        fetch('/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: nome, cpf: cpf, email: email, status: status, logradouro: logradouro, numero: numero, bairro: bairro, cidade: cidade, estado: estado, pais: pais, telefone: telefone })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else if (document.getElementById("select") === "veiculo") {
        fetch('/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ marca: marca, modelo: modelo, cor: cor, chassi: chassi, quantidade: quantidade, valor: valor })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        fetch('/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: nome, cpf: cpf, email: email, status: status, logradouro: logradouro, numero: numero, bairro: bairro, cidade: cidade, estado: estado, pais: pais, telefone: telefone, cargo: cargo, comissao: comissao })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}
