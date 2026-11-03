// Lote 6.1: mundo 1 da exploração (Pelletier, etapa 1, subtarefa 1). CONTEÚDO DE EXEMPLO: só o que a Dra. Anaí disse na reunião
// de 30/10 (Transcricao-reuniao-2026-10-30.md, horário em cada "origem"). O que ela não disse fica null e aparece na tela como
// "a Dra. Anaí vai escrever". A lista dela substitui este arquivo, com as mesmas chaves; a planilha modelo tem as mesmas colunas
// (artes/mundos/parque-aquatico-modelo.csv). O lugar de cada atividade no mapa é escolha da L2M, não dela.
(window.MUNDOS=window.MUNDOS||{})['parque-aquatico']={
 exemplo:true,
 titulo:'Parque aquático',
 subtarefa:'Perceber que no meio existem problemas a resolver, e que pessoas os resolvem com o seu trabalho.',
 enunciado:'Vamos montar um parque aquático. Ele tem que ser divertido, bonito, seguro e agradável em todas as épocas do ano. Para isso, será preciso pensar em diferentes aspectos do projeto. Por onde começar? Vamos montar uma equipe.',
 origemEnunciado:'30/10, 12:38, texto lido por ela',
 // As profissões que ela citou; os nomes podem seguir a CBO (código a conferir quando a lista dela chegar).
 profissionais:[
  {id:'administrador',nome:'Administrador de empresas',cbo:null,origem:'30/10, 14:11'},
  {id:'psicologo',nome:'Psicólogo',cbo:null,origem:'30/10, 14:11'},
  {id:'publicitario',nome:'Publicitário',cbo:null,origem:'30/10, 18:35'},
  {id:'fisioterapeuta',nome:'Fisioterapeuta',cbo:null,origem:'30/10, 14:58'}
 ],
 // Em cada lugar: a atividade, o que cada profissional diz ao entrar na equipe, quem é esperado ou fora do esperado, quem é
 // prioritário e o que ele diz quando se oferece. "fala: null" usa a frase geral dela ("sim, eu posso fazer isso por essa
 // atividade", 14:11) e marca a lacuna do que ele faria ali.
 lugares:[
  {id:'bilheteria',nome:'Bilheteria',atividade:'Estudar e identificar o interesse da população para a abertura do parque na região escolhida.',origem:'30/10, 13:25',
   prioritario:'publicitario',voluntario:'Não esquece de mim! Eu faço a pesquisa de mercado.',
   equipe:{
    administrador:{encaixe:'esperado',fala:'Sim, eu posso fazer isso por esta atividade. No meu campo, eu faço o planejamento total.',explicacao:null,origem:'30/10, 14:11 e 14:58'},
    psicologo:{encaixe:null,fala:null,explicacao:null,origem:'30/10, 14:11'},
    publicitario:{encaixe:'esperado',fala:'Sim, eu posso fazer isso por esta atividade. Eu faço a pesquisa de mercado.',explicacao:null,origem:'30/10, 19:20'},
    fisioterapeuta:{encaixe:'fora',fala:null,explicacao:'O fisioterapeuta pode participar desta atividade. Ele não é a primeira escolha da sua equipe.',origem:'30/10, 14:58 e 18:35'}
   }},
  {id:'piscina',nome:'Piscina',atividade:'O encanamento está vazando.',origem:'30/10, 25:48',prioritario:null,voluntario:null,equipe:{}},
  {id:'lanchonete',nome:'Lanchonete',atividade:'A conta de luz não foi paga.',origem:'30/10, 25:48',prioritario:null,voluntario:null,equipe:{}},
  {id:'enfermaria',nome:'Enfermaria',atividade:'Tem uma criança chorando.',origem:'30/10, 25:48',prioritario:null,voluntario:null,equipe:{}},
  {id:'toboagua',nome:'Toboágua',atividade:null,origem:null,prioritario:null,voluntario:null,equipe:{}},
  {id:'estacionamento',nome:'Estacionamento',atividade:null,origem:null,prioritario:null,voluntario:null,equipe:{}}
 ],
 fechamento:'Você percebeu que muitos profissionais estão envolvidos com os mesmos problemas?',
 origemFechamento:'30/10, 19:20'
};
