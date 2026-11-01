import { ExamData } from './types';

export const EXAMEN_4_DATA: ExamData = {
  id: 'examen-4',
  titleEs: 'EXAMEN 4 — LENGUA CASTELLANA Y LITERATURA',
  titleHy: 'ՔՆՆՈՒԹՅՈՒՆ 4 — ԻՍՊԱՆԵՐԵՆ ԵՎ ԳՐԱԿԱՆՈՒԹՅՈՒՆ',
  subtitleEs: '7.º curso — Ejercicios de examen: 35 actividades prácticas y soluciones',
  subtitleHy: '7-րդ դասարանի քննական վարժություններ — 35 գործնական առաջադրանք և լուծումներ',
  gradeEs: '7.º curso de Secundaria',
  gradeHy: '7-րդ դասարան',
  overviewEs: 'Nuevos textos, 35 ejercicios prácticos: reconocimiento de figuras retóricas, transformaciones de metáforas (A es B ⇄ B de A), análisis métrico de romance y corrección crítica de errores.',
  overviewHy: 'Նոր տեքստեր, 35 գործնական առաջադրանք՝ արտահայտչամիջոցների որոշում, փոխաբերությունների ձևափոխություններ (A es B ⇄ B de A), ռոմանսի վերլուծություն և սխալների ուղղում:',
  texts: [
    {
      id: 'e4-t1',
      titleEs: 'TEXTO 1 — El secreto de la biblioteca',
      titleHy: 'ՏԵՔՍՏ 1 — Գրադարանի գաղտնիքը',
      type: 'narrative',
      paragraphs: [
        {
          id: 'e4-p1',
          spanish: 'Lucía tenía trece años y vivía en un pueblo pequeño.',
          armenian: 'Լուսիան տասներեք տարեկան էր և ապրում էր մի փոքրիկ գյուղում:'
        },
        {
          id: 'e4-p2',
          spanish: 'Un día decidió visitar una biblioteca abandonada.',
          armenian: 'Մի օր նա որոշեց այցելել մի լքված գրադարան:'
        },
        {
          id: 'e4-p3',
          spanish: 'Cuando llegó, el viento soplaba con fuerza. Las ventanas lloraban bajo la lluvia y el reloj parecía burlarse de ella.',
          armenian: 'Երբ նա հասավ, քամին ուժգին փչում էր: Պատուհանները լալիս էին անձրևի տակ, իսկ ժամացույցը կարծես ծաղրում էր նրան:',
          literaryDevice: 'Personificación (ventanas lloraban, reloj se burlaba)'
        },
        {
          id: 'e4-p4',
          spanish: '—¡Tic, tac! ¡Tic, tac! —sonaba un viejo reloj.',
          armenian: '«Տի՛կ, տա՛կ: Տի՛կ, տա՛կ»,— հնչում էր մի հին ժամացույց:',
          literaryDevice: 'Onomatopeya'
        },
        {
          id: 'e4-p5',
          spanish: 'Lucía abrió la puerta. De hierro era la puerta principal.',
          armenian: 'Լուսիան բացեց դուռը: Երկաթից էր գլխավոր դուռը:',
          literaryDevice: 'Hipérbaton (La puerta principal era de hierro)'
        },
        {
          id: 'e4-p6',
          spanish: 'En el interior había libros, mapas, cartas, fotografías y cuadros.',
          armenian: 'Ներսում կային գրքեր, քարտեզներ, նամակներ, լուսանկարներ և նկարներ:',
          literaryDevice: 'Enumeración'
        },
        {
          id: 'e4-p7',
          spanish: 'Buscó una llave. Buscó una carta. Buscó una explicación.',
          armenian: 'Փնտրեց մի բանալի: Փնտրեց մի նամակ: Փնտրեց մի բացատրություն:',
          literaryDevice: 'Anáfora («Buscó...»)'
        },
        {
          id: 'e4-p8',
          spanish: 'De repente, escuchó una voz: —¡Silencio! Aquí solo encontrarás silencio.',
          armenian: 'Հանկարծ նա մի ձայն լսեց. «Լռությո՛ւն: Այստեղ կգտնես միայն լռություն»:',
          literaryDevice: 'Epanadiplosis («Silencio... silencio»)'
        },
        {
          id: 'e4-p9',
          spanish: 'Lucía sintió miedo. Su corazón era un tambor y sus ojos eran dos faros que buscaban algo en la oscuridad.',
          armenian: 'Լուսիան վախ զգաց: Նրա սիրտը թմբուկ էր, իսկ նրա աչքերը երկու փարոս էին, որոնք ինչ-որ բան էին փնտրում խավարի մեջ:',
          literaryDevice: 'Metáfora (corazón = tambor; ojos = faros)'
        },
        {
          id: 'e4-p10',
          spanish: 'Sofía susurraba sobre la seca senda, decía una frase escrita en un libro.',
          armenian: '«Սոֆիան շշնջում էր չոր արահետի վրա»,— գրված էր գրքում եղած մի նախադասության մեջ:',
          literaryDevice: 'Aliteración (sonido /s/)'
        },
        {
          id: 'e4-p11',
          spanish: 'Lucía siguió leyendo: «No confundas el cuento con la cuenta».',
          armenian: 'Լուսիան շարունակեց կարդալ. «Մի՛ շփոթիր հեքիաթը/պատմվածքը հաշվի հետ»:',
          literaryDevice: 'Paronomasia (cuento / cuenta)'
        },
        {
          id: 'e4-p12',
          spanish: 'Entonces se abrió una ventana.',
          armenian: 'Այդ պահին մի պատուհան բացվեց:'
        },
        {
          id: 'e4-p13',
          spanish: 'Y el viento entró y movió las cortinas y apagó las velas y cerró la puerta.',
          armenian: 'Եվ քամին ներս մտավ, և՛ շարժեց վարագույրները, և՛ հանգցրեց մոմերը, և՛ փակեց դուռը:',
          literaryDevice: 'Polisíndeton (repetición de «y»)'
        },
        {
          id: 'e4-p14',
          spanish: '—¡Lo he visto con mis propios ojos! —gritó Lucía.',
          armenian: '«Ես դա տեսել եմ իմ սեփական աչքերով»,— գոչեց Լուսիան:',
          literaryDevice: 'Pleonasmo'
        },
        {
          id: 'e4-p15',
          spanish: 'En el suelo encontró una nota: «Miedo, todo comenzó con miedo».',
          armenian: 'Հատակին նա գտավ մի գրություն. «Վախ, ամեն ինչ սկսվեց վախով»:',
          literaryDevice: 'Epanadiplosis («Miedo... miedo»)'
        },
        {
          id: 'e4-p16',
          spanish: 'Al día siguiente, contó su aventura a su abuela. La anciana le explicó que aquella biblioteca tenía una historia misteriosa que los habitantes del pueblo transmitían oralmente desde hacía generaciones.',
          armenian: 'Հաջորդ օրը նա իր արկածի մասին պատմեց տատիկին: Տարեց կինը բացատրեց, որ այդ գրադարանն ուներ մի խորհրդավոր պատմություն, որը գյուղի բնակիչները բանավոր փոխանցում էին սերնդեսերունդ:'
        }
      ]
    },
    {
      id: 'e4-t2',
      titleEs: 'TEXTO 2 — El viaje del caballero',
      titleHy: 'ՏԵՔՍՏ 2 — Ասպետի ճամփորդությունը (Բանաստեղծական տեքստ / Ռոմանս)',
      type: 'poem',
      analysisNotesEs: 'Romance tradicional: versos octosílabos (8 sílabas), rima asonante en versos pares (dorado, caballo, estrellado, canto: rima a-o), impares sueltos.',
      analysisNotesHy: 'Ավանդական ռոմանս. ութավանկ տողեր (8 sílabas), ասոնանս հանգ զույգ տողերում «a-o» ձայնավորներով (dorado, caballo, estrellado, canto):',
      paragraphs: [
        {
          id: 'e4-v1',
          spanish: 'La niña cruza la plaza,',
          armenian: 'Աղջիկն անցնում է հրապարակով,',
          syllables: 'La / ni / ña / cru / za / la / pla / za (8)'
        },
        {
          id: 'e4-v2',
          spanish: 'con su vestido dorado.',
          armenian: 'իր ոսկեզօծ զգեստով:',
          syllables: 'con / su / ves / ti / do / do / ra / do (8 - rima a-o)'
        },
        {
          id: 'e4-v3',
          spanish: 'El viento mueve las hojas',
          armenian: 'Քամին շարժում է տերևները',
          syllables: 'El / vien / to / mue / ve / las / ho / jas (8)'
        },
        {
          id: 'e4-v4',
          spanish: 'y saluda a su caballo.',
          armenian: 'և ողջունում է նրա ձիուն:',
          syllables: 'y / sa / lu / da a / su / ca / ba / llo (8 - rima a-o)',
          literaryDevice: 'Personificación'
        },
        {
          id: 'e4-v5',
          spanish: 'La torre guarda secretos',
          armenian: 'Աշտարակը գաղտնիքներ է պահում',
          syllables: 'La / to / rre / guar / da / se / cre / tos (8)',
          literaryDevice: 'Personificación'
        },
        {
          id: 'e4-v6',
          spanish: 'bajo su cielo estrellado.',
          armenian: 'իր աստղազարդ երկնքի ներքո:',
          syllables: 'ba / jo / su / cie / lo es / tre / lla / do (8 - rima a-o)'
        },
        {
          id: 'e4-v7',
          spanish: 'La noche cubre el camino',
          armenian: 'Գիշերը ծածկում է ճանապարհը',
          syllables: 'La / no / che / cu / bre el / ca / mi / no (8)'
        },
        {
          id: 'e4-v8',
          spanish: 'y regresa con un canto.',
          armenian: 'և վերադառնում է երգով:',
          syllables: 'y / re / gre / sa / con / un / can / to (8 - rima a-o)',
          literaryDevice: 'Personificación'
        }
      ]
    }
  ],
  questions: [
    {
      id: 1,
      sectionTitleEs: 'Ejercicio 1. Comprensión lectora',
      sectionTitleHy: 'Առաջադրանք 1. Տեքստի ըմբռնում',
      questionEs: '¿Quién es la protagonista de la historia?',
      questionHy: 'Ո՞վ է պատմության գլխավոր հերոսը։',
      type: 'open',
      correctAnswer: 'La protagonista es Lucía, una niña de trece años que vive en un pueblo pequeño.',
      explanationEs: 'La protagonista es Lucía, quien tiene 13 años y visita la biblioteca abandonada.',
      explanationHy: 'Գլխավոր հերոսը 13-ամյա Լուսիան է:'
    },
    {
      id: 2,
      sectionTitleEs: 'Ejercicio 1. Comprensión lectora',
      sectionTitleHy: 'Առաջադրանք 1. Տեքստի ըմբռնում',
      questionEs: '¿Dónde ocurre la historia?',
      questionHy: 'Որտե՞ղ է տեղի ունենում պատմությունը։',
      type: 'open',
      correctAnswer: 'Ocurre en un pueblo pequeño, concretamente en el interior de una biblioteca abandonada.',
      explanationEs: 'Se desarrolla en una antigua biblioteca abandonada ubicada en un pueblo pequeño.',
      explanationHy: 'Տեղի է ունենում փոքրիկ գյուղում գտնվող լքված գրադարանում:'
    },
    {
      id: 3,
      sectionTitleEs: 'Ejercicio 1. Comprensión lectora',
      sectionTitleHy: 'Առաջադրանք 1. Տեքստի ըմբռնում',
      questionEs: '¿Qué objetos encontró Lucía dentro de la biblioteca?',
      questionHy: 'Ի՞նչ առարկաներ գտավ Լուսիան գրադարանում։',
      type: 'open',
      correctAnswer: 'Encontró libros, mapas, cartas, fotografías, cuadros y una nota en el suelo.',
      explanationEs: 'Halló una enumeración de objetos: libros, mapas, cartas, fotografías, cuadros y las notas escritas.',
      explanationHy: 'Գտավ գրքեր, քարտեզներ, նամակներ, լուսանկարներ, նկարներ և հատակին ընկած գրություն:'
    },
    {
      id: 4,
      sectionTitleEs: 'Ejercicio 1. Comprensión lectora',
      sectionTitleHy: 'Առաջադրանք 1. Տեքստի ըմբռնում',
      questionEs: '¿Por qué tenía miedo Lucía?',
      questionHy: 'Ինչո՞ւ էր Լուսիան վախենում։',
      type: 'open',
      correctAnswer: 'Por los sucesos misteriosos: el sonido del reloj («¡Tic, tac!»), las ventanas que parecían llorar, una voz desconocida que pedía silencio y el viento que cerró la puerta de golpe.',
      explanationEs: 'Tenía miedo por el ambiente tétrico, la voz extraña que le susurró «¡Silencio!» y las fuerzas misteriosas del viento que apagaron las velas y cerraron la puerta.',
      explanationHy: 'Նա վախենում էր խորհրդավոր իրադարձություններից. անհայտ ձայնից, որը պահանջում էր լռություն, լացող պատուհաններից և քամուց, որը փակեց դուռն ու հանգցրեց մոմերը:'
    },
    {
      id: 5,
      sectionTitleEs: 'Ejercicio 1. Comprensión lectora',
      sectionTitleHy: 'Առաջադրանք 1. Տեքստի ըմբռնում',
      questionEs: '¿Cómo se transmitía la historia de la biblioteca?',
      questionHy: 'Ինչպե՞ս էր փոխանցվում գրադարանի պատմությունը։',
      type: 'open',
      correctAnswer: 'Se transmitía de forma oral de generación en generación entre los habitantes del pueblo.',
      explanationEs: 'Los habitantes del pueblo la transmitían oralmente desde hacía generaciones.',
      explanationHy: 'Գյուղի բնակիչները այն փոխանցում էին բանավոր եղանակով՝ սերնդեսերունդ:'
    },
    {
      id: 6,
      sectionTitleEs: 'Ejercicio 1. Comprensión lectora',
      sectionTitleHy: 'Առաջադրանք 1. Տեքստի ըմբռնում',
      questionEs: '¿Qué características de la literatura popular aparecen al final?',
      questionHy: 'Ժողովրդական գրականության (literatura popular) ո՞ր հատկանիշներն են հանդիպում վերջում։',
      type: 'open',
      correctAnswer: 'La transmisión oral, el carácter anónimo (no se menciona autor) y el arraigo colectivo tradicional a lo largo de las generaciones.',
      explanationEs: 'Aparecen: 1) Transmisión oral (de boca en boca), 2) Anonimato (no hay autor conocido), 3) Pervivencia tradicional entre generaciones comunitarias.',
      explanationHy: '1) Բանավոր փոխանցում, 2) Անանուն հեղինակություն, 3) Սերնդեսերունդ փոխանցվող ժողովրդական ավանդույթ:'
    },
    {
      id: 7,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Las ventanas lloraban bajo la lluvia.',
      quoteHy: 'Պատուհանները լալիս էին անձրևի տակ:',
      questionEs: '«Las ventanas lloraban bajo la lluvia». ¿Qué figura literaria es y por qué?',
      questionHy: '«Las ventanas lloraban bajo la lluvia». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Personificación: atribuye la acción humana de llorar a las ventanas.',
      explanationEs: 'Es una PERSONIFICACIÓN porque atribuye la cualidad humana de «llorar» a unos objetos inanimados (las ventanas mojadas por el agua de lluvia).',
      explanationHy: 'Սա ԱՆՁՆԱՎՈՐՈՒՄ (personificación) է, որովհետև լալու մարդկային գործողությունը վերագրված է պատուհաններին:'
    },
    {
      id: 8,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: '¡Tic, tac! ¡Tic, tac!',
      quoteHy: 'Տի՛կ, տա՛կ: Տի՛կ, տա՛կ:',
      questionEs: '«¡Tic, tac! ¡Tic, tac!». ¿Qué figura literaria es y por qué?',
      questionHy: '«¡Tic, tac! ¡Tic, tac!». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Onomatopeya: imita acústicamente el sonido mecánico del reloj.',
      explanationEs: 'Es una ONOMATOPEYA porque imita directamente el sonido acústico del segundero de un reloj mecánico.',
      explanationHy: 'Սա ՕՆՈՄԱՏՈՊԵԱ (onomatopeya) է, քանի որ նմանակում է ժամացույցի վայրկյանաչափի ձայնը:'
    },
    {
      id: 9,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'De hierro era la puerta principal.',
      quoteHy: 'Երկաթից էր գլխավոր դուռը:',
      questionEs: '«De hierro era la puerta principal». ¿Qué figura literaria es y por qué?',
      questionHy: '«De hierro era la puerta principal». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Hipérbaton: altera el orden habitual (orden regular: La puerta principal era de hierro).',
      explanationEs: 'Es un HIPÉRBATON porque altera el orden sintáctico habitual. El orden normal sería: «La puerta principal era de hierro».',
      explanationHy: 'Սա ՀԻՊԵՐԲԱՏՈՆ (hipérbaton) է, որովհետև խախտված է սովորական շարադասությունը (սովորական կարգ՝ «La puerta principal era de hierro»):'
    },
    {
      id: 10,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Libros, mapas, cartas, fotografías y cuadros.',
      quoteHy: 'Գրքեր, քարտեզներ, նամակներ, լուսանկարներ և նկարներ:',
      questionEs: '«Libros, mapas, cartas, fotografías y cuadros». ¿Qué figura literaria es y por qué?',
      questionHy: '«Libros, mapas, cartas, fotografías y cuadros». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Enumeración: lista sucesiva de elementos relacionados acumulados en la frase.',
      explanationEs: 'Es una ENUMERACIÓN porque presenta una lista sucesiva de cinco objetos afines que se encuentran en el mismo espacio.',
      explanationHy: 'Սա ԹՎԱՐԿՈՒՄ (enumeración) է՝ գրադարանում եղած հինգ առարկաների հաջորդական շարք:'
    },
    {
      id: 11,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Buscó una llave. Buscó una carta. Buscó una explicación.',
      quoteHy: 'Փնտրեց մի բանալի: Փնտրեց մի նամակ: Փնտրեց մի բացատրություն:',
      questionEs: '«Buscó una llave. Buscó una carta. Buscó una explicación». ¿Qué figura literaria es y por qué?',
      questionHy: '«Buscó una llave. Buscó una carta. Buscó una explicación». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Anáfora: repite la palabra «Buscó» al comienzo de tres oraciones consecutivas.',
      explanationEs: 'Es una ANÁFORA porque se repite el verbo «Buscó» al inicio de cada una de las tres oraciones contiguas.',
      explanationHy: 'Սա ԱՆԱՖՈՐԱ (anáfora) է, քանի որ «Buscó» բառը կրկնվում է երեք նախադասությունների սկզբում:'
    },
    {
      id: 12,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: '¡Silencio! Aquí solo encontrarás silencio.',
      quoteHy: 'Լռությո՛ւն: Այստեղ կգտնես միայն լռություն:',
      questionEs: '«¡Silencio! Aquí solo encontrarás silencio». ¿Qué figura literaria es y por qué?',
      questionHy: '«¡Silencio! Aquí solo encontrarás silencio». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Epanadiplosis: la frase empieza y termina con la misma palabra («Silencio»).',
      explanationEs: 'Es una EPANADIPLOSIS porque el enunciado comienza con la palabra «Silencio» y concluye exactamente con «silencio».',
      explanationHy: 'Սա ԷՊԱՆԱԴԻՊԼՈՍԻՍ (epanadiplosis) է, որովհետև արտահայտությունը սկսվում և ավարտվում է նույն «silencio» բառով:'
    },
    {
      id: 13,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Su corazón era un tambor.',
      quoteHy: 'Նրա սիրտը թմբուկ էր:',
      questionEs: '«Su corazón era un tambor». ¿Qué figura literaria es y por qué?',
      questionHy: '«Su corazón era un tambor». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Metáfora (A es B): identifica el corazón (A) con un tambor (B).',
      explanationEs: 'Es una METÁFORA porque identifica el término real A («corazón») con el imaginario B («un tambor») con estructura A es B.',
      explanationHy: 'Սա ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ (metáfora, A es B) է. սիրտը (A) նույնացվում է թմբուկի (B) հետ:'
    },
    {
      id: 14,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Sofía susurraba sobre la seca senda.',
      quoteHy: 'Սոֆիան շշնջում էր չոր արահետի վրա:',
      questionEs: '«Sofía susurraba sobre la seca senda». ¿Qué figura literaria es y por qué?',
      questionHy: '«Sofía susurraba sobre la seca senda». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Aliteración: repetición continuada del sonido consonántico /s/.',
      explanationEs: 'Es una ALITERACIÓN por la repetición deliberada del fonema /s/ («Sofía susurraba sobre la seca senda»), evocando el rumor del susurro.',
      explanationHy: 'Սա ԱԼԻՏԵՐԱՑԻԱ (aliteración) է՝ /s/ հնչյունի շեշտված կրկնությամբ:'
    },
    {
      id: 15,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'No confundas el cuento con la cuenta.',
      quoteHy: 'Մի՛ շփոթիր հեքիաթը/պատմվածքը հաշվի հետ:',
      questionEs: '«No confundas el cuento con la cuenta». ¿Qué figura literaria es y por qué?',
      questionHy: '«No confundas el cuento con la cuenta». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Paronomasia: juego fonético entre palabras de sonido semejante pero distinto significado («cuento» y «cuenta»).',
      explanationEs: 'Es una PARONOMASIA porque utiliza palabras con sonido muy parecido («cuento» / «cuenta») con significados totalmente distintos.',
      explanationHy: 'Սա ՊԱՐՈՆՈՄԱԶԻԱ (paronomasia) է՝ «cuento» և «cuenta» նմանահունչ բառերի խաղ:'
    },
    {
      id: 16,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Y el viento entró y movió las cortinas y apagó las velas y cerró la puerta.',
      quoteHy: 'Եվ քամին ներս մտավ, և՛ շարժեց վարագույրները, և՛ հանգցրեց մոմերը, և՛ փակեց դուռը:',
      questionEs: '«Y el viento entró y movió las cortinas y apagó las velas y cerró la puerta». ¿Qué figura es?',
      questionHy: '«Y el viento entró y movió las cortinas y apagó las velas y cerró la puerta». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Polisíndeton: repetición insistente de la conjunción «y».',
      explanationEs: 'Es un POLISÍNDETON porque repite cuatro veces la conjunción «y» entre las acciones para dar solemnidad y sensación de fuerza acumulada.',
      explanationHy: 'Սա ՊՈԼԻՍԻՆԴԵՏՈՆ (բազմաշաղկապություն) է՝ «y» շաղկապի բազմակի կրկնությամբ:'
    },
    {
      id: 17,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Lo he visto con mis propios ojos.',
      quoteHy: 'Ես դա տեսել եմ իմ սեփական աչքերով:',
      questionEs: '«Lo he visto con mis propios ojos». ¿Qué figura literaria es y por qué?',
      questionHy: '«Lo he visto con mis propios ojos». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Pleonasmo: redundancia expresiva (ver ya se hace con los ojos).',
      explanationEs: 'Es un PLEONASMO porque «con mis propios ojos» añade una redundancia a «haberlo visto» para otorgar máxima certeza e intensidad.',
      explanationHy: 'Սա ՊԼԵՈՆԱԶՄ (pleonasmo, ավելաբանություն) է՝ «տեսել եմ իմ սեփական աչքերով»:'
    },
    {
      id: 18,
      sectionTitleEs: 'Ejercicio 2. Identifica la figura literaria',
      sectionTitleHy: 'Առաջադրանք 2. Գտիր արտահայտչամիջոցը',
      quoteEs: 'Miedo, todo comenzó con miedo.',
      quoteHy: 'Վախ, ամեն ինչ սկսվեց վախով:',
      questionEs: '«Miedo, todo comenzó con miedo». ¿Qué figura literaria es y por qué?',
      questionHy: '«Miedo, todo comenzó con miedo». Ո՞ր արտահայտչամիջոցն է և ինչո՞ւ։',
      type: 'open',
      correctAnswer: 'Epanadiplosis: empieza y termina la frase con la palabra «miedo».',
      explanationEs: 'Es una EPANADIPLOSIS porque el enunciado se abre con «Miedo» y se cierra exactamente con «miedo».',
      explanationHy: 'Սա ԷՊԱՆԱԴԻՊԼՈՍԻՍ (epanadiplosis) է, որովհետև սկսվում և ավարտվում է «miedo» բառով:'
    },
    {
      id: 19,
      sectionTitleEs: 'Ejercicio 3. Metáforas A y B',
      sectionTitleHy: 'Առաջադրանք 3. Փոխաբերության վերլուծություն',
      quoteEs: 'Su corazón era un tambor.',
      quoteHy: 'Նրա սիրտը թմբուկ էր:',
      questionEs: 'En «Su corazón era un tambor»: ¿Cuál es A? ¿Cuál es B? ¿Qué estructura tiene?',
      questionHy: '«Su corazón era un tambor» արտահայտության մեջ՝ Ո՞րն է A-ն, ո՞րն է B-ն, ի՞նչ կառուցվածք ունի։',
      type: 'transformation',
      correctAnswer: 'A (real) = corazón; B (imaginario) = tambor; Estructura = A es B.',
      explanationEs: '• A (término real) = corazón.\n• B (término imaginario) = tambor.\n• Estructura = A es B.',
      explanationHy: '• A (իրական տարր) = corazón (սիրտ)\n• B (պատկերավոր տարր) = tambor (թմբուկ)\n• Կառուցվածք = A es B'
    },
    {
      id: 20,
      sectionTitleEs: 'Ejercicio 3. Metáforas A y B',
      sectionTitleHy: 'Առաջադրանք 3. Փոխաբերության վերլուծություն',
      quoteEs: 'Sus ojos eran dos faros.',
      quoteHy: 'Նրա աչքերը երկու փարոս էին:',
      questionEs: 'En «Sus ojos eran dos faros»: Identifica A y B. ¿Qué semejanza existe entre los ojos y los faros?',
      questionHy: '«Sus ojos eran dos faros» արտահայտության մեջ գտիր A-ն և B-ն։ Ի՞նչ նմանություն կա աչքերի և փարոսների միջև։',
      type: 'transformation',
      correctAnswer: 'A = ojos; B = faros. Semejanza: la luz intensa que emiten/buscan para iluminar en la oscuridad.',
      explanationEs: 'A = ojos; B = faros. Semejanza: los faros guían e iluminan en la noche; los ojos de Lucía buscaban intensamente abrirse paso en la penumbra.',
      explanationHy: 'A = աչքեր, B = փարոսներ: Նմանությունը՝ լույս տալու և խավարի մեջ ճանապարհ փնտրելու պայծառությունը:'
    },
    {
      id: 21,
      sectionTitleEs: 'Ejercicio 3. Metáforas A y B',
      sectionTitleHy: 'Առաջադրանք 3. Փոխաբերության վերլուծություն',
      questionEs: 'Transforma la metáfora «Tus ojos son estrellas» (estructura A es B) a la estructura «B de A».',
      questionHy: 'Փոխիր «Tus ojos son estrellas» փոխաբերության կառուցվածքը «A es B»-ից դեպի «B de A»։',
      type: 'transformation',
      correctAnswer: 'Las estrellas de tus ojos.',
      explanationEs: 'En «Tus ojos son estrellas», A = ojos y B = estrellas. Al pasar a la estructura «B de A», el término B va delante seguido de «de» y el término A: «Las estrellas de tus ojos».',
      explanationHy: '«A es B» («Tus ojos son estrellas») → «B de A» ձևափոխվում է որպես՝ «Las estrellas de tus ojos» (Քո աչքերի աստղերը):'
    },
    {
      id: 22,
      sectionTitleEs: 'Ejercicio 3. Metáforas A y B',
      sectionTitleHy: 'Առաջադրանք 3. Փոխաբերության վերլուծություն',
      questionEs: 'Transforma la metáfora «La música de tu voz» (estructura B de A) a la estructura «A es B».',
      questionHy: 'Փոխիր «La música de tu voz» փոխաբերության կառուցվածքը «B de A»-ից դեպի «A es B»։',
      type: 'transformation',
      correctAnswer: 'Tu voz es música.',
      explanationEs: 'En «La música de tu voz», B = música y A = voz. Al convertirlo a «A es B», ponemos A al inicio: «Tu voz es música».',
      explanationHy: '«B de A» («La música de tu voz») → «A es B» ձևափոխվում է որպես՝ «Tu voz es música» (Քո ձայնը երաժշտություն է):'
    },
    {
      id: 23,
      sectionTitleEs: 'Ejercicio 3. Metáforas A y B',
      sectionTitleHy: 'Առաջադրանք 3. Փոխաբերության վերլուծություն',
      questionEs: 'Identifica la estructura de cada una de estas 4 expresiones:\na) Sus manos son hielo.\nb) El hielo de sus manos.\nc) Sus manos de hielo.\nd) Dos luceros brillaban en su rostro.',
      questionHy: 'Որոշիր հետևյալ 4 արտահայտությունների կառուցվածքը (a-d)։',
      type: 'transformation',
      correctAnswer: 'a) A es B; b) B de A; c) A de B; d) Solo B (metáfora pura).',
      explanationEs: `a) «Sus manos son hielo» → Estructura: A es B (A=manos, B=hielo).
b) «El hielo de sus manos» → Estructura: B de A (B=hielo, A=manos).
c) «Sus manos de hielo» → Estructura: A de B (A=manos, B=hielo).
d) «Dos luceros brillaban en su rostro» → Estructura: Solo B (B=luceros en lugar de ojos; el término real A no aparece expreso).`,
      explanationHy: `a) «Sus manos son hielo» → A es B (A-ն B է)
b) «El hielo de sus manos» → B de A (A-ի B-ն)
c) «Sus manos de hielo» → A de B (B-ի A-ն)
d) «Dos luceros brillaban en su rostro» → Solo B (Միայն B-ն՝ մաքուր փոխաբերություն)`
    },
    {
      id: 24,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Cuántos versos tiene el poema («El viaje del caballero»)?',
      questionHy: 'Քանի՞ տող (versos) ունի բանաստեղծությունը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: '6 versos', textHy: '6 տող' },
        { key: 'B', textEs: '8 versos', textHy: '8 տող' },
        { key: 'C', textEs: '10 versos', textHy: '10 տող' }
      ],
      correctAnswer: 'B',
      explanationEs: 'El poema contiene 8 versos de arte menor.',
      explanationHy: 'Բանաստեղծությունն ունի 8 տող (B):'
    },
    {
      id: 25,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Cuántas sílabas métricas tiene el primer verso: «La niña cruza la plaza»?',
      questionHy: 'Քանի՞ չափական վանկ ունի առաջին տողը («La niña cruza la plaza»)։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: '7 sílabas', textHy: '7 վանկ' },
        { key: 'B', textEs: '8 sílabas', textHy: '8 վանկ (octosílabo)' },
        { key: 'C', textEs: '9 sílabas', textHy: '9 վանկ' }
      ],
      correctAnswer: 'B',
      explanationEs: 'La (1) - ni (2) - ña (3) - cru (4) - za (5) - la (6) - pla (7) - za (8). Verso octosílabo.',
      explanationHy: '8 վանկ (B)՝ octosílabo:'
    },
    {
      id: 26,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué palabras terminan los versos pares?',
      questionHy: 'Ո՞ր բառերով են ավարտվում զույգ տողերը (2, 4, 6, 8)։',
      type: 'open',
      correctAnswer: 'dorado (v. 2), caballo (v. 4), estrellado (v. 6) y canto (v. 8).',
      explanationEs: 'Las palabras finales de los versos pares son: «dorado», «caballo», «estrellado» y «canto».',
      explanationHy: 'Զույգ տողերի վերջին բառերն են՝ «dorado», «caballo», «estrellado», «canto»:'
    },
    {
      id: 27,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué vocales coinciden en la rima de los versos pares?',
      questionHy: 'Ո՞ր ձայնավորներն են համընկնում զույգ տողերի հանգում։',
      type: 'open',
      correctAnswer: 'Coinciden las vocales a-o (rima asonante).',
      explanationEs: 'En dor-A-d-O, cab-A-ll-O, estrell-A-d-O y c-A-nt-O coinciden las vocales a y o a partir del acento tónico.',
      explanationHy: 'Համընկնում են «a - o» ձայնավորները (ասոնանս հանգ):'
    },
    {
      id: 28,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Qué composición tradicional representa este poema?',
      questionHy: 'Ի՞նչ տեսակի բանաստեղծություն է ներկայացնում այս պոեմը։',
      type: 'multiple-choice',
      options: [
        { key: 'A', textEs: 'Romance', textHy: 'Ռոմանս (Romance)' },
        { key: 'B', textEs: 'Mito', textHy: 'Առասպել (Mito)' },
        { key: 'C', textEs: 'Cuento', textHy: 'Պատմվածք (Cuento)' }
      ],
      correctAnswer: 'A',
      explanationEs: 'Es un romance tradicional español: versos octosílabos con rima asonante en los pares e impares sueltos.',
      explanationHy: 'Ռոմանս է (Romance, A)՝ ութավանկ տողեր և զույգերում ասոնանս հանգ:'
    },
    {
      id: 29,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: 'Identifica dos personificaciones en el poema.',
      questionHy: 'Գտիր երկու անձնավորում (personificaciones) բանաստեղծության մեջ։',
      type: 'open',
      correctAnswer: '«El viento saluda a su caballo» y «La torre guarda secretos» (o «la noche regresa con un canto»).',
      explanationEs: '1) «El viento saluda a su caballo» (saludar es una acción humana atribuida al viento). 2) «La torre guarda secretos» (guardar secretos conscientemente es propio de personas). 3) «la noche regresa con un canto».',
      explanationHy: '1) «El viento saluda a su caballo» (քամին ողջունում է ձիուն), 2) «La torre guarda secretos» (աշտարակը գաղտնիքներ է պահում):'
    },
    {
      id: 30,
      sectionTitleEs: 'Ejercicio 4. Analiza el poema (Texto 2)',
      sectionTitleHy: 'Առաջադրանք 4. Բանաստեղծության վերլուծություն (Տեքստ 2)',
      questionEs: '¿Por qué el texto está escrito en verso y no en prosa?',
      questionHy: 'Ինչո՞ւ է տեքստը չափածո (en verso), այլ ոչ արձակ (en prosa)։',
      type: 'open',
      correctAnswer: 'Porque está dispuesto en líneas rítmicas independientes (versos) que siguen una medida silábica regular (8 sílabas) y un esquema de rima asonante en los pares.',
      explanationEs: 'Está en verso porque no ocupa todo el renglón de margen a margen, sino líneas cortas con ritmo silábico medido y rima asonante.',
      explanationHy: 'Չափածո է, որովհետև կազմված է չափակցված տողերից (versos), որոնք ունեն հաշված վանկեր (8) և հանգ:'
    },
    {
      id: 31,
      sectionTitleEs: 'Ejercicio 5. Corrige los errores',
      sectionTitleHy: 'Առաջադրանք 5. Ուղղիր սխալները',
      questionEs: 'Corrige la afirmación errónea: «"La luna sonríe" es una onomatopeya porque imita un sonido».',
      questionHy: 'Ուղղիր սխալ պնդումը՝ «"La luna sonríe"-ն օնոմատոպեա է, որովհետև ձայն է նմանակում»։ Գրիր ճիշտ տարբերակը իսպաներեն։',
      type: 'correction',
      correctAnswer: 'Incorrecto. «La luna sonríe» es una PERSONIFICACIÓN porque atribuye la cualidad humana de sonreír a un astro inanimado (la luna), no imita ningún sonido.',
      explanationEs: 'Corrección exacta: «Es falso: no es una onomatopeya. Es una PERSONIFICACIÓN porque le atribuye una cualidad o acción humana (sonreír) a un objeto inanimado o celeste (la luna)».',
      explanationHy: 'Սխալ է. «La luna sonríe»-ն ԱՆՁՆԱՎՈՐՈՒՄ (personificación) է, քանի որ ժպտալու մարդկային հատկությունը վերագրված է լուսնին, այլ ոչ թե ձայն է նմանակում:'
    },
    {
      id: 32,
      sectionTitleEs: 'Ejercicio 5. Corrige los errores',
      sectionTitleHy: 'Առաջադրանք 5. Ուղղիր սխալները',
      questionEs: 'Corrige la afirmación errónea: «"Corre, salta, ríe" es un polisíndeton porque repite muchas conjunciones».',
      questionHy: 'Ուղղիր սխալ պնդումը՝ «"Corre, salta, ríe"-ն պոլիսինդետոն է, որովհետև շատ շաղկապներ է կրկնում»։ Գրիր ճիշտ տարբերակը իսպաներեն։',
      type: 'correction',
      correctAnswer: 'Incorrecto. Es un ASÍNDETON porque no tiene ninguna conjunción, las omite deliberadamente y las sustituye por comas.',
      explanationEs: 'Corrección: «Es falso: es un ASÍNDETON porque omite por completo las conjunciones ("y", "o"), separando las acciones únicamente mediante comas para aportar rapidez».',
      explanationHy: 'Սխալ է. սա ԱՍԻՆԴԵՏՈՆ (asíndeton) է, որովհետև ոչ մի շաղկապ չկա, դրանք զեղչված են և փոխարինված ստորակետներով:'
    },
    {
      id: 33,
      sectionTitleEs: 'Ejercicio 5. Corrige los errores',
      sectionTitleHy: 'Առաջադրանք 5. Ուղղիր սխալները',
      questionEs: 'Corrige la afirmación errónea: «"Tus dientes son perlas" tiene la estructura B de A».',
      questionHy: 'Ուղղիր սխալ պնդումը՝ «"Tus dientes son perlas"-ն ունի B de A կառուցվածք»։ Գրիր ճիշտ տարբերակը իսպաներեն։',
      type: 'correction',
      correctAnswer: 'Incorrecto. Tiene la estructura «A es B», donde A (real) = tus dientes, el verbo copulativo «son», y B (imaginario) = perlas. La estructura «B de A» sería «Las perlas de tus dientes».',
      explanationEs: 'Corrección: «Tiene la estructura A es B (Tus dientes [A] son perlas [B]). La forma B de A sería "Las perlas de tus dientes"».',
      explanationHy: 'Սխալ է. կառուցվածքն է «A es B» (Tus dientes [A] son perlas [B]): Իսկ «B de A» տարբերակը կլիներ՝ «Las perlas de tus dientes»:'
    },
    {
      id: 34,
      sectionTitleEs: 'Ejercicio 5. Corrige los errores',
      sectionTitleHy: 'Առաջադրանք 5. Ուղղիր սխալները',
      questionEs: 'Corrige la afirmación errónea: «"Y corre y salta y canta" es un asíndeton porque no tiene conjunciones».',
      questionHy: 'Ուղղիր սխալ պնդումը՝ «"Y corre y salta y canta"-ն ասինդետոն է, որովհետև շաղկապներ չունի»։ Գրիր ճիշտ տարբերակը իսպաներեն։',
      type: 'correction',
      correctAnswer: 'Incorrecto. Es un POLISÍNDETON porque repite intencionadamente la conjunción copulativa «y» antes de cada verbo.',
      explanationEs: 'Corrección: «Es falso: es un POLISÍNDETON porque repite deliberadamente la conjunción "y" delante de cada uno de los verbos».',
      explanationHy: 'Սխալ է. սա ՊՈԼԻՍԻՆԴԵՏՈՆ (polisíndeton) է, որովհետև յուրաքանչյուր բայից առաջ կրկնվում է «y» (և) շաղկապը:'
    },
    {
      id: 35,
      sectionTitleEs: 'Ejercicio 5. Corrige los errores',
      sectionTitleHy: 'Առաջադրանք 5. Ուղղիր սխալները',
      questionEs: 'Corrige la afirmación errónea: «"¡Pum!" es una metáfora porque identifica dos elementos».',
      questionHy: 'Ուղղիր սխալ պնդումը՝ «"¡Pum!"-ը փոխաբերություն է, որովհետև երկու տարր է նույնացնում»։ Գրիր ճիշտ տարբերակը իսպաներեն։',
      type: 'correction',
      correctAnswer: 'Incorrecto. «¡Pum!» es una ONOMATOPEYA porque imita el sonido de una explosión, golpe o disparo; no es una metáfora.',
      explanationEs: 'Corrección: «Es falso: "¡Pum!" es una ONOMATOPEYA porque imita fónicamente el ruido de un golpe o detonación, sin identificar ningún término real con imaginario».',
      explanationHy: 'Սխալ է. «¡Pum!»-ը ՕՆՈՄԱՏՈՊԵԱ (onomatopeya) է, որովհետև նմանակում է հարվածի կամ պայթյունի ձայնը, այլ ոչ թե փոխաբերություն:'
    }
  ]
};
