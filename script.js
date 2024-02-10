const perguntas = [
  {
    pergunta: 'O que significa o acrônimo "DOM" em JavaScript?',
    respostas: [
      'Documento de Objetos Móveis',
      'Modelo de Objetos do Documento',
      'Domínio de Operações Móveis',
    ],
    correta: 1
  },
  {
    pergunta: 'Qual é a função do operador "===" em comparações em JavaScript?',
    respostas: [
      'Compara valores e tipos sem coerção',
      'Realiza uma comparação ampla com coerção',
      'Compara apenas os valores, ignorando os tipos',
    ],
    correta: 0
  },
  {
    pergunta: 'Como se declara uma variável em JavaScript?',
    respostas: [
      'let myVar = 10;',
      'const = myVar 10;',
      'var myVar = 10;',
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a finalidade do método "addEventListener" em JavaScript?',
    respostas: [
      'Adicionar estilos ao elemento',
      'Adicionar um ouvinte de eventos ao elemento',
      'Remover um elemento do DOM',
    ],
    correta: 1
  },
  {
    pergunta: 'O que é o JSON em JavaScript?',
    respostas: [
      'Uma linguagem de programação',
      'Um formato de dados para intercâmbio de dados',
      'Um método de ordenação de arrays',
    ],
    correta: 1
  },
  {
    pergunta: 'Como se chama a função que é executada quando ocorre um erro em JavaScript?',
    respostas: [
      'handleError()',
      'catchError()',
      'onError()',
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a diferença entre "let" e "const" na declaração de variáveis?',
    respostas: [
      'let é usado para valores constantes, const para valores mutáveis',
      'let é usado para variáveis globais, const para variáveis locais',
      'let permite reatribuição, const não permite reatribuição',
    ],
    correta: 2
  },
  {
    pergunta: 'O que é o método "forEach" em JavaScript?',
    respostas: [
      'Um método para criar loops',
      'Um método para iterar sobre elementos de um array',
      'Um método para transformar strings em arrays',
    ],
    correta: 1
  },
  {
    pergunta: 'Como se realiza uma requisição assíncrona em JavaScript?',
    respostas: [
      'Usando a palavra-chave "sync"',
      'Utilizando o método "async"',
      'Usando Promises ou async/await',
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a finalidade do método "querySelector"?',
    respostas: [
      'Selecionar elementos por classe',
      'Selecionar elementos por id',
      'Selecionar elementos por um seletor CSS',
    ],
    correta: 2
  }
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.pergunta;
 

  for(const resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input').value = item.respostas.indexOf(resposta);

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.currentTarget.value == item.correta;
      corretas.delete(item);
      if(estaCorreta) {
        corretas.add(item);
      }
      mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`;
    }

    quizItem.querySelector('dl').appendChild(dt);
  }
  
  quizItem.querySelector('dl dt').remove();

  quiz.appendChild(quizItem);
}