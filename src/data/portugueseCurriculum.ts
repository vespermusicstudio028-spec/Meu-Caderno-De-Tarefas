import { PortugueseUnit } from '../types';

export const portugueseCurriculum: Record<string, PortugueseUnit[]> = {
  '1º Ano': [
    {
      id: 'unit-1',
      title: 'O Alfabeto Mágico',
      description: 'Vamos aprender as letras, vogais, consoantes e a ordem do alfabeto.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - O Alfabeto',
          type: 'study',
          explanation: 'O nosso alfabeto tem 26 letrinhas mágicas. Com elas, podemos escrever qualquer palavra do mundo!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Quantas letras tem o nosso alfabeto?', options: ['10 letras', '26 letras', '5 letras', '100 letras'], correctAnswer: '26 letras' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é a primeira letra do alfabeto?', options: ['B', 'C', 'A', 'Z'], correctAnswer: 'A' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é a última letra do alfabeto?', options: ['X', 'Y', 'W', 'Z'], correctAnswer: 'Z' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - As Vogais',
          type: 'study',
          explanation: 'As vogais são 5 letrinhas muito especiais: A - E - I - O - U. Elas estão presentes em quase todas as palavras!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas letras é uma vogal?', options: ['B', 'A', 'C', 'D'], correctAnswer: 'A' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra ABELHA começa com qual vogal?', options: ['O', 'U', 'A', 'E'], correctAnswer: 'A' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Quantas são as vogais?', options: ['3', '4', '5', '10'], correctAnswer: '5' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - As Consoantes',
          type: 'study',
          explanation: 'As outras letras do alfabeto que não são vogais chamam-se CONSOANTES. Exemplos: B, C, D, F, G...',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas letras é uma consoante?', options: ['A', 'E', 'B', 'O'], correctAnswer: 'B' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra BOLA começa com qual letra?', options: ['B', 'V', 'M', 'P'], correctAnswer: 'B' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A letra M é uma:', options: ['Vogal', 'Consoante', 'Número', 'Cor'], correctAnswer: 'Consoante' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Ordem Alfabética',
          type: 'study',
          explanation: 'As letras do alfabeto têm uma ordem certa: A, B, C, D, E... Quando arrumamos as palavras seguindo essa ordem das letras iniciais, chamamos de Ordem Alfabética!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual letra vem logo depois do A?', options: ['C', 'D', 'B', 'E'], correctAnswer: 'B' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra vem primeiro na ordem do alfabeto?', options: ['BOLA', 'ABELHA', 'CASA', 'DADO'], correctAnswer: 'ABELHA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas palavras começa com a letra C?', options: ['GATO', 'PATO', 'CASA', 'FADA'], correctAnswer: 'CASA' }
          ]
        },
        {
          id: 'day-5',
          title: 'DIA 5 - Revisão',
          type: 'study',
          explanation: 'Hoje vamos revisar as vogais, consoantes e a ordem alfabética para a prova de amanhã!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A letra "O" é uma:', options: ['Vogal', 'Consoante'], correctAnswer: 'Vogal' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A letra "P" é uma:', options: ['Vogal', 'Consoante'], correctAnswer: 'Consoante' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Quem vem antes do B?', options: ['C', 'A', 'D', 'E'], correctAnswer: 'A' }
          ]
        },
        {
          id: 'day-6',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas é uma vogal?', options: ['P', 'O', 'T', 'R'], correctAnswer: 'O' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual destas é uma consoante?', options: ['A', 'U', 'S', 'E'], correctAnswer: 'S' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A palavra UVA começa com:', options: ['Vogal', 'Consoante'], correctAnswer: 'Vogal' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Qual animal começa com a letra G?', options: ['CACHORRO', 'GATO', 'PATO', 'SAPO'], correctAnswer: 'GATO' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Qual palavra vem primeiro na ordem alfabética?', options: ['ZEBRA', 'FOCA', 'ARANHA', 'MACACO'], correctAnswer: 'ARANHA' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Primeiras Palavras',
      description: 'Vamos formar sílabas, separar pedacinhos das palavras e ler nossas primeiras palavras!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Formação de Palavras',
          type: 'study',
          explanation: 'Quando juntamos consoantes e vogais, criamos pedacinhos mágicos! Se juntarmos M com A faz MA. E se juntarmos C com A faz CA. MACA!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Juntando B + A, fazemos:', options: ['BE', 'BA', 'BO', 'BU'], correctAnswer: 'BA' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Se juntar P + A + T + O, formamos qual palavra?', options: ['GATO', 'PATO', 'MATO', 'RATO'], correctAnswer: 'PATO' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual letrinha falta em B_LA?', options: ['O', 'I', 'U', 'E'], correctAnswer: 'O' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Sílabas Simples',
          type: 'study',
          explanation: 'Esses pedacinhos mágicos se chamam SÍLABAS. Por exemplo, a família do B é: BA - BE - BI - BO - BU.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é a sílaba que começa a palavra BOLO?', options: ['BA', 'BE', 'BO', 'BU'], correctAnswer: 'BO' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual sílaba completa a palavra _CO? (Macaco)', options: ['CA', 'MA', 'TA', 'PA'], correctAnswer: 'MA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra começa com a sílaba FA?', options: ['FOGO', 'FADA', 'FITA', 'FOCA'], correctAnswer: 'FADA' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Separação de Sílabas',
          type: 'study',
          explanation: 'Podemos contar as sílabas batendo palmas! CA-SA (2 palmas = 2 sílabas). MA-CA-CO (3 palmas = 3 sílabas).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'BOLO tem quantas sílabas?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Como separamos a palavra CASA?', options: ['CA-SA', 'C-ASA', 'CAS-A', 'C-A-S-A'], correctAnswer: 'CA-SA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'SAPATO tem quantas sílabas (quantas vezes batemos palmas)?', options: ['1', '2', '3', '4'], correctAnswer: '3' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Leitura de Palavras',
          type: 'study',
          explanation: 'Agora que você conhece as sílabas, vamos ler! Junte as sílabas devagar.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Leia e descubra: BO + LA =', options: ['BALA', 'BOLO', 'BOTA', 'BOLA'], correctAnswer: 'BOLA' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Leia: CA + VA + LO', options: ['CAMELO', 'CAVALO', 'CABELO', 'CAVALEIRO'], correctAnswer: 'CAVALO' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Que palavra é essa: S + A + P + O', options: ['SUCO', 'SOPA', 'SAPO', 'SACO'], correctAnswer: 'SAPO' }
          ]
        },
        {
          id: 'day-5',
          title: 'DIA 5 - Revisão',
          type: 'study',
          explanation: 'Vamos revisar as sílabas e as palavras!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas palavras tem 2 sílabas?', options: ['PÉ', 'GATO', 'MACACO', 'ELEFANTE'], correctAnswer: 'GATO' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Juntando C + A formamos:', options: ['CO', 'CA', 'CU', 'CE'], correctAnswer: 'CA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra começa com LU?', options: ['LATA', 'LOBO', 'LUA', 'LIXO'], correctAnswer: 'LUA' }
          ]
        },
        {
          id: 'day-6',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Quantas sílabas tem a palavra BANANA?', options: ['2', '3', '4', '1'], correctAnswer: '3' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Leia as sílabas: BO + NE + CA', options: ['BOLA', 'BONÉ', 'BONECA', 'BOCA'], correctAnswer: 'BONECA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Como se separa a palavra PATO?', options: ['PA-TO', 'P-ATO', 'PAT-O', 'P-A-T-O'], correctAnswer: 'PA-TO' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Qual palavra começa com a mesma sílaba de GATO?', options: ['GALO', 'GOTA', 'GELO', 'GULA'], correctAnswer: 'GALO' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Juntando F + O, fazemos:', options: ['FA', 'FE', 'FI', 'FO'], correctAnswer: 'FO' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'O Mundo dos Nomes',
      description: 'Aprendendo sobre nomes próprios, masculino, feminino, singular e plural!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Nomes Próprios',
          type: 'study',
          explanation: 'Nomes de pessoas, cidades e países são muito importantes! Eles são chamados de NOMES PRÓPRIOS e sempre começam com Letra Maiúscula.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destes é um nome de pessoa?', options: ['Cachorro', 'Maria', 'Mesa', 'Cadeira'], correctAnswer: 'Maria' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Como devemos escrever o nome de uma cidade?', options: ['Com letra minúscula', 'Com letra maiúscula'], correctAnswer: 'Com letra maiúscula' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra deve ser escrita com Letra Maiúscula?', options: ['gato', 'brasil', 'livro', 'bola'], correctAnswer: 'brasil' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Masculino e Feminino',
          type: 'study',
          explanation: 'As palavras podem ser meninos ou meninas! Antes das palavras masculinas, usamos "O" (o menino). Antes das femininas, usamos "A" (a menina).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra usamos para completar: ___ cachorro.', options: ['A', 'O', 'OS', 'AS'], correctAnswer: 'O' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O feminino de GATO é:', options: ['GATOS', 'GATÃO', 'GATINHO', 'GATA'], correctAnswer: 'GATA' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra é feminina?', options: ['O sol', 'O menino', 'A boneca', 'O carro'], correctAnswer: 'A boneca' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Singular e Plural',
          type: 'study',
          explanation: 'Singular é quando temos apenas UM. Plural é quando temos DOIS OU MAIS. No plural, geralmente colocamos a letrinha "S" no final! (O gato -> Os gatos).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Se eu tenho mais de uma bola, eu digo que tenho várias:', options: ['Bola', 'Bolas', 'Bolinha', 'Bolão'], correctAnswer: 'Bolas' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra "MENINOS" está no:', options: ['Singular (só um)', 'Plural (vários)'], correctAnswer: 'Plural (vários)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é o plural de "O PATO"?', options: ['A PATA', 'O PATINHO', 'OS PATOS', 'O PATÃO'], correctAnswer: 'OS PATOS' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Vamos treinar um pouco mais sobre nomes, meninos, meninas, um e muitos!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o feminino de MENINO?', options: ['Meninos', 'Menina', 'Meninão', 'Homem'], correctAnswer: 'Menina' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O plural de CASA é:', options: ['CASINHA', 'CASÃO', 'CASAS', 'CASA'], correctAnswer: 'CASAS' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Pedro é um nome:', options: ['De animal', 'Próprio de pessoa', 'De brinquedo', 'Comum'], correctAnswer: 'Próprio de pessoa' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destes é um Nome Próprio (nome de pessoa ou lugar)?', options: ['bola', 'lápis', 'São Paulo', 'cachorro'], correctAnswer: 'São Paulo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete a frase: ___ menina gosta de brincar.', options: ['O', 'A', 'OS', 'UM'], correctAnswer: 'A' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra está no PLURAL (mais de um)?', options: ['Gato', 'Mesa', 'Sapatos', 'Cadeira'], correctAnswer: 'Sapatos' },
            { id: 'q4', type: 'multiple_choice', prompt: 'O feminino de PATO é:', options: ['Patinho', 'Pata', 'Patarana', 'Patona'], correctAnswer: 'Pata' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A palavra CARROS está no:', options: ['Masculino e Plural', 'Feminino e Singular', 'Feminino e Plural', 'Masculino e Singular'], correctAnswer: 'Masculino e Plural' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Frases e Textinhos',
      description: 'Agora vamos formar frases, usar os sinais de pontuação e ler pequenos textos!',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Frases Simples',
          type: 'study',
          explanation: 'Uma frase é um conjunto de palavras que conta alguma coisa. Ela sempre começa com Letra Maiúscula! Exemplo: "O gato bebe leite."',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual opção abaixo é uma FRASE completa?', options: ['A menina', 'A menina gosta de brincar.', 'Gosta de', 'Brincar menina'], correctAnswer: 'A menina gosta de brincar.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Como toda frase deve começar?', options: ['Com letra minúscula', 'Com letra colorida', 'Com letra maiúscula', 'Com número'], correctAnswer: 'Com letra maiúscula' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Ordene as palavras: "CORRE / O / CACHORRO".', options: ['CORRE O CACHORRO.', 'O CACHORRO CORRE.', 'CACHORRO O CORRE.', 'O CORRE CACHORRO.'], correctAnswer: 'O CACHORRO CORRE.' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Pontuação Básica',
          type: 'study',
          explanation: 'No final da frase precisamos colocar um sinal! Usamos o PONTO FINAL (.) para terminar uma ideia. E o PONTO DE INTERROGAÇÃO (?) para fazer uma pergunta!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Para fazer uma PERGUNTA, qual sinal usamos no final da frase?', options: ['Ponto Final (.)', 'Vírgula (,)', 'Ponto de Interrogação (?)', 'Traço (-)'], correctAnswer: 'Ponto de Interrogação (?)' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Você gosta de maçã" — Qual sinal está faltando no final?', options: ['. (Ponto Final)', '? (Ponto de Interrogação)', ', (Vírgula)', '! (Ponto de Exclamação)'], correctAnswer: '? (Ponto de Interrogação)' },
            { id: 'q3', type: 'multiple_choice', prompt: '"O menino foi dormir" — Qual sinal usamos no final?', options: ['. (Ponto Final)', '? (Ponto de Interrogação)'], correctAnswer: '. (Ponto Final)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Lendo um Textinho',
          type: 'study',
          explanation: 'Leia com atenção: "O PATO NADA NO LAGO. ELE É MUITO RÁPIDO." Isso é um pequeno texto!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Onde o pato nada?', options: ['No rio', 'No mar', 'No lago', 'Na piscina'], correctAnswer: 'No lago' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Como o pato é?', options: ['Muito devagar', 'Muito rápido', 'Muito preguiçoso', 'Muito dorminhoco'], correctAnswer: 'Muito rápido' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Quantas frases tem o textinho do pato?', options: ['1 frase', '2 frases', '3 frases', 'Nenhuma frase'], correctAnswer: '2 frases' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Revisando as frases, as perguntas e os textinhos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual frase está fazendo uma pergunta?', options: ['O bolo é bom.', 'Que horas são?', 'A bola rolou.'], correctAnswer: 'Que horas são?' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Ordene a frase: "GOSTA / MARIA / BOLO / DE".', options: ['MARIA BOLO DE GOSTA.', 'BOLO DE MARIA GOSTA.', 'MARIA GOSTA DE BOLO.', 'GOSTA MARIA BOLO DE.'], correctAnswer: 'MARIA GOSTA DE BOLO.' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O final da frase sempre tem um:', options: ['Sinal de pontuação', 'Número', 'Desenho'], correctAnswer: 'Sinal de pontuação' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual sinal usamos para fazer uma pergunta?', options: ['. (Ponto final)', '? (Ponto de Interrogação)', ', (Vírgula)'], correctAnswer: '? (Ponto de Interrogação)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete a frase: "O cachorro..."', options: ['...bebe leite.', '...late muito.', '...voa alto.', '...bota ovo.'], correctAnswer: '...late muito.' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A frase "Eu gosto de brincar" deve terminar com qual sinal?', options: ['Ponto de Interrogação (?)', 'Ponto Final (.)'], correctAnswer: 'Ponto Final (.)' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Leia: "A vaca dá leite. O leite é gostoso." Quantas frases tem o texto?', options: ['1', '2', '3', '4'], correctAnswer: '2' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Toda frase deve começar com:', options: ['Letra maiúscula', 'Letra minúscula', 'Letra colorida', 'Um desenho'], correctAnswer: 'Letra maiúscula' }
          ]
        }
      ]
    }
  ],
  '2º Ano': [
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
  '3º Ano': [
    {
      id: 'unit-1',
      title: 'O Mundo dos Substantivos',
      description: 'Diferenciando substantivos próprios e comuns, masculino e feminino, singular e plural.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Próprio e Comum',
          type: 'study',
          explanation: 'Substantivo Comum dá nome a coisas e animais (cachorro, cidade). Substantivo Próprio dá nome específico e usa Letra Maiúscula (Rex, Brasil).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas palavras é um Substantivo Próprio?', options: ['menino', 'gato', 'Pedro', 'escola'], correctAnswer: 'Pedro' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual destas palavras é um Substantivo Comum?', options: ['Brasil', 'caneta', 'Maria', 'São Paulo'], correctAnswer: 'caneta' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Os Substantivos Próprios sempre começam com:', options: ['Letra minúscula', 'Letra maiúscula', 'Vogal', 'Consoante'], correctAnswer: 'Letra maiúscula' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Masculino e Feminino',
          type: 'study',
          explanation: 'Substantivos têm gênero. Masculino (usamos O, OS, UM) e Feminino (usamos A, AS, UMA). Ex: O menino, A menina.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra está no feminino?', options: ['O sol', 'Um relógio', 'A estrela', 'Os carros'], correctAnswer: 'A estrela' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O feminino de "o herói" é:', options: ['a heroína', 'a heróia', 'a mulher-herói'], correctAnswer: 'a heroína' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Selecione o artigo correto: "___ leão e ___ leoa."', options: ['O / A', 'A / O', 'UM / UM'], correctAnswer: 'O / A' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Singular e Plural',
          type: 'study',
          explanation: 'Singular indica apenas um elemento. Plural indica mais de um. Cuidado com terminações! (Ex: luz -> luzes / cão -> cães).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o plural de "o papel"?', options: ['os papéis', 'os papels', 'os papelos'], correctAnswer: 'os papéis' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra está no singular?', options: ['pássaros', 'coração', 'animais', 'luzes'], correctAnswer: 'coração' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O plural de "flor" é:', options: ['flors', 'flores', 'floriais'], correctAnswer: 'flores' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão de Substantivos',
          type: 'study',
          explanation: 'Vamos revisar o que são substantivos comuns, próprios, gêneros e números!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A palavra "PORTUGAL" é:', options: ['Substantivo Comum', 'Substantivo Próprio'], correctAnswer: 'Substantivo Próprio' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o plural de "O ANEL"?', options: ['Os anels', 'Os anéis', 'As anelas'], correctAnswer: 'Os anéis' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O feminino de PRÍNCIPE é:', options: ['Princesa', 'Principa', 'Rainha'], correctAnswer: 'Princesa' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O nome "Lucas" é um:', options: ['Substantivo comum', 'Substantivo próprio', 'Adjetivo'], correctAnswer: 'Substantivo próprio' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O feminino de "o ator" é:', options: ['A atora', 'A atriz', 'A autora'], correctAnswer: 'A atriz' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra está no plural?', options: ['Gato', 'Cachorro', 'Jornais', 'Mãe'], correctAnswer: 'Jornais' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Qual é o plural de "CORAÇÃO"?', options: ['Coraçãos', 'Corações', 'Coraçães'], correctAnswer: 'Corações' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A palavra "cidade" é um:', options: ['Substantivo Comum', 'Substantivo Próprio'], correctAnswer: 'Substantivo Comum' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Adjetivos, Sinônimos e Antônimos',
      description: 'Como caracterizar palavras e descobrir palavras com significados iguais ou opostos.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Adjetivos',
          type: 'study',
          explanation: 'Adjetivos são palavras que dão características e qualidades aos substantivos. Exemplo: menino INTELIGENTE, casa GRANDE.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "O cachorro é brincalhão", qual é o adjetivo?', options: ['O', 'cachorro', 'é', 'brincalhão'], correctAnswer: 'brincalhão' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra é um adjetivo (qualidade)?', options: ['Mesa', 'Lindo', 'Carro', 'Correr'], correctAnswer: 'Lindo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete com um adjetivo: "A maçã é muito ____"', options: ['doce', 'pássaro', 'mesa'], correctAnswer: 'doce' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Sinônimos',
          type: 'study',
          explanation: 'Sinônimos são palavras diferentes, mas que têm significados IGUAIS ou muito parecidos. Ex: Bonito e Belo; Feliz e Alegre.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o sinônimo (significado parecido) de ALEGRE?', options: ['Triste', 'Feliz', 'Bravo'], correctAnswer: 'Feliz' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra é sinônima de RÁPIDO?', options: ['Lento', 'Veloz', 'Pesado'], correctAnswer: 'Veloz' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O sinônimo de INÍCIO é:', options: ['Fim', 'Meio', 'Começo'], correctAnswer: 'Começo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Antônimos',
          type: 'study',
          explanation: 'Antônimos são palavras com significados OPOSTOS (contrários). Exemplo: Claro e Escuro; Quente e Frio.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o antônimo (contrário) de BOM?', options: ['Mau', 'Ótimo', 'Legal'], correctAnswer: 'Mau' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O antônimo de ALTO é:', options: ['Grande', 'Baixo', 'Gordo'], correctAnswer: 'Baixo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é o antônimo de CHORAR?', options: ['Sorrir', 'Gritar', 'Correr'], correctAnswer: 'Sorrir' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão',
          type: 'study',
          explanation: 'Revisando as características (adjetivos), os parecidos (sinônimos) e os contrários (antônimos).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Longe e Perto são palavras:', options: ['Sinônimas (parecidas)', 'Antônimas (contrárias)'], correctAnswer: 'Antônimas (contrárias)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o sinônimo de GRANDE?', options: ['Pequeno', 'Enorme', 'Feio'], correctAnswer: 'Enorme' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Identifique o adjetivo em: "A lua brilhante".', options: ['A', 'lua', 'brilhante'], correctAnswer: 'brilhante' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "O leão é feroz", qual palavra é o adjetivo?', options: ['leão', 'é', 'feroz'], correctAnswer: 'feroz' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o sinônimo de TRANQUILO?', options: ['Calmo', 'Agitado', 'Nervoso', 'Bravo'], correctAnswer: 'Calmo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é o antônimo de RICO?', options: ['Milionário', 'Pobre', 'Feliz', 'Baixo'], correctAnswer: 'Pobre' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Gordo e Magro são:', options: ['Sinônimos', 'Antônimos'], correctAnswer: 'Antônimos' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Qual destas palavras NÃO é um adjetivo?', options: ['Azul', 'Correr', 'Inteligente', 'Rápido'], correctAnswer: 'Correr' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Verbos, Tempos Verbais e Pronomes',
      description: 'As ações no passado, presente e futuro, e o uso de pronomes para substituir nomes.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Pronomes Básicos',
          type: 'study',
          explanation: 'Pronomes substituem nomes para não repetirmos! Ao invés de "Maria foi", dizemos "ELA foi". Os pronomes são: EU, TU, ELE/ELA, NÓS, VÓS, ELES/ELAS.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual pronome substitui "João" na frase "João é legal"?', options: ['Ele', 'Nós', 'Ela'], correctAnswer: 'Ele' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual pronome substitui "Ana e eu" em "Ana e eu brincamos"?', options: ['Eles', 'Nós', 'Vós'], correctAnswer: 'Nós' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete: "___ gosto de estudar."?', options: ['Eu', 'Nós', 'Ele'], correctAnswer: 'Eu' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Verbos Básicos',
          type: 'study',
          explanation: 'Verbo indica AÇÃO (correr), ESTADO (ser/estar) ou FENÔMENO DA NATUREZA (chover).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual destas palavras é um VERBO de ação?', options: ['Chuva', 'Pular', 'Cadeira'], correctAnswer: 'Pular' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na frase "O sol brilha", qual é o verbo?', options: ['O', 'sol', 'brilha'], correctAnswer: 'brilha' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra indica um fenômeno da natureza?', options: ['Choveu', 'Correu', 'Sorriu'], correctAnswer: 'Choveu' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Tempos Verbais (Ontem, Hoje, Amanhã)',
          type: 'study',
          explanation: 'Os verbos mudam no tempo: PRESENTE (agora), PASSADO/Pretérito (ontem) e FUTURO (amanhã). Ex: Eu ando (Presente), Eu andei (Passado), Eu andarei (Futuro).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A frase "Eu JOGUEI bola" está em qual tempo?', options: ['Presente (hoje)', 'Passado (ontem)', 'Futuro (amanhã)'], correctAnswer: 'Passado (ontem)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A frase "Ela COMERÁ a maçã" está no:', options: ['Presente', 'Passado', 'Futuro'], correctAnswer: 'Futuro' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual verbo está no PRESENTE?', options: ['Estudei', 'Estudo', 'Estudarei'], correctAnswer: 'Estudo' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão de Verbos e Pronomes',
          type: 'study',
          explanation: 'Revisando as ações no tempo e os pronomes que substituem os nomes!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Complete: "Nós _______ no parque ontem." (Passado)', options: ['brincamos', 'brincaremos', 'brincam'], correctAnswer: 'brincamos' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual pronome substitui "As meninas"?', options: ['Nós', 'Elas', 'Eles'], correctAnswer: 'Elas' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Choveu muito" é um verbo que indica:', options: ['Ação', 'Fenômeno da natureza', 'Estado'], correctAnswer: 'Fenômeno da natureza' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual pronome substitui "Pedro e Tiago"?', options: ['Nós', 'Elas', 'Eles', 'Vós'], correctAnswer: 'Eles' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na frase "Eu dormi cedo", o verbo "dormi" está no:', options: ['Presente', 'Passado', 'Futuro'], correctAnswer: 'Passado' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas palavras é um VERBO?', options: ['Viajar', 'Viagem', 'Viajante', 'Bela'], correctAnswer: 'Viajar' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Se hoje eu "CORRO", amanhã eu:', options: ['Corria', 'Correrei', 'Corri', 'Correndo'], correctAnswer: 'Correrei' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Complete: "___ estamos muito felizes!"', options: ['Nós', 'Eu', 'Eles', 'Ele'], correctAnswer: 'Nós' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Estrutura e Produção de Texto',
      description: 'Como organizar parágrafos, frases, usar a pontuação e cuidar da ortografia.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Parágrafo e Estrutura',
          type: 'study',
          explanation: 'Um texto é dividido em blocos chamados PARÁGRAFOS. Todo parágrafo começa com letra maiúscula e um pequeno recuo (espaço) na margem.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Todo parágrafo deve começar com:', options: ['Letra minúscula', 'Letra maiúscula', 'Uma vírgula'], correctAnswer: 'Letra maiúscula' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O que colocamos no início de um novo parágrafo?', options: ['Um desenho', 'Um recuo (espaço na margem)', 'Um ponto de interrogação'], correctAnswer: 'Um recuo (espaço na margem)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Um texto bem organizado é dividido em blocos chamados de:', options: ['Sílabas', 'Parágrafos', 'Verbos'], correctAnswer: 'Parágrafos' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Pontuação (Vírgula e Ponto)',
          type: 'study',
          explanation: 'Usamos a VÍRGULA (,) para dar uma pequena pausa ou separar itens ("Fui à feira, comprei uva, maçã e pera"). O Ponto Final (.) encerra o pensamento.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual sinal usamos para dar uma pequena pausa e separar itens?', options: ['Ponto Final (.)', 'Ponto de Interrogação (?)', 'Vírgula (,)'], correctAnswer: 'Vírgula (,)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O Ponto Final é usado para:', options: ['Fazer pergunta', 'Terminar uma frase afirmativa', 'Indicar susto'], correctAnswer: 'Terminar uma frase afirmativa' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete: "Eu gosto de azul ___ amarelo e vermelho."', options: [', (vírgula)', '? (interrogação)', '! (exclamação)'], correctAnswer: ', (vírgula)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Ortografia',
          type: 'study',
          explanation: 'Algumas palavras nos confundem! Ex: SS ou Ç? Lembre-se: MASSA usa SS, MAÇÃ usa Ç. Dica: Cedilha nunca começa palavra!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra está escrita CORRETAMENTE?', options: ['Paçarinho', 'Passarinho', 'Pazarino'], correctAnswer: 'Passarinho' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete a palavra: CABE___A', options: ['SS', 'Ç', 'C', 'S'], correctAnswer: 'Ç' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra está escrita de forma ERRADA?', options: ['Cenoura', 'Çenoura', 'Cebola'], correctAnswer: 'Çenoura' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Interpretação e Revisão',
          type: 'study',
          explanation: 'Leia: "A raposa estava com muita fome. Ela viu uvas maduras, mas não conseguiu alcançar e disse que estavam verdes." Por que ela não comeu as uvas?',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Por que a raposa não comeu as uvas?', options: ['Porque não gostava de uvas', 'Porque estavam estragadas', 'Porque não conseguiu alcançar'], correctAnswer: 'Porque não conseguiu alcançar' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A vírgula serve para:', options: ['Gritar na frase', 'Fazer uma pequena pausa', 'Terminar a frase'], correctAnswer: 'Fazer uma pequena pausa' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra usa SS?', options: ['O___O (osso)', 'CA___ADOR (caçador)', 'DAN___A (dança)'], correctAnswer: 'O___O (osso)' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Todo parágrafo deve ser iniciado com:', options: ['Letra maiúscula e um recuo (espaço)', 'Letra minúscula', 'Uma vírgula'], correctAnswer: 'Letra maiúscula e um recuo (espaço)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual sinal usamos para separar itens (ex: comprei pão, leite e café)?', options: ['Ponto de interrogação (?)', 'Ponto final (.)', 'Vírgula (,)'], correctAnswer: 'Vírgula (,)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual palavra está escrita de forma CORRETA?', options: ['Açúcar', 'Assúcar', 'Asúcar', 'Ahcúcar'], correctAnswer: 'Açúcar' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Leia: "O gato dormiu o dia inteiro no sofá porque estava chovendo." O que o gato fez?', options: ['Brincou', 'Correu na chuva', 'Dormiu no sofá'], correctAnswer: 'Dormiu no sofá' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A letra "Ç" (cedilha) pode ser usada no início de uma palavra?', options: ['Sim, sempre', 'Nunca se começa palavra com Ç', 'Só às vezes'], correctAnswer: 'Nunca se começa palavra com Ç' }
          ]
        }
      ]
    }
  ],
  '4º Ano': [
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
  '5º Ano': [
    {
      id: 'unit-1',
      title: 'Classes de Palavras I',
      description: 'Estudo avançado de Substantivos, Adjetivos, Pronomes e Advérbios.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Substantivos e Adjetivos',
          type: 'study',
          explanation: 'Relembrando: Substantivos dão nome aos seres. Adjetivos caracterizam os substantivos. Exemplo: "O ALUNO DEDICADO estuda." (Aluno = Substantivo; Dedicado = Adjetivo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "A árvore frondosa dá sombra", qual é o adjetivo?', options: ['A', 'árvore', 'frondosa', 'sombra'], correctAnswer: 'frondosa' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Que tipo de substantivo é a palavra "Brasil"?', options: ['Substantivo Próprio', 'Substantivo Comum', 'Adjetivo'], correctAnswer: 'Substantivo Próprio' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O substantivo da frase "A criança é feliz" é:', options: ['A', 'criança', 'é', 'feliz'], correctAnswer: 'criança' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Concordância Nominal',
          type: 'study',
          explanation: 'Concordância Nominal é o ajuste entre o Substantivo e as palavras que o acompanham (Artigo, Adjetivo). Se o substantivo é plural feminino, tudo deve estar no plural feminino. Ex: AS MENINAS ESTUDIOSAS.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Complete: "Os ______ ______ jogaram bem."', options: ['menino / rápido', 'meninos / rápido', 'meninos / rápidos'], correctAnswer: 'meninos / rápidos' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual frase está correta?', options: ['As blusa amarela', 'As blusas amarelas', 'A blusas amarelas'], correctAnswer: 'As blusas amarelas' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O adjetivo deve concordar em gênero e número com o:', options: ['Verbo', 'Substantivo', 'Advérbio'], correctAnswer: 'Substantivo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Pronomes',
          type: 'study',
          explanation: 'Pronomes substituem ou acompanham nomes. Podem ser Pessoais (Eu, Ele), Possessivos (Meu, Sua) ou Demonstrativos (Este, Aquele).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "Minha mochila quebrou", a palavra "Minha" é um:', options: ['Pronome Pessoal', 'Pronome Possessivo', 'Substantivo'], correctAnswer: 'Pronome Possessivo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Que pronome substitui os nomes em "Pedro e eu saímos"?', options: ['Eles', 'Nós', 'Vós'], correctAnswer: 'Nós' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas palavras é um Pronome Demonstrativo?', options: ['Meu', 'Ela', 'Aquele'], correctAnswer: 'Aquele' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Advérbios',
          type: 'study',
          explanation: 'O Advérbio é uma palavra que modifica o Verbo. Indica circunstâncias como TEMPO (ontem), LUGAR (aqui) e MODO (rapidamente).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "O menino correu MUITO", a palavra "MUITO" é advérbio de:', options: ['Lugar', 'Tempo', 'Intensidade'], correctAnswer: 'Intensidade' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra é um Advérbio de LUGAR?', options: ['Aqui', 'Amanhã', 'Felizmente'], correctAnswer: 'Aqui' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas frases contém um Advérbio de TEMPO?', options: ['Ele andou devagar.', 'Nós chegaremos HOJE.', 'Ficou bastante cansado.'], correctAnswer: 'Nós chegaremos HOJE.' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O que é um Advérbio de MODO?', options: ['Longe', 'Hoje', 'Tranquilamente'], correctAnswer: 'Tranquilamente' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra "NOSSO" é que tipo de pronome?', options: ['Demonstrativo', 'Pessoal', 'Possessivo'], correctAnswer: 'Possessivo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Como fica a frase corretamente no plural: "O pássaro azul cantou"', options: ['Os pássaros azuis cantaram', 'Os pássaro azuis cantou', 'Os pássaro azul cantaram'], correctAnswer: 'Os pássaros azuis cantaram' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Na frase "Aquele carro é veloz", a palavra "Aquele" é um:', options: ['Adjetivo', 'Pronome Demonstrativo', 'Substantivo'], correctAnswer: 'Pronome Demonstrativo' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Na frase "Ela falou docemente", a palavra "docemente" é um advérbio que modifica o:', options: ['Adjetivo', 'Substantivo', 'Verbo'], correctAnswer: 'Verbo' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Classes de Palavras II',
      description: 'Verbos, Preposições, Conjunções e Concordância Verbal.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Verbos e Tempos Verbais',
          type: 'study',
          explanation: 'Revisando: O verbo indica Ação, Estado ou Fenômeno. Os tempos indicam o momento: Passado (pretérito), Presente e Futuro.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "Nós estudaremos amanhã", o verbo está no:', options: ['Presente', 'Passado', 'Futuro'], correctAnswer: 'Futuro' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Se ontem eu "comi", hoje eu:', options: ['Comerei', 'Como', 'Comia'], correctAnswer: 'Como' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase contém um verbo no PASSADO?', options: ['O sol brilhou.', 'O sol brilha.', 'O sol brilhará.'], correctAnswer: 'O sol brilhou.' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Concordância Verbal',
          type: 'study',
          explanation: 'A Concordância Verbal diz que o Verbo deve concordar em número (singular/plural) e pessoa (1ª, 2ª, 3ª) com o sujeito. Ex: Eu leio. Nós lemos. Os alunos leem.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Complete: "A turma de alunos ________ em silêncio." (dica: a palavra central é "turma", que é singular)', options: ['estudam', 'estuda', 'estudaremos'], correctAnswer: 'estuda' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Complete: "Lucas e Maria _________ ao parque." (dica: sujeito composto = plural)', options: ['foi', 'fui', 'foram'], correctAnswer: 'foram' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual está com a concordância CORRETA?', options: ['Eles fez o trabalho.', 'Nós fizemos o trabalho.', 'Eu fizemos o trabalho.'], correctAnswer: 'Nós fizemos o trabalho.' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Preposições e Conjunções',
          type: 'study',
          explanation: 'PREPOSIÇÕES ligam palavras (café COM leite). CONJUNÇÕES ligam orações (estudei MAS não passei; pão E manteiga).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na expressão "Copo DE vidro", a palavra "DE" é uma:', options: ['Conjunção', 'Preposição', 'Verbo'], correctAnswer: 'Preposição' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Em "Gosto de bolo E de pudim", a letra "E" é uma:', options: ['Conjunção', 'Preposição', 'Artigo'], correctAnswer: 'Conjunção' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual destas palavras é uma CONJUNÇÃO que indica oposição?', options: ['Com', 'Mas (porém)', 'Para'], correctAnswer: 'Mas (porém)' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Sinônimos, Antônimos e Ortografia',
          type: 'study',
          explanation: 'Para ter um bom vocabulário, usamos sinônimos (palavras semelhantes) e escrevemos corretamente (ortografia). Lembre-se: antes de P e B, usa-se M.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra está escrita de forma CORRETA?', options: ['Câmpo', 'Campo', 'Canpo'], correctAnswer: 'Campo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Um bom sinônimo para a palavra BELO é:', options: ['Feio', 'Horrível', 'Lindo'], correctAnswer: 'Lindo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete: "O ____biente" (ambiente)', options: ['an', 'am'], correctAnswer: 'am' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "Estudou, MAS reprovou", a palavra MAS é:', options: ['Preposição', 'Conjunção', 'Verbo'], correctAnswer: 'Conjunção' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual está correta? "As crianças ______ felizes."', options: ['é', 'somos', 'são'], correctAnswer: 'são' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é o antônimo de APRESSADO?', options: ['Lento', 'Rápido', 'Veloz'], correctAnswer: 'Lento' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Antes das letras P e B, na ortografia usamos a letra:', options: ['N', 'M', 'L'], correctAnswer: 'M' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Em "Vou de trem", a palavra DE é:', options: ['Conjunção', 'Preposição', 'Pronome'], correctAnswer: 'Preposição' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Acentuação, Pontuação e Gramática',
      description: 'As regras de acentuação (oxítonas, paroxítonas) e pontuação avançada.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Acentuação (Sílaba Tônica)',
          type: 'study',
          explanation: 'A sílaba mais forte é a tônica. Oxítona (última forte: caFÉ), Paroxítona (penúltima forte: BOlo), Proparoxítona (antepenúltima forte: MÉdico). Toda proparoxítona tem acento!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na palavra "MÁGICO", a sílaba tônica é a antepenúltima, logo ela é:', options: ['Oxítona', 'Paroxítona', 'Proparoxítona'], correctAnswer: 'Proparoxítona' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual das palavras é uma OXÍTONA (última sílaba forte)?', options: ['Mesa', 'Caju', 'Árvore'], correctAnswer: 'Caju' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A regra diz que TODAS as ______ são acentuadas:', options: ['Oxítonas', 'Paroxítonas', 'Proparoxítonas'], correctAnswer: 'Proparoxítonas' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Pontuação I (Ponto e Vírgula)',
          type: 'study',
          explanation: 'Usamos o Ponto Final (.) para encerrar ideias e a Vírgula (,) para pausas curtas. O Ponto e Vírgula (;) é uma pausa maior que a vírgula, mas não acaba a frase.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Para separar itens de uma lista ("Comprei pão, leite, queijo"), usamos:', options: ['Ponto final', 'Vírgula', 'Ponto e vírgula'], correctAnswer: 'Vírgula' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O Ponto e Vírgula (;) serve para:', options: ['Fazer uma pergunta', 'Pausa maior que a vírgula, sem terminar a frase', 'Avisar que alguém vai falar'], correctAnswer: 'Pausa maior que a vírgula, sem terminar a frase' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O sinal que encerra uma afirmação é o:', options: ['Ponto de Exclamação', 'Ponto Final', 'Vírgula'], correctAnswer: 'Ponto Final' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Pontuação II (Dois Pontos e Aspas)',
          type: 'study',
          explanation: 'Dois pontos (:) anunciam uma fala ou citação. As Aspas ("") servem para destacar palavras ou citar algo que outra pessoa disse.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'As Aspas (" ") podem ser usadas para:', options: ['Terminar a frase', 'Citar a fala exata de alguém', 'Gritar no texto'], correctAnswer: 'Citar a fala exata de alguém' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Quando o narrador diz: A professora falou___', options: ['Deve usar vírgula', 'Deve usar dois pontos (:)', 'Deve usar ponto final'], correctAnswer: 'Deve usar dois pontos (:)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O travessão (—) geralmente aparece LOGO APÓS os:', options: ['Dois pontos, na linha de baixo', 'Parênteses', 'Pontos de interrogação'], correctAnswer: 'Dois pontos, na linha de baixo' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão Gramatical',
          type: 'study',
          explanation: 'Revisando as regras de pontuação, aspas e as regras de acentuação (oxítonas, paroxítonas e proparoxítonas).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual palavra é Paroxítona (penúltima forte)?', options: ['Sofá (so-FÁ)', 'Menino (me-NI-no)', 'Lâmpada (LÂM-pa-da)'], correctAnswer: 'Menino (me-NI-no)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Que sinal usamos para dar um destaque especial a uma palavra num texto?', options: ['Aspas (" ")', 'Travessão (—)', 'Ponto e vírgula (;)'], correctAnswer: 'Aspas (" ")' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A palavra "PÁSSARO" tem acento porque é uma:', options: ['Oxítona', 'Proparoxítona', 'Paroxítona'], correctAnswer: 'Proparoxítona' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A palavra "LÁGRIMA" é:', options: ['Oxítona', 'Paroxítona', 'Proparoxítona'], correctAnswer: 'Proparoxítona' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Para citar exatamente o que um autor famoso escreveu, usamos:', options: ['Travessão', 'Aspas', 'Ponto Final'], correctAnswer: 'Aspas' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O sinal de ponto e vírgula (;) representa:', options: ['O fim da história', 'Uma pausa intermediária, maior que a vírgula', 'Uma pergunta'], correctAnswer: 'Uma pausa intermediária, maior que a vírgula' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Qual destas palavras é Oxítona?', options: ['Fácil', 'Vulcão', 'Árvore'], correctAnswer: 'Vulcão' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A sílaba tônica é a sílaba:', options: ['Mais fraca da palavra', 'Mais forte da palavra', 'Apenas a última'], correctAnswer: 'Mais forte da palavra' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Leitura, Gêneros e Produção',
      description: 'Gêneros textuais, interpretação e estrutura de produção textual.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Gêneros Textuais Avançados',
          type: 'study',
          explanation: 'O CONTO é uma narração curta com começo, meio e fim. A CRÔNICA narra fatos do dia a dia. A REPORTAGEM é um texto jornalístico profundo.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Um texto que fala sobre coisas comuns do dia a dia, muitas vezes com humor, é:', options: ['Um poema', 'Uma bula de remédio', 'Uma crônica'], correctAnswer: 'Uma crônica' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Uma narração ficcional curta com personagens e enredo é um:', options: ['Conto', 'Notícia', 'Artigo de opinião'], correctAnswer: 'Conto' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Um texto publicado em jornal para aprofundar uma informação é:', options: ['Um bilhete', 'Uma reportagem', 'Um conto'], correctAnswer: 'Uma reportagem' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Interpretação de Texto',
          type: 'study',
          explanation: 'Interpretar é ir além das palavras: entender o sentimento do personagem, o motivo da ação, e o que não está escrito diretamente (implícito).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"O menino chegou ofegante, com a roupa suja de barro." O que podemos deduzir (entender)?', options: ['Que ele tomou banho.', 'Que ele estava brincando/correndo na terra.', 'Que ele dormiu.'], correctAnswer: 'Que ele estava brincando/correndo na terra.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A leitura das entrelinhas significa:', options: ['Entender apenas o que está escrito de forma clara.', 'Entender o que está subentendido, oculto na frase.', 'Contar as palavras.'], correctAnswer: 'Entender o que está subentendido, oculto na frase.' },
            { id: 'q3', type: 'multiple_choice', prompt: '"A flor murchou porque esqueceu da água." Quem bebe a água?', options: ['A flor (personificada)', 'A água', 'O jarro'], correctAnswer: 'A flor (personificada)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Produção Textual (Coesão)',
          type: 'study',
          explanation: 'Coesão é usar palavras para colar as frases umas nas outras. Usamos pronomes e conjunções: "João saiu. ELE (João) foi à padaria PORQUE (motivo) queria pão."',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O pronome "ELE" ajuda na coesão para:', options: ['Não repetir o nome João.', 'Deixar a frase longa.', 'Confundir o leitor.'], correctAnswer: 'Não repetir o nome João.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra "PORTANTO" serve para:', options: ['Terminar uma ideia / Concluir', 'Mudar de assunto', 'Fazer uma pergunta'], correctAnswer: 'Terminar uma ideia / Concluir' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Para adicionar uma ideia, qual palavra usamos?', options: ['Mas', 'Além disso', 'Nunca'], correctAnswer: 'Além disso' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão de Leitura e Escrita',
          type: 'study',
          explanation: 'Lembrar sempre: parágrafos, pontuação correta (diálogos, ponto final), e a estrutura básica de Início, Meio (desenvolvimento) e Fim (conclusão).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Onde acontece o Desenvolvimento da história?', options: ['No Início', 'No Meio', 'Na Conclusão (Fim)'], correctAnswer: 'No Meio' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O desfecho, onde o problema da história é resolvido, fica no:', options: ['Início', 'Fim', 'Meio'], correctAnswer: 'Fim' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A Coesão em um texto significa:', options: ['Que as partes estão bem conectadas.', 'Que o texto é muito longo.', 'Que o texto não tem ponto.'], correctAnswer: 'Que as partes estão bem conectadas.' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual texto conta uma história curta baseada em situações comuns do dia a dia?', options: ['Notícia', 'Crônica', 'Receita'], correctAnswer: 'Crônica' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Substituir palavras repetidas por pronomes ajuda a manter a:', options: ['Coesão', 'Pontuação', 'Acentuação'], correctAnswer: 'Coesão' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O que o leitor faz quando entende algo que não está escrito com todas as letras?', options: ['Escreve', 'Deduz pelas entrelinhas', 'Ignora a leitura'], correctAnswer: 'Deduz pelas entrelinhas' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Um CONTO é um tipo de texto:', options: ['Informativo', 'Narrativo', 'Jornalístico'], correctAnswer: 'Narrativo' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A conclusão de um texto costuma ficar:', options: ['No primeiro parágrafo', 'No último parágrafo', 'Nas falas dos personagens'], correctAnswer: 'No último parágrafo' }
          ]
        }
      ]
    }
  ],
  '6º Ano': [
    {
      id: 'unit-1',
      title: 'Morfologia e Classes de Palavras',
      description: 'Revisão profunda das classes de palavras: Substantivos, Adjetivos, Advérbios e Artigos.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Substantivos e suas Classificações',
          type: 'study',
          explanation: 'Substantivos podem ser Concretos (mesa, luz) ou Abstratos (amor, saudade), Primitivos (pedra) ou Derivados (pedreiro).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é um substantivo abstrato?', options: ['Cadeira', 'Amor', 'Árvore'], correctAnswer: 'Amor' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A palavra "Livraria" é um substantivo:', options: ['Primitivo', 'Derivado'], correctAnswer: 'Derivado' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Fada e Saci são substantivos:', options: ['Concretos (pois existem no imaginário independente de nós)', 'Abstratos (pois são sentimentos)'], correctAnswer: 'Concretos (pois existem no imaginário independente de nós)' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Adjetivos e Locuções Adjetivas',
          type: 'study',
          explanation: 'Locução adjetiva é a união de duas ou mais palavras com valor de adjetivo. Ex: "Amor DE MÃE" = "Amor MATERNO".',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual é o adjetivo equivalente à locução "de anjo"?', options: ['Angelical', 'Anjinho', 'Divino'], correctAnswer: 'Angelical' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A expressão "luz DO SOL" equivale a:', options: ['Luz solar', 'Luz quente', 'Luz clara'], correctAnswer: 'Luz solar' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O que é uma locução adjetiva?', options: ['Um verbo com artigo', 'Duas ou mais palavras com função de adjetivo', 'Um pronome possessivo'], correctAnswer: 'Duas ou mais palavras com função de adjetivo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Pronomes',
          type: 'study',
          explanation: 'Pronomes Retos (eu, tu, ele) exercem função de sujeito. Pronomes Oblíquos (me, te, se, o, a, lhe) funcionam como complemento.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "Entreguei-LHE o livro", o pronome "LHE" é:', options: ['Reto', 'Oblíquo', 'Possessivo'], correctAnswer: 'Oblíquo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual frase usa o pronome reto corretamente?', options: ['Para MIM fazer o trabalho.', 'Para EU fazer o trabalho.'], correctAnswer: 'Para EU fazer o trabalho.' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Ele" e "Nós" são pronomes:', options: ['Demonstrativos', 'Pessoais do Caso Reto', 'Relativos'], correctAnswer: 'Pessoais do Caso Reto' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Advérbios',
          type: 'study',
          explanation: 'Advérbios modificam verbos, adjetivos ou outros advérbios. Classificam-se em modo, tempo, lugar, negação, dúvida, etc.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"TALVEZ eu vá." O advérbio expressa:', options: ['Negação', 'Afirmação', 'Dúvida'], correctAnswer: 'Dúvida' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Moro AQUI." A palavra em destaque é advérbio de:', options: ['Modo', 'Lugar', 'Tempo'], correctAnswer: 'Lugar' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Ela é MUITO inteligente." "Muito" modifica o:', options: ['Substantivo', 'Adjetivo', 'Verbo'], correctAnswer: 'Adjetivo' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Amor, Saudade e Fome são substantivos:', options: ['Primitivos', 'Abstratos', 'Concretos'], correctAnswer: 'Abstratos' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Carne de boi" tem como locução adjetiva equivalente:', options: ['Bovina', 'Suína', 'Ovina'], correctAnswer: 'Bovina' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Pronome oblíquo correto: "Deixe ___ falar!"', options: ['Eu', 'Me', 'Mim'], correctAnswer: 'Me' },
            { id: 'q4', type: 'multiple_choice', prompt: '"Hoje choveu." "Hoje" é advérbio de:', options: ['Tempo', 'Lugar', 'Modo'], correctAnswer: 'Tempo' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A palavra "Alegremente" é um advérbio de:', options: ['Lugar', 'Intensidade', 'Modo'], correctAnswer: 'Modo' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Estrutura da Frase e Sintaxe Básica',
      description: 'Frase, Oração, Período, Sujeito e Predicado.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Frase, Oração e Período',
          type: 'study',
          explanation: 'Frase: tem sentido completo (pode não ter verbo). Oração: estrutura com verbo. Período: frase com uma ou mais orações.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Socorro!" é considerado uma:', options: ['Frase (pois tem sentido completo)', 'Oração (pois tem verbo)'], correctAnswer: 'Frase (pois tem sentido completo)' },
            { id: 'q2', type: 'multiple_choice', prompt: '"O menino estuda e trabalha." Quantas orações há?', options: ['Uma', 'Duas (dois verbos)', 'Nenhuma'], correctAnswer: 'Duas (dois verbos)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Período simples é aquele que possui:', options: ['Apenas uma oração', 'Duas ou mais orações'], correctAnswer: 'Apenas uma oração' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Sujeito',
          type: 'study',
          explanation: 'Sujeito é o termo sobre o qual se declara algo. Ex: "O gato dormiu". (Quem dormiu? O gato = sujeito).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na oração "Os alunos chegaram cedo", o sujeito é:', options: ['Os alunos', 'chegaram', 'cedo'], correctAnswer: 'Os alunos' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Para encontrar o sujeito, devemos perguntar "Quem?" ou "O que?" antes do:', options: ['Substantivo', 'Verbo', 'Adjetivo'], correctAnswer: 'Verbo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Em "A bola caiu", quem é o sujeito?', options: ['A bola', 'caiu'], correctAnswer: 'A bola' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Predicado',
          type: 'study',
          explanation: 'Predicado é tudo aquilo que se diz do sujeito, incluindo o verbo. Ex: "O gato [dormiu no sofá]".',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "O sol brilhou forte", o predicado é:', options: ['O sol', 'brilhou forte', 'forte'], correctAnswer: 'brilhou forte' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O verbo faz parte de qual estrutura?', options: ['Sujeito', 'Predicado'], correctAnswer: 'Predicado' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Se retirarmos o sujeito "Maria" de "Maria comprou pão", sobra o predicado:', options: ['comprou pão', 'Maria comprou'], correctAnswer: 'comprou pão' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão Sintática',
          type: 'study',
          explanation: 'Revisando as estruturas: Frase (sentido), Oração (verbo), Sujeito (quem age) e Predicado (a ação e o restante).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Bom dia!" é:', options: ['Oração', 'Frase nominal (sem verbo)'], correctAnswer: 'Frase nominal (sem verbo)' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é o sujeito em "Voaram os pássaros"?', options: ['Voaram', 'os pássaros', 'Não tem sujeito'], correctAnswer: 'os pássaros' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Em "Meu irmão adora videogame", o predicado é:', options: ['Meu irmão', 'adora videogame', 'videogame'], correctAnswer: 'adora videogame' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Toda oração OBRIGATORIAMENTE possui:', options: ['Adjetivo', 'Verbo', 'Pronome'], correctAnswer: 'Verbo' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Choveu e ventou." Este período é:', options: ['Simples', 'Composto'], correctAnswer: 'Composto' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual é o sujeito na oração: "A tempestade assustou a cidade"?', options: ['A tempestade', 'assustou a cidade', 'a cidade'], correctAnswer: 'A tempestade' },
            { id: 'q4', type: 'multiple_choice', prompt: 'O que é o Predicado?', options: ['O termo que pratica a ação', 'A declaração que se faz sobre o sujeito'], correctAnswer: 'A declaração que se faz sobre o sujeito' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Na oração "Caiu a noite", o sujeito é:', options: ['Caiu', 'a noite', 'Não há sujeito'], correctAnswer: 'a noite' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Ortografia Avançada',
      description: 'Uso dos Porquês, Mal/Mau e Onde/Aonde.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Uso dos Porquês I',
          type: 'study',
          explanation: 'Por que (separado) = início de pergunta. Porque (junto) = resposta/motivo.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"___ você não foi à aula?"', options: ['Por que', 'Porque', 'Porquê'], correctAnswer: 'Por que' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Não fui ___ estava doente."', options: ['por que', 'porque', 'porquê'], correctAnswer: 'porque' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Usa-se "Por que" separado e sem acento geralmente:', options: ['No início de perguntas', 'No fim de frases', 'Para responder'], correctAnswer: 'No início de perguntas' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Uso dos Porquês II',
          type: 'study',
          explanation: 'Por quê (com acento) = fim de frase/pergunta. O porquê (junto com acento) = substantivo (o motivo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Você está triste por ___?"', options: ['por que', 'por quê', 'porque'], correctAnswer: 'por quê' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Gostaria de entender O ___ de tanta confusão."', options: ['porque', 'por que', 'porquê'], correctAnswer: 'porquê' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Quando o "porque" funciona como um nome (o motivo), ele se escreve:', options: ['Junto e sem acento', 'Junto e com acento circunflexo (o porquê)', 'Separado'], correctAnswer: 'Junto e com acento circunflexo (o porquê)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Mal e Mau',
          type: 'study',
          explanation: 'MAL (com L) é contrário de BEM. MAU (com U) é contrário de BOM.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O lobo é ___ (contrário de bom).', options: ['mal', 'mau'], correctAnswer: 'mau' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Eu dormi muito ___ (contrário de bem).', options: ['mal', 'mau'], correctAnswer: 'mal' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete: Um ___ homem foi ___ recebido na cidade.', options: ['mau / mal', 'mal / mau', 'mau / mau'], correctAnswer: 'mau / mal' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Onde e Aonde',
          type: 'study',
          explanation: 'ONDE indica lugar fixo (Onde você está?). AONDE indica movimento/direção (Aonde você vai?).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '___ você deixou as chaves?', options: ['Onde', 'Aonde'], correctAnswer: 'Onde' },
            { id: 'q2', type: 'multiple_choice', prompt: '___ nós iremos depois do almoço?', options: ['Onde', 'Aonde'], correctAnswer: 'Aonde' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Complete: "Não sei ___ ele mora, nem ___ ele vai."', options: ['onde / aonde', 'aonde / onde', 'onde / onde'], correctAnswer: 'onde / aonde' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Não entendi o ___ da sua atitude." (o motivo)', options: ['porquê', 'por que', 'porque'], correctAnswer: 'porquê' },
            { id: 'q2', type: 'multiple_choice', prompt: '"___ você chegou tão cedo?"', options: ['Porque', 'Por que', 'Por quê'], correctAnswer: 'Por que' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Contrário de BEM:', options: ['Mal (com L)', 'Mau (com U)'], correctAnswer: 'Mal (com L)' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Lugar fixo, sem verbo de movimento:', options: ['Onde', 'Aonde'], correctAnswer: 'Onde' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Complete a frase: "Ele agiu ___ porque estava de ___ humor."', options: ['mal / mau', 'mau / mal', 'mal / mal'], correctAnswer: 'mal / mau' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Gêneros Narrativos',
      description: 'Fábula, Mito e Lenda. Interpretação textual avançada.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - A Fábula',
          type: 'study',
          explanation: 'A Fábula é uma narrativa curta onde os personagens geralmente são animais que agem como humanos, e sempre possui uma Moral (lição).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A principal característica da fábula é ter:', options: ['Apenas deuses gregos', 'Uma moral / ensinamento', 'Fatos reais do jornal'], correctAnswer: 'Uma moral / ensinamento' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Os personagens comuns nas fábulas são:', options: ['Alienígenas', 'Animais personificados', 'Robôs'], correctAnswer: 'Animais personificados' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Personificação (animais falando) é uma figura usada em:', options: ['Reportagens', 'Fábulas', 'Notícias'], correctAnswer: 'Fábulas' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - O Mito',
          type: 'study',
          explanation: 'Mitos são narrativas antigas usadas para explicar a origem do mundo, dos fenômenos naturais, envolvendo deuses e heróis (ex: mitologia grega).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O mito foi criado pelo ser humano primitivo para:', options: ['Divertir as crianças', 'Explicar a origem das coisas sem o uso da ciência', 'Vender produtos'], correctAnswer: 'Explicar a origem das coisas sem o uso da ciência' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Os personagens de um mito geralmente são:', options: ['Pessoas normais', 'Animais com moral', 'Deuses e heróis sobrenaturais'], correctAnswer: 'Deuses e heróis sobrenaturais' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Uma narrativa que explica o surgimento do dia e da noite através de deuses é um:', options: ['Mito', 'Bilhete', 'Conto'], correctAnswer: 'Mito' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - A Lenda',
          type: 'study',
          explanation: 'Lenda é uma história transmitida de boca em boca que mistura fatos reais com fantasia, geralmente para explicar fenômenos locais (ex: Saci, Iara).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A lenda do Saci-Pererê pertence ao folclore:', options: ['Brasileiro', 'Grego', 'Nórdico'], correctAnswer: 'Brasileiro' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Uma lenda mistura:', options: ['Notícias de jornal e fábulas', 'Fatos reais, históricos, com imaginação e fantasia', 'Receitas e poemas'], correctAnswer: 'Fatos reais, históricos, com imaginação e fantasia' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Como as lendas originais foram preservadas e passadas de geração a geração?', options: ['Através de e-mails', 'Por tradição oral (boca a boca)', 'Por livros científicos'], correctAnswer: 'Por tradição oral (boca a boca)' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Interpretação Comparativa',
          type: 'study',
          explanation: 'Revisando as diferenças: Fábula (lição, animais), Mito (origem, deuses), Lenda (folclore, imaginação local).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"A Cigarra e a Formiga" é:', options: ['Mito', 'Fábula', 'Lenda'], correctAnswer: 'Fábula' },
            { id: 'q2', type: 'multiple_choice', prompt: '"A história de Hércules e Zeus" é:', options: ['Mito', 'Fábula', 'Lenda'], correctAnswer: 'Mito' },
            { id: 'q3', type: 'multiple_choice', prompt: '"A história da mula sem cabeça" é:', options: ['Mito', 'Fábula', 'Lenda'], correctAnswer: 'Lenda' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual texto traz ao final uma "Moral da História"?', options: ['Lenda', 'Mito', 'Fábula'], correctAnswer: 'Fábula' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual gênero narra feitos de deuses para explicar o universo?', options: ['Fábula', 'Mito', 'Lenda'], correctAnswer: 'Mito' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Folclore brasileiro é rico em:', options: ['Lendas', 'Mitos gregos', 'Notícias'], correctAnswer: 'Lendas' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Na fábula "A Tartaruga e a Lebre", o que os animais representam?', options: ['Apenas animais', 'Características e defeitos humanos (como orgulho e persistência)', 'Deuses antigos'], correctAnswer: 'Características e defeitos humanos (como orgulho e persistência)' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Lendas costumam ser transmitidas:', options: ['Pela ciência', 'De boca a boca, pela oralidade das gerações', 'Pelo jornal local'], correctAnswer: 'De boca a boca, pela oralidade das gerações' }
          ]
        }
      ]
    }
  ],
  '7º Ano': [
    {
      id: 'unit-1',
      title: 'Sintaxe: Tipos de Sujeito',
      description: 'Aprofundamento na análise sintática: Sujeito Simples, Composto, Oculto, Indeterminado e Oração Sem Sujeito.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Sujeito Simples e Composto',
          type: 'study',
          explanation: 'Sujeito Simples: possui apenas 1 núcleo (Ex: O menino caiu). Sujeito Composto: possui 2 ou mais núcleos (Ex: O menino e a menina caíram).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "Cães e gatos brigaram", qual é o tipo de sujeito?', options: ['Simples', 'Composto', 'Oculto'], correctAnswer: 'Composto' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na frase "Os trabalhadores pediram aumento", o núcleo do sujeito simples é:', options: ['Os', 'trabalhadores', 'aumento'], correctAnswer: 'trabalhadores' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Sujeito composto tem:', options: ['Nenhum núcleo', 'Apenas um núcleo', 'Dois ou mais núcleos'], correctAnswer: 'Dois ou mais núcleos' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Sujeito Oculto (Desinencial)',
          type: 'study',
          explanation: 'Sujeito Oculto: não está escrito na frase, mas é identificado pelo final do verbo. Ex: Fomos ao cinema. (Quem fomos? Nós).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "Estudei muito hoje", quem é o sujeito oculto?', options: ['Ele', 'Eu', 'Nós'], correctAnswer: 'Eu' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Em "Compramos um carro", o sujeito é:', options: ['Simples', 'Composto', 'Oculto (Nós)'], correctAnswer: 'Oculto (Nós)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O sujeito oculto também é chamado de:', options: ['Indeterminado', 'Inexistente', 'Desinencial'], correctAnswer: 'Desinencial' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Sujeito Indeterminado e Inexistente',
          type: 'study',
          explanation: 'Indeterminado: O verbo está na 3ª pessoa do plural (Falaram mal de você). Inexistente (Oração sem Sujeito): Verbos de fenômenos da natureza (Choveu) ou verbo Haver no sentido de existir.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "Roubaram meu celular", o sujeito é:', options: ['Oculto', 'Indeterminado', 'Simples'], correctAnswer: 'Indeterminado' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Houve muitos acidentes." Esta oração tem sujeito:', options: ['Composto', 'Simples', 'Inexistente (oração sem sujeito)'], correctAnswer: 'Inexistente (oração sem sujeito)' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Trovejou muito ontem." Qual o tipo de sujeito?', options: ['Oculto', 'Indeterminado', 'Oração sem sujeito'], correctAnswer: 'Oração sem sujeito' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão Sintática de Sujeito',
          type: 'study',
          explanation: 'Praticando a identificação: Simples (1), Composto (2+), Oculto (escondido), Indeterminado (-ram), Inexistente (Haver/Tempo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Cheguei atrasado." Sujeito:', options: ['Oculto', 'Simples', 'Inexistente'], correctAnswer: 'Oculto' },
            { id: 'q2', type: 'multiple_choice', prompt: '"O livro e o caderno estão aqui." Sujeito:', options: ['Simples', 'Composto'], correctAnswer: 'Composto' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Faz dois anos que não o vejo." A 1ª oração tem sujeito:', options: ['Oculto', 'Inexistente (Oração sem sujeito)'], correctAnswer: 'Inexistente (Oração sem sujeito)' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual oração apresenta SUJEITO COMPOSTO?', options: ['Fui à padaria.', 'João e Maria brincaram.', 'Quebraram a vidraça.'], correctAnswer: 'João e Maria brincaram.' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Deixaram um pacote na porta." O sujeito é:', options: ['Oculto', 'Indeterminado', 'Simples'], correctAnswer: 'Indeterminado' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Em "Há muitos peixes no mar", o verbo haver indica:', options: ['Sujeito simples', 'Sujeito oculto', 'Oração sem sujeito'], correctAnswer: 'Oração sem sujeito' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Em "Gostamos de sorvete", o sujeito oculto é:', options: ['Eu', 'Nós', 'Vós'], correctAnswer: 'Nós' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Na oração "A chuva destruiu as casas", o núcleo do sujeito simples é:', options: ['chuva', 'A', 'destruiu'], correctAnswer: 'chuva' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Transitividade Verbal e Complementos',
      description: 'Verbos Transitivos, Intransitivos, Objeto Direto e Objeto Indireto.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Verbo Intransitivo (VI)',
          type: 'study',
          explanation: 'Verbos Intransitivos não precisam de complemento para fazer sentido. Ex: "O bebê nasceu." O sentido está completo.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "O cachorro morreu", o verbo "morreu" é:', options: ['Transitivo', 'Intransitivo'], correctAnswer: 'Intransitivo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Um verbo intransitivo precisa de complemento (objeto)?', options: ['Sim, sempre.', 'Não, ele tem sentido completo.'], correctAnswer: 'Não, ele tem sentido completo.' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase possui verbo INTRANSITIVO?', options: ['Comprei um carro.', 'O pássaro voou.', 'Gosto de você.'], correctAnswer: 'O pássaro voou.' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Verbo Transitivo Direto (VTD)',
          type: 'study',
          explanation: 'Verbos Transitivos Diretos precisam de complemento SEM preposição, respondendo "o que?" ou "quem?". Ex: "Comprei (o que?) um carro." (Objeto Direto).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "O menino chutou a bola", "a bola" é:', options: ['Objeto Direto', 'Objeto Indireto'], correctAnswer: 'Objeto Direto' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Em "Eu li o livro", qual é o complemento?', options: ['Eu', 'li', 'o livro'], correctAnswer: 'o livro' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O Objeto Direto exige o uso obrigatório de preposição?', options: ['Sim', 'Não'], correctAnswer: 'Não' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Verbo Transitivo Indireto (VTI)',
          type: 'study',
          explanation: 'Verbos Transitivos Indiretos precisam de complemento COM preposição, respondendo "de que?", "para quem?". Ex: "Gosto (de que?) de sorvete." (Objeto Indireto).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "Preciso DE ajuda", "de ajuda" é:', options: ['Objeto Direto', 'Objeto Indireto'], correctAnswer: 'Objeto Indireto' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A preposição "de" na frase "Gosto de bolo" mostra que o verbo gostar é:', options: ['Transitivo Direto', 'Transitivo Indireto', 'Intransitivo'], correctAnswer: 'Transitivo Indireto' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Qual frase possui um Objeto Indireto?', options: ['Li o jornal.', 'Acredito em você.', 'A flor nasceu.'], correctAnswer: 'Acredito em você.' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Verbo Transitivo Direto e Indireto (VTDI)',
          type: 'study',
          explanation: 'Alguns verbos pedem os dois complementos ao mesmo tempo! Ex: "Dei (o que?) um presente (a quem?) para minha mãe." Um é direto e o outro indireto.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "A mãe entregou o prato ao filho", "o prato" é:', options: ['Objeto Direto', 'Objeto Indireto'], correctAnswer: 'Objeto Direto' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na mesma frase, "ao filho" é:', options: ['Objeto Direto', 'Objeto Indireto'], correctAnswer: 'Objeto Indireto' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Verbos VTDI pedem:', options: ['Apenas Objeto Direto', 'Apenas Objeto Indireto', 'Os dois objetos simultaneamente'], correctAnswer: 'Os dois objetos simultaneamente' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"A menina dormiu." O verbo "dormir" é:', options: ['Transitivo Direto', 'Transitivo Indireto', 'Intransitivo'], correctAnswer: 'Intransitivo' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Ele quebrou o vaso." O vaso é:', options: ['Objeto Direto', 'Objeto Indireto'], correctAnswer: 'Objeto Direto' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Eles necessitam DE amor." O complemento é:', options: ['Objeto Direto', 'Objeto Indireto'], correctAnswer: 'Objeto Indireto' },
            { id: 'q4', type: 'multiple_choice', prompt: 'A principal diferença do Objeto Indireto para o Direto é a presença obrigatória de:', options: ['Artigo', 'Adjetivo', 'Preposição'], correctAnswer: 'Preposição' },
            { id: 'q5', type: 'multiple_choice', prompt: '"Enviei a carta ao diretor." O verbo "enviar" nesta frase é:', options: ['VTD', 'VTI', 'VTDI (Direto e Indireto)'], correctAnswer: 'VTDI (Direto e Indireto)' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Modos Verbais',
      description: 'Indicativo (Certeza), Subjuntivo (Dúvida/Hipótese) e Imperativo (Ordem/Pedido).',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Modo Indicativo',
          type: 'study',
          explanation: 'O Modo Indicativo exprime uma CERTEZA, um fato real. Ex: "Eu estudo todos os dias." (É certo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual frase está no Modo Indicativo?', options: ['Talvez eu viaje amanhã.', 'Eu viajei ontem.', 'Viaje agora mesmo!'], correctAnswer: 'Eu viajei ontem.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O Modo Indicativo exprime:', options: ['Dúvida', 'Certeza', 'Ordem'], correctAnswer: 'Certeza' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O verbo em "O professor explicou a matéria" indica:', options: ['Um fato irreal', 'Uma possibilidade', 'Um fato real / certeza'], correctAnswer: 'Um fato real / certeza' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Modo Subjuntivo',
          type: 'study',
          explanation: 'O Modo Subjuntivo exprime DÚVIDA, DESEJO ou HIPÓTESE. Ex: "Espero que ele estude." ou "Se eu estudasse, passaria."',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual frase está no Modo Subjuntivo?', options: ['Ele choveu muito.', 'Espero que chova amanhã.', 'Feche a porta!'], correctAnswer: 'Espero que chova amanhã.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O Modo Subjuntivo expressa:', options: ['Certeza e fatos.', 'Uma ordem ou pedido.', 'Possibilidade, dúvida ou desejo.'], correctAnswer: 'Possibilidade, dúvida ou desejo.' },
            { id: 'q3', type: 'multiple_choice', prompt: 'O trecho "Se eu fizesse a tarefa..." está no:', options: ['Indicativo', 'Subjuntivo'], correctAnswer: 'Subjuntivo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Modo Imperativo',
          type: 'study',
          explanation: 'O Modo Imperativo exprime ORDEM, PEDIDO ou CONSELHO. Ex: "Estude para a prova!" ou "Não corra aqui." Pode ser Afirmativo ou Negativo.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual oração apresenta verbo no Imperativo?', options: ['Eles saíram rápido.', 'Saia já daqui!', 'Se ele saísse...'], correctAnswer: 'Saia já daqui!' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O Modo Imperativo expressa:', options: ['Um fato real', 'Uma incerteza', 'Ordem, conselho ou pedido'], correctAnswer: 'Ordem, conselho ou pedido' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Não jogue lixo no chão." O verbo "jogue" está no:', options: ['Imperativo Negativo', 'Subjuntivo Negativo'], correctAnswer: 'Imperativo Negativo' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão de Modos Verbais',
          type: 'study',
          explanation: 'Identificando e diferenciando a Certeza (Indicativo), a Hipótese (Subjuntivo) e a Ordem (Imperativo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Compre pão." Modo:', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Imperativo' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Eu compro pão." Modo:', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Indicativo' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Talvez eu compre pão." Modo:', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Subjuntivo' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A frase "Queria que nós viajássemos mais" está em qual modo?', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Subjuntivo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A frase "Ele viajou ontem de manhã" está em qual modo?', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Indicativo' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A frase "Faça o seu dever agora!" está em qual modo?', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Imperativo' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Um pedido "Por favor, feche a porta" utiliza o verbo no modo:', options: ['Indicativo', 'Subjuntivo', 'Imperativo'], correctAnswer: 'Imperativo' },
            { id: 'q5', type: 'multiple_choice', prompt: 'O subjuntivo é conhecido como o modo da:', options: ['Realidade', 'Irrealidade / Hipótese', 'Obrigação'], correctAnswer: 'Irrealidade / Hipótese' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Poesia, Cordel e Figuras de Linguagem',
      description: 'A linguagem poética, ritmos, rimas, Metáfora e Comparação.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Poema, Verso e Estrofe',
          type: 'study',
          explanation: 'Verso é cada LINHA de um poema. Estrofe é o CONJUNTO de versos. Rima é a semelhança de sons.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Cada linha de um poema recebe o nome de:', options: ['Estrofe', 'Verso', 'Parágrafo'], correctAnswer: 'Verso' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Um conjunto de versos forma uma:', options: ['Rima', 'Crônica', 'Estrofe'], correctAnswer: 'Estrofe' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Textos em prosa usam parágrafos. Textos poéticos usam:', options: ['Versos e estrofes', 'Capítulos e artigos', 'Diálogos e cenas'], correctAnswer: 'Versos e estrofes' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Literatura de Cordel',
          type: 'study',
          explanation: 'O Cordel é um gênero folclórico muito popular no Nordeste brasileiro, feito em versos com rimas fortes, geralmente impresso em folhetos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A Literatura de Cordel é típica de qual região do Brasil?', options: ['Sul', 'Nordeste', 'Centro-Oeste'], correctAnswer: 'Nordeste' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Uma das marcas registradas do cordel é:', options: ['Texto escrito em prosa sem fim', 'Textos acadêmicos sem rima', 'Uso intenso de rimas e musicalidade'], correctAnswer: 'Uso intenso de rimas e musicalidade' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Como os folhetos de cordel costumam ser pendurados para venda?', options: ['Em vitrines de vidro', 'Em barbantes (cordéis)', 'Em estantes de metal'], correctAnswer: 'Em barbantes (cordéis)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Figura de Linguagem: Comparação',
          type: 'study',
          explanation: 'A Comparação relaciona dois termos usando elementos conectivos (como, tal qual, igual a). Ex: "Ela é linda COMO uma flor."',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "Ele é forte COMO um touro", temos uma:', options: ['Metáfora', 'Comparação', 'Ambiguidade'], correctAnswer: 'Comparação' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual palavra marca a presença de uma Comparação na frase?', options: ['como / tal qual', 'porque', 'mas / porém'], correctAnswer: 'como / tal qual' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Seus olhos brilham FEITO estrelas." Isso é:', options: ['Comparação', 'Verbo intransitivo'], correctAnswer: 'Comparação' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Figura de Linguagem: Metáfora',
          type: 'study',
          explanation: 'A Metáfora é uma comparação IMPLÍCITA, direta, sem usar a palavra "como". Ex: "Ela É uma flor." (A beleza dela é tanta que a chamo de flor).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Seus olhos SÃO duas estrelas brilhantes". Temos aqui uma:', options: ['Comparação', 'Metáfora'], correctAnswer: 'Metáfora' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Se eu digo "Ele é feroz COMO um leão", tenho Comparação. Se eu digo "Ele É um leão", tenho:', options: ['Metáfora', 'Verbo', 'Estrofe'], correctAnswer: 'Metáfora' },
            { id: 'q3', type: 'multiple_choice', prompt: 'A metáfora transfere o significado de uma palavra para outra baseada em:', options: ['Semelhança subentendida', 'Rima', 'Oposição'], correctAnswer: 'Semelhança subentendida' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A unidade básica estrutural de um poema, correspondente a uma linha, é chamada de:', options: ['Estrofe', 'Verso', 'Sílaba'], correctAnswer: 'Verso' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Um gênero muito popular no Nordeste, de oralidade rica e vendido em barbantes:', options: ['Haikai', 'Literatura de Cordel', 'Soneto clássico'], correctAnswer: 'Literatura de Cordel' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Meu coração é um balde despejado." A figura de linguagem usada é:', options: ['Comparação', 'Metáfora', 'Fábula'], correctAnswer: 'Metáfora' },
            { id: 'q4', type: 'multiple_choice', prompt: '"Ela chora COMO uma cachoeira." A figura de linguagem usada é:', options: ['Comparação', 'Metáfora', 'Oração sem sujeito'], correctAnswer: 'Comparação' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A metáfora diferencia-se da comparação porque:', options: ['Não usa conectivos comparativos (como, igual a)', 'Só ocorre em poemas longos', 'Usa palavras opostas'], correctAnswer: 'Não usa conectivos comparativos (como, igual a)' }
          ]
        }
      ]
    }
  ],
'8º Ano': [
    {
      id: 'unit-1',
      title: 'Termos Acessórios e Vozes Verbais',
      description: 'Adjuntos, Aposto, Vocativo e Voz Ativa/Passiva.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Adjunto Adnominal e Adverbial',
          type: 'study',
          explanation: 'Adnominal: qualifica o nome (O [meu] carro [velho] quebrou). Adverbial: indica circunstância ao verbo (O carro quebrou [ontem]).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Na frase "Acordei DE MADRUGADA", o trecho destacado é um adjunto:', options: ['Adnominal', 'Adverbial de tempo'], correctAnswer: 'Adverbial de tempo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O adjunto adnominal acompanha o:', options: ['Verbo', 'Substantivo (Nome)'], correctAnswer: 'Substantivo (Nome)' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Aposto e Vocativo',
          type: 'study',
          explanation: 'Aposto: explica um termo (Pelé, [o rei do futebol], chegou). Vocativo: um chamamento ([Mãe], vem cá!).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Garoto, preste atenção!" A palavra "Garoto" exerce a função de:', options: ['Aposto', 'Vocativo', 'Sujeito'], correctAnswer: 'Vocativo' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Brasília, a capital do Brasil, é linda." A parte entre vírgulas é um:', options: ['Vocativo', 'Aposto explicativo'], correctAnswer: 'Aposto explicativo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Voz Ativa e Passiva',
          type: 'study',
          explanation: 'Ativa: sujeito PRATICA a ação (O gato comeu o rato). Passiva: sujeito SOFRE a ação (O rato foi comido pelo gato).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"A casa foi construída pelos pedreiros." A voz do verbo é:', options: ['Ativa', 'Passiva'], correctAnswer: 'Passiva' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na voz ativa, o sujeito:', options: ['Pratica a ação', 'Sofre a ação'], correctAnswer: 'Pratica a ação' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Agente da Passiva',
          type: 'study',
          explanation: 'O Agente da Passiva é quem de fato pratica a ação na voz passiva. (O rato foi comido [pelo gato]).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"O bolo foi feito POR MARIA." "Por Maria" é o:', options: ['Sujeito simples', 'Agente da passiva', 'Objeto indireto'], correctAnswer: 'Agente da passiva' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Se passarmos "Maria fez o bolo" para a passiva, Maria se torna o:', options: ['Sujeito', 'Agente da passiva'], correctAnswer: 'Agente da passiva' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Meninos, venham jantar." Meninos é:', options: ['Vocativo', 'Aposto'], correctAnswer: 'Vocativo' },
            { id: 'q2', type: 'multiple_choice', prompt: '"O livro foi lido por ele." Voz:', options: ['Ativa', 'Passiva'], correctAnswer: 'Passiva' },
            { id: 'q3', type: 'multiple_choice', prompt: '"por ele" na frase acima desempenha a função de:', options: ['Agente da passiva', 'Sujeito'], correctAnswer: 'Agente da passiva' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Em "Carro [azul]", "azul" sintaticamente é:', options: ['Adjunto Adverbial', 'Adjunto Adnominal'], correctAnswer: 'Adjunto Adnominal' },
            { id: 'q5', type: 'multiple_choice', prompt: '"D. Pedro II, imperador do Brasil..." O trecho entre vírgulas é um:', options: ['Aposto', 'Vocativo'], correctAnswer: 'Aposto' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'Período Composto: Orações Coordenadas',
      description: 'Estrutura das orações independentes e o uso de conjunções.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - O que é Oração Coordenada?',
          type: 'study',
          explanation: 'Orações coordenadas são independentes (uma não precisa da outra para existir). Elas podem ter conjunção (Sindéticas) ou não (Assindéticas).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Orações que são independentes entre si sintaticamente são chamadas de:', options: ['Subordinadas', 'Coordenadas'], correctAnswer: 'Coordenadas' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Chegou, sentou, comeu." Estas orações não têm conjunções ligando-as, logo são coordenadas:', options: ['Sindéticas', 'Assindéticas (sem conjunção)'], correctAnswer: 'Assindéticas (sem conjunção)' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Coordenadas Aditivas e Adversativas',
          type: 'study',
          explanation: 'Aditivas: soma (e, nem). Adversativas: oposição/quebra de expectativa (mas, porém, contudo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Estudei muito, MAS não passei." A conjunção "mas" introduz uma ideia:', options: ['Aditiva', 'Adversativa (oposição)'], correctAnswer: 'Adversativa (oposição)' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Foi ao mercado E comprou pão." Qual a relação?', options: ['Soma (Aditiva)', 'Oposição'], correctAnswer: 'Soma (Aditiva)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Coordenadas Alternativas',
          type: 'study',
          explanation: 'Alternativas indicam opção ou escolha (ou...ou, ora...ora, quer...quer). Ex: "Ou estuda, ou trabalha."',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "Ou você fala agora, ou cala-se para sempre", a ideia é de:', options: ['Adição', 'Alternância', 'Conclusão'], correctAnswer: 'Alternância' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A conjunção típica das alternativas é o:', options: ['Mas', 'Ou', 'Portanto'], correctAnswer: 'Ou' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Coordenadas Conclusivas e Explicativas',
          type: 'study',
          explanation: 'Conclusivas: finaliza ideia (logo, portanto). Explicativas: justificativa/motivo (pois, porque).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Penso, LOGO existo." A oração é:', options: ['Conclusiva', 'Explicativa'], correctAnswer: 'Conclusiva' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Não saia, PORQUE vai chover." A oração é:', options: ['Aditiva', 'Explicativa'], correctAnswer: 'Explicativa' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Ele não só canta, MAS TAMBÉM dança." Essa é uma oração coordenada:', options: ['Adversativa', 'Aditiva'], correctAnswer: 'Aditiva' },
            { id: 'q2', type: 'multiple_choice', prompt: 'As orações coordenadas assindéticas não utilizam:', options: ['Verbos', 'Vírgulas', 'Conjunções / Síndetos'], correctAnswer: 'Conjunções / Síndetos' },
            { id: 'q3', type: 'multiple_choice', prompt: '"O time jogou bem, CONTUDO perdeu o jogo." A relação expressa é de:', options: ['Adição', 'Adversidade / Oposição'], correctAnswer: 'Adversidade / Oposição' },
            { id: 'q4', type: 'multiple_choice', prompt: '"ORA ria, ORA chorava." Indica:', options: ['Explicação', 'Alternância'], correctAnswer: 'Alternância' },
            { id: 'q5', type: 'multiple_choice', prompt: '"Choveu muito; LOGO, as ruas estão alagadas." Indica:', options: ['Conclusão', 'Adversidade'], correctAnswer: 'Conclusão' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Regência e Concordância',
      description: 'Regência Nominal e Verbal Básica. Concordância Avançada.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Regência Verbal I',
          type: 'study',
          explanation: 'A regência estuda se o verbo pede preposição ou não. Ex: O verbo ASSISTIR (ver) pede preposição A. "Assisti AO filme" (e não "assisti o filme").',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A forma correta segundo a norma culta é:', options: ['Assistimos o jogo.', 'Assistimos AO jogo.'], correctAnswer: 'Assistimos AO jogo.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O verbo IR exige preposição A. Qual o correto?', options: ['Vou NO cinema.', 'Vou AO cinema.'], correctAnswer: 'Vou AO cinema.' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Regência Nominal',
          type: 'study',
          explanation: 'Nomes (substantivos, adjetivos) também pedem preposições. Ex: Tenho MEDO (de quê?) DE escuro. Estou APTO (a quê?) A trabalhar.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A regência do adjetivo "ansioso" pede preposição. "Estou ansioso ___ resultado."', options: ['pelo / por', 'no'], correctAnswer: 'pelo / por' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Ele é alérgico ___ poeira." Qual a preposição correta?', options: ['em', 'a'], correctAnswer: 'a' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Concordância Verbal (Casos Especiais)',
          type: 'study',
          explanation: 'Verbo FAZER indicando tempo não vai para o plural (FAZ dez anos, não "fazem"). Verbo HAVER no sentido de existir também não (HÁ problemas, não "hão").',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A forma correta é:', options: ['Fazem dois dias.', 'Faz dois dias.'], correctAnswer: 'Faz dois dias.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual oração está correta?', options: ['Havia muitas pessoas.', 'Haviam muitas pessoas.'], correctAnswer: 'Havia muitas pessoas.' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Concordância Nominal (Casos Especiais)',
          type: 'study',
          explanation: 'Palavras como "Meio" e "Anexo" variam? Anexo concorda com o substantivo (A foto vai ANEXA). Meio = um pouco não varia (Ela está MEIO cansada, e não meia).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Ela estava _____ confusa." (um pouco confusa).', options: ['meia', 'meio'], correctAnswer: 'meio' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Seguem _____ os documentos solicitados."', options: ['anexo', 'anexos'], correctAnswer: 'anexos' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Complete corretamente: "_____ muitos anos que não viajo."', options: ['Fazem', 'Faz'], correctAnswer: 'Faz' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O verbo OBEDECER pede a preposição A. Qual frase é a correta?', options: ['Obedeço meu pai.', 'Obedeço AO meu pai.'], correctAnswer: 'Obedeço AO meu pai.' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Bebi _____ garrafa de água." (metade).', options: ['meio', 'meia'], correctAnswer: 'meia' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Se "meio" for advérbio (um pouco), a palavra:', options: ['Varia em gênero e número', 'É invariável (não muda)'], correctAnswer: 'É invariável (não muda)' },
            { id: 'q5', type: 'multiple_choice', prompt: '"Aquela mulher é alérgica ___ gatos."', options: ['em', 'por', 'a'], correctAnswer: 'a' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'Textos Argumentativos e Interpretação Crítica',
      description: 'Artigo de opinião, Crônica argumentativa e construção de opinião.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Artigo de Opinião',
          type: 'study',
          explanation: 'Gênero em que o autor expressa seu PONTO DE VISTA sobre um assunto polêmico, usando ARGUMENTOS para convencer o leitor.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O objetivo principal de um Artigo de Opinião é:', options: ['Apenas informar uma notícia', 'Convencer o leitor sobre a opinião do autor', 'Contar uma fábula'], correctAnswer: 'Convencer o leitor sobre a opinião do autor' },
            { id: 'q2', type: 'multiple_choice', prompt: 'O posicionamento defendido pelo autor é chamado de:', options: ['Estrofe', 'Tese (Ponto de vista)'], correctAnswer: 'Tese (Ponto de vista)' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - O Que São Argumentos?',
          type: 'study',
          explanation: 'Argumentos são as "provas" que o autor usa para defender sua tese: dados estatísticos, opiniões de especialistas, fatos históricos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Para que a tese seja forte, o que é preciso apresentar no texto?', options: ['Apenas opiniões sem base', 'Bons argumentos', 'Rimas'], correctAnswer: 'Bons argumentos' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Citar um dado do IBGE em um texto é um exemplo de:', options: ['Argumento de autoridade / dados de pesquisa', 'Metáfora'], correctAnswer: 'Argumento de autoridade / dados de pesquisa' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Fato x Opinião',
          type: 'study',
          explanation: 'Fato é algo que aconteceu e pode ser provado ("Hoje é segunda-feira"). Opinião é o julgamento sobre algo ("A segunda-feira é chata").',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"O filme dura duas horas." Isso é:', options: ['Fato', 'Opinião'], correctAnswer: 'Fato' },
            { id: 'q2', type: 'multiple_choice', prompt: '"O filme foi excelente." Isso é:', options: ['Fato', 'Opinião'], correctAnswer: 'Opinião' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão de Argumentação',
          type: 'study',
          explanation: 'Revisando as partes de um texto argumentativo: Introdução (apresenta a Tese), Desenvolvimento (os Argumentos) e Conclusão (fecha a ideia).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Os argumentos são desenvolvidos principalmente no:', options: ['Início do texto', 'Meio (desenvolvimento) do texto', 'Título'], correctAnswer: 'Meio (desenvolvimento) do texto' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Tese e Argumento andam juntos, mas quem justifica quem?', options: ['A tese justifica o argumento', 'O argumento justifica (prova) a tese'], correctAnswer: 'O argumento justifica (prova) a tese' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A Tese de um artigo de opinião é:', options: ['Um dado irrelevante', 'A ideia central defendida pelo autor', 'A bibliografia'], correctAnswer: 'A ideia central defendida pelo autor' },
            { id: 'q2', type: 'multiple_choice', prompt: '"O Brasil tem 5 regiões." Isso é:', options: ['Um Fato', 'Uma Opinião'], correctAnswer: 'Um Fato' },
            { id: 'q3', type: 'multiple_choice', prompt: 'Um bom argumento deve:', options: ['Não ter sentido', 'Ajudar a convencer o leitor de que a tese é válida', 'Mudar o assunto do texto'], correctAnswer: 'Ajudar a convencer o leitor de que a tese é válida' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Artigo de opinião pertence aos gêneros de base:', options: ['Narrativa', 'Dissertativo-Argumentativa'], correctAnswer: 'Dissertativo-Argumentativa' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Num debate, para vencer é importante saber separar:', options: ['Verbos e sujeitos', 'Fatos (que são inegáveis) das Opiniões (que são pontos de vista pessoais)', 'Poesia e Prosa'], correctAnswer: 'Fatos (que são inegáveis) das Opiniões (que são pontos de vista pessoais)' }
          ]
        }
      ]
    }
  ],
  '9º Ano': [
    {
      id: 'unit-1',
      title: 'Período Composto por Subordinação',
      description: 'Orações Subordinadas Substantivas, Adjetivas e Adverbiais.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - O que é Subordinação?',
          type: 'study',
          explanation: 'Na subordinação, uma oração DEPENDE sintaticamente da outra para fazer sentido. A oração principal precisa da oração subordinada.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Diferente da coordenação, na subordinação as orações são:', options: ['Independentes', 'Dependentes entre si sintaticamente'], correctAnswer: 'Dependentes entre si sintaticamente' },
            { id: 'q2', type: 'multiple_choice', prompt: '"É necessário QUE VOCÊ ESTUDE." A oração destacada é subordinada porque:', options: ['Completa o sentido da oração principal "É necessário"', 'Não tem verbo'], correctAnswer: 'Completa o sentido da oração principal "É necessário"' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Orações Subordinadas Substantivas',
          type: 'study',
          explanation: 'Têm valor de substantivo, exercendo função de sujeito, objeto direto etc. São introduzidas pelas conjunções integrantes QUE ou SE.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Espero QUE VOCÊ VOLTE". A oração atua como objeto direto do verbo "esperar". É uma subordinada:', options: ['Substantiva', 'Adjetiva'], correctAnswer: 'Substantiva' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Qual é a conjunção que geralmente introduz a oração substantiva?', options: ['Porém', 'Que / Se'], correctAnswer: 'Que / Se' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Orações Subordinadas Adjetivas',
          type: 'study',
          explanation: 'Têm valor de adjetivo, e sempre vêm depois de um PRONOME RELATIVO (que, o qual, onde). Explicativas (com vírgula) ou Restritivas (sem vírgula).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"O livro QUE COMPREI é bom." A oração "que comprei" especifica qual livro é. Ela é:', options: ['Adverbial', 'Adjetiva restritiva'], correctAnswer: 'Adjetiva restritiva' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A oração adjetiva explicativa vem sempre separada por:', options: ['Ponto final', 'Vírgulas'], correctAnswer: 'Vírgulas' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Orações Subordinadas Adverbiais',
          type: 'study',
          explanation: 'Têm valor de advérbio, indicando circunstâncias (tempo, causa, condição). Ex: "QUANDO chove, fico em casa." (Tempo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"COMO choveu, o jogo foi cancelado." A oração indica:', options: ['Tempo', 'Causa / Motivo'], correctAnswer: 'Causa / Motivo' },
            { id: 'q2', type: 'multiple_choice', prompt: '"SE você estudar, passará." A conjunção "SE" introduz uma oração adverbial:', options: ['Condicional', 'Temporal'], correctAnswer: 'Condicional' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 1',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Orações subordinadas são aquelas que:', options: ['Não dependem da oração principal', 'Dependem sintaticamente da oração principal'], correctAnswer: 'Dependem sintaticamente da oração principal' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Só viajarei SE NÃO CHOVER." A oração destacada impõe uma:', options: ['Condição (Adverbial)', 'Explicação (Adjetiva)'], correctAnswer: 'Condição (Adverbial)' },
            { id: 'q3', type: 'multiple_choice', prompt: 'As orações subordinadas adjetivas que vêm entre vírgulas para explicar o nome são as:', options: ['Substantivas objetivas', 'Adjetivas explicativas'], correctAnswer: 'Adjetivas explicativas' },
            { id: 'q4', type: 'multiple_choice', prompt: '"A verdade é QUE ELE MENTIU." A oração destacada tem valor de:', options: ['Adjetivo', 'Substantivo'], correctAnswer: 'Substantivo' },
            { id: 'q5', type: 'multiple_choice', prompt: 'Os pronomes relativos (como "que", "cujo", "o qual") introduzem orações:', options: ['Subordinadas Adjetivas', 'Coordenadas Aditivas'], correctAnswer: 'Subordinadas Adjetivas' }
          ]
        }
      ]
    },
    {
      id: 'unit-2',
      title: 'A Crase e Regência Avançada',
      description: 'O que é a Crase (fusão de A + A), regras de uso e proibições.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - O Conceito da Crase',
          type: 'study',
          explanation: 'Crase ( à ) é a união da Preposição "A" + o Artigo "A". Só ocorre antes de palavras FEMININAS. (Vou à escola = Vou a + a escola).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A crase é a fusão de duas letras "a". Quais são elas?', options: ['Artigo + Artigo', 'Preposição + Artigo feminino'], correctAnswer: 'Preposição + Artigo feminino' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Para haver crase (à), a palavra seguinte obrigatoriamente deve ser:', options: ['Feminina', 'Masculina', 'Verbo'], correctAnswer: 'Feminina' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Onde a Crase é Proibida?',
          type: 'study',
          explanation: 'Nunca se usa crase antes de verbos ("A partir"), antes de palavras masculinas ("Andar a pé") e pronomes indefinidos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Qual expressão está CORRETA (onde não deve ter crase)?', options: ['Andar à pé', 'Andar a pé'], correctAnswer: 'Andar a pé' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A crase ANTES de verbos (ex: a partir, a fazer) é:', options: ['Obrigatória', 'Proibida'], correctAnswer: 'Proibida' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Crase Facultativa',
          type: 'study',
          explanation: 'A crase é facultativa (você escolhe se usa ou não) antes de pronomes possessivos femininos (à minha/a minha) e nomes de mulheres (à Maria/a Maria).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Em "Entreguei a carta à minha mãe", a crase é:', options: ['Proibida', 'Facultativa', 'Obrigatória e sem exceção'], correctAnswer: 'Facultativa' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Antes de nome próprio feminino, o uso da crase é:', options: ['Proibido', 'Facultativo'], correctAnswer: 'Facultativo' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Regência de Verbos Especiais',
          type: 'study',
          explanation: 'Aspirar (cheirar) = não pede "a". Aspirar (desejar) = pede "a". Implicar (brigar) = "implicar com". Implicar (resultar) = não tem preposição.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Ele aspira (deseja) AO cargo de gerente." A regência está:', options: ['Correta', 'Incorreta'], correctAnswer: 'Correta' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Essa atitude implica (resulta) EM punição" no uso culto rigoroso é:', options: ['Correto, com preposição EM', 'Incorreto, implicar no sentido de resultar não pede preposição (implica punição)'], correctAnswer: 'Incorreto, implicar no sentido de resultar não pede preposição (implica punição)' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 2',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Marque a frase em que a crase foi usada corretamente:', options: ['Ele foi à feira.', 'Ele foi à passear.', 'Vendeu à prazo.'], correctAnswer: 'Ele foi à feira.' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Usa-se crase antes de palavras masculinas?', options: ['Sempre', 'Nunca'], correctAnswer: 'Nunca' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Chegamos à uma da tarde." Usa-se crase antes de:', options: ['Horas especificadas', 'Verbos', 'Nomes masculinos'], correctAnswer: 'Horas especificadas' },
            { id: 'q4', type: 'multiple_choice', prompt: 'Em "Pintura à mão" ou "Filé à milanesa" a crase existe porque:', options: ['Está subentendida a expressão "à moda de" ou é uma locução feminina', 'A palavra "mão" é masculina'], correctAnswer: 'Está subentendida a expressão "à moda de" ou é uma locução feminina' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A crase é a contração da preposição A com o artigo:', options: ['O', 'A'], correctAnswer: 'A' }
          ]
        }
      ]
    },
    {
      id: 'unit-3',
      title: 'Figuras de Linguagem Avançadas',
      description: 'Paradoxo, Antítese, Eufemismo, Hipérbole e Ironia.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - Antítese e Paradoxo',
          type: 'study',
          explanation: 'Antítese aproxima palavras de sentidos opostos (Tristeza não tem fim, felicidade sim). Paradoxo une ideias ilógicas e contraditórias (Estou cego, mas vejo tudo).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"O amor é um fogo que arde sem se ver, é ferida que dói e não se sente" (Camões). A fusão de coisas impossíveis de coexistirem é um:', options: ['Paradoxo', 'Eufemismo'], correctAnswer: 'Paradoxo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Usar Claro e Escuro, Bem e Mal na mesma frase, sem ser impossível, é uma:', options: ['Antítese', 'Hipérbole'], correctAnswer: 'Antítese' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - Hipérbole e Eufemismo',
          type: 'study',
          explanation: 'Hipérbole é o exagero ("Chorei rios de lágrimas"). Eufemismo é suavizar algo ruim ("Ele partiu dessa para melhor" em vez de "morreu").',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Estou morrendo de fome!" A figura de linguagem do exagero é:', options: ['Eufemismo', 'Hipérbole', 'Ironia'], correctAnswer: 'Hipérbole' },
            { id: 'q2', type: 'multiple_choice', prompt: '"O garoto subtraiu (roubou) o doce." Para suavizar a palavra roubou, usamos um:', options: ['Eufemismo', 'Paradoxo'], correctAnswer: 'Eufemismo' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Ironia e Prosopopeia',
          type: 'study',
          explanation: 'Ironia é dizer o contrário do que se pensa para fazer uma crítica ("Que inteligente, tirou zero!"). Prosopopeia é dar vida a coisas sem vida ("A lua sorriu").',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"O vento sussurrava nas árvores." Dar ação humana ao vento é:', options: ['Prosopopeia (ou Personificação)', 'Ironia'], correctAnswer: 'Prosopopeia (ou Personificação)' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Você é tão rápido quanto uma tartaruga!" A figura que afirma o contrário do que se quer dizer (zombaria) é:', options: ['Hipérbole', 'Ironia'], correctAnswer: 'Ironia' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - Revisão Literária',
          type: 'study',
          explanation: 'Praticando todas as figuras de linguagem para o exame!',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Exagero intencional é chamado de:', options: ['Paradoxo', 'Hipérbole'], correctAnswer: 'Hipérbole' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Aproximar palavras opostas de forma lógica (ex: rico e pobre) é:', options: ['Antítese', 'Eufemismo'], correctAnswer: 'Antítese' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 3',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: '"Já te falei um milhão de vezes!" Qual é a figura?', options: ['Antítese', 'Hipérbole (Exagero)', 'Eufemismo'], correctAnswer: 'Hipérbole (Exagero)' },
            { id: 'q2', type: 'multiple_choice', prompt: '"Ele descansou em paz." Qual é a figura?', options: ['Eufemismo (Suavização)', 'Ironia', 'Paradoxo'], correctAnswer: 'Eufemismo (Suavização)' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Que letra linda, não dá para ler nada!" Qual é a figura?', options: ['Prosopopeia', 'Metáfora', 'Ironia'], correctAnswer: 'Ironia' },
            { id: 'q4', type: 'multiple_choice', prompt: '"O silêncio gritou na sala." Isso representa ideias que se anulam (como o silêncio gritar), sendo um:', options: ['Paradoxo', 'Antítese'], correctAnswer: 'Paradoxo' },
            { id: 'q5', type: 'multiple_choice', prompt: 'A Prosopopeia (ou personificação) ocorre quando:', options: ['Aumentamos o tamanho de algo', 'Damos qualidades e ações humanas a seres inanimados ou animais', 'Usamos palavras opostas'], correctAnswer: 'Damos qualidades e ações humanas a seres inanimados ou animais' }
          ]
        }
      ]
    },
    {
      id: 'unit-4',
      title: 'A Dissertação-Argumentativa',
      description: 'Preparação para o Ensino Médio e os grandes exames.',
      days: [
        {
          id: 'day-1',
          title: 'DIA 1 - A Estrutura do Texto',
          type: 'study',
          explanation: 'A Dissertação (ENEM/Vestibulares) exige: Introdução (apresenta tese), Desenvolvimento (argumentos fortes) e Conclusão (proposta de intervenção/solução).',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A estrutura de base da Dissertação-Argumentativa é:', options: ['Introdução, Desenvolvimento e Conclusão', 'Versos, Rimas e Estrofes', 'Moral da história e Fábulas'], correctAnswer: 'Introdução, Desenvolvimento e Conclusão' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Na Dissertação, você NÃO deve:', options: ['Usar linguagem formal', 'Escrever na 1ª pessoa (eu acho que...) baseando-se em achismos', 'Defender um ponto de vista com fatos'], correctAnswer: 'Escrever na 1ª pessoa (eu acho que...) baseando-se em achismos' }
          ]
        },
        {
          id: 'day-2',
          title: 'DIA 2 - O Tópico Frasal',
          type: 'study',
          explanation: 'Tópico frasal é a frase inicial de cada parágrafo de desenvolvimento. Ela resume a ideia principal que será explicada a seguir.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'O tópico frasal serve para:', options: ['Terminar a redação', 'Apresentar a ideia núcleo/principal logo no início do parágrafo', 'Fazer uma pergunta sem resposta'], correctAnswer: 'Apresentar a ideia núcleo/principal logo no início do parágrafo' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Um bom desenvolvimento deve ter, além do tópico frasal, a sua:', options: ['Rima', 'Fundamentação (dados, exemplos)'], correctAnswer: 'Fundamentação (dados, exemplos)' }
          ]
        },
        {
          id: 'day-3',
          title: 'DIA 3 - Conectivos de Coesão',
          type: 'study',
          explanation: 'Para amarrar as ideias, usamos os conectivos: "Portanto", "Por outro lado", "Além disso", "Nesse sentido". Um texto sem conectivos perde pontos.',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Para iniciar a Conclusão do texto, um conectivo ideal é:', options: ['No entanto', 'Portanto / Dessa forma', 'Em primeiro lugar'], correctAnswer: 'Portanto / Dessa forma' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Para somar um novo argumento no segundo parágrafo de desenvolvimento, usamos:', options: ['Além disso / Ademais', 'Todavia / Porém'], correctAnswer: 'Além disso / Ademais' }
          ]
        },
        {
          id: 'day-4',
          title: 'DIA 4 - A Proposta de Intervenção',
          type: 'study',
          explanation: 'Na Conclusão da dissertação do ENEM, você deve dar uma solução detalhada para o problema. Quem vai fazer? O que vai fazer? Como? Para quê?',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'Uma proposta de intervenção eficiente deve:', options: ['Respeitar os direitos humanos e ser detalhada', 'Ser mágica e impossível de realizar', 'Culpar os outros sem dar solução'], correctAnswer: 'Respeitar os direitos humanos e ser detalhada' },
            { id: 'q2', type: 'multiple_choice', prompt: 'Identificar o AGENTE da proposta significa dizer:', options: ['Qual o problema', 'Quem (ex: Governo, Escola) vai resolver o problema'], correctAnswer: 'Quem (ex: Governo, Escola) vai resolver o problema' }
          ]
        },
        {
          id: 'day-5',
          title: 'PROVA DA UNIDADE 4',
          type: 'exam',
          questions: [
            { id: 'q1', type: 'multiple_choice', prompt: 'A Dissertação-Argumentativa tem como objetivo principal:', options: ['Contar uma história de ficção', 'Defender uma tese através de argumentos e convencer o leitor', 'Apenas informar sem tomar partido'], correctAnswer: 'Defender uma tese através de argumentos e convencer o leitor' },
            { id: 'q2', type: 'multiple_choice', prompt: 'A proposta de intervenção (solução) deve estar em qual parte do texto?', options: ['Na Introdução', 'No Desenvolvimento', 'Na Conclusão'], correctAnswer: 'Na Conclusão' },
            { id: 'q3', type: 'multiple_choice', prompt: '"Todavia", "Entretanto" e "Porém" são conectivos usados para ideias de:', options: ['Conclusão', 'Adversidade / Quebra de expectativa', 'Soma'], correctAnswer: 'Adversidade / Quebra de expectativa' },
            { id: 'q4', type: 'multiple_choice', prompt: 'A linguagem exigida na dissertação escolar/vestibular deve ser:', options: ['Cheia de gírias e informal', 'A Norma Culta / Formal da língua portuguesa'], correctAnswer: 'A Norma Culta / Formal da língua portuguesa' },
            { id: 'q5', type: 'multiple_choice', prompt: 'O Tópico Frasal é:', options: ['A frase que resume a ideia principal de um parágrafo', 'O título do texto', 'A última palavra do texto'], correctAnswer: 'A frase que resume a ideia principal de um parágrafo' }
          ]
        }
      ]
    }
  ]
};

