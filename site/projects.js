// Edit these entries to update the portfolio. Paths are relative for GitHub Pages.
const projects = [
  {
    id: 'racino-racing', title: 'Racino Motorsport', category: 'professional', featured: true,
    kicker: 'RACINO / 2022 — PRESENT', label: 'FEATURED PROJECT', image: 'racino-racing.webp',
    alt: 'Open-wheel racing on Racino’s Australia circuit',
    videos: [
      {type:'file',src:'assets/video/racino-motorsport.mp4',poster:'assets/video/racino-motorsport.webp',title:'Open-wheel racing',caption:'A short gameplay excerpt from Racino Motorsport.'},
      {type:'file',src:'assets/video/racino-race-intro.mp4',poster:'assets/video/racino-race-intro.webp',title:'Race introduction',caption:'The pre-race presentation, drivers, and starting grid.'}
    ],
    description: 'Automated racing, built for the spectator. A Unity platform for realistic open-wheel racing and multiple vehicle types, including stock cars.',
    tags: ['Unity', 'Virtual sports', 'WebGL'], role: 'Senior Unity Developer',
    intro: 'At Racino, I lead Unity development for an automated racing platform. The work connects racing game systems with the presentation and delivery needed to turn a simulation into a spectator experience.',
    contributions: ['Implemented game systems and integrated art, audio, and UI.', 'Managed Addressables and WebGL build deployment.', 'Worked across an expandable racing platform supporting different vehicle types.'],
    context: 'The racing platform spans open-wheel and stock-car scenes, with broadcast camera direction, liveries, and lighting configurations that support different racing presentations.',
    links: [{label:'Racino website',url:'https://racino.io/'},{label:'F1 showcase video',url:'https://drive.google.com/file/d/1mZH94Br1vqYNgdVMZ5HcVTagrcjXKvCD/view'},{label:'More racing footage',url:'https://drive.google.com/drive/folders/1AdZjJ5QR7XYTs06UEKF-n9TK8Ft4FR1S'}]
  },
  {
    id: 'deep-space-waifu', title: 'Deep Space Waifu', category: 'professional', kicker: 'HAMMERFIST STUDIOS / PC', label: 'SHIPPED SERIES', mature: true,
    description: 'Arcade shoot ’em up development across the original game and five follow-up titles. Core gameplay, integration, and Steam release pipelines.',
    tags: ['Unity', 'Arcade shooter', 'Steam', '18+ title'], role: 'Unity Developer · From the ground up',
    intro: 'I developed Deep Space Waifu and its five follow-up titles from the ground up during my time at Hammerfist Studios. The series combines accessible arcade shooting with an adult audience and a distinctive visual identity.',
    contributions: ['Developed core gameplay code across the original and follow-up projects.', 'Integrated art assets, audio, and user interfaces.', 'Orchestrated desktop build pipelines and Steam SDK integration.'],
    context: 'A shipped series spanning the original release, Flat Justice, Fantasy, Nekomimi, World, and Legends. Several store listings have since been retired; the archive links preserve the project’s history.',
    review: true,
    expansions: [{name:'Flat Justice',url:'https://steamdb.info/app/639780/'},{name:'Fantasy',url:'https://store.steampowered.com/app/859680/'},{name:'Nekomimi',url:'https://store.steampowered.com/app/868980/'},{name:'World',url:'https://store.steampowered.com/app/872130/'},{name:'Legends',url:'https://store.steampowered.com/app/1170620/'}],
    links: [{label:'Original game archive · 18+',url:'https://steamdb.info/app/639790/'},{label:'Series coverage · 18+',url:'https://moegamer.net/all-games/deep-space-waifu/'}]
  },
  {
    id: 'racino-marbles', title: 'Racino Marbles', category: 'professional', kicker: 'RACINO / VIRTUAL SPORTS', label: 'RACING & REPLAY', image:'racino-marbles.webp',
    alt:'Two marbles racing through a stadium circuit filled with colorful obstacles',
    videos:[{type:'file',src:'assets/video/racino-marbles.mp4',poster:'assets/video/racino-marbles.webp',title:'Marble racing gameplay',caption:'A head-to-head race through the stadium circuit.'}],
    description:'Marble racing with a broadcast point of view. Track-based competition, close-follow camera coverage, and recorded race replay workflows.',
    tags:['Unity', 'Marble racing', 'Replay'],role:'Unity Development · Racino',
    intro:'A different kind of race, with the same focus on making competition watchable. Racino Marbles brings marble racing into a Unity-based virtual sports setting.',
    contributions:[],
    context:'The project combines authored racing scenes, close-follow cameras, portrait broadcast layouts, and a desktop replay-generation workflow. Replay outputs are validated and recordings are retained for review.',
    links:[{label:'Racino website',url:'https://racino.io/'}]
  },
  {
    id:'racino-jousting',title:'Racino Jousting',category:'professional',kicker:'RACINO / PROTOTYPE',label:'IN DEVELOPMENT',image:'racino-jousting.webp',
    alt:'Armored mounted knights in the Racino Jousting tournament arena',
    videos:[{type:'file',src:'assets/video/racino-jousting.mp4',poster:'assets/video/racino-jousting.webp',title:'Jousting in action',caption:'A short vertical gameplay showcase from the development prototype.',portrait:true}],
    description:'Two autonomous riders. One spectacle. A spectator-focused jousting prototype, bringing together match simulation, replay, and tournament presentation.',
    tags:['Unity','Autonomous AI','Broadcast'],role:'Unity Development · Racino',
    intro:'Racino Jousting explores virtual sports beyond the racetrack. Two autonomous riders compete while spectators follow the action through a directed broadcast.',
    contributions:[],
    context:'The prototype separates match results from cameras, animation, and cosmetic effects. It brings together seeded replay, mounted riders, impact presentation, tournament scenery, and horizontal and vertical broadcast layouts.',
    links:[{label:'Racino website',url:'https://racino.io/'}]
  },
  {
    id:'tubelive',title:'Tubelive',category:'professional',kicker:'HAMMERFIST STUDIOS / PC',label:'SHIPPED PROJECT',image:'tubelive.webp',
    alt:'Tubelive streamer simulation interface showing a character broadcasting from their room',
    videos:[{type:'embed',src:'https://www.youtube-nocookie.com/embed/ec4myWYLpts',title:'Tubelive gameplay',caption:'Gameplay footage showing the streamer-life simulation in action.',url:'https://www.youtube.com/watch?v=ec4myWYLpts'}],
    description:'The life of a virtual streamer, built from the ground up. A simulation project known under different names during its lifetime, including Little Streamer Story.',
    tags:['Unity','Simulation','Steam'],role:'Unity Developer · From the ground up',
    intro:'Tubelive is a streamer-life simulation I developed from the ground up at Hammerfist Studios. The project changed names during its lifetime; my resume also links its Little Streamer Story listing.',
    contributions:['Developed core gameplay code.', 'Integrated art, audio, and UI into the game experience.', 'Managed desktop build pipelines and Steam SDK integration.'],
    context:'Gameplay footage and contemporary coverage remain available even where store access has changed.',
    links:[{label:'Watch gameplay',url:'https://www.youtube.com/watch?v=ec4myWYLpts'},{label:'Read contemporary coverage',url:'https://moegamer.net/2020/06/02/tubelive-living-the-streamer-dream/'},{label:'Game database entry',url:'https://www.igdb.com/games/tubelive/'}]
  },
  {
    id:'mullet-madjack',title:'Mullet MadJack',category:'professional',kicker:'HAMMERFIST STUDIOS / EARLY DEVELOPMENT',label:'EARLY PROTOTYPES',image:'mullet-madjack.webp',
    alt:'Official Mullet MadJack title artwork with bold neon anime styling',
    description:'Early prototype work on the project that became Mullet MadJack, exploring the foundations of a high-energy first-person action game.',
    tags:['Unity','Prototyping','FPS'],role:'Early prototype contribution',
    intro:'During my time at Hammerfist Studios, I contributed to part of the early prototyping for Mullet MadJack.',
    contributions:[],
    context:'My contribution was during early prototyping. The linked commercial game was later released by HAMMER95 in 2024; the cover artwork shows that eventual release.',
    links:[{label:'Released game on Steam',url:'https://store.steampowered.com/app/2111190/MULLET_MADJACK/'}]
  },
  {
    id:'navegatica',title:'Navegática',category:'professional',kicker:'FEEVALE UNIVERSITY / SCHOLARSHIP',label:'EDUCATIONAL GAME',image:'navegatica-1.webp',
    alt:'Navegática educational boating game, from Feevale University',
    gallery:[{src:'navegatica-2.webp',alt:'Navegática gameplay screenshot from the university archive'},{src:'navegatica-3.webp',alt:'Another scene from Navegática'}],
    playUrl:'https://games.feevale.br/loa/navegatica/',
    demoHint:'Choose “Visitante” (Guest) on the first screen to play without signing in.',
    description:'Learning through a little adventure on the water. An educational game combining boat navigation, obstacle avoidance, and questions across school subjects.',
    tags:['Unity','Education','WebGL demo'],role:'Unity Developer · Scholarship',
    intro:'I contributed to Navegática through a financially supported scholarship at Feevale University. This was part of my professional development work in the university games lab, creating educational experiences for children.',
    contributions:['Programmed game systems.', 'Integrated art assets, audio, and UI.', 'Managed mobile build deployment.'],
    context:'Players steer a boat through obstacles and toward an answer to a school-subject question, collecting stars along the way. The university’s current WebGL edition covers subjects such as science, mathematics, logic, and history. My Feevale scholarship work dates to 2013–2014; the university continues to preserve and host the game.',
    links:[{label:'Play the WebGL demo',url:'https://games.feevale.br/loa/navegatica/'},{label:'University project page',url:'https://loa.feevale.br/jogos/navegatica/'}]
  },
  {
    id:'corrida-gramatical',title:'Corrida Gramatical',category:'professional',kicker:'FEEVALE UNIVERSITY / SCHOLARSHIP',label:'EDUCATIONAL GAME',image:'corrida-gramatical-1.webp',
    alt:'Corrida Gramatical educational game, from Feevale University',
    gallery:[{src:'corrida-gramatical-2.webp',alt:'Corrida Gramatical gameplay screenshot from the university archive'},{src:'corrida-gramatical-3.webp',alt:'Another scene from Corrida Gramatical'}],
    playUrl:'https://games.feevale.br/loa/corridagramatical/',
    description:'A playful way to practice Portuguese. Dodge obstacles, collect stars, and answer questions in an educational game designed for children and teenagers.',
    tags:['Unity','Children’s games','WebGL demo'],role:'Unity Developer · Scholarship',
    intro:'I contributed to Corrida Gramatical through my financially supported scholarship at Feevale University. The project supported Portuguese-language learning for children and teenagers receiving cancer treatment at AMO.',
    contributions:['Programmed game systems.', 'Integrated art assets, audio, and UI.', 'Managed mobile build deployment.'],
    context:'The game combines obstacle avoidance and star collection with multiple-choice Portuguese questions. It was developed by Feevale’s Digital Games Laboratory with the Learning with Mobility research project and CNPq support. The university hosts a playable WebGL version today.',
    links:[{label:'Play the WebGL demo',url:'https://games.feevale.br/loa/corridagramatical/'},{label:'University project page',url:'https://loa.feevale.br/jogos/corridagramatical/'}]
  },
  {
    id:'mime-time',title:'Mime Time',category:'early',kicker:'LUDUM DARE 28 / 2013',label:'72-HOUR GAME JAM',image:'mime-time.webp',alt:'Mime Time game screenshot from the original Behance project',
    description:'One theme. Seventy-two hours. A Unity game made for Ludum Dare 28 and its “You Only Get One” challenge.',
    tags:['Unity','Game jam','72 hours'],role:'Programming',
    intro:'A game made for Ludum Dare 28, built around the theme “You Only Get One.”',contributions:['Programming for the 72-hour jam project.'],
    context:'The original project page preserves screenshots and the development context. The jam took place in 2013; the Behance archive was published in June 2014.',
    links:[{label:'Original project & screenshots',url:'https://www.behance.net/gallery/17535293/Mime-Time-Unity3D-Game-72h-Ludum-Dare-28-Game-Jam'}]
  },
  {
    id:'super-dino',title:'Super Dino Space Cookie',category:'early',kicker:'FEEVALE GAMES LAB / 2014',label:'ONE-WEEK PROJECT',image:'super-dino.webp',alt:'Super Dino Space Cookie screenshot from the university project',
    description:'A one-button game, a dinosaur, and a one-week deadline. Built with first-semester students taking their first steps in game development.',
    tags:['Unity','One-button game','University'],role:'Programming',
    intro:'A Feevale games-lab project created with first-semester students. The brief was to build a game that could be played using just one button.',contributions:['Programming for a one-week project, with approximately 20 hours of work recorded on the original page.'],
    context:'The original Behance page documents the project, its controls brief, and the collaboration with students new to game creation.',
    links:[{label:'Original project & screenshots',url:'https://www.behance.net/gallery/17559017/Super-Dino-Space-Cookie-Unity3D-Game-1-Week-1-Game'}]
  },
  {
    id:'andalhe',title:'Andalhe',category:'early',kicker:'DGEX GAME JAM / 2013',label:'48-HOUR GAME JAM',image:'andalhe.webp',alt:'Andalhe game screenshot from the DGEX game jam project',
    description:'A local game jam, a Latin America theme, and forty-eight hours to make something playable.',
    tags:['Unity','Game jam','48 hours'],role:'Programming',
    intro:'A game created for the local DGEX game jam, responding to the theme “Latin America.”',contributions:['Programming for a game produced in 48 hours.'],
    context:'The Behance archive lists web, PC, and Android builds at the time of publication. Legacy download availability has not been confirmed.',
    links:[{label:'Original project & screenshots',url:'https://www.behance.net/gallery/17557783/Andalhe-Unity3D-Game-48h-DGEX-Game-Jam'}]
  },
  {
    id:'pataco',title:'Patáço',category:'early',kicker:'FEEVALE GAMES LAB / 2013',label:'UNIVERSITY PROJECT',image:'pataco.webp',alt:'Patáço game screenshot preserved on Behance',
    videos:[{type:'embed',src:'https://www-ccv.adobe.io/v1/player/ccv/R-89eRN3rUr/embed?api_key=behance1&bgcolor=%23191919',title:'Patáço gameplay presentation',caption:'The original presentation video preserved on Behance.',url:'https://www.behance.net/gallery/17423669/Pataco-Unity3D-Game'}],
    description:'A university lab game and an early step in my programming journey, later presented at Feevale’s Gamepad VII event.',
    tags:['Unity','University','Gamepad VII'],role:'Programming',
    intro:'A Unity project from Feevale’s games lab, presented at Gamepad VII in 2014.',contributions:['Programming for the university project.'],
    context:'The older resume dates the project to 2013. Its Behance page, published in June 2014, preserves images and the presentation context.',
    links:[{label:'Original project & screenshots',url:'https://www.behance.net/gallery/17423669/Pataco-Unity3D-Game'}]
  }
];
