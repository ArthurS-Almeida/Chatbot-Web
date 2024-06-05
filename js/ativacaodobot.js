let botao = document.querySelector('button#botao-chatbot')
let caixacorpo = document.querySelector('main#caixa-corpo')
let chatbot = document.querySelector('div#chatbot-caixa')
let fechar = document.querySelector('button#close')
function ativar() {
    chatbot.style.bottom = '0'
    botao.style.display= 'none'
    caixacorpo.innerHTML = `<p class="fala-bot">Olá, digite a opção que deseja falar: <br><br>
    1. Sobre nós. <br>
    2. Como funciona?<br>
    3. Como posso fazer parte? <br>
    4. Falar com atendente.
</p>`

}

function desativar(){
    chatbot.style.bottom = '-500px'
    botao.style.display= 'block'
    caixacorpo.innerHTML = ''

}