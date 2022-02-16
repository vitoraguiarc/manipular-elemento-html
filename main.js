'use strict'

const container = document.querySelector('main')

function criarElementoInnerHTML() {
    container.innerHTML += `
        <div>
            <button>ok</button>
        </div>`
}

function criarElementoAppendChild(numero) {
    //1 - Criar
    const novaDiv = document.createElement('div')
    //2- Configurar
   
    novaDiv.textContent = numero
    //3- Inserir
    container.appendChild(novaDiv);
}

function criarElementoInsertBefore() {
    //Criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')

    //Configurar
    novaDiv.id = 'sete'
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = '7'

    container.insertBefore(novaDiv, quintaDiv)
}

function criarElementoReplaceChild() {
    //Criar
    const novaDiv = document.createElement('div')
    const quintaDiv = document.querySelector('div:nth-child(5)')

    //Configurar
    novaDiv.id = 'sete'
    novaDiv.classList.add('vermelho')
    novaDiv.textContent = '7'

    container.replaceChild(novaDiv, quintaDiv)
}

function criarElementoAppendChildren(numero) {
    //1 - Criar
    const novaDiv = document.createElement('div')
    //2- Configurar
    novaDiv.textContent = numero
    //3- Inserir
    container.replaceChildren(novaDiv);
}

for (let i=0; i<=100; i++) {
    criarElementoAppendChild(i)
}