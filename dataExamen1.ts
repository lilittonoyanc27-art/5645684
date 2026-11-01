import { ExamData } from './types';

export const EXAMEN_1_DATA: ExamData = {
  id: 'examen-1',
  titleEs: 'EXAMEN DE LENGUA CASTELLANA Y LITERATURA',
  titleHy: 'ԻՍՊԱՆԵՐԵՆ ԼԵԶՎԻ ԵՎ ԳՐԱԿԱՆՈՒԹՅԱՆ ՔՆՆՈՒԹՅՈՒՆ',
  subtitleEs: 'Comprensión lectora y análisis literario — 40 preguntas con soluciones',
  subtitleHy: 'Ընթերցանություն և գրական վերլուծություն — 40 քննական հարց՝ լուծումներով',
  gradeEs: '7.º curso de Secundaria',
  gradeHy: '7-րդ դասարան',
  overviewEs: '3 textos (narrativa popular, romance poético, mito) y 40 preguntas analíticas sobre comprensión, figuras retóricas y géneros literarios.',
  overviewHy: '3 տեքստ (ժողովրդական պատմվածք, չափածո ռոմանս, առասպել) և 40 վերլուծական հարց տեքստի ըմբռնման, գեղարվեստական արտահայտչամիջոցների և ժանրերի վերաբերյալ:',
  texts: [
    {
      id: 'e1-t1',
      titleEs: 'TEXTO 1. El misterio del castillo',
      titleHy: 'ՏԵՔՍՏ 1. Ամրոցի առեղծվածը',
      type: 'narrative',
      paragraphs: [
        {
          id: 'e1-p1',
          spanish: 'En un pequeño pueblo llamado Valverde había un castillo muy antiguo.',
          armenian: 'Մի փոքրիկ գյուղում, որը կոչվում էր Վալվերդե, կար մի շատ հին ամրոց:'
        },
        {
          id: 'e1-p2',
          spanish: 'Nadie sabía exactamente cuándo lo habían construido.',
          armenian: 'Ոչ ոք ճշգրիտ չգիտեր, թե երբ էին այն կառուցել:'
        },
        {
          id: 'e1-p3',
          spanish: 'Los habitantes contaban una historia misteriosa que había pasado de generación en generación.',
          armenian: 'Բնակիչները պատմում էին մի խորհրդավոր պատմություն, որը փոխանցվել էր սերնդեսերունդ:'
        },
        {
          id: 'e1-p4',
          spanish: 'Nadie conocía a su autor y cada familia contaba una versión diferente.',
          armenian: 'Ոչ ոք չգիտեր դրա հեղինակին, և յուրաքանչյուր ընտանիք պատմում էր տարբեր մի տարբերակ:'
        },
        {
          id: 'e1-p5',
          spanish: 'Una noche, Clara decidió visitar el castillo.',
          armenian: 'Մի գիշեր Կլարան որոշեց այցելել ամրոց:'
        },
        {
          id: 'e1-p6',
          spanish: 'El cielo estaba oscuro y la luna sonreía entre las nubes.',
          armenian: 'Երկինքը մութ էր, իսկ լուսինը ժպտում էր ամպերի միջից:',
          literaryDevice: 'Personificación'
        },
        {
          id: 'e1-p7',
          spanish: 'El viento susurraba suavemente: «¡Sss, sss!».',
          armenian: 'Քամին մեղմորեն շշնջում էր. «Սսս, սսս»:',
          literaryDevice: 'Personificación / Onomatopeya'
        },
        {
          id: 'e1-p8',
          spanish: 'De repente, escuchó un ruido.',
          armenian: 'Հանկարծ նա մի աղմուկ լսեց:'
        },
        {
          id: 'e1-p9',
          spanish: '—¡Din, don! ¡Din, don!',
          armenian: '«Դի՛ն, դո՛ն: Դի՛ն, դո՛ն»:',
          literaryDevice: 'Onomatopeya'
        },
        {
          id: 'e1-p10',
          spanish: 'Era el sonido de una campana, pero no había ninguna campana en la torre.',
          armenian: 'Զանգի ձայնն էր, բայց աշտարակում ոչ մի զանգ չկար:'
        },
        {
          id: 'e1-p11',
          spanish: 'Clara sintió miedo. Su corazón era un tambor.',
          armenian: 'Կլարան վախ զգաց: Նրա սիրտը թմբուկ էր:',
          literaryDevice: 'Metáfora (A es B)'
        },
        {
          id: 'e1-p12',
          spanish: 'Comenzó a caminar lentamente.',
          armenian: 'Նա սկսեց դանդաղ քայլել:'
        },
        {
          id: 'e1-p13',
          spanish: 'La brisa barría las blancas baldosas del patio.',
          armenian: 'Զեփյուռը մաքրում էր բակի սպիտակ սալիկները:',
          literaryDevice: 'Aliteración (sonido /b/)'
        },
        {
          id: 'e1-p14',
          spanish: '—¡Qué extraño! —murmuró Clara—. La casa esconde una cosa misteriosa.',
          armenian: '— Ի՜նչ տարօրինակ է,— փնթփնթաց Կլարան:— Տունը թաքցնում է մի խորհրդավոր բան:',
          literaryDevice: 'Paronomasia (casa / cosa)'
        },
        {
          id: 'e1-p15',
          spanish: 'Miró a su alrededor. Buscó una puerta, una ventana, una escalera.',
          armenian: 'Նա նայեց շուրջը: Փնտրեց մի դուռ, մի պատուհան, մի աստիճան:',
          literaryDevice: 'Enumeración / Asíndeton'
        },
        {
          id: 'e1-p16',
          spanish: 'Quería descubrir el misterio. Quería encontrar la campana. Quería conocer la verdad.',
          armenian: 'Ուզում էր բացահայտել գաղտնիքը: Ուզում էր գտնել զանգը: Ուզում էր իմանալ ճշմարտությունը:',
          literaryDevice: 'Anáfora («Quería»)'
        },
        {
          id: 'e1-p17',
          spanish: 'De repente, vio una luz.',
          armenian: 'Հանկարծ նա մի լույս տեսավ:'
        },
        {
          id: 'e1-p18',
          spanish: 'Y corrió y saltó y gritó y llamó a su abuela.',
          armenian: 'Եվ վազեց, և՛ ցատկեց, և՛ բղավեց, և՛ կանչեց իր տատիկին:',
          literaryDevice: 'Polisíndeton (repetición de «y»)'
        },
        {
          id: 'e1-p19',
          spanish: 'Cuando llegó a la torre, encontró un pequeño espejo.',
          armenian: 'Երբ նա հասավ աշտարակ, գտավ մի փոքրիկ հայելի:'
        },
        {
          id: 'e1-p20',
          spanish: 'De plata eran los reflejos del río que veía desde la ventana.',
          armenian: 'Արծաթից էին գետի արտացոլանքները, որոնք նա տեսնում էր պատուհանից:',
          literaryDevice: 'Hipérbaton'
        },
        {
          id: 'e1-p21',
          spanish: 'En el espejo apareció el rostro de una mujer.',
          armenian: 'Հայելու մեջ հայտնվեց մի կնոջ դեմք:'
        },
        {
          id: 'e1-p22',
          spanish: '—No tengas miedo —dijo la mujer—. Tus ojos son dos estrellas.',
          armenian: '— Մի՛ վախեցիր,— ասաց կինը:— Քո աչքերը երկու աստղ են:',
          literaryDevice: 'Metáfora (A es B)'
        },
        {
          id: 'e1-p23',
          spanish: 'Clara miró fijamente el espejo.',
          armenian: 'Կլարան սևեռուն նայեց հայելուն:'
        },
        {
          id: 'e1-p24',
          spanish: '—¡Silencio! En este castillo solo hay silencio —susurró la mujer.',
          armenian: '— Լռությո՛ւն: Այս ամրոցում կա միայն լռություն,— շշնջաց կինը:',
          literaryDevice: 'Epanadiplosis («Silencio... silencio»)'
        },
        {
          id: 'e1-p25',
          spanish: 'Clara cerró los ojos y escuchó otra vez la campana.',
          armenian: 'Կլարան փակեց աչքերը և կրկին լսեց զանգի ձայնը:'
        },
        {
          id: 'e1-p26',
          spanish: '—¡La he oído con mis propios oídos! —exclamó.',
          armenian: '— Ես այն լսել եմ իմ սեփական ականջներով,— բացականչեց նա:',
          literaryDevice: 'Pleonasmo'
        },
        {
          id: 'e1-p27',
          spanish: 'Al día siguiente, Clara contó su aventura a su abuela.',
          armenian: 'Հաջորդ օրը Կլարան իր արկածի մասին պատմեց տատիկին:'
        },
        {
          id: 'e1-p28',
          spanish: '—Esta historia es muy antigua —respondió la abuela—. Mi abuela también me la contaba, pero cada persona la explica de manera diferente.',
          armenian: '— Այս պատմությունը շատ հին է,— պատասխանեց տատիկը:— Իմ տատիկն էլ ինձ էր այն պատմում, բայց ամեն մարդ այն յուրովի է բացատրում:'
        },
        {
          id: 'e1-p29',
          spanish: 'Desde entonces, Clara nunca olvidó aquella noche.',
          armenian: 'Այդ ժամանակից ի վեր Կլարան երբեք չմոռացավ այդ գիշերը:'
        }
      ]
    },
    {
      id: 'e1-t2',
      titleEs: 'TEXTO 2. La dama y la campana',
      titleHy: 'ՏԵՔՍՏ 2. Տիկինն ու զանգը (Բանաստեղծական տեքստ / Ռոմանս)',
      type: 'poem',
      analysisNotesEs: 'Romance tradicional: versos octosílabos (8 sílabas), rima asonante en versos pares (a-a: dama, acompaña, encantada, mañana), versos impares sueltos.',
      analysisNotesHy: 'Ավանդական իսպանական ռոմանս. 8-վանկանի տողեր (octosílabos), ասոնանս հանգ զույգ տողերում (a-a՝ d-a-m-a, a-c-o-m-p-a-ñ-a...), կենտ տողերն ազատ են:',
      paragraphs: [
        {
          id: 'v1',
          spanish: 'Por el camino del bosque,',
          armenian: 'Անտառի ճանապարհով,',
          syllables: 'Por / el / ca / mi / no / del / bos / que (8)'
        },
        {
          id: 'v2',
          spanish: 'va caminando una dama.',
          armenian: 'քայլում է մի տիկին:',
          syllables: 'va / ca / mi / nan / do u / na / da / ma (8 - rima a-a)'
        },
        {
          id: 'v3',
          spanish: 'La luna mira su rostro',
          armenian: 'Լուսինը նայում է նրա դեմքին,',
          syllables: 'La / lu / na / mi / ra / su / ros / tro (8)',
          literaryDevice: 'Personificación'
        },
        {
          id: 'v4',
          spanish: 'y la noche la acompaña.',
          armenian: 'և գիշերը նրան ուղեկցում է:',
          syllables: 'y / la / no / che / la a / com / pa / ña (8 - rima a-a)',
          literaryDevice: 'Personificación'
        },
        {
          id: 'v5',
          spanish: 'Una campana se escucha',
          armenian: 'Մի զանգի ձայն է լսվում',
          syllables: 'U / na / cam / pa / na / se es / cu / cha (8)'
        },
        {
          id: 'v6',
          spanish: 'desde la torre encantada.',
          armenian: 'կախարդված աշտարակից:',
          syllables: 'des / de / la / to / rre en / can / ta / da (8 - rima a-a)'
        },
        {
          id: 'v7',
          spanish: 'El viento mueve las hojas',
          armenian: 'Քամին շարժում է տերևները',
          syllables: 'El / vien / to / mue / ve / las / ho / jas (8)'
        },
        {
          id: 'v8',
          spanish: 'y despierta la mañana.',
          armenian: 'և արթնացնում է առավոտը:',
          syllables: 'y / des / pier / ta / la / ma / ña / na (8 - rima a-a)',
          literaryDevice: 'Personificación'
        }
      ]
    },
    {
      id: 'e1-t3',
      titleEs: 'TEXTO 3. El origen de las estrellas',
      titleHy: 'ՏԵՔՍՏ 3. Աստղերի ծագումը (Առասպել / Mito)',
      type: 'myth',
      analysisNotesEs: 'Mito cosmogónico: explica el origen de las estrellas a través de una divinidad (la diosa Liria) en un tiempo primordial.',
      analysisNotesHy: 'Տիեզերածնական առասպել. բացատրում է երկնային աստղերի ծագումը աստվածուհի Լիրիայի միջոցով՝ նախնական անհիշելի ժամանակներում:',
      paragraphs: [
        {
          id: 'm1',
          spanish: 'Hace miles de años, cuando el cielo estaba completamente oscuro, vivía una diosa llamada Liria.',
          armenian: 'Հազարավոր տարիներ առաջ, երբ երկինքը լիովին մութ էր, ապրում էր մի աստվածուհի, որի անունը Լիրիա էր:'
        },
        {
          id: 'm2',
          spanish: 'Liria observaba a los humanos y veía que tenían miedo de la noche.',
          armenian: 'Լիրիան դիտում էր մարդկանց և տեսնում, որ նրանք վախենում էին գիշերից:'
        },
        {
          id: 'm3',
          spanish: 'Un día decidió recoger pequeñas gotas de fuego del Sol. Las lanzó hacia el cielo y las convirtió en estrellas.',
          armenian: 'Մի օր նա որոշեց Արեգակից հավաքել կրակի փոքրիկ կաթիլներ: Նա դրանք նետեց երկինք և վերածեց աստղերի:'
        },
        {
          id: 'm4',
          spanish: 'Desde entonces, las estrellas iluminan la noche.',
          armenian: 'Այդ ժամանակվանից աստղերը լուսավորում են գիշերը:'
        },
        {
          id: 'm5',
          spanish: 'Según aquella antigua creencia, así nacieron las primeras estrellas del universo.',
          armenian: 'Ըստ այդ հին հավատալիքի՝ այդպես ծնվեցին տիեզերքի առաջին աստղերը:'
        }
      ]
    }
  ],
  questions: [
    {
      id: 1,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Dónde sucede la historia?',
      questionHy: 'Որտե՞ղ է տեղի ունենում պատմությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'En una escuela.', textHy: 'Դպրոցում:' },
        { key: 'B', textEs: 'En un castillo antiguo.', textHy: 'Հին ամրոցում:' },
        { key: 'C', textEs: 'En una playa.', textHy: 'Լողափին:' }
      ],
      correctAnswer: 'B',
      explanationEs: 'La historia transcurre en un pequeño pueblo llamado Valverde donde había un castillo muy antiguo.',
      explanationHy: 'Պատմությունը տեղի է ունենում Վալվերդե գյուղում գտնվող մի շատ հին ամրոցում (B):'
    },
    {
      id: 2,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Quién es la protagonista?',
      questionHy: 'Ո՞վ է գլխավոր հերոսը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'La abuela.', textHy: 'Տատիկը:' },
        { key: 'B', textEs: 'La mujer del espejo.', textHy: 'Հայելու կինը:' },
        { key: 'C', textEs: 'Clara.', textHy: 'Կլարան:' }
      ],
      correctAnswer: 'C',
      explanationEs: 'La protagonista de la narración es Clara, quien decide visitar el castillo y vive la aventura.',
      explanationHy: 'Գլխավոր հերոսը Կլարան է (C), ով որոշում է գիշերը մտնել ամրոց:'
    },
    {
      id: 3,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Cómo se transmitía la historia del castillo?',
      questionHy: 'Ինչպե՞ս էր փոխանցվում ամրոցի պատմությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'De generación en generación.', textHy: 'Սերնդեսերունդ:' },
        { key: 'B', textEs: 'Mediante periódicos.', textHy: 'Թերթերի միջոցով:' },
        { key: 'C', textEs: 'A través de una novela moderna.', textHy: 'Ժամանակակից վեպի միջոցով:' }
      ],
      correctAnswer: 'A',
      explanationEs: 'El texto dice expresamente: «había pasado de generación en generación». Se transmitía de forma oral.',
      explanationHy: 'Տեքստում ուղղակիորեն ասվում է՝ «había pasado de generación en generación» (փոխանցվել էր սերնդեսերունդ բանավոր ձևով):'
    },
    {
      id: 4,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Por qué es una historia propia de la literatura popular?',
      questionHy: 'Ինչո՞ւ է պատմությունը բնորոշ ժողովրդական գրականությանը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Porque se conoce a su autor.', textHy: 'Որովհետև դրա հեղինակը հայտնի է:' },
        { key: 'B', textEs: 'Porque se transmite oralmente y existen diferentes versiones.', textHy: 'Որովհետև փոխանցվում է բանավոր, և կան տարբեր տարբերակներ:' },
        { key: 'C', textEs: 'Porque nunca cambia.', textHy: 'Որովհետև այն երբեք չի փոխվում:' }
      ],
      correctAnswer: 'B',
      explanationEs: 'La literatura popular o tradicional se caracteriza por su transmisión oral, anonimato y por tener múltiples versiones («cada familia contaba una versión diferente»).',
      explanationHy: 'Ժողովրդական գրականությանը բնորոշ է բանավոր փոխանցումը, հեղինակի անհայտ լինելը և բազմաթիվ տարբերակների առկայությունը (B):'
    },
    {
      id: 5,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Qué elemento fantástico aparece en la historia?',
      questionHy: 'Ի՞նչ երևակայական տարր կա պատմության մեջ։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'La campana que suena sin estar en la torre.', textHy: 'Զանգը, որը հնչում է՝ չլինելով աշտարակում:' },
        { key: 'B', textEs: 'El pueblo de Valverde.', textHy: 'Վալվերդե գյուղը:' },
        { key: 'C', textEs: 'El patio del castillo.', textHy: 'Ամրոցի բակը:' }
      ],
      correctAnswer: 'A',
      explanationEs: 'El sonido de una campana («¡Din, don!») en una torre vacía donde «no había ninguna campana» y la mujer que habla en el espejo son elementos fantásticos.',
      explanationHy: 'Զանգի ձայնը դատարկ աշտարակում, որտեղ իրականում զանգ չկա, գերբնական/երևակայական տարր է (A):'
    },
    {
      id: 6,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Qué género representa mejor la historia tradicional que cuenta la abuela?',
      questionHy: 'Ի՞նչ ժանրի է առավել նման տատիկի պատմած հին պատմությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Mito.', textHy: 'Առասպել (Mito):' },
        { key: 'B', textEs: 'Leyenda.', textHy: 'Ավանդազրույց (Leyenda):' },
        { key: 'C', textEs: 'Romance.', textHy: 'Ռոմանս (Romance):' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Es una leyenda: relata un suceso misterioso transmitido por tradición oral en un lugar geográfico concreto (el castillo de Valverde). No es un mito porque no explica el origen del cosmos ni intervienen dioses.',
      explanationHy: 'Սա ավանդազրույց է (Leyenda, B). այն կապված է կոնկրետ աշխարհագրական վայրի (Վալվերդեի ամրոց) հետ և փոխանցվել է բանավոր:'
    },
    {
      id: 7,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿El texto está escrito en verso o en prosa? ¿Por qué?',
      questionHy: 'Տեքստը արձա՞կ է, թե՞ չափածո։ Ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Está escrito en prosa porque las oraciones ocupan todo el renglón y no tienen rima fija ni medida silábica.',
      explanationEs: 'Está escrito en prosa (en prosa narrativa). A diferencia del verso, no sigue un ritmo basado en el cómputo de sílabas ni rima, y las frases se extienden de margen a margen.',
      explanationHy: 'Գրված է արձակ (prosa), որովհետև նախադասությունները զբաղեցնում են ամբողջ տողը և չունեն չափական վանկերի հաշվարկ կամ հանգավորում:'
    },
    {
      id: 8,
      sectionTitleEs: 'PARTE 1. Comprensión lectora',
      sectionTitleHy: 'ՄԱՍ 1. Տեքստի ըմբռնում',
      questionEs: '¿Cuál es la diferencia entre un mito y esta leyenda?',
      questionHy: 'Ի՞նչ տարբերություն կա առասպելի և այս ավանդազրույցի միջև։',
      type: 'open',
      correctAnswer: 'El mito explica el origen del mundo o fenómenos naturales con dioses, mientras la leyenda se ubica en un lugar concreto con personajes humanos y misterio local.',
      explanationEs: 'El mito es un relato sagrado que explica el origen del universo o de fenómenos naturales mediante dioses (como la diosa Liria). La leyenda se sitúa en una época y lugar geográfico concretos (el pueblo de Valverde) y mezcla hechos cotidianos con elementos mágicos.',
      explanationHy: 'Առասպելը (Mito) բացատրում է աշխարհի ու բնության ծագումը աստվածների միջոցով: Իսկ ավանդազրույցը (Leyenda) կապված է կոնկրետ տեղանքի ու սովորական մարդկանց հետ՝ պարունակելով առեղծված:'
    },
    {
      id: 9,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«La luna sonreía entre las nubes». ¿Qué figura literaria aparece?',
      questionHy: '«La luna sonreía entre las nubes» (Լուսինը ժպտում էր ամպերի միջից): Ո՞ր արտահայտչամիջոցն է։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Metáfora', textHy: 'Փոխաբերություն (Metáfora)' },
        { key: 'B', textEs: 'Personificación', textHy: 'Անձնավորում (Personificación)' },
        { key: 'C', textEs: 'Enumeración', textHy: 'Թվարկում (Enumeración)' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Es una personificación porque atribuye una acción humana («sonreír») a un astro inanimado (la luna).',
      explanationHy: 'Անձնավորում է (Personificación, B), քանի որ մարդկային հատկանիշը («ժպտալ») վերագրված է լուսնին:'
    },
    {
      id: 10,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«¡Din, don! ¡Din, don!». ¿Qué recurso imita el sonido de la campana?',
      questionHy: '«¡Din, don! ¡Din, don!». Ո՞ր միջոցն է նմանակում զանգի ձայնը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Onomatopeya', textHy: 'Ձայնանմանակում (Onomatopeya)' },
        { key: 'B', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն (Hipérbaton)' },
        { key: 'C', textEs: 'Anáfora', textHy: 'Անաֆորա (Anáfora)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es una onomatopeya: palabra creada para imitar acústicamente un sonido real (el tañido de la campana).',
      explanationHy: 'Օնոմատոպեա է (A), քանի որ նմանակում է զանգի իրական ձայնը:'
    },
    {
      id: 11,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«Su corazón era un tambor». ¿Qué figura literaria aparece?',
      questionHy: '«Su corazón era un tambor» (Նրա սիրտը թմբուկ էր): Ո՞ր արտահայտչամիջոցն է։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ (Pleonasmo)' },
        { key: 'B', textEs: 'Metáfora', textHy: 'Փոխաբերություն (Metáfora)' },
        { key: 'C', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն (Polisíndeton)' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Es una metáfora porque identifica de forma directa el corazón (elemento real A) con un tambor (elemento imaginario B) con la estructura «A es B».',
      explanationHy: 'Փոխաբերություն է (Metáfora, B). սիրտը (A) նույնացվում է թմբուկի (B) հետ «A es B» կառուցվածքով:'
    },
    {
      id: 12,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: 'En «Su corazón era un tambor», identifica A y B.',
      questionHy: '«Su corazón era un tambor» արտահայտության մեջ գտիր իրական (A) և փոխաբերական (B) տարրերը։',
      type: 'open',
      correctAnswer: 'A (elemento real) = corazón; B (elemento imaginario) = tambor.',
      explanationEs: 'A (término real) es el «corazón» (sus latidos acelerados). B (término imaginario) es el «tambor» (por el sonido y el golpe rítmico).',
      explanationHy: 'A (իրական տարր) = corazón (սիրտ, արագ բաբախյուն): B (պատկերավոր/փոխաբերական տարր) = tambor (թմբուկ):'
    },
    {
      id: 13,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«La brisa barría las blancas baldosas». ¿Qué figura predomina por la repetición del sonido /b/?',
      questionHy: '«La brisa barría las blancas baldosas»: Ո՞ր հնչյունային արտահայտչամիջոցն է /b/ հնչյունի կրկնության պատճառով։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Aliteración', textHy: 'Ալիտերացիա (Aliteración)' },
        { key: 'B', textEs: 'Anáfora', textHy: 'Անաֆորա (Anáfora)' },
        { key: 'C', textEs: 'Asíndeton', textHy: 'Ասինդետոն (Asíndeton)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es una aliteración porque se repite insistentemente el sonido consonántico /b/ («brisa barría blancas baldosas»).',
      explanationHy: 'Ալիտերացիա է (A), որովհետև մի քանի բառերում կրկնվում է /b/ բաղաձայն հնչյունը:'
    },
    {
      id: 14,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«La casa esconde una cosa misteriosa». ¿Qué figura se reconoce en las palabras casa y cosa?',
      questionHy: '«La casa esconde una cosa misteriosa»: Ո՞ր արտահայտչամիջոցն է՝ հաշվի առնելով «casa» և «cosa» բառերը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա (Paronomasia)' },
        { key: 'B', textEs: 'Metáfora', textHy: 'Փոխաբերություն (Metáfora)' },
        { key: 'C', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս (Epanadiplosis)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es una paronomasia: proximidad de dos palabras con sonidos casi idénticos pero significado muy diferente («casa» = vivienda, «cosa» = objeto).',
      explanationHy: 'Պարոնոմազիա է (A)՝ հարանուն բառերի խաղ («casa» = տուն, «cosa» = իր/բան):'
    },
    {
      id: 15,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«Buscó una puerta, una ventana, una escalera». ¿Qué dos recursos puedes identificar?',
      questionHy: '«Buscó una puerta, una ventana, una escalera»: Ի՞նչ երկու արտահայտչամիջոց կարող ես գտնել։',
      type: 'open',
      correctAnswer: 'Enumeración (lista sucesiva de elementos) y Asíndeton (omisión de la conjunción "y").',
      explanationEs: '1) Enumeración: sucesión continuada de tres elementos afines («puerta», «ventana», «escalera»). 2) Asíndeton: se omiten las conjunciones de enlace (no dice «y una escalera»), uniéndose solo por comas.',
      explanationHy: '1) Թվարկում (Enumeración)՝ երեք առարկաների հաջորդականություն: 2) Ասինդետոն (Asíndeton)՝ շաղկապի («y») բացթողում:'
    },
    {
      id: 16,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«Quería descubrir el misterio. Quería encontrar la campana. Quería conocer la verdad». ¿Qué figura aparece?',
      questionHy: '«Quería descubrir... Quería encontrar... Quería conocer...»: Ո՞ր արտահայտչամիջոցն է։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Anáfora', textHy: 'Անաֆորա (Anáfora)' },
        { key: 'B', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն (Hipérbaton)' },
        { key: 'C', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա (Onomatopeya)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es una anáfora porque repite la misma palabra («Quería») al comienzo de oraciones sucesivas.',
      explanationHy: 'Անաֆորա է (A), քանի որ «Quería» բառը կրկնվում է նախադասությունների սկզբում:'
    },
    {
      id: 17,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '¿Qué palabras se repiten al principio de las tres oraciones anteriores?',
      questionHy: 'Ո՞ր բառերն են կրկնվում երեք նախադասությունների սկզբում։',
      type: 'open',
      correctAnswer: 'La palabra «Quería» (verbo querer).',
      explanationEs: 'Se repite el verbo «Quería» al principio de cada enunciado.',
      explanationHy: 'Կրկնվում է «Quería» (ուզում էր) բառը:'
    },
    {
      id: 18,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«Y corrió y saltó y gritó y llamó a su abuela». ¿Qué figura literaria aparece por la repetición de «y»?',
      questionHy: '«Y corrió y saltó y gritó y llamó a su abuela»: Ո՞ր արտահայտչամիջոցն է «y» շաղկապի կրկնության պատճառով։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Asíndeton', textHy: 'Ասինդետոն (Asíndeton)' },
        { key: 'B', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն (Polisíndeton)' },
        { key: 'C', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս (Epanadiplosis)' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Es un polisíndeton porque repite intencionadamente la conjunción copulativa «y» entre las acciones para intensificar la escena.',
      explanationHy: 'Պոլիսինդետոն է (B)՝ «y» շաղկապի բազմակի կրկնություն:'
    },
    {
      id: 19,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«De plata eran los reflejos del río». ¿Qué recurso altera el orden habitual de las palabras?',
      questionHy: '«De plata eran los reflejos del río»: Ո՞ր արտահայտչամիջոցն է փոխում սովորական բառերի դասավորությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն (Hipérbaton)' },
        { key: 'B', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա (Onomatopeya)' },
        { key: 'C', textEs: 'Enumeración', textHy: 'Թվարկում (Enumeración)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es un hipérbaton porque altera el orden sintáctico habitual (Sujeto + Verbo + Atributo).',
      explanationHy: 'Հիպերբատոն է (A)՝ շարադասության փոփոխություն:'
    },
    {
      id: 20,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: 'Escribe la oración anterior («De plata eran los reflejos del río») en el orden gramatical habitual.',
      questionHy: 'Նախորդ նախադասությունը («De plata eran los reflejos del río») գրիր սովորական շարադասությամբ։',
      type: 'open',
      correctAnswer: 'Los reflejos del río eran de plata.',
      explanationEs: 'El orden lógico regular es: Sujeto («Los reflejos del río») + Verbo («eran») + Atributo («de plata»).',
      explanationHy: 'Սովորական շարադասությունն է՝ «Los reflejos del río eran de plata»:'
    },
    {
      id: 21,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«Tus ojos son dos estrellas». ¿Qué estructura metafórica tiene?',
      questionHy: '«Tus ojos son dos estrellas»: Ի՞նչ կառուցվածք ունի փոխաբերությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'A es B', textHy: 'A es B (A-ն B է)' },
        { key: 'B', textEs: 'B de A', textHy: 'B de A (A-ի B-ն)' },
        { key: 'C', textEs: 'Solo B', textHy: 'Solo B (Միայն B-ն)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Tiene la estructura «A es B» (Término real: «Tus ojos» + verbo ser: «son» + Término imaginario: «dos estrellas»).',
      explanationHy: 'Կառուցվածքն է՝ «A es B» (A: tus ojos, B: dos estrellas):'
    },
    {
      id: 22,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«¡Silencio! En este castillo solo hay silencio». ¿Qué figura aparece por la repetición de la misma palabra al principio y al final?',
      questionHy: '«¡Silencio! En este castillo solo hay silencio»: Ո՞ր արտահայտչամիջոցն է նույն բառը սկզբում և վերջում կրկնելու պատճառով։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Anáfora', textHy: 'Անաֆորա (Anáfora)' },
        { key: 'B', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոսիս (Epanadiplosis)' },
        { key: 'C', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա (Paronomasia)' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Es una epanadiplosis: la frase empieza por «Silencio» y concluye exactamente con «silencio».',
      explanationHy: 'Էպանադիպլոսիս է (B), քանի որ արտահայտությունը սկսվում և ավարտվում է նույն «silencio» բառով:'
    },
    {
      id: 23,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '«La he oído con mis propios oídos». ¿Qué figura contiene una expresión redundante?',
      questionHy: '«La he oído con mis propios oídos»: Ո՞ր արտահայտչամիջոցն է պարունակում ավելորդ կրկնվող (ավելաբանական) արտահայտություն։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ (Pleonasmo)' },
        { key: 'B', textEs: 'Metáfora', textHy: 'Փոխաբերություն (Metáfora)' },
        { key: 'C', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն (Hipérbaton)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es un pleonasmo: usar «con mis propios oídos» es redundante porque oír ya implica el uso del oído; se utiliza para dar contundencia.',
      explanationHy: 'Պլեոնազմ է (A)՝ ավելաբանություն («լսել սեփական ականջներով»):'
    },
    {
      id: 24,
      sectionTitleEs: 'PARTE 2. Identifica las figuras literarias',
      sectionTitleHy: 'ՄԱՍ 2. Գտիր գեղարվեստական արտահայտչամիջոցները',
      questionEs: '¿Qué significa «el viento susurraba»? ¿Qué figura literaria representa?',
      questionHy: 'Ի՞նչ է նշանակում «քամին շշնջում էր» («el viento susurraba»)։ Ի՞նչ արտահայտչամիջոց է։',
      type: 'open',
      correctAnswer: 'Significa que el viento soplaba de manera suave y continua emitiendo un leve rumor. Representa una personificación.',
      explanationEs: 'Significa que el viento producía un sonido suave parecido al murmullo de una voz humana. Es una personificación porque atribuye la acción humana de «susurrar» al viento.',
      explanationHy: 'Նշանակում է, որ քամին փչում էր մեղմ և շշուկ հիշեցնող ձայնով: Արտահայտչամիջոցը անձնավորում է (personificación):'
    },
    {
      id: 25,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Cuántos versos tiene el poema?',
      questionHy: 'Քանի՞ տող (versos) ունի բանաստեղծությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: '6 versos', textHy: '6 տող' },
        { key: 'B', textEs: '8 versos', textHy: '8 տող' },
        { key: 'C', textEs: '10 versos', textHy: '10 տող' }
      ],
      correctAnswer: 'B',
      explanationEs: 'El poema consta exactamente de 8 versos agrupados en dos estrofas de cuatro versos.',
      explanationHy: 'Բանաստեղծությունն ունի ճիշտ 8 տող (B):'
    },
    {
      id: 26,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Cuántas sílabas métricas tiene el primer verso («Por el camino del bosque»)?',
      questionHy: 'Քանի՞ չափական վանկ ունի առաջին տողը («Por el camino del bosque»)։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: '7 sílabas', textHy: '7 վանկ' },
        { key: 'B', textEs: '8 sílabas', textHy: '8 վանկ (octosílabo)' },
        { key: 'C', textEs: '9 sílabas', textHy: '9 վանկ' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Tiene 8 sílabas métricas (verso octosílabo): Por (1) el (2) ca (3) mi (4) no (5) del (6) bos (7) que (8). Palabra llana final (no suma ni resta).',
      explanationHy: 'Ունի 8 չափական վանկ (B)՝ octosílabo:'
    },
    {
      id: 27,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué tipo de rima aparece en los versos pares?',
      questionHy: 'Ի՞նչ տեսակի հանգ ունեն զույգ տողերը (2, 4, 6, 8)։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Consonante', textHy: 'Կոնսոնանս / Լրիվ հանգ (Consonante)' },
        { key: 'B', textEs: 'Asonante', textHy: 'Ասոնանս / Ձայնավորային հանգ (Asonante)' },
        { key: 'C', textEs: 'No tienen rima', textHy: 'Հանգ չունեն' }
      ],
      correctAnswer: 'B',
      explanationEs: 'La rima es asonante: solo coinciden las vocales (a - a) a partir de la última vocal acentuada: d-A-m-A, a-com-p-A-ñ-A, en-can-t-A-d-A, ma-ñ-A-n-A.',
      explanationHy: 'Ասոնանս հանգ է (B)՝ համընկնում են միայն ձայնավորները (a - a):'
    },
    {
      id: 28,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué palabras forman la rima de los versos pares?',
      questionHy: 'Ո՞ր բառերն են կազմում զույգ տողերի հանգերը։',
      type: 'open',
      correctAnswer: 'dama (verso 2), acompaña (verso 4), encantada (verso 6) y mañana (verso 8).',
      explanationEs: 'Las palabras finales de los versos pares son: «dama», «acompaña», «encantada» y «mañana».',
      explanationHy: 'Զույգ տողերի վերջին բառերն են՝ «dama», «acompaña», «encantada», «mañana»:'
    },
    {
      id: 29,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué vocales coinciden desde la última vocal tónica?',
      questionHy: 'Ո՞ր ձայնավորներն են համընկնում վերջին շեշտված ձայնավորից սկսած։',
      type: 'open',
      correctAnswer: 'Coinciden las vocales a-a.',
      explanationEs: 'En d-A-m-A, a-com-p-A-ñ-A, en-can-t-A-d-A y ma-ñ-A-n-A coinciden las vocales a y a.',
      explanationHy: 'Համընկնում են «a - a» ձայնավորները:'
    },
    {
      id: 30,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué ocurre con los versos impares?',
      questionHy: 'Ի՞նչ է տեղի ունենում կենտ տողերի (1, 3, 5, 7) հանգերի հետ։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Tienen rima consonante.', textHy: 'Ունեն կոնսոնանս հանգ:' },
        { key: 'B', textEs: 'Quedan sueltos (sin rima).', textHy: 'Մնում են ազատ (առանց հանգի):' },
        { key: 'C', textEs: 'Riman todos entre sí.', textHy: 'Բոլորը հանգավորվում են միմյանց հետ:' }
      ],
      correctAnswer: 'B',
      explanationEs: 'En la estructura clásica del romance, los versos impares (1.º, 3.º, 5.º, 7.º) no riman: quedan sueltos o libres.',
      explanationHy: 'Ռոմանսում կենտ տողերը մնում են ազատ՝ առանց հանգի (B):'
    },
    {
      id: 31,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿A qué composición tradicional corresponde este poema por su métrica y rima?',
      questionHy: 'Ըստ չափի (octosílabos) և հանգի (asonante en pares)՝ ո՞ր գրական տեսակին է պատկանում։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Romance', textHy: 'Ռոմանս (Romance)' },
        { key: 'B', textEs: 'Cuento', textHy: 'Հեքիաթ / Պատմվածք (Cuento)' },
        { key: 'C', textEs: 'Mito', textHy: 'Առասպել (Mito)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Corresponde a un romance: composición poética de versos octosílabos con rima asonante en los pares y sueltos los impares.',
      explanationHy: 'Սա ռոմանս (Romance, A) է:'
    },
    {
      id: 32,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: 'Encuentra una personificación en el poema.',
      questionHy: 'Բանաստեղծությունից գտիր անձնավորման օրինակ։',
      type: 'open',
      correctAnswer: '«La luna mira su rostro», «la noche la acompaña» o «y despierta la mañana».',
      explanationEs: 'Cualquiera de estos tres versos: 1) «La luna mira su rostro» (la luna no mira con ojos humanos). 2) «y la noche la acompaña» (la noche no puede acompañar físicamente). 3) «y despierta la mañana».',
      explanationHy: 'Օրինակներ՝ «La luna mira su rostro» (լուսինը նայում է նրա դեմքին) կամ «la noche la acompaña» (գիշերը նրան ուղեկցում է):'
    },
    {
      id: 33,
      sectionTitleEs: 'PARTE 3. Análisis del poema (Texto 2)',
      sectionTitleHy: 'ՄԱՍ 3. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué figura aparece en «La luna mira su rostro»? ¿Por qué?',
      questionHy: 'Ի՞նչ արտահայտչամիջոց է «La luna mira su rostro» և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Es una personificación porque le atribuye a la luna la capacidad humana de mirar.',
      explanationEs: 'Es una personificación porque dota a la luna de una acción propia de los seres humanos (mirar un rostro).',
      explanationHy: 'Անձնավորում (personificación) է, որովհետև լուսնին վերագրվում է նայելու մարդկային հատկությունը:'
    },
    {
      id: 34,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: '¿Qué género literario representa este texto («El origen de las estrellas»)?',
      questionHy: 'Ի՞նչ գրական ժանր է ներկայացնում «El origen de las estrellas» տեքստը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Leyenda', textHy: 'Ավանդազրույց (Leyenda)' },
        { key: 'B', textEs: 'Mito', textHy: 'Առասպել (Mito)' },
        { key: 'C', textEs: 'Romance', textHy: 'Ռոմանս (Romance)' }
      ],
      correctAnswer: 'B',
      explanationEs: 'Es un mito cosmogónico: relata la creación de un elemento del universo (las estrellas) mediante la intervención de una diosa (Liria).',
      explanationHy: 'Առասպել է (Mito, B), քանի որ դիցուհու միջոցով բացատրում է երկնային աստղերի ծագումը:'
    },
    {
      id: 35,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: '¿Qué personaje sobrenatural aparece?',
      questionHy: 'Ի՞նչ գերբնական կերպար կա պատմության մեջ։',
      type: 'open',
      correctAnswer: 'Aparece una diosa llamada Liria.',
      explanationEs: 'El personaje sobrenatural es la diosa Liria («vivía una diosa llamada Liria»).',
      explanationHy: 'Գերբնական կերպարը Լիրիա (Liria) անունով դիցուհին է:'
    },
    {
      id: 36,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: '¿Qué fenómeno intenta explicar?',
      questionHy: 'Ի՞նչ երևույթ է փորձում բացատրել։',
      type: 'open',
      correctAnswer: 'Intenta explicar el origen y nacimiento de las estrellas en el cielo nocturno.',
      explanationEs: 'Explica el origen de las estrellas y por qué brillan de noche («así nacieron las primeras estrellas del universo»).',
      explanationHy: 'Փորձում է բացատրել աստղերի առաջացումը և ինչու են դրանք գիշերը լուսավորում:'
    },
    {
      id: 37,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: '¿Por qué es un mito y no una narración realista?',
      questionHy: 'Ինչո՞ւ է սա առասպել, այլ ոչ թե իրատեսական պատմություն։',
      type: 'open',
      correctAnswer: 'Porque interviene una divinidad (la diosa Liria), tiene poderes mágicos (tomar gotas de fuego del Sol) y explica el origen del cosmos de forma fantástica.',
      explanationEs: 'Porque cuenta hechos sobrenaturales e imposibles en la realidad científica: una diosa que coge fuego del Sol con las manos para crear estrellas en un tiempo primordial.',
      explanationHy: 'Որովհետև գործող անձը աստվածուհի է, կատարվում են իրականում անհնար գերբնական գործողություններ (արեգակից կրակի կաթիլներ հավաքել) տիեզերքի ծագումը բացատրելու համար:'
    },
    {
      id: 38,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: '¿Está escrito en verso o en prosa?',
      questionHy: 'Արձա՞կ է, թե՞ չափածո։',
      type: 'open',
      correctAnswer: 'Está escrito en prosa.',
      explanationEs: 'Está escrito en prosa, ya que no sigue una estructura de versos medidos ni rimas.',
      explanationHy: 'Գրված է արձակ (prosa):'
    },
    {
      id: 39,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: '¿Qué diferencia hay entre la historia de Liria y la del castillo de Valverde?',
      questionHy: 'Ի՞նչ տարբերություն կա Լիրիայի և Վալվերդեի ամրոցի պատմությունների միջև։',
      type: 'open',
      correctAnswer: 'La historia de Liria es un mito que explica el origen cósmico con una diosa; la del castillo es una leyenda ubicada en un pueblo real con una niña humana y un misterio local.',
      explanationEs: 'La historia de Liria es un MITO universal que explica el origen de las estrellas con una deidad; la de Valverde es una LEYENDA local ambientada en un lugar geográfico identificable con una protagonista humana (Clara).',
      explanationHy: 'Լիրիայի պատմությունը ԱՌԱՍՊԵԼ (mito) է տիեզերական ծագման և աստվածուհու մասին: Իսկ Վալվերդեի պատմությունը ԱՎԱՆԴԱԶՐՈՒՅՑ (leyenda) է կոնկրետ գյուղի ու մարդկային հերոսի (Կլարայի) մասին:'
    },
    {
      id: 40,
      sectionTitleEs: 'PARTE 4. Géneros literarios (Texto 3)',
      sectionTitleHy: 'ՄԱՍ 4. Գրական ժանրեր (Տեքստ 3)',
      questionEs: 'Imagina que una escritora conocida publica esta historia con su nombre y su propia versión. ¿Qué rasgo de la literatura culta tendría esa versión escrita?',
      questionHy: 'Պատկերացրու՝ հայտնի գրողը պատմությունը հրապարակում է իր անունով՝ սեփական տարբերակով։ Ի՞նչ հատկանիշով այն կտարբերվի ժողովրդական բանավոր տարբերակից (literatura culta)։',
      type: 'open',
      correctAnswer: 'Tendría autoría conocida y firmada, forma escrita fijada y un texto único e inmutable (no múltiples versiones orales).',
      explanationEs: 'Tendría un autor conocido y acreditado, difusión escrita formal y una versión fija e inalterable, que son los rasgos distintivos de la literatura culta frente a la popular.',
      explanationHy: 'Այն կունենա հայտնի հեղինակ, գրավոր ամրագրված անփոփոխ տեքստ, ինչը հեղինակային/գրական (literatura culta) ստեղծագործության հիմնական տարբերակիչն է բանավոր ժողովրդականից:'
    }
  ]
};
