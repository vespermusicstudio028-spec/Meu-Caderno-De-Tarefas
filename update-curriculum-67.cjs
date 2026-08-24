const fs = require('fs');
let data = fs.readFileSync('src/data/portugueseCurriculum.ts', 'utf8');

const new6 = `'6º Ano': [
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
`;

data = data.replace(/'6º Ano':[\s\S]*\}\s*;/m, new6 + '  \n};');
fs.writeFileSync('src/data/portugueseCurriculum.ts', data, 'utf8');
