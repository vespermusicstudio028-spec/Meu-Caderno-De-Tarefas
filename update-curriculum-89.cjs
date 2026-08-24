const fs = require('fs');
let data = fs.readFileSync('src/data/portugueseCurriculum.ts', 'utf8');

const regex = /\n};/m;

const new89 = `'8º Ano': [
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
`;
data = data.replace(/\n};/m, ',\n' + new89);
fs.writeFileSync('src/data/portugueseCurriculum.ts', data, 'utf8');
