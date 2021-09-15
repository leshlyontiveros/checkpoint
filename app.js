// seleciona o input do título
const titulo = document.querySelector('#input--titulo')
// Seleciona o input da url da imagem
const imagemURL = document.querySelector('#input--link-img')
// Seleciona o input da descrição
const descricao = document.querySelector('#input--descricao')
// Seleciona o botão de adicionar 
const btnAdicionar = document.querySelector('#btn-adicionar')

const bntContato = document.querySelector('#btn-contato')
const formContato = document.querySelector('#form-contato')

// Seleciona os items que tem no card(box)
const boxItens = document.querySelector('#box-content')
// Adiciona um evento quando cliquemos no botão de adicionar (?)
btnAdicionar.addEventListener('click', () => {
    // Condicional geral que verifica os valores inserios nos três campos
     if(imagemURL.value && titulo.value && descricao.value) {
        let validarImg = false
        // Condicional para validar o formato da imagem
        if(imagemURL.value.includes('jpg') || imagemURL.value.includes('png') || imagemURL.value.includes('jpeg') || imagemURL.value.includes('webp') || imagemURL.value.includes('gif')){
            validarImg = true
        // Condicional para verificar o campo URL do formulário
        } else {
            alert('Coloque um link de imagem válido.')
        }
        // Condicional para validar a imagem
        if(validarImg) {
        // váriaveis para inserir os dados que o usuário irá inserir nos cards
            boxItens.innerHTML += `
                                    <div class="box">
                                        <div class="titulo">${titulo.value.substring(0, 20)}</div>
                                        <div class="estrelas">* * * * *</div>
                                        <div class="box--img">
                                            <img src="${imagemURL.value}" alt="">
                                        </div>
                                        <div class="box--descricao">
                                            <h2>[${titulo.value.substring(0, 20)}]</h2>
                                            <p>${descricao.value.substring(0, 100)+'...'}}</p>
                                        </div>
                                    </div>
                                    
                                  `
        }
        // Condicional utilizada para caso o usuário não preencha todos os campos
    } else {
        alert('Preencha todos os campos.')
    }
})

bntContato.addEventListener('click', () => {
   
   

   formContato.innerHTML = `
   
                            <form id="formContato"action="#">
                            
                            <input type="text" name="nome" id="nome" placeholder="Digite o seu nome">
                            <input type="email" name="email" id="email" placeholder="Digite o seu mail">
                            <input type="textarea" name="solicitacao" id="solicitacao" placeholder="Descreva a sua solicitação">
                            <button class="btt" type="submit">Enviar</button>
                            </form>
                            `
})