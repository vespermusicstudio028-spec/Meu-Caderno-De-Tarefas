const fs = require('fs');

const data = fs.readFileSync('src/data/portugueseCurriculum.ts', 'utf8');

const regex = /'2º Ano':\s*\[[\s\S]*?\],\n  '3º Ano':/m;

const new2Ano = `'2º Ano': [
    {
      id: 'unit-1',
      title: 'Sílabas e Encontros',
      description: 'Vamos revisar as sílabas, aprender os encontros de vogais e consoantes, e a ordem alfabética!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Sílabas e Separação',
          type: 'study',
          explanation: 'As palavras são formadas por pedacinhos chamados SÍLABAS. Quando falamos a palavra "CA-CHO-RRO", abrimos a boca 3 vezes!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Quantas sílabas tem a palavra ESCOLA?', options: ['2', '3', '4', '1'], correctAnswer: '3' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Como separamos a palavra BRINQUEDO?', options: ['BRIN-QUE-DO', 'BRI-NQUE-DO', 'B-RIN-QUE-DO', 'BRIN-QU-E-DO'], correctAnswer: 'BRIN-QUE-DO' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra tem apenas UMA sílaba?', options: ['CASA', 'PÉ', 'GATO', 'MESA'], correctAnswer: 'PÉ' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Encontros Vocálicos',
          type: 'study',
          explanation: 'O Encontro Vocálico acontece quando duas ou mais VOGAIS aparecem juntas na palavra. Exemplo: pEIxe, cAItu, pÃO.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na palavra PAI, qual é o encontro vocálico?', options: ['PA', 'AI', 'PI', 'IA'], correctAnswer: 'AI' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual destas palavras TEM um encontro vocálico?', options: ['GATO', 'BOLO', 'CÉU', 'PATO'], correctAnswer: 'CÉU' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Na palavra CORAÇÃO, qual é o encontro das vogais?', options: ['CO', 'RA', 'ÇÃO', 'ÃO'], correctAnswer: 'ÃO' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Encontros Consonantais',
          type: 'study',
          explanation: 'O Encontro Consonantal é a junção de duas CONSOANTES na mesma palavra, sem vogal entre elas! Exemplo: BRa-ço, PLa-ne-ta.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na palavra PRATO, qual é o encontro consonantal?', options: ['PR', 'TR', 'PT', 'TO'], correctAnswer: 'PR' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual destas palavras tem um encontro consonantal?', options: ['CASA', 'LIVRO', 'SAPATO', 'BOLA'], correctAnswer: 'LIVRO' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Na palavra BLUSA, o encontro de consoantes é:', options: ['LU', 'SA', 'BL', 'US'], correctAnswer: 'BL' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Ortografia e Ordem Alfabética',
          type: 'study',
          explanation: 'Ordem alfabética é organizar as palavras seguindo a ordem do ABC. Se tivermos BOLA e ABELHA, ABELHA vem primeiro porque começa com A!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra vem primeiro no dicionário (ordem alfabética)?', options: ['GATO', 'FOCA', 'DADO', 'SAPO'], correctAnswer: 'DADO' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete a palavra com a ortografia correta: CA__ORRO', options: ['X', 'CH', 'SH', 'SS'], correctAnswer: 'CH' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Coloque na ordem alfabética: ZEBRA, MACACO, LEÃO.', options: ['LEÃO, MACACO, ZEBRA', 'MACACO, LEÃO, ZEBRA', 'ZEBRA, MACACO, LEÃO'], correctAnswer: 'LEÃO, MACACO, ZEBRA' }
          ]
        },
        {
          id: 'day-5',
          title: 'DIA 5 - Revisão',
          type: 'study',
          explanation: 'Revisando as sílabas, encontros de letrinhas e ordem do alfabeto.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A palavra FLORESTA tem um encontro de consoantes. Qual é?', options: ['FL', 'OR', 'TA', 'ES'], correctAnswer: 'FL' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra tem um encontro de vogais?', options: ['MESA', 'LEITE', 'SACOLA'], correctAnswer: 'LEITE' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é a separação correta de BORBOLETA?', options: ['BO-RBO-LE-TA', 'BOR-BO-LE-TA', 'BORB-O-LE-TA'], correctAnswer: 'BOR-BO-LE-TA' }
          ]
        },
        {
          id: 'day-6',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na palavra BALEIA, o encontro vocálico é:', options: ['BA', 'LE', 'EIA', 'IA'], correctAnswer: 'EIA' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra tem um encontro consonantal?', options: ['ESTRELA', 'MENINO', 'SAPATO'], correctAnswer: 'ESTRELA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Quantas sílabas tem a palavra TELEVISÃO?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Qual palavra vem primeiro na ordem alfabética?', options: ['SAPO', 'TARTARUGA', 'CACHORRO', 'GATO'], correctAnswer: 'CACHORRO' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Como separamos a palavra PLANETA?', options: ['PL-A-NE-TA', 'PLA-NE-TA', 'P-LA-NE-TA'], correctAnswer: 'PLA-NE-TA' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'O Mundo dos Substantivos',
      description: 'O que são substantivos? Masculino, Feminino, Singular e Plural!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Substantivos',
          type: 'study',
          explanation: 'Substantivo é a palavra que dá NOME a tudo: pessoas, animais, objetos e lugares. Exemplo: MENINO, CACHORRO, CIDADE.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas palavras é um substantivo (dá nome a algo)?', options: ['Correr', 'Bonito', 'Cadeira', 'Muito'], correctAnswer: 'Cadeira' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na frase "O pássaro voou", qual é o substantivo (nome do animal)?', options: ['O', 'pássaro', 'voou'], correctAnswer: 'pássaro' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é o substantivo próprio (nome de uma pessoa)?', options: ['Menina', 'Professora', 'Juliana', 'Aluna'], correctAnswer: 'Juliana' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Masculino e Feminino',
          type: 'study',
          explanation: 'Os substantivos podem ser masculinos (O GATO, UM MENINO) ou femininos (A GATA, UMA MENINA).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas palavras é FEMININA?', options: ['O sol', 'O carro', 'A lua', 'O mar'], correctAnswer: 'A lua' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o feminino de "O LEÃO"?', options: ['A LEAZINHA', 'A LEOA', 'A LEONA', 'A TIGRESA'], correctAnswer: 'A LEOA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Completar: "____ sapato e ____ bota".', options: ['O / A', 'A / O', 'OS / AS', 'UM / UMAS'], correctAnswer: 'O / A' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Singular e Plural',
          type: 'study',
          explanation: 'Singular: Apenas UM elemento (O livro). Plural: DOIS ou MAIS elementos (Os livros).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra está no PLURAL?', options: ['Caderno', 'Mochila', 'Lápis', 'Borrachas'], correctAnswer: 'Borrachas' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o plural de "O ANEL"?', options: ['OS ANELS', 'OS ANÉIS', 'AS ANELAS', 'OS ANELINHOS'], correctAnswer: 'OS ANÉIS' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Se "A FLOR" está no singular, como fica no plural?', options: ['AS FLORES', 'AS FLORS', 'OS FLORES', 'AS FLORZINHAS'], correctAnswer: 'AS FLORES' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Vamos revisar os Nomes, Masculino/Feminino e Singular/Plural!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A palavra "PROFESSORES" é:', options: ['Masculino e Singular', 'Masculino e Plural', 'Feminino e Plural'], correctAnswer: 'Masculino e Plural' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O feminino de ATOR é:', options: ['ATORA', 'ATRIZ', 'ATORZINHA'], correctAnswer: 'ATRIZ' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase está toda no plural?', options: ['As meninas brincam.', 'O menino corre.', 'A gata dorme.'], correctAnswer: 'As meninas brincam.' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra é um Substantivo?', options: ['Dançar', 'Alegre', 'Bicicleta', 'Lá'], correctAnswer: 'Bicicleta' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o feminino de HOMEM?', options: ['MULHER', 'HOMINHA', 'MENINA', 'SENHORA'], correctAnswer: 'MULHER' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra está no singular?', options: ['Carros', 'Árvores', 'Cachorro', 'Gatos'], correctAnswer: 'Cachorro' },
            { id: 'q4', type: 'multiple_choice', prompt: 'O plural de "O JORNAL" é:', options: ['OS JORNALS', 'OS JORNAIS', 'OS JORNALZINHOS'], correctAnswer: 'OS JORNAIS' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Na frase "Maria gosta de maçã", quem é o substantivo próprio?', options: ['gosta', 'maçã', 'de', 'Maria'], correctAnswer: 'Maria' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Ações e Qualidades',
      description: 'O que são Verbos e Adjetivos? Como formar frases completas!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Adjetivos (Qualidades)',
          type: 'study',
          explanation: 'O Adjetivo é a palavra que dá uma QUALIDADE ou CARACTERÍSTICA ao substantivo. Exemplo: O cachorro é BRAVO. O carro é AZUL.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "A maçã é doce", qual é o adjetivo (qualidade)?', options: ['A', 'maçã', 'é', 'doce'], correctAnswer: 'doce' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra é um adjetivo?', options: ['Mesa', 'Cadeira', 'Bonita', 'Livro'], correctAnswer: 'Bonita' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete com um adjetivo: "O menino estava muito..."', options: ['correr', 'feliz', 'parque', 'bola'], correctAnswer: 'feliz' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Verbos Básicos (Ações)',
          type: 'study',
          explanation: 'O Verbo é a palavra que mostra uma AÇÃO, algo que fazemos. Exemplos: PULAR, CORRER, FALAR, BRINCAR.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "O sapo pula no rio", qual é o verbo (a ação)?', options: ['O', 'sapo', 'pula', 'rio'], correctAnswer: 'pula' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual destas palavras é uma ação (verbo)?', options: ['Dormir', 'Cama', 'Lençol', 'Tarde'], correctAnswer: 'Dormir' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete com um verbo: "Eu _______ um livro ontem."?', options: ['bonito', 'li', 'papel', 'grande'], correctAnswer: 'li' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Produção de Frases',
          type: 'study',
          explanation: 'Uma frase completa tem: Quem faz a ação (Substantivo) + A ação (Verbo) + O resto da história! Lembre-se do Ponto Final!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Ordene a frase: "GOSTOSO / BOLO / O / ESTÁ".', options: ['O BOLO ESTÁ GOSTOSO.', 'ESTÁ BOLO O GOSTOSO.', 'GOSTOSO O ESTÁ BOLO.'], correctAnswer: 'O BOLO ESTÁ GOSTOSO.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete a frase para fazer sentido: "O passarinho _______ na árvore."', options: ['nada', 'canta', 'late', 'escreve'], correctAnswer: 'canta' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase está correta?', options: ['menina A pula corda.', 'A corda pula menina.', 'A menina pula corda.'], correctAnswer: 'A menina pula corda.' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Revisando as Ações (Verbos), Qualidades (Adjetivos) e Frases.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A palavra "RÁPIDO" é um:', options: ['Verbo (Ação)', 'Adjetivo (Qualidade)', 'Substantivo (Nome)'], correctAnswer: 'Adjetivo (Qualidade)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra "COMER" é um:', options: ['Verbo (Ação)', 'Adjetivo (Qualidade)', 'Substantivo (Nome)'], correctAnswer: 'Verbo (Ação)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Identifique o verbo em "O gato bebeu o leite."', options: ['O', 'gato', 'bebeu', 'leite'], correctAnswer: 'bebeu' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "A casa é grande", a palavra GRANDE é um:', options: ['Verbo', 'Adjetivo (Qualidade)', 'Substantivo'], correctAnswer: 'Adjetivo (Qualidade)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na frase "O menino correu rápido", a palavra CORREU é um:', options: ['Verbo (Ação)', 'Adjetivo', 'Nome Próprio'], correctAnswer: 'Verbo (Ação)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas palavras é um VERBO?', options: ['Lindo', 'Inteligente', 'Brincar', 'Verde'], correctAnswer: 'Brincar' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Ordene a frase: "BOLA / JOGA / PEDRO / A".', options: ['PEDRO JOGA A BOLA.', 'A JOGA PEDRO BOLA.', 'BOLA A PEDRO JOGA.'], correctAnswer: 'PEDRO JOGA A BOLA.' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Complete com um adjetivo: "O céu está..."', options: ['voando', 'azul', 'dormindo', 'pássaro'], correctAnswer: 'azul' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Lendo e Entendendo',
      description: 'Pontuação, pequenos textos e interpretação. Vamos praticar a leitura!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Pontuação (! e ?)',
          type: 'study',
          explanation: 'Usamos o Ponto de Interrogação (?) para PERGUNTAS. E o Ponto de Exclamação (!) para SUSTO, ALEGRIA ou GRITO!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual sinal usamos na frase "Que susto____"', options: ['? (Interrogação)', '! (Exclamação)', '. (Ponto final)'], correctAnswer: '! (Exclamação)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual sinal usamos na frase "Quantos anos você tem____"', options: ['? (Interrogação)', '! (Exclamação)', '. (Ponto final)'], correctAnswer: '? (Interrogação)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O sinal de Exclamação (!) demonstra:', options: ['Uma pergunta', 'Uma emoção forte (susto, alegria)', 'O fim de uma história comum'], correctAnswer: 'Uma emoção forte (susto, alegria)' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Lendo um Pequeno Texto',
          type: 'study',
          explanation: 'Leia o texto com atenção: "O cachorro Totó adora brincar com sua bola vermelha no quintal. Ele late de alegria!"',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o nome do cachorro?', options: ['Rex', 'Totó', 'Bolinha', 'Snoopy'], correctAnswer: 'Totó' },
            { id: 'q2', type: 'multiple_choice', prompt: 'De que cor é a bola do Totó?', options: ['Azul', 'Amarela', 'Verde', 'Vermelha'], correctAnswer: 'Vermelha' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Onde o Totó brinca?', options: ['Na rua', 'No parque', 'No quintal', 'Na praia'], correctAnswer: 'No quintal' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Interpretação',
          type: 'study',
          explanation: 'Leia: "A fada Bela voou até a floresta. Lá, ela encontrou um sapo triste e usou sua varinha para fazê-lo sorrir."',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Quem é Bela?', options: ['Uma bruxa', 'Uma fada', 'Uma princesa', 'Uma menina'], correctAnswer: 'Uma fada' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Quem a fada encontrou na floresta?', options: ['Um leão', 'Um príncipe', 'Um sapo triste', 'Um gnomo'], correctAnswer: 'Um sapo triste' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O que a fada usou para fazer o sapo sorrir?', options: ['Uma poção', 'Um doce', 'Uma varinha', 'Um feitiço'], correctAnswer: 'Uma varinha' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão de Leitura',
          type: 'study',
          explanation: 'Vamos revisar a leitura e as pontuações importantes!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Para mostrar que estou perguntando algo, eu uso:', options: ['O Ponto Final (.)', 'A Vírgula (,)', 'O Ponto de Interrogação (?)'], correctAnswer: 'O Ponto de Interrogação (?)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Leia: "João comeu o bolo inteiro!". O que ele comeu?', options: ['Uma maçã', 'O almoço', 'O bolo inteiro'], correctAnswer: 'O bolo inteiro' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Na frase "Que dia lindo!", a pessoa está demonstrando:', options: ['Tristeza', 'Admiração/Alegria', 'Uma dúvida'], correctAnswer: 'Admiração/Alegria' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Leia: "Ana foi ao mercado comprar maçã e banana." O que Ana comprou?', options: ['Uva e Pera', 'Maçã e Banana', 'Pão e Leite', 'Carne'], correctAnswer: 'Maçã e Banana' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual sinal usamos para fazer uma pergunta?', options: ['! (Exclamação)', '? (Interrogação)', '. (Ponto final)'], correctAnswer: '? (Interrogação)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual sinal usamos na frase "Parabéns____"', options: ['! (Exclamação)', '? (Interrogação)', ', (Vírgula)'], correctAnswer: '! (Exclamação)' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Leia: "O gato miou alto na telhado." Onde o gato miou?', options: ['Na rua', 'No sofá', 'No telhado', 'Na cama'], correctAnswer: 'No telhado' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Qual frase está pontuada corretamente como uma PERGUNTA?', options: ['Onde você mora!', 'Onde você mora.', 'Onde você mora?'], correctAnswer: 'Onde você mora?' }
          ]
        }
      ]
    }
  ],
  '3º Ano':`;

const newData = data.replace(regex, new2Ano);
fs.writeFileSync('src/data/portugueseCurriculum.ts', newData, 'utf8');

console.log("Updated portugueseCurriculum.ts successfully!");
