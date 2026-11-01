import { LiteraryDevice } from './types';

export const LITERARY_DEVICES: LiteraryDevice[] = [
  {
    id: 'aliteracion',
    nameEs: 'Aliteración',
    nameHy: 'Ալիտերացիա (Հնչյունների կրկնություն)',
    definitionEs: 'Repetición intencionada de uno o varios sonidos semejantes (normalmente consonantes) en un verso o frase para lograr un efecto rítmico o imitativo.',
    definitionHy: 'Միևնույն կամ նման հնչյունների (հիմնականում բաղաձայնների) նպատակային կրկնություն տողում կամ նախադասության մեջ՝ ռիթմ կամ ազդեցություն ստեղծելու համար:',
    keyRuleEs: 'Qué hay que encontrar: Repetición de sonidos.',
    keyRuleHy: 'Ինչ գտնել՝ Հնչյունների կրկնություն:',
    examples: [
      {
        textEs: 'La brisa barría las blancas baldosas del patio.',
        textHy: 'Զեփյուռը մաքրում էր բակի սպիտակ սալիկները:',
        explanationEs: 'Se repite insistentemente el sonido consonántico /b/ (b-b-b).',
        explanationHy: 'Համառորեն կրկնվում է /b/ բաղաձայն հնչյունը:'
      },
      {
        textEs: 'Sofía susurraba sobre la seca senda.',
        textHy: 'Սոֆիան շշնջում էր չոր արահետի վրա:',
        explanationEs: 'Se repite el sonido siseante /s/, sugiriendo el rumor del susurro.',
        explanationHy: 'Կրկնվում է /s/ սուլող հնչյունը՝ շշուկի ձայն նմանակելով:'
      }
    ],
    justificationTemplateEs: 'Es una aliteración porque se repite reiteradamente el sonido consonántico «...», aportando musicalidad y ritmo.',
    justificationTemplateHy: 'Սա ալիտերացիա է, քանի որ պարբերաբար կրկնվում է «...» բաղաձայն հնչյունը՝ հաղորդելով երաժշտականություն և ռիթմ:',
    commonConfusionEs: 'No confundir con la anáfora: la anáfora repite palabras enteras al inicio de versos, mientras la aliteración repite sonidos fonéticos.',
    commonConfusionHy: 'Չշփոթել անաֆորայի հետ. անաֆորան կրկնում է ամբողջական բառեր սկզբում, իսկ ալիտերացիան՝ առանձին հնչյուններ:'
  },
  {
    id: 'onomatopeya',
    nameEs: 'Onomatopeya',
    nameHy: 'Օնոմատոպեա (Ձայնանմանակում)',
    definitionEs: 'Palabra o frase que imita o reproduce el sonido de la realidad, un animal, un objeto o una acción.',
    definitionHy: 'Բառ կամ արտահայտություն, որը նմանակում է բնության, կենդանիների, առարկաների կամ գործողությունների իրական ձայները:',
    keyRuleEs: 'Qué hay que encontrar: Imitación de sonidos.',
    keyRuleHy: 'Ինչ գտնել՝ Ձայնի նմանակում:',
    examples: [
      {
        textEs: '—¡Din, don! ¡Din, don! Era el sonido de una campana.',
        textHy: '«Դի՛ն, դո՛ն: Դի՛ն, դո՛ն»: Զանգի ձայնն էր:',
        explanationEs: 'Imita el sonido resonante del metal de la campana al tañer.',
        explanationHy: 'Նմանակում է զանգի հնչյունը:'
      },
      {
        textEs: '—¡Cric, crac! —sonó una rama detrás de él.',
        textHy: '«Կրի՛կ, կրա՛կ»,— ճտաց ճյուղը նրա հետևում:',
        explanationEs: 'Reproduce el chasquido y crujido de la rama rota.',
        explanationHy: 'Նմանակում է կոտրվող ճյուղի չոր ճտտոցը:'
      },
      {
        textEs: '—¡Tic, tac! ¡Tic, tac! —sonaba un viejo reloj.',
        textHy: '«Տի՛կ, տա՛կ: Տի՛կ, տա՛կ»,— հնչում էր հին ժամացույցը:',
        explanationEs: 'Imita el movimiento continuo del segundero del reloj.',
        explanationHy: 'Նմանակում է ժամացույցի վայրկյանաչափի ձայնը:'
      }
    ],
    justificationTemplateEs: 'Es una onomatopeya porque imita acústicamente el sonido real de «...».',
    justificationTemplateHy: 'Սա ձայնանմանակում (onomatopeya) է, քանի որ լսողականորեն նմանակում է «...»-ի իրական ձայնը:'
  },
  {
    id: 'paronomasia',
    nameEs: 'Paronomasia',
    nameHy: 'Պարոնոմազիա (Նմանահունչ բառերի խաղ)',
    definitionEs: 'Uso cercano de palabras que tienen sonidos muy parecidos pero significados totalmente diferentes.',
    definitionHy: 'Այնպիսի բառերի կողք կողքի կիրառում, որոնք ունեն շատ նման հնչյունական կազմ, բայց բոլորովին տարբեր իմաստներ (հարանուններ):',
    keyRuleEs: 'Qué hay que encontrar: Palabras de sonido parecido.',
    keyRuleHy: 'Ինչ գտնել՝ Նմանահունչ բառեր (casa/cosa, cuento/cuenta):',
    examples: [
      {
        textEs: 'La casa esconde una cosa misteriosa.',
        textHy: 'Տունը (casa) թաքցնում է մի խորհրդավոր բան (cosa):',
        explanationEs: 'Juega con la similitud fónica entre «casa» y «cosa».',
        explanationHy: 'Հնչյունական նմանություն է ստեղծում «casa» (տուն) և «cosa» (իր, բան) բառերի միջև:'
      },
      {
        textEs: 'No confundas el cuento con la cuenta.',
        textHy: 'Մի՛ շփոթիր հեքիաթը/պատմվածքը (cuento) հաշվի (cuenta) հետ:',
        explanationEs: 'Juego de palabras entre «cuento» (relato) y «cuenta» (cálculo o factura).',
        explanationHy: 'Բառախաղ «cuento» (պատմվածք) և «cuenta» (հաշիվ) նմանահունչ բառերի միջև:'
      }
    ],
    justificationTemplateEs: 'Es una paronomasia porque emplea palabras fonéticamente muy parecidas («...» y «...») pero con significados completamente distintos.',
    justificationTemplateHy: 'Սա պարոնոմազիա է, որովհետև օգտագործված են հնչյունորեն շատ նման («...» և «...»), բայց լիովին տարբեր իմաստ ունեցող բառեր:'
  },
  {
    id: 'epanadiplosis',
    nameEs: 'Epanadiplosis',
    nameHy: 'Էպանադիպլոսիս (Շրջանակային կրկնություն)',
    definitionEs: 'Figura retórica que consiste en empezar y terminar una misma frase, enunciado o verso con la misma palabra.',
    definitionHy: 'Գեղարվեստական միջոց, որի դեպքում միևնույն նախադասությունը կամ տողը սկսվում և ավարտվում է նույն բառով:',
    keyRuleEs: 'Qué hay que encontrar: Misma palabra al inicio y al final.',
    keyRuleHy: 'Ինչ գտնել՝ Նույն բառը սկզբում և վերջում:',
    examples: [
      {
        textEs: '¡Silencio! En este castillo solo hay silencio.',
        textHy: 'Լռությո՛ւն: Այս ամրոցում կա միայն լռություն:',
        explanationEs: 'Comienza con «Silencio» y concluye exactamente con «silencio».',
        explanationHy: 'Նախադասությունը սկսվում է «Silencio» բառով և ավարտվում նույն «silencio» բառով:'
      },
      {
        textEs: 'Sueño, todo comenzó con un sueño.',
        textHy: 'Երազ, ամեն ինչ սկսվեց երազով:',
        explanationEs: 'Se abre y se cierra el enunciado con el término «sueño».',
        explanationHy: 'Արտահայտությունը բացվում և փակվում է «sueño» (երազ) բառով:'
      },
      {
        textEs: 'Miedo, todo comenzó con miedo.',
        textHy: 'Վախ, ամեն ինչ սկսվեց վախով:',
        explanationEs: 'Empieza por «Miedo» y termina por «miedo».',
        explanationHy: 'Սկսվում է «Miedo» (վախ) բառով և ավարտվում «miedo» բառով:'
      }
    ],
    justificationTemplateEs: 'Es una epanadiplosis porque el enunciado comienza y finaliza con la mismísima palabra («...»).',
    justificationTemplateHy: 'Սա էպանադիպլոսիս է, որովհետև արտահայտությունը սկսվում և ավարտվում է ճիշտ նույն բառով («...»):',
    commonConfusionEs: 'Diferencia con la anáfora: la anáfora repite al inicio de varias oraciones distintas; la epanadiplosis repite al inicio y al final de la misma oración.',
    commonConfusionHy: 'Տարբերությունն անաֆորայից. անաֆորան կրկնվում է տարբեր տողերի/նախադասությունների սկզբում, իսկ էպանադիպլոսիսը՝ նույն նախադասության սկզբում և վերջում:'
  },
  {
    id: 'anafora',
    nameEs: 'Anáfora',
    nameHy: 'Անաֆորա (Սկզբնակրկնություն)',
    definitionEs: 'Repetición intencionada de una o más palabras al comienzo de varios versos o frases consecutivas.',
    definitionHy: 'Մեկ կամ մի քանի բառերի կանխամտածված կրկնություն հաջորդական տողերի կամ նախադասությունների սկզբում:',
    keyRuleEs: 'Qué hay que encontrar: Repetición al comienzo.',
    keyRuleHy: 'Ինչ գտնել՝ Կրկնություն սկզբում:',
    examples: [
      {
        textEs: 'Quería descubrir el misterio. Quería encontrar la campana. Quería conocer la verdad.',
        textHy: 'Ուզում էր բացահայտել գաղտնիքը: Ուզում էր գտնել զանգը: Ուզում էր իմանալ ճշմարտությունը:',
        explanationEs: 'Se repite el verbo «Quería» al principio de tres oraciones seguidas.',
        explanationHy: 'Երեք հաջորդական նախադասությունների սկզբում կրկնվում է «Quería» (ուզում էր) բառը:'
      },
      {
        textEs: 'Busca la verdad. Busca la llave. Busca el camino.',
        textHy: 'Փնտրի՛ր ճշմարտությունը: Փնտրի՛ր բանալին: Փնտրի՛ր ճանապարհը:',
        explanationEs: 'La forma imperativa «Busca» encabeza cada una de las frases.',
        explanationHy: '«Busca» (փնտրի՛ր) հրամայական բառը սկսում է յուրաքանչյուր նախադասություն:'
      },
      {
        textEs: 'Buscó una llave. Buscó una carta. Buscó una explicación.',
        textHy: 'Փնտրեց բանալի: Փնտրեց նամակ: Փնտրեց բացատրություն:',
        explanationEs: 'Reitera «Buscó» al frente de tres enunciados contiguos.',
        explanationHy: '«Buscó» (փնտրեց) բառը կրկնվում է երեք նախադասությունների սկզբում:'
      }
    ],
    justificationTemplateEs: 'Es una anáfora porque se repite la palabra «...» al comienzo de frases o versos consecutivos.',
    justificationTemplateHy: 'Սա անաֆորա է, քանի որ հաջորդական նախադասությունների/տողերի սկզբում կրկնվում է «...» բառը:'
  },
  {
    id: 'hiperbaton',
    nameEs: 'Hipérbaton',
    nameHy: 'Հիպերբատոն (Շարադասության խախտում)',
    definitionEs: 'Alteración del orden sintáctico habitual y lógico de los elementos de una oración (Sujeto + Verbo + Complementos) para destacar una idea o embellecer el estilo.',
    definitionHy: 'Նախադասության անդամների սովորական քերականական շարադասության (Ենթակա + Ստորոգյալ + Լրացումներ) խախտում՝ որևէ բառ ընդգծելու կամ ոճը գեղարվեստական դարձնելու համար:',
    keyRuleEs: 'Qué hay que encontrar: Alteración del orden gramatical.',
    keyRuleHy: 'Ինչ գտնել՝ Շարադասության փոփոխություն:',
    examples: [
      {
        textEs: 'De plata eran los reflejos del río.',
        textHy: 'Արծաթից էին գետի արտացոլանքները: (Սովորական կարգ՝ Los reflejos del río eran de plata).',
        explanationEs: 'El complemento atributivo «De plata» pasa al principio en vez del sujeto.',
        explanationHy: '«De plata» (արծաթից) լրացումը տեղափոխվել է նախադասության սկիզբ՝ ենթակայից առաջ:'
      },
      {
        textEs: 'De madera oscura era la puerta de aquella casa.',
        textHy: 'Մուգ փայտից էր այն տան դուռը: (Սովորական կարգ՝ La puerta de aquella casa era de madera oscura).',
        explanationEs: 'Se antepone la cualidad del material antes del sujeto gramatical.',
        explanationHy: 'Սովորական կարգն է. «La puerta de aquella casa era de madera oscura»:'
      },
      {
        textEs: 'De hierro era la puerta principal.',
        textHy: 'Երկաթից էր գլխավոր դուռը: (Սովորական կարգ՝ La puerta principal era de hierro).',
        explanationEs: 'Orden habitual: La puerta principal era de hierro.',
        explanationHy: 'Սովորական շարադասություն. «La puerta principal era de hierro»:'
      }
    ],
    justificationTemplateEs: 'Es un hipérbaton porque se altera el orden sintáctico habitual; el orden ordinario sería: «...».',
    justificationTemplateHy: 'Սա հիպերբատոն է, քանի որ փոխված է սովորական քերականական կարգը. սովորական շարադասությունը կլիներ՝ «...»:'
  },
  {
    id: 'asindeton',
    nameEs: 'Asíndeton',
    nameHy: 'Ասինդետոն (Անշաղկապություն / Շաղկապների զեղչում)',
    definitionEs: 'Supresión u omisión voluntaria de conjunciones (como «y», «o», «ni») entre palabras o cláusulas, separándolas solo por comas para aportar rapidez y dinamismo.',
    definitionHy: 'Բառերի կամ նախադասությունների միջև կապակցող շաղկապների (օրինակ՝ «y», «e», «ni») բացթողում՝ դրանք միայն ստորակետներով անջատելով, ինչը խոսքին հաղորդում է արագություն, եռանդ և դինամիկա:',
    keyRuleEs: 'Qué hay que encontrar: Omisión de conjunciones (solo comas).',
    keyRuleHy: 'Ինչ գտնել՝ Շաղկապների բացթողում (միայն ստորակետներ):',
    examples: [
      {
        textEs: 'Buscó una puerta, una ventana, una escalera.',
        textHy: 'Փնտրեց դուռ, պատուհան, աստիճան:',
        explanationEs: 'No utiliza la conjunción «y» antes del último elemento («...una ventana y una escalera»). Hay asíndeton y enumeración.',
        explanationHy: 'Վերջին անդամից առաջ «y» շաղկապը զեղչված է (կա միաժամանակ և՛ թվարկում, և՛ անշաղկապություն):'
      },
      {
        textEs: 'Corre, salta, ríe.',
        textHy: 'Վազում է, ցատկում է, ծիծաղում է:',
        explanationEs: 'Enumera acciones rápidas sin conjunciones interposed, solo con comas.',
        explanationHy: 'Գործողությունները թվարկված են առանց շաղկապների, ինչն արագություն է հաղորդում:'
      }
    ],
    justificationTemplateEs: 'Es un asíndeton porque se omiten deliberadamente las conjunciones coordinantes entre los elementos, produciendo agilidad y dinamismo.',
    justificationTemplateHy: 'Սա ասինդետոն է, քանի որ անդամների միջև միտումնավոր բաց են թողնված շաղկապները, ինչը հաղորդում է արագություն:'
  },
  {
    id: 'polisindeton',
    nameEs: 'Polisíndeton',
    nameHy: 'Պոլիսինդետոն (Բազմաշաղկապություն)',
    definitionEs: 'Repetición intencionada y constante de conjunciones coordinantes (especialmente «y», «ni») uniendo elementos para ralentizar el ritmo y enfatizar cada elemento.',
    definitionHy: 'Կապակցող շաղկապների (հատկապես «y» - և/ու, «ni» - ոչ էլ) դիտավորյալ և հաճախակի կրկնություն՝ ռիթմը դանդաղեցնելու և ամեն գործողություն առանձնահատուկ շեշտելու համար:',
    keyRuleEs: 'Qué hay que encontrar: Repetición de conjunciones («y... y... y...»).',
    keyRuleHy: 'Ինչ գտնել՝ Շաղկապների կրկնություն («y... y... y...»):',
    examples: [
      {
        textEs: 'Y corrió y saltó y gritó y llamó a su abuela.',
        textHy: 'Եվ վազեց, և՛ ցատկեց, և՛ բղավեց, և՛ կանչեց իր տատիկին:',
        explanationEs: 'Repite insistentemente la conjunción «y» delante de cada verbo.',
        explanationHy: '«y» (և) շաղկապը կրկնվում է յուրաքանչյուր բայի առաջ:'
      },
      {
        textEs: 'Y corrió y saltó y gritó de alegría.',
        textHy: 'Եվ վազեց, և՛ ցատկեց, և՛ ուրախությունից բղավեց:',
        explanationEs: 'Multiplica el conector «y» para transmitir la intensidad acumulada.',
        explanationHy: '«y» շաղկապը կրկնվում է՝ արտահայտելով հուզմունքի ուժգնությունը:'
      },
      {
        textEs: 'Y el viento entró y movió las cortinas y apagó las velas y cerró la puerta.',
        textHy: 'Եվ քամին ներս մտավ, և՛ շարժեց վարագույրները, և՛ հանգցրեց մոմերը, և՛ փակեց դուռը:',
        explanationEs: 'Cada acción del viento está encadenada por la conjunción «y».',
        explanationHy: 'Քամու բոլոր գործողությունները շղթայված են «y» շաղկապով:'
      }
    ],
    justificationTemplateEs: 'Es un polisíndeton porque repite deliberadamente la conjunción copulativa «y» entre los términos para intensificar la acción.',
    justificationTemplateHy: 'Սա բազմաշաղկապություն (polisíndeton) է, քանի որ գործողությունների միջև դիտավորյալ կրկնվում է «y» (և) շաղկապը:'
  },
  {
    id: 'enumeracion',
    nameEs: 'Enumeración',
    nameHy: 'Թվարկում (Էնումերացիա)',
    definitionEs: 'Acumulación sucesiva de una serie de palabras, ideas, objetos o partes que pertenecen a un mismo campo conceptual o gramatical.',
    definitionHy: 'Միևնույն իմաստային կամ քերականական խմբին պատկանող բառերի, առարկաների, գաղափարների կամ գործողությունների հաջորդական շարադրանք:',
    keyRuleEs: 'Qué hay que encontrar: Sucesión de elementos.',
    keyRuleHy: 'Ինչ գտնել՝ Տարրերի հաջորդական թվարկում:',
    examples: [
      {
        textEs: 'Libros, mapas, cartas y fotografías.',
        textHy: 'Գրքեր, քարտեզներ, նամակներ և լուսանկարներ:',
        explanationEs: 'Serie acumulativa de cuatro sustantivos encontrados en la habitación.',
        explanationHy: 'Սենյակում գտնված չորս գոյականների հաջորդական շարք:'
      },
      {
        textEs: 'Buscó una puerta, una ventana, una escalera.',
        textHy: 'Փնտրեց մի դուռ, մի պատուհան, մի աստիճան:',
        explanationEs: 'Enumeración de tres salidas arquitectónicas.',
        explanationHy: 'Երեք տարրերի հաջորդական թվարկում:'
      },
      {
        textEs: 'Libros, mapas, cartas, fotografías y cuadros.',
        textHy: 'Գրքեր, քարտեզներ, նամակներ, լուսանկարներ և նկարներ:',
        explanationEs: 'Listado sucesivo de objetos en la biblioteca abandonada.',
        explanationHy: 'Լքված գրադարանում եղած առարկաների հերթական թվարկում:'
      }
    ],
    justificationTemplateEs: 'Es una enumeración porque presenta una serie sucesiva de elementos («...») que detallan la escena.',
    justificationTemplateHy: 'Սա թվարկում է, քանի որ ներկայացնում է տարրերի հաջորդական շարք («...»):'
  },
  {
    id: 'pleonasmo',
    nameEs: 'Pleonasmo',
    nameHy: 'Պլեոնազմ (Ավելաբանություն)',
    definitionEs: 'Uso de palabras innecesarias o redundantes para el sentido estricto de la frase, pero empleadas para reforzar la expresividad o el énfasis.',
    definitionHy: 'Իմաստային առումով ավելորդ կամ կրկնվող բառերի գործածություն, որոնք սակայն օգտագործվում են խոսքին ավելի մեծ արտահայտչականություն կամ շեշտ հաղորդելու համար:',
    keyRuleEs: 'Qué hay que encontrar: Redundancia expresiva («oír con los oídos», «ver con los ojos»).',
    keyRuleHy: 'Ինչ գտնել՝ Իմաստով ավելորդ բառեր (իմ սեփական աչքերով տեսա, իմ ականջներով լսեցի):',
    examples: [
      {
        textEs: '¡La he oído con mis propios oídos!',
        textHy: 'Ես դա լսել եմ իմ սեփական ականջներով:',
        explanationEs: 'Es redundante porque «oír» ya se realiza con los oídos; se usa para recalcar la certeza absoluta.',
        explanationHy: '«Լսել» բայն ինքնին նշանակում է ականջներով ընկալել. «իմ սեփական ականջներով» ավելացվել է վստահությունն ընդգծելու համար:'
      },
      {
        textEs: '¡Lo he visto con mis propios ojos!',
        textHy: 'Ես դա տեսել եմ իմ սեփական աչքերով:',
        explanationEs: 'Redundancia enfática: ver siempre es con los ojos.',
        explanationHy: 'Շեշտադրող ավելաբանություն. տեսնելն առանց այն էլ աչքերով է կատարվում:'
      }
    ],
    justificationTemplateEs: 'Es un pleonasmo porque añade términos redundantes («...») que no aportan información nueva pero enfatizan la vivencia personal.',
    justificationTemplateHy: 'Սա պլեոնազմ (ավելաբանություն) է, որովհետև ավելացված են իմաստով ավելորդ բառեր («...»)՝ անձնական ապրումը շեշտելու նպատակով:'
  },
  {
    id: 'metafora',
    nameEs: 'Metáfora',
    nameHy: 'Մետաֆորա (Փոխաբերություն)',
    definitionEs: 'Identificación entre dos realidades distintas: un término real (A) y un término imaginario o figurado (B), fundamentada en una relación de semejanza.',
    definitionHy: 'Երկու տարբեր երևույթների նույնացում՝ իրական տարր (A) և պատկերավոր/փոխաբերական տարր (B), որոնց միջև կա նմանություն:',
    keyRuleEs: 'Qué hay que encontrar: Identificación por semejanza. Estructuras principales: 1) A es B, 2) B de A, 3) Solo B (metáfora pura).',
    keyRuleHy: 'Ինչ գտնել՝ Տարրերի նույնացում ըստ նմանության: Հիմնական կառուցվածքներ՝ 1) A es B, 2) B de A, 3) Միայն B (մաքուր փոխաբերություն):',
    examples: [
      {
        textEs: 'Su corazón era un tambor.',
        textHy: 'Նրա սիրտը թմբուկ էր: (A: corazón, B: tambor. Estructura: A es B).',
        explanationEs: 'A = corazón (latidos rápidos por el miedo). B = tambor (instrumento que golpea con fuerza). Estructura: A es B.',
        explanationHy: 'A (իրական) = corazón (արագ բաբախող սիրտ): B (փոխաբերական) = tambor (թմբուկ): Կառուցվածք՝ A es B:'
      },
      {
        textEs: 'Tus ojos son dos estrellas.',
        textHy: 'Քո աչքերը երկու աստղ են: (A: ojos, B: estrellas. Estructura: A es B).',
        explanationEs: 'A = ojos. B = estrellas. Semejanza: el brillo y la luminosidad. Estructura: A es B.',
        explanationHy: 'A = աչքեր: B = աստղեր: Նմանությունը՝ պայծառությունն ու փայլը: Կառուցվածք՝ A es B:'
      },
      {
        textEs: 'Su miedo era una prisión.',
        textHy: 'Նրա վախը բանտ էր: (A: miedo, B: prisión).',
        explanationEs: 'A = miedo. B = prisión. Semejanza: la sensación de encierro e incapacidad de moverse.',
        explanationHy: 'A = վախ: B = բանտ: Նմանությունը՝ կաշկանդվածության և շարժվելու անկարողության զգացումը:'
      },
      {
        textEs: 'Tus palabras son flechas.',
        textHy: 'Քո խոսքերը նետեր են: (A: palabras, B: flechas).',
        explanationEs: 'A = palabras. B = flechas. Semejanza: van directas al objetivo y pueden herir.',
        explanationHy: 'A = խոսքեր: B = նետեր: Նմանությունը՝ դիպուկ են և կարող են վիրավորել:'
      },
      {
        textEs: 'El fuego de tus ojos.',
        textHy: 'Քո աչքերի կրակը: (Estructura: B de A).',
        explanationEs: 'B = fuego (pasión/ardor). A = ojos. Estructura: B de A.',
        explanationHy: 'B = կրակ, A = աչքեր: Կառուցվածք՝ B de A:'
      },
      {
        textEs: 'Dos luceros brillaban en su rostro.',
        textHy: 'Երկու լուսատու փայլում էին նրա դեմքին: (Estructura: Solo B).',
        explanationEs: 'Solo aparece el término imaginario B («luceros») para referirse a los ojos (A está omitido).',
        explanationHy: 'Ներկայացված է միայն փոխաբերական B-ն («luceros» - լուսատուներ), իսկ իրական աչքերը զեղչված են (մաքուր փոխաբերություն):'
      }
    ],
    justificationTemplateEs: 'Es una metáfora porque identifica el elemento real A («...») con el elemento imaginario B («...») por su semejanza (...), sin nexos comparativos.',
    justificationTemplateHy: 'Սա փոխաբերություն (metáfora) է, որովհետև իրական A («...») տարրը նույնացվում է պատկերավոր B («...») տարրի հետ ըստ նմանության, առանց համեմատական շաղկապների:',
    commonConfusionEs: 'Diferencia crucial: «Tus ojos son estrellas» es metáfora (identidad directa: A = B). «Tus ojos son COMO estrellas» es una comparación o símil (usa el nexo «como»).',
    commonConfusionHy: 'Կարևոր տարբերություն. «Tus ojos son estrellas»-ը փոխաբերություն է (ուղիղ նույնացում A = B): «Tus ojos son COMO estrellas»-ը համեմատություն է (símil), քանի որ օգտագործում է «como» (ինչպես) շաղկապը:'
  },
  {
    id: 'personificacion',
    nameEs: 'Personificación (o Prosopopeya)',
    nameHy: 'Անձնավորում (Պերսոնիֆիկացիա)',
    definitionEs: 'Atribución de cualidades, acciones, sentimientos o conductas exclusivamente humanas a objetos inanimados, elementos de la naturaleza o conceptos abstractos.',
    definitionHy: 'Մարդուն բնորոշ հատկանիշների, գործողությունների, զգացմունքների կամ վարքի վերագրում անշունչ առարկաներին, բնության երևույթներին կամ վերացական հասկացություններին:',
    keyRuleEs: 'Qué hay que encontrar: Cualidades humanas atribuidas a cosas no humanas.',
    keyRuleHy: 'Ինչ գտնել՝ Մարդկային հատկանիշներ անշունչ առարկաների վրա:',
    examples: [
      {
        textEs: 'La luna sonreía entre las nubes.',
        textHy: 'Լուսինը ժպտում էր ամպերի միջից:',
        explanationEs: 'Se le atribuye a la luna la cualidad humana de «sonreír».',
        explanationHy: 'Լուսնին վերագրվում է մարդկային ժպտալու («sonreír») հատկությունը:'
      },
      {
        textEs: 'El viento susurraba suavemente.',
        textHy: 'Քամին մեղմորեն շշնջում էր:',
        explanationEs: '«Susurrar» es una acción de habla propia de personas, atribuida al viento.',
        explanationHy: 'Շշնջալը («susurrar») մարդկային խոսքի գործողություն է, որը վերագրված է քամուն:'
      },
      {
        textEs: 'Los árboles parecían hablar entre ellos.',
        textHy: 'Ծառերը կարծես խոսում էին միմյանց հետ:',
        explanationEs: 'La facultad del lenguaje («hablar») se concede a los árboles.',
        explanationHy: 'Խոսելու ունակությունը («hablar») վերագրված է ծառերին:'
      },
      {
        textEs: 'Las ventanas lloraban bajo la lluvia.',
        textHy: 'Պատուհանները լալիս էին անձրևի տակ:',
        explanationEs: 'Se personifica a las ventanas atribuyéndoles la acción de «llorar».',
        explanationHy: 'Պատուհաններին վերագրվում է լաց լինելու («llorar») մարդկային զգացումը:'
      },
      {
        textEs: 'La Tierra tiene sed.',
        textHy: 'Երկիրը ծարավ է:',
        explanationEs: 'Tener sed y sentir necesidad biológica se atribuye a la Tierra como ente vivo.',
        explanationHy: 'Ծարավ ունենալու զգացողությունը վերագրված է Երկրին:'
      },
      {
        textEs: 'Las nubes lloraron durante siete días.',
        textHy: 'Ամպերը լաց եղան յոթ օր շարունակ:',
        explanationEs: 'La lluvia se presenta como el llanto humano de las nubes.',
        explanationHy: 'Անձրևը ներկայացված է որպես ամպերի մարդկային լաց:'
      }
    ],
    justificationTemplateEs: 'Es una personificación porque atribuye una acción o sentimiento puramente humano («...») a un ser inanimado o natural («...»).',
    justificationTemplateHy: 'Սա անձնավորում (personificación) է, որովհետև մարդուն բնորոշ գործողություն կամ զգացմունք («...») է վերագրված անշունչ կամ բնական երևույթի («...»):'
  }
];

