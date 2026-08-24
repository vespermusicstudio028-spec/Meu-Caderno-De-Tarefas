import { v4 as uuidv4 } from 'uuid';
import { Question } from '../../types';

const themes = [
  { name: 'carros', container: 'pistas', singularContainer: 'pista' },
  { name: 'balões', container: 'caixas', singularContainer: 'caixa' },
  { name: 'maçãs', container: 'cestas', singularContainer: 'cesta' },
  { name: 'bolas', container: 'caixas', singularContainer: 'caixa' },
  { name: 'brinquedos', container: 'prateleiras', singularContainer: 'prateleira' },
  { name: 'pizzas', container: 'mesas', singularContainer: 'mesa' },
  { name: 'livros', container: 'pilhas', singularContainer: 'pilha' },
  { name: 'medalhas', container: 'caixas', singularContainer: 'caixa' },
  { name: 'chocolates', container: 'pacotes', singularContainer: 'pacote' },
  { name: 'dinossauros', container: 'jaulas', singularContainer: 'jaula' },
];

export function generateTabuadaTask(n: number): Question[] {
  const questions: Question[] = [];
  
  // Shuffle themes to avoid repetition
  const shuffledThemes = [...themes].sort(() => Math.random() - 0.5);

  // 1. 8 Word Problems
  for (let i = 0; i < 8; i++) {
    const theme = shuffledThemes[i % shuffledThemes.length];
    // Random multiplier between 2 and 10
    const multiplier = Math.floor(Math.random() * 9) + 2; 
    
    let text = `Em cada ${theme.singularContainer} havia ${n} ${theme.name}.\n`;
    text += `Havia ${multiplier} ${theme.container}.\n`;
    text += `👉 Quantos(as) ${theme.name} havia ao todo?`;

    questions.push({
      id: uuidv4(),
      type: 'word_problem',
      text,
      correctAnswer: n * multiplier,
    });
  }

  // 2. 10 Direct Tabuada
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: uuidv4(),
      type: 'direct',
      text: `${n} × ${i} =`,
      correctAnswer: n * i,
    });
  }

  // 3. 8 Arme e efetue (random multipliers)
  const multipliersForArmar = [2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5).slice(0, 8);
  for (const m of multipliersForArmar) {
    questions.push({
      id: uuidv4(),
      type: 'arme_efetue',
      text: `${n} × ${m}`,
      correctAnswer: n * m,
    });
  }

  // 4. 10 Desafio Final (out of order)
  const outOfOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5);
  for (const m of outOfOrder) {
    questions.push({
      id: uuidv4(),
      type: 'challenge',
      text: `Quanto é ${n} × ${m}?`,
      correctAnswer: n * m,
    });
  }

  return questions;
}

export function generateAdicaoTask(n: number): Question[] {
  const questions: Question[] = [];
  
  // Shuffle themes to avoid repetition
  const shuffledThemes = [...themes].sort(() => Math.random() - 0.5);

  // 1. 8 Word Problems
  for (let i = 0; i < 8; i++) {
    const theme = shuffledThemes[i % shuffledThemes.length];
    // Random addend between 1 and 10
    const addend = Math.floor(Math.random() * 10) + 1;
    
    let text = `Você tinha ${n} ${theme.name}.\n`;
    text += `Você ganhou mais ${addend} ${theme.name}.\n`;
    text += `👉 Quantos(as) ${theme.name} você tem agora?`;

    questions.push({
      id: uuidv4(),
      type: 'word_problem',
      text,
      correctAnswer: n + addend,
    });
  }

  // 2. 10 Direct Adição
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: uuidv4(),
      type: 'direct',
      text: `${n} + ${i} =`,
      correctAnswer: n + i,
    });
  }

  // 3. 8 Arme e efetue (random addends)
  const addendsForArmar = [2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5).slice(0, 8);
  for (const a of addendsForArmar) {
    questions.push({
      id: uuidv4(),
      type: 'arme_efetue',
      text: `${n} + ${a}`,
      correctAnswer: n + a,
    });
  }

  // 4. 10 Desafio Final (out of order)
  const outOfOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5);
  for (const a of outOfOrder) {
    questions.push({
      id: uuidv4(),
      type: 'challenge',
      text: `Quanto é ${n} + ${a}?`,
      correctAnswer: n + a,
    });
  }

  return questions;
}

