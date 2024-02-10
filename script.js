const questions = [
  {
    question: 'Which team won Super Bowl LI in 2017, staging the biggest comeback in the competition\'s history?',
    answers: [
      'New England Patriots',
      'Atlanta Falcons',
      'Philadelphia Eagles',
      'Pittsburgh Steelers',
    ],
    correct: 0
  },
  {
    question: 'Who holds the record for the most touchdowns scored in a single NFL season?',
    answers: [
      'Tom Brady',
      'Peyton Manning',
      'LaDainian Tomlinson',
      'Jerry Rice',
    ],
    correct: 2
  },
  {
    question: 'Which player is known as "The Beast Mode"?',
    answers: [
      'Adrian Peterson',
      'Marshawn Lynch',
      'DeMarco Murray',
      'Derrick Henry',
    ],
    correct: 1
  },
  {
    question: 'How many teams make the playoffs in each NFL conference?',
    answers: [
      '6',
      '8',
      '10',
      '12',
    ],
    correct: 0
  },
  {
    question: 'In what year was the NFL founded?',
    answers: [
      '1920',
      '1932',
      '1945',
      '1958',
    ],
    correct: 0
  },
  {
    question: 'Which franchise has won the most Super Bowls in NFL history?',
    answers: [
      'San Francisco 49ers',
      'New England Patriots',
      'Dallas Cowboys',
      'Pittsburgh Steelers',
    ],
    correct: 1
  },
  {
    question: 'Who holds the record for the most rushing yards in a single NFL season?',
    answers: [
      'Barry Sanders',
      'Eric Dickerson',
      'Adrian Peterson',
      'Jim Brown',
    ],
    correct: 1
  },
  {
    question: 'Which is the only team that has never reached the Super Bowl in NFL history?',
    answers: [
      'Detroit Lions',
      'Cleveland Browns',
      'Houston Texans',
      'Jacksonville Jaguars',
    ],
    correct: 0
  },
  {
    question: 'What is the oldest operating stadium in the NFL?',
    answers: [
      'Lambeau Field',
      'Soldier Field',
      'Arrowhead Stadium',
      'MetLife Stadium',
    ],
    correct: 0
  },
  {
    question: 'Who is the coach with the most victories in the history of the NFL?',
    answers: [
      'Bill Belichick',
      'Tom Landry',
      'Don Shula',
      'Chuck Noll',
    ],
    correct: 2
  },
];


const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corrects = new Set();
const totalDequestions = questions.length;
const mostrarTotal = document.querySelector('#acertos span');


for(const item of questions) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector('h3').textContent = item.question;
 

  for(const answer of item.answers) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = answer;
    dt.querySelector('input').setAttribute('name', 'question-' + questions.indexOf(item));
    dt.querySelector('input').value = item.answers.indexOf(answer);

    dt.querySelector('input').onchange = (event) => {
      const estacorrect = event.currentTarget.value == item.correct;
      corrects.delete(item);
      if(estacorrect) {
        corrects.add(item);
      }
      mostrarTotal.textContent = `${corrects.size} out of ${totalDequestions}`;
    }

    quizItem.querySelector('dl').appendChild(dt);
  }
  
  quizItem.querySelector('dl dt').remove();

  quiz.appendChild(quizItem);
}