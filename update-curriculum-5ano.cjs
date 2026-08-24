const fs = require('fs');

const data = fs.readFileSync('src/data/portugueseCurriculum.ts', 'utf8');

const regex = /'5º Ano':\s*\[[\s\S]*?\],\n  '6º Ano':/m;

const new5Ano = `'5º Ano': [
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
  '6º Ano':`;

const newData = data.replace(regex, new5Ano);
fs.writeFileSync('src/data/portugueseCurriculum.ts', newData, 'utf8');

console.log("Updated portugueseCurriculum.ts for 5º Ano successfully!");