export function generateSubtracaoTask(n: number): Question[] {
  const questions: Question[] = [];
  
  // Shuffle themes to avoid repetition
  const shuffledThemes = [...themes].sort(() => Math.random() - 0.5);

  // 1. 8 Word Problems
  for (let i = 0; i < 8; i++) {
    const theme = shuffledThemes[i % shuffledThemes.length];
    // Random start number
    const startNum = n + Math.floor(Math.random() * 10) + 1;
    
    let text = `Você tinha ${startNum} ${theme.name}.\n`;
    text += `Você deu ${n} ${theme.name} para um amigo.\n`;
    text += `👉 Quantos(as) ${theme.name} você tem agora?`;

    questions.push({
      id: uuidv4(),
      type: 'word_problem',
      text,
      correctAnswer: startNum - n,
    });
  }

  // 2. 10 Direct Subtração
  for (let i = 1; i <= 10; i++) {
    const startNum = n + i;
    questions.push({
      id: uuidv4(),
      type: 'direct',
      text: `${startNum} - ${n} =`,
      correctAnswer: i,
    });
  }

  // 3. 8 Arme e efetue (random numbers)
  const numbersForArmar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5).slice(0, 8);
  for (const num of numbersForArmar) {
    const startNum = n + num;
    questions.push({
      id: uuidv4(),
      type: 'arme_efetue',
      text: `${startNum} - ${n}`,
      correctAnswer: num,
    });
  }

  // 4. 10 Desafio Final (out of order)
  const outOfOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5);
  for (const num of outOfOrder) {
    const startNum = n + num;
    questions.push({
      id: uuidv4(),
      type: 'challenge',
      text: `Quanto é ${startNum} - ${n}?`,
      correctAnswer: num,
    });
  }

  return questions;
}

export function generateDivisaoTask(n: number): Question[] {
  const questions: Question[] = [];
  
  // Shuffle themes to avoid repetition
  const shuffledThemes = [...themes].sort(() => Math.random() - 0.5);

  // 1. 8 Word Problems
  for (let i = 0; i < 8; i++) {
    const theme = shuffledThemes[i % shuffledThemes.length];
    // Random quotient between 1 and 10
    const quotient = Math.floor(Math.random() * 10) + 1;
    const total = n * quotient;
    
    let text = `Você tem ${total} ${theme.name}.\n`;
    text += `Você quer dividir igualmente entre ${n} amigos.\n`;
    text += `👉 Quantos(as) ${theme.name} cada amigo vai receber?`;

    questions.push({
      id: uuidv4(),
      type: 'word_problem',
      text,
      correctAnswer: quotient,
    });
  }

  // 2. 10 Direct Divisão
  for (let i = 1; i <= 10; i++) {
    const total = n * i;
    questions.push({
      id: uuidv4(),
      type: 'direct',
      text: `${total} ÷ ${n} =`,
      correctAnswer: i,
    });
  }

  // 3. 8 Arme e efetue (random dividends)
  const numbersForArmar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5).slice(0, 8);
  for (const num of numbersForArmar) {
    const total = n * num;
    questions.push({
      id: uuidv4(),
      type: 'arme_efetue',
      text: `${total} ÷ ${n}`,
      correctAnswer: num,
    });
  }

  // 4. 10 Desafio Final (out of order)
  const outOfOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(() => Math.random() - 0.5);
  for (const num of outOfOrder) {
    const total = n * num;
    questions.push({
      id: uuidv4(),
      type: 'challenge',
      text: `Quanto é ${total} ÷ ${n}?`,
      correctAnswer: num,
    });
  }

  return questions;
}

export function generateArmarEfetuarTask(op: string): Question[] {
  const questions: Question[] = [];
  
  // 10 questions of type arme_efetue with larger random numbers
  for (let i = 0; i < 10; i++) {
    let num1 = 0;
    let num2 = 0;
    let text = '';
    let correctAnswer = 0;

    if (op === 'adicao') {
      num1 = Math.floor(Math.random() * 900) + 100; // 100 to 999
      num2 = Math.floor(Math.random() * 900) + 100;
      text = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
    } else if (op === 'subtracao') {
      num1 = Math.floor(Math.random() * 900) + 100;
      num2 = Math.floor(Math.random() * num1); // Ensure positive result
      text = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
    } else if (op === 'multiplicacao') {
      num1 = Math.floor(Math.random() * 90) + 10; // 10 to 99
      num2 = Math.floor(Math.random() * 9) + 2;   // 2 to 10
      text = `${num1} × ${num2}`;
      correctAnswer = num1 * num2;
    } else if (op === 'divisao') {
      num2 = Math.floor(Math.random() * 9) + 2; // Divisor 2 to 10
      const quotient = Math.floor(Math.random() * 50) + 10;
      num1 = num2 * quotient; // exact division
      text = `${num1} ÷ ${num2}`;
      correctAnswer = quotient;
    }

    questions.push({
      id: uuidv4(),
      type: 'arme_efetue',
      text,
      correctAnswer,
    });
  }

  return questions;
}

