const fs = require('fs');

const data = fs.readFileSync('src/data/portugueseCurriculum.ts', 'utf8');

const regex = /'4º Ano':\s*\[[\s\S]*?\],\n  '5º Ano':/m;

const new4Ano = `'4º Ano': [
    {
      id: 'unit-1',
      title: 'Classes de Palavras',
      description: 'Vamos estudar os Artigos, Substantivos, Adjetivos, Numerais e Pronomes.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Artigos e Substantivos',
          type: 'study',
          explanation: 'Os Artigos acompanham os Substantivos. Podem ser definidos (o, a, os, as) ou indefinidos (um, uma, uns, umas).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o artigo DEFINIDO feminino no singular?', options: ['As', 'A', 'Uma', 'O'], correctAnswer: 'A' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na frase "Comprei UM livro", a palavra UM é:', options: ['Artigo indefinido', 'Artigo definido', 'Substantivo'], correctAnswer: 'Artigo indefinido' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Na frase "O cachorro latiu", qual é o substantivo?', options: ['O', 'cachorro', 'latiu'], correctAnswer: 'cachorro' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Adjetivos e Concordância Nominal',
          type: 'study',
          explanation: 'O Adjetivo (qualidade) deve concordar com o Substantivo em gênero (masculino/feminino) e número (singular/plural). Ex: Os meninos estudiosos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual frase está com a concordância CORRETA?', options: ['As menina bonita', 'As meninas bonitas', 'A meninas bonita'], correctAnswer: 'As meninas bonitas' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Se o carro é veloz e temos dois carros, eles são:', options: ['Carros veloz', 'Carros velozes', 'Carros velozs'], correctAnswer: 'Carros velozes' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Em "Meu tênis novo", a palavra NOVO é um:', options: ['Substantivo', 'Adjetivo', 'Artigo'], correctAnswer: 'Adjetivo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Numerais e Pronomes',
          type: 'study',
          explanation: 'Numerais indicam quantidade ou ordem (um, dez, primeiro, dobro). Pronomes substituem nomes (eu, eles, nós).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas palavras é um NUMERAL?', options: ['Nós', 'Três', 'Bola', 'Feliz'], correctAnswer: 'Três' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra "SEGUNDO" (ordem) é um:', options: ['Artigo', 'Numeral', 'Pronome'], correctAnswer: 'Numeral' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas palavras é um PRONOME?', options: ['Gato', 'Nós', 'Primeiro'], correctAnswer: 'Nós' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Revisando as classes: Artigos, Substantivos, Adjetivos, Pronomes e Numerais.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "A moça", a letra "A" é um:', options: ['Artigo', 'Adjetivo', 'Numeral'], correctAnswer: 'Artigo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Em "O dobro", a palavra "dobro" é:', options: ['Numeral', 'Substantivo', 'Verbo'], correctAnswer: 'Numeral' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Como fica a concordância correta?', options: ['Os gato preto', 'O gato pretos', 'Os gatos pretos'], correctAnswer: 'Os gatos pretos' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "UMA noite fria", a palavra UMA é:', options: ['Artigo definido', 'Artigo indefinido', 'Adjetivo'], correctAnswer: 'Artigo indefinido' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Em "As casas velhas", qual palavra é o adjetivo?', options: ['As', 'casas', 'velhas'], correctAnswer: 'velhas' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A palavra "DEZ" é um:', options: ['Numeral', 'Pronome', 'Artigo'], correctAnswer: 'Numeral' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Qual pronome substitui "O professor"?', options: ['Ele', 'Nós', 'Elas', 'Eu'], correctAnswer: 'Ele' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Qual a concordância certa?', options: ['A menina espertas', 'As meninas espertas', 'As menina esperta'], correctAnswer: 'As meninas espertas' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Verbos e Concordância Verbal',
      description: 'Como o verbo se adapta às pessoas e ao tempo.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Tempos Verbais',
          type: 'study',
          explanation: 'Verbo tem tempo: Presente (agora), Passado/Pretérito (ontem) e Futuro (amanhã). Ex: eu falo, eu falei, eu falarei.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A frase "Eles BRINCARÃO amanhã" está no:', options: ['Presente', 'Passado', 'Futuro'], correctAnswer: 'Futuro' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Eu COMI a salada". Qual o tempo do verbo?', options: ['Presente', 'Passado', 'Futuro'], correctAnswer: 'Passado' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Se hoje eu "CANTO", amanhã eu:', options: ['Cantava', 'Cantarei', 'Cantei'], correctAnswer: 'Cantarei' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Concordância Verbal',
          type: 'study',
          explanation: 'O verbo deve concordar com quem faz a ação. Se digo "EU" o verbo muda: Eu ando. Se digo "NÓS", o verbo muda: Nós andamos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Complete corretamente: "Nós ________ de maçã".', options: ['gosto', 'gostamos', 'gostam'], correctAnswer: 'gostamos' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete: "Eles ________ ao cinema ontem".', options: ['foi', 'fomos', 'foram'], correctAnswer: 'foram' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase está ERRADA?', options: ['Nós vai na festa.', 'Nós vamos à festa.', 'Eles vão à festa.'], correctAnswer: 'Nós vai na festa.' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Tipos de Verbos',
          type: 'study',
          explanation: 'Verbos podem indicar Ação (correr, pular), Estado (ser, estar, parecer) ou Fenômeno da Natureza (chover, nevar).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Choveu muito ontem". O verbo "choveu" indica:', options: ['Ação', 'Estado', 'Fenômeno da natureza'], correctAnswer: 'Fenômeno da natureza' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Eu ESTOU feliz". O verbo "estou" indica:', options: ['Ação', 'Estado', 'Fenômeno da natureza'], correctAnswer: 'Estado' },
            { id: 'q3', type: 'multiple_choice', prompt: '"O menino CORRE". O verbo "corre" indica:', options: ['Ação', 'Estado', 'Fenômeno da natureza'], correctAnswer: 'Ação' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Revisando Tempos, Concordância e Tipos de Verbos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A frase "Nós andaremos" está em qual tempo?', options: ['Passado', 'Futuro', 'Presente'], correctAnswer: 'Futuro' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete: "Ela ________ uma boa aluna".', options: ['é', 'somos', 'são'], correctAnswer: 'é' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase possui um verbo de Ação?', options: ['O cachorro latiu.', 'O céu está azul.', 'Ventou muito.'], correctAnswer: 'O cachorro latiu.' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Complete com o verbo no passado: "Eu ________ o dever." (Fazer)', options: ['faço', 'farei', 'fiz'], correctAnswer: 'fiz' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual a concordância certa?', options: ['Os pássaros voam.', 'Os pássaro voa.', 'Os pássaro voam.'], correctAnswer: 'Os pássaros voam.' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Se hoje ela "SORRI", ontem ela:', options: ['Sorrirá', 'Sorriu', 'Sorria'], correctAnswer: 'Sorriu' },
            { id: 'q4', type: 'multiple_choice', prompt: '"Nevará na serra". Esse verbo indica:', options: ['Ação', 'Fenômeno da natureza', 'Estado'], correctAnswer: 'Fenômeno da natureza' },
            { id: 'q5', type: 'multiple_choice', prompt: '"Eu sou legal". O verbo "sou" indica:', options: ['Estado', 'Ação'], correctAnswer: 'Estado' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Ortografia, Palavras e Pedaços',
      description: 'Sinônimos, Antônimos, Prefixos, Sufixos e Acentuação.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Sinônimos e Antônimos',
          type: 'study',
          explanation: 'Sinônimos: palavras com sentidos parecidos (Alegre/Feliz). Antônimos: palavras com sentidos opostos (Claro/Escuro).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o sinônimo (parecido) de INÍCIO?', options: ['Fim', 'Começo', 'Meio'], correctAnswer: 'Começo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o antônimo (oposto) de CHORAR?', options: ['Gritar', 'Sorrir', 'Falar'], correctAnswer: 'Sorrir' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Longe e Perto são:', options: ['Sinônimos', 'Antônimos'], correctAnswer: 'Antônimos' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Prefixos e Sufixos',
          type: 'study',
          explanation: 'Prefixo é o pedacinho que vem ANTES (INfeliz). Sufixo vem DEPOIS (felizMENTE).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na palavra DESfazer, o "DES" é um:', options: ['Prefixo (vem antes)', 'Sufixo (vem depois)'], correctAnswer: 'Prefixo (vem antes)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na palavra jornaLISTA, o "LISTA" é um:', options: ['Prefixo', 'Sufixo'], correctAnswer: 'Sufixo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Juntando o prefixo "IN" com a palavra "ÚTIL", temos:', options: ['Utilmente', 'Inútil', 'Inutilidade'], correctAnswer: 'Inútil' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Acentuação Básica',
          type: 'study',
          explanation: 'O Acento Agudo (´) faz o som abrir (ex: café, árvore). O Acento Circunflexo (^) faz o som ficar fechado (ex: você, lâmpada).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na palavra VOCÊ, qual acento é usado?', options: ['Agudo (´)', 'Circunflexo (^)'], correctAnswer: 'Circunflexo (^)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra precisa de acento agudo?', options: ['Chapeu', 'Carro', 'Bolo'], correctAnswer: 'Chapeu' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A palavra ÁGUA usa qual acento?', options: ['Circunflexo (^)', 'Agudo (´)'], correctAnswer: 'Agudo (´)' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Revisando sinônimos, antônimos, pedaços de palavras e acentos!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra usa sufixo?', options: ['Desfazer', 'Rapidamente', 'Infeliz'], correctAnswer: 'Rapidamente' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Gordo e magro são:', options: ['Sinônimos', 'Antônimos'], correctAnswer: 'Antônimos' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual acento a palavra RELÓGIO tem?', options: ['Agudo (´)', 'Circunflexo (^)'], correctAnswer: 'Agudo (´)' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O sinônimo de CALMO é:', options: ['Agitado', 'Bravo', 'Tranquilo'], correctAnswer: 'Tranquilo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na palavra DENTISTA, "ISTA" é:', options: ['Prefixo', 'Sufixo'], correctAnswer: 'Sufixo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A palavra PÊSSEGO leva qual acento?', options: ['Agudo', 'Circunflexo'], correctAnswer: 'Circunflexo' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Adicionando o prefixo DES à palavra LIGAR, formamos:', options: ['Ligarmente', 'Ligardes', 'Desligar'], correctAnswer: 'Desligar' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Acento agudo faz o som ficar:', options: ['Aberto (ex: pé)', 'Fechado (ex: avô)'], correctAnswer: 'Aberto (ex: pé)' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'O Mundo dos Textos',
      description: 'Gêneros textuais, interpretação e o uso avançado da pontuação.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Gêneros Textuais',
          type: 'study',
          explanation: 'Um texto pode ser uma RECEITA (ensina a fazer comida), uma NOTÍCIA (informa algo) ou um BILHETE (aviso curto).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Um texto que ensina a fazer um bolo é:', options: ['Um poema', 'Uma receita', 'Uma notícia'], correctAnswer: 'Uma receita' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Um texto curto escrito para avisar a mãe que você foi brincar é um:', options: ['Bilhete', 'Conto de fadas', 'Receita'], correctAnswer: 'Bilhete' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual texto informa acontecimentos reais do mundo?', options: ['Notícia', 'Piada', 'Lenda'], correctAnswer: 'Notícia' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Pontuação (Diálogo)',
          type: 'study',
          explanation: 'Quando alguém vai falar no texto, usamos DOIS PONTOS (:) e na linha de baixo usamos o TRAVESSÃO (—) antes da fala.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O sinal de DOIS PONTOS (:) serve para:', options: ['Fazer uma pergunta', 'Avisar que alguém vai falar', 'Terminar o texto'], correctAnswer: 'Avisar que alguém vai falar' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O TRAVESSÃO (—) é usado:', options: ['Antes da fala de um personagem', 'No fim de uma pergunta', 'No lugar da vírgula'], correctAnswer: 'Antes da fala de um personagem' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O que falta? "A menina disse___ — Olá!"', options: ['Vírgula (,)', 'Ponto Final (.)', 'Dois pontos (:)'], correctAnswer: 'Dois pontos (:)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Interpretação',
          type: 'study',
          explanation: 'Leia: "Mãe, fui jogar bola na casa do Leo. Volto às 18h. Beijos, Lucas." (Isto é um bilhete!)',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Quem escreveu o bilhete?', options: ['A mãe', 'Leo', 'Lucas'], correctAnswer: 'Lucas' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Para onde Lucas foi?', options: ['Para a escola', 'Para a casa do Leo', 'Para o cinema'], correctAnswer: 'Para a casa do Leo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Que horas ele vai voltar?', options: ['Às 18h', 'Às 15h', 'Às 20h'], correctAnswer: 'Às 18h' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Produção de Texto (Parágrafos)',
          type: 'study',
          explanation: 'Ao escrever um texto, divida a história em: 1) Início, 2) Meio e 3) Fim. Cada parte pode ser um parágrafo diferente!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A primeira parte do texto é o:', options: ['Meio / Desenvolvimento', 'Fim / Conclusão', 'Início / Introdução'], correctAnswer: 'Início / Introdução' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Como as falas devem ser marcadas?', options: ['Com vírgulas', 'Com travessão', 'Com ponto de interrogação'], correctAnswer: 'Com travessão' },
            { id: 'q3', type: 'multiple_choice', prompt: 'No final do texto, que sinal usamos para encerrar a história?', options: ['Ponto Final (.)', 'Dois pontos (:)', 'Travessão (—)'], correctAnswer: 'Ponto Final (.)' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual gênero textual serve para nos ensinar a preparar um prato?', options: ['Receita', 'Bilhete', 'Notícia', 'Bula'], correctAnswer: 'Receita' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O travessão (—) é usado principalmente para:', options: ['Finalizar frases', 'Indicar a fala de personagens', 'Separar palavras'], correctAnswer: 'Indicar a fala de personagens' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Leia a manchete: "Chuvas fortes alagam a cidade." Isso é parte de qual texto?', options: ['Receita', 'Poema', 'Notícia', 'Bilhete'], correctAnswer: 'Notícia' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Antes de um travessão, no fim da frase do narrador, usamos:', options: ['Vírgula', 'Ponto Final', 'Dois Pontos (:)'], correctAnswer: 'Dois Pontos (:)' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Um bom texto tem Início, Meio e...', options: ['Fim (Conclusão)', 'Título apenas', 'Nenhum final'], correctAnswer: 'Fim (Conclusão)' }
          ]
        }
      ]
    }
  ],
  '5º Ano':`;

const newData = data.replace(regex, new4Ano);
fs.writeFileSync('src/data/portugueseCurriculum.ts', newData, 'utf8');

console.log("Updated portugueseCurriculum.ts for 4º Ano successfully!");
