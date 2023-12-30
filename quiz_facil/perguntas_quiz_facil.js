let perguntas = [
    {
        titulo: 'Qual o nome do seguinte personagem?',
        alternativas: ['Milhouse Van Houten', 'Kirk Van Houten', 'Luann Mussolini-Van Houten', 'Martin Prince Jr'],
        img: '../Assets/milhouse.png',
        correta: 0
    },
    {
        titulo: 'Qual é o nome do gato de estimação da família Simpson?',
        alternativas: ['Rufus', 'Jub-Jub', "PorcoAranha", 'Snowball'],
        correta: 3
    },
    {
        titulo: 'Qual é o nome do bar frequentado por Homer Simpson?',
        alternativas: ['Kwik-E-Mart', 'Springfield Bar & Grill', "Moe's Tavern", 'Bar dos Peitos'],
        correta: 2
    },
    {
        titulo: 'Qual é o nome do chefe de Homer na Usina Nuclear de Springfield?',
        alternativas: ['Carl Carlson', 'Waylon Smithers', 'Sr. Burns', 'Seymour Skinner'],
        correta: 2
    }
];

let container = document.querySelector('.container')

let app = {
    start: function () {
        this.Atualpos = 0;
        this.Totalpontos = 0;
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.hideQuestion(perguntas[this.Atualpos]);
    },
    hideQuestion: function(q) {
        this.qatual = q;
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element, index) {
            element.textContent = q.alternativas[index];
        });
    
        let img = document.getElementById("img");
        if (q.img) {
            img.src = q.img;
            img.style.display = "block"; // Exibe a imagem
            q.img = '';
        } else {
            img.style.display = "none"; // Oculta a imagem se não houver uma associada à pergunta
            container.style.gap = "1.5rem"
            container.style.height = "30rem"
        }
    },


    Proximaperg: function () {
        this.Atualpos++;
        if (this.Atualpos === perguntas.length) {
            this.mostrarResultadoFinal(); // Chama a função para mostrar o resultado final
        } else {
            this.hideQuestion(perguntas[this.Atualpos]);
        }
    },

    checaResposta: function (user) {
        if (this.qatual.correta === user) {
            console.log("Correta")
        } else {
            console.log("Errado")
        }
        this.mostraresposta(this.qatual.correta, user);
        this.atualizaPontos();
        this.Proximaperg();
    },

    atualizaPontos: function () {
        let scoreDiv = document.getElementById("pontos");
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}/4`;
    },

    mostraresposta: function(respostaCorreta, user) {
        let resultDiv = document.getElementById("result");
        let result = '';

        if (respostaCorreta === user) {
            result = 'Resposta Correta';
            this.Totalpontos++;
        } else {
            let pergunta = perguntas[this.Atualpos];
            let ctexto = pergunta.alternativas[respostaCorreta];
            result = `Incorreto! Resposta Correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
    },

mostrarResultadoFinal: function () {
    // Remove os elementos específicos do quiz (texto, perguntas, etc.)
    let container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Exibe o resultado final no container
    let resultadoFinalDiv = document.createElement('div');
    resultadoFinalDiv.textContent = `Seu resultado final é: ${this.Totalpontos}/4`;
    resultadoFinalDiv.classList.add('resultado-final-text');
    container.appendChild(resultadoFinalDiv);

    // Adiciona um botão no final
    let button = document.createElement('button');
    button.textContent = 'Voltar';
    button.classList.add('retornar');
    button.addEventListener('click', function(){
        window.location.href = "https://simpsons-game-lemon.vercel.app/";
    })
    container.appendChild(button);
}

}

app.start();
