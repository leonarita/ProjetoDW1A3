/*Natan da Fonseca Lisboa (SP3024784)*/

function validarNome(){
	
	chamadasFuncaoValidarNome++;

    if (chamadasFuncaoValidarNome == 2){
    	chamadasFuncaoValidarNome = 0;
    	return;
    }
	
	nome = document.getElementById("nome").value;
	
	if (nome == null){
		return;
	} else {
		validarSobrenome();
	}
	
}

function validarSobrenome(){
	
	sobrenome = document.getElementById("sobrenome").value;
	
	if (sobrenome == null){
		return;
	} else {
		validarRadioButton();
	}
	
}

function validarRadioButton(){
	
	rbMasculino = document.getElementById("rbMasculino");
	rbFeminino = document.getElementById("rbFeminino");
	
	if (!(rbMasculino.checked == true || rbFeminino.checked == true)){
		return;
	} else {
		validarEmail();
	}
	
}

function validarEmail(){
	
	if (document.getElementById("email") != null){
		email = String(document.getElementById("email").value);
	} else {
		return;
	}
	
	if (!((email.includes("@")) && (email.length >= email.indexOf("@") + 1))){
		return;
	} else {
		validarTelefone();
	}
	
}

function validarTelefone(){
	
	if (document.getElementById("telefone") != null){
		telefone = Number(document.getElementById("telefone").value);
	} else {
		return;
	}
	
	if (!((Number.isInteger(telefone)) && (8 <= String(telefone).length) && (String(telefone).length <= 11))){
		alert("Número de telefone inválido inserido. Por favor, tente novamente!");
	} else {
		validarMensagem();
	}
	
}

function validarMensagem(){
	
	mensagem = document.getElementById("mensagem");
	
	if (mensagem == null){
		return;
	} else {
		enviarFormulario();
	}
	
}

function enviarFormulario(){
	alert("Dados enviados com sucesso!");
	window.location.href = 'index.html';
}

var chamadasFuncaoValidarNome = 0;
btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click", validarNome);	