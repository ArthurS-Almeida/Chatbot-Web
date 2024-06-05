let inp_msg = document.querySelector('input#msg')

function enviarmsg() {
    let caixacorpo = document.querySelector('main#caixa-corpo')
    let msg = inp_msg.value

    if (msg == 1) {
        caixacorpo.innerHTML += `<p class='fala-user'>${msg}</p>`

        caixacorpo.innerHTML += `<p class='fala-bot'>Sou Arthur, desenvolvedor desse ChatBot!</p>`

        setTimeout(() => {
            caixacorpo.innerHTML += `<p class="fala-bot">Em que mais posso ajudar? <br><br>
            2. Como funciona?<br>
            3. Como posso fazer parte? <br>
            4. Falar com atendente.
            </p>`
            caixacorpo.scrollTop = caixacorpo.scrollHeight;
        }, 999);

    } else if (msg == 2) {
        caixacorpo.innerHTML += `<p class='fala-user'>${msg}</p>`
        caixacorpo.innerHTML += `<p class='fala-bot'>Digite apenas as informações solicitadas que te responderei!</p>`

        setTimeout(() => {
            caixacorpo.innerHTML += `<p class='fala-bot'<p class="fala-bot">Em que mais posso ajudar? <br><br>
            1. Sobre nós. <br>
            3. Como posso fazer parte? <br>
            4. Falar com atendente.
            </p>`
            caixacorpo.scrollTop = caixacorpo.scrollHeight;
        }, 999);

    } else if (msg == 3) {
        caixacorpo.innerHTML += `<p class='fala-user'>${msg}</p>`
        caixacorpo.innerHTML += `<p class='fala-bot'>Mande um email para acad.arthur.alm@gmail.com!</p>`

        setTimeout(() => {
            caixacorpo.innerHTML += `<p class="fala-bot">Em que mais posso ajudar?<br><br>
            1. Sobre nós. <br>
            2. Como funciona?<br>
            4. Falar com atendente.
            </p>`
            caixacorpo.scrollTop = caixacorpo.scrollHeight;
        }, 999);

    } else if (msg == 4) {
        caixacorpo.innerHTML += `<p class='fala-user'>${msg}</p>`
        caixacorpo.innerHTML += `<p class='fala-bot'>Todos os nossos atendentes estão ocupados, tente novamente mais tarde.</p>`

        setTimeout(() => {

            caixacorpo.scrollTop = caixacorpo.scrollHeight;
        }, 500);

        setTimeout(() => {
            caixacorpo.innerHTML += `<p class="fala-bot">Em que mais posso ajudar? <br><br>1. Sobre nós. <br>2. Como funciona?<br>3. Como posso fazer parte? <br></p>`
            caixacorpo.scrollTop = caixacorpo.scrollHeight;
        }, 999);

    } else {
        caixacorpo.innerHTML += `<p class='fala-user'>${msg}</p>`
        caixacorpo.innerHTML += `<p class='fala-bot'>Perdão, não entendi... Não temos essa opção. Tente novemente! <br><br>
        1. Sobre nós. <br> 2. Como funciona?<br> 3. Como posso fazer parte? <br> 4. Falar com atendente.</p>`
    }
    caixacorpo.scrollTop = caixacorpo.scrollHeight;
}

inp_msg.addEventListener('keypress', function (event) {

    setTimeout(() => {
        if (event.key === 'Enter') {
            enviarmsg()
            inp_msg.value = ''
        }
    }, 1000);

});