export const GENRES_THEORY = [
  {
    genreEs: 'Romance',
    genreHy: 'Ռոմանս (Իսպանական ավանդական չափածո տեսակ)',
    characteristicsEs: [
      'Poema característico de la literatura tradicional española.',
      'Número indeterminado de versos octosílabos (8 sílabas métricas).',
      'Rima asonante en los versos pares (solo coinciden las vocales desde la última vocal acentuada).',
      'Los versos impares quedan sueltos (sin rima).'
    ],
    characteristicsHy: [
      'Իսպանական ավանդական գրականության բնորոշ բանաստեղծական ձև:',
      'Ութավանկ (octosílabos — 8 չափական վանկ) տողերի անորոշ քանակ:',
      'Ասոնանս (հնչյունական) հանգ զույգ տողերում (համընկնում են միայն ձայնավորները վերջին շեշտված ձայնավորից սկսած):',
      'Կենտ տողերը մնում են ազատ (առանց հանգի):'
    ]
  },
  {
    genreEs: 'Leyenda',
    genreHy: 'Ավանդազրույց (Լեգենդ)',
    characteristicsEs: [
      'Relato tradicional que combina hechos reales o históricos con elementos mágicos, misteriosos o sobrenaturales.',
      'Está anclada en un lugar geográfico concreto (ej. el castillo de Valverde, un bosque o biblioteca local).',
      'Suele transmitirse oralmente de generación en generación, generando múltiples versiones (literatura popular).'
    ],
    characteristicsHy: [
      'Ավանդական պատմություն, որը միավորում է իրական կամ պատմական հիմքը մոգական, առեղծվածային կամ գերբնական տարրերի հետ:',
      'Կապված է կոնկրետ աշխարհագրական վայրի հետ (օր.՝ Վալվերդեի ամրոցը, տեղական անտառ կամ գրադարան):',
      'Սովորաբար փոխանցվում է բանավոր՝ սերնդեսերունդ՝ ստեղծելով տարբեր տարբերակներ (ժողովրդական գրականություն):'
    ]
  },
  {
    genreEs: 'Mito',
    genreHy: 'Առասպել (Միֆ)',
    characteristicsEs: [
      'Narración sagrada o tradicional de tiempos remotos que intenta explicar el origen del universo, fenómenos de la naturaleza o de la humanidad.',
      'Sus protagonistas son dioses, diosas, semidioses o fuerzas sobrenaturales (ej. la diosa Liria, el dios Arion).',
      'Ocurre en un tiempo primordial e indefinido («Hace miles de años...»).'
    ],
    characteristicsHy: [
      'Հնագույն ավանդական կամ սրբազան պատմություն, որը փորձում է բացատրել տիեզերքի, բնական երևույթների (աստղերի, ծովերի) կամ մարդկության ծագումը:',
      'Գլխավոր հերոսները աստվածներ են, դիցուհիներ կամ գերբնական ուժեր (օր.՝ Լիրիա դիցուհին, Արիոն աստվածը):',
      'Տեղի է ունենում նախասկզբնական, անորոշ ժամանակներում («Հազարավոր տարիներ առաջ...»):'
    ]
  },
  {
    genreEs: 'Literatura Popular vs Literatura Culta',
    genreHy: 'Ժողովրդական գրականություն ընդդեմ Գրական-հեղինակային գրականության',
    characteristicsEs: [
      'Literatura Popular (tradicional): Transmisión oral, anónima (autor desconocido), existen múltiples versiones, se transmite de generación en generación.',
      'Literatura Culta: Escrita, autor conocido y firmado, texto fijo e inmutable, difundida mediante libros o publicaciones.'
    ],
    characteristicsHy: [
      'Ժողովրդական գրականություն. բանավոր փոխանցում, անանուն (անհայտ հեղինակ), տարբեր տարբերակների առկայություն, փոխանցվում է սերնդեսերունդ:',
      'Գրական/հեղինակային (Culta). գրավոր, հայտնի հեղինակային ստորագրությամբ, անփոփոխ ամրագրված տեքստ, տարածվում է գրքերով կամ տպագիր:'
    ]
  }
];