export function generateProblemasTask(op: string): Question[] {
  const questions: Question[] = [];
  const shuffledThemes = [...themes].sort(() => Math.random() - 0.5);

  const numQuestions = 6;
  
  for (let i = 0; i < numQuestions; i++) {
    const theme = shuffledThemes[i % shuffledThemes.length];
    let num1 = 0, num2 = 0;
    let text = '';
    let correctAnswer = 0;
    
    // Choose operation if mixed
    const currentOp = op === 'mistos' ? ['adicao', 'subtracao', 'multiplicacao', 'divisao'][Math.floor(Math.random() * 4)] : op;

    if (currentOp === 'adicao') {
      num1 = Math.floor(Math.random() * 90) + 10;
      num2 = Math.floor(Math.random() * 90) + 10;
      text = `Você tinha ${num1} ${theme.name} e ganhou mais ${num2}.\nCom quantos(as) ${theme.name} você ficou no total?`;
      correctAnswer = num1 + num2;
    } else if (currentOp === 'subtracao') {
      num1 = Math.floor(Math.random() * 90) + 20;
      num2 = Math.floor(Math.random() * (num1 - 10)) + 1; // ensure positive result
      text = `Você tinha ${num1} ${theme.name}, mas perdeu (ou deu) ${num2}.\nCom quantos(as) ${theme.name} você ficou agora?`;
      correctAnswer = num1 - num2;
    } else if (currentOp === 'multiplicacao') {
      num1 = Math.floor(Math.random() * 10) + 2;
      num2 = Math.floor(Math.random() * 10) + 2;
      text = `Você tem ${num1} caixas. Em cada caixa há ${num2} ${theme.name}.\nQuantos(as) ${theme.name} você tem ao todo?`;
      correctAnswer = num1 * num2;
    } else if (currentOp === 'divisao') {
      num2 = Math.floor(Math.random() * 9) + 2; // divisor
      const quotient = Math.floor(Math.random() * 10) + 2;
      num1 = num2 * quotient; // total
      text = `Você tem ${num1} ${theme.name} e quer dividir igualmente entre ${num2} amigos.\nQuantos(as) ${theme.name} cada amigo vai receber?`;
      correctAnswer = quotient;
    }

    questions.push({
      id: uuidv4(),
      type: 'word_problem',
      text,
      correctAnswer,
    });
  }

  return questions;
}

export function generateDesafioTask(): Question[] {
  const questions: Question[] = [];
  const operations = ['adicao', 'subtracao', 'multiplicacao', 'divisao'];
  
  // 16 questions total, 4 of each type
  operations.forEach(op => {
    for (let i = 0; i < 4; i++) {
      let num1 = 0;
      let num2 = 0;
      let text = '';
      let correctAnswer = 0;

      if (op === 'adicao') {
        num1 = Math.floor(Math.random() * 50) + 10;
        num2 = Math.floor(Math.random() * 50) + 10;
        text = `${num1} + ${num2} = ?`;
        correctAnswer = num1 + num2;
      } else if (op === 'subtracao') {
        num1 = Math.floor(Math.random() * 50) + 20;
        num2 = Math.floor(Math.random() * (num1 - 10)) + 1;
        text = `${num1} - ${num2} = ?`;
        correctAnswer = num1 - num2;
      } else if (op === 'multiplicacao') {
        num1 = Math.floor(Math.random() * 10) + 2;
        num2 = Math.floor(Math.random() * 9) + 2;
        text = `${num1} × ${num2} = ?`;
        correctAnswer = num1 * num2;
      } else if (op === 'divisao') {
        num2 = Math.floor(Math.random() * 9) + 2;
        const quotient = Math.floor(Math.random() * 10) + 2;
        num1 = num2 * quotient;
        text = `${num1} ÷ ${num2} = ?`;
        correctAnswer = quotient;
      }

      questions.push({
        id: uuidv4(),
        type: 'challenge',
        text,
        correctAnswer,
        options: generateOptions(correctAnswer)
      });
    }
  });

  // Shuffle questions
  return questions.sort(() => Math.random() - 0.5);
}

function generateOptions(correctAnswer: number): number[] {
  const options = new Set<number>();
  options.add(correctAnswer);
  
  while (options.size < 4) {
    // Generate answers close to the correct one (± 10)
    const variation = Math.floor(Math.random() * 21) - 10;
    const option = correctAnswer + variation;
    if (option > 0 && option !== correctAnswer) {
      options.add(option);
    }
  }
  
  return Array.from(options).sort(() => Math.random() - 0.5);
}
