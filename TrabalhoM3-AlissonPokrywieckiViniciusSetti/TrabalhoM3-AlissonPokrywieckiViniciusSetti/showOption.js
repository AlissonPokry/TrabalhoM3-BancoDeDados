function showOption(){
    document.getElementById("divCliente").style.display = 'none';
    document.getElementById("divVeiculo").style.display = 'none';
    document.getElementById("divFuncionario").style.display = 'none';

    var option = document.getElementById("select").value;

    if(option === "cliente"){
        document.getElementById("divCliente").style.display = 'block';
    } else if(option === "veiculo"){
        document.getElementById("divVeiculo").style.display = 'block';
    } else document.getElementById("divFuncionario").style.display = 'block';
}