const textoDecode = document.getElementById("textoDecode")
const btnCripto = document.getElementById("btn-cripto")
const btnDecripto = document.getElementById("btn-decripto")


btnCripto.addEventListener("click", () => {
    if (textoDecode.value == ""){
        alert("Digite um texto para codificar")
    }
    else {
        limpaConteudo("divResultado")
        cripto(textoDecode.value)
        document.getElementById("textoDecode").value = ""
    }
});

btnDecripto.addEventListener("click", () => {
    if (textoDecode.value == ""){
        alert("Digite um texto para decodificar")
    }
    else {
        limpaConteudo("divResultado")
        decripto(textoDecode.value)
        document.getElementById("textoDecode").value = ""
    }
});

function cripto(texto) {
    texto = texto.toLowerCase()
    let criptoTexto = ""
    for (i = 0; i < texto.length; i++) {
        if (texto[i] == "e") {
            criptoTexto += "enter"
        }
        else if (texto[i] == "i"){
            criptoTexto += "imes"
        }
        else if (texto[i] == "a"){
            criptoTexto += "ai"
        }
        else if (texto[i] == "o"){
            criptoTexto += "ober"
        }
        else if (texto[i] == "u"){
            criptoTexto += "ufat"
        }
        else{
            criptoTexto += texto[i]
        }
    };
    insereHtml(criptoTexto)
}

function decripto(texto){
    texto = texto.toLowerCase()
    let arrayString = ["enter", "imes", "ai", "ober", "ufat"]
    let arrayVogais = ["e", "i", "a", "o", "u"]
    for (i = 0; i < arrayString.length; i++) {
        while (true) {
            if (texto.search(arrayString[i]) == -1){
                break
            }
            texto = texto.replace(arrayString[i], arrayVogais[i])
        }
    }
    insereHtml(texto)
}

function limpaConteudo(elemento){
    return document.getElementById(elemento).innerHTML = ""
}

function insereHtml(texto){
    let paragrafo = document.createElement("span")
    paragrafo.innerHTML = `<p id="textoResultado">${texto}</p>
    <button id="btn-copiar" onclick="copiarTexto()">Copiar Texto</button>`
    divResultado.appendChild(paragrafo)
}

function copiarTexto(){
    let textoCopiado = document.getElementById("textoResultado")
    navigator.clipboard.writeText(textoCopiado.textContent)
}