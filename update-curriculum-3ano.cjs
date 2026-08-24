const fs = require('fs');

const data = fs.readFileSync('src/data/portugueseCurriculum.ts', 'utf8');

const regex = /'3º Ano':\s*\[[\s\S]*?\],\n  '4º Ano':/m;

const new3Ano = `'3º Ano': [
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
  '4º Ano':`;

const newData = data.replace(regex, new3Ano);
fs.writeFileSync('src/data/portugueseCurriculum.ts', newData, 'utf8');

console.log("Updated portugueseCurriculum.ts for 3º Ano successfully!");
