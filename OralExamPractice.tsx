import React, { useState } from 'react';
import { Volume2, Sparkles, Mic, ChevronDown, ChevronUp } from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface OralQuestion {
  id: string;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
  examFormulaEs: string;
  examFormulaHy: string;
  examplesEs: string[];
}

const ORAL_QUESTIONS: OralQuestion[] = [
  {
    id: 'oral-1',
    questionEs: '¿Cómo sabes que es una metáfora y no una personificación?',
    questionHy: 'Ինչպե՞ս ես հասկանում, որ սա փոխաբերություն (metáfora) է, այլ ոչ թե անձնավորում (personificación)։',
    answerEs: 'En la metáfora identificamos un término real A con otro imaginario B por semejanza (ejemplo: «su corazón era un tambor»). En la personificación atribuimos cualidades, sentimientos o acciones puramente humanas a seres inanimados o elementos de la naturaleza (ejemplo: «el viento susurra», «la luna sonríe»).',
    answerHy: 'Փոխաբերության մեջ իրական A տարրը նույնացնում ենք պատկերավոր B տարրի հետ ըստ նմանության (օր.՝ «նրա սիրտը թմբուկ էր»): Իսկ անձնավորման մեջ մարդուն բնորոշ հատկանիշներ կամ գործողություններ ենք վերագրում անշունչ առարկաներին կամ բնության տարրերին (օր.՝ «քամին շշնջում է», «լուսինը ժպտում է»):',
    examFormulaEs: '«Es una metáfora porque identifica A con B; mientras que es personificación porque da rasgos humanos a objetos».',
    examFormulaHy: '«Սա փոխաբերություն է, որովհետև նույնացնում է A-ն B-ի հետ. իսկ անձնավորում է, երբ մարդկային հատկանիշներ է տալիս առարկաներին»:',
    examplesEs: [
      'Metáfora: «Su corazón era un tambor» (corazón = tambor)',
      'Personificación: «La luna sonreía entre las nubes» (sonreír = acción humana)'
    ]
  },
  {
    id: 'oral-2',
    questionEs: '¿Puede una frase contener una enumeración y un asíndeton al mismo tiempo?',
    questionHy: 'Կարո՞ղ է նույն նախադասության մեջ լինել և՛ թվարկում (enumeración), և՛ շաղկապների բացթողում (asíndeton)։',
    answerEs: '¡Sí! Ocurre frecuentemente cuando se listan varios elementos y se omiten deliberadamente las conjunciones (como «y»), separando todo únicamente con comas. Por ejemplo: «Buscó una puerta, una ventana, una escalera». Hay enumeración por la serie de tres salidas y asíndeton porque no hay conjunción antes del último elemento.',
    answerHy: 'Այո՛, միանգամայն: Դա հաճախ է պատահում, երբ թվարկվում են մի քանի տարրեր, և շաղկապները («y») միտումնավոր զեղչվում են՝ դրանք անջատելով միայն ստորակետներով: Օրինակ՝ «Buscó una puerta, una ventana, una escalera»:',
    examFormulaEs: '«Sí, contiene enumeración por la lista sucesiva de elementos, y asíndeton porque omite las conjunciones de enlace».',
    examFormulaHy: '«Այո՛, կա թվարկում տարրերի հաջորդական շարքի պատճառով, և ասինդետոն՝ շաղկապների բացթողման պատճառով»:',
    examplesEs: [
      '«Buscó una puerta, una ventana, una escalera»',
      '«Corre, salta, ríe»'
    ]
  },
  {
    id: 'oral-3',
    questionEs: '¿Por qué la anáfora y la epanadiplosis no son lo mismo?',
    questionHy: 'Ինչո՞ւ են անաֆորան (anáfora) և էպանադիպլոսիսը (epanadiplosis) տարբեր արտահայտչամիջոցներ։',
    answerEs: 'Porque la anáfora consiste en repetir una o varias palabras al COMIENZO de varias oraciones o versos distintos («Quería descubrir... Quería encontrar... Quería conocer...»). En cambio, la epanadiplosis consiste en empezar y terminar una MISMA oración con la misma palabra («Silencio! En este castillo solo hay silencio», «Sueño, todo comenzó con un sueño»).',
    answerHy: 'Որովհետև անաֆորան բառերի կրկնությունն է մի քանի տարբեր նախադասությունների կամ տողերի ՍԿԶԲՈՒՄ: Իսկ էպանադիպլոսիսը ՆՈՒՅՆ նախադասությունը նույն բառով սկսելն ու ավարտելն է («Silencio... silencio»):',
    examFormulaEs: '«La anáfora repite al inicio de varias frases; la epanadiplosis repite al inicio y al final del mismo enunciado».',
    examFormulaHy: '«Անաֆորան կրկնում է տարբեր նախադասությունների սկզբում, իսկ էպանադիպլոսիսը՝ նույն նախադասության սկզբում և վերջում»:',
    examplesEs: [
      'Anáfora: «Busca la verdad. Busca la llave. Busca el camino»',
      'Epanadiplosis: «Miedo, todo comenzó con miedo»'
    ]
  },
  {
    id: 'oral-4',
    questionEs: '¿Qué debes observar para reconocer un romance?',
    questionHy: 'Ի՞նչ պետք է ուսումնասիրել ռոմանսը (romance) ճանաչելու համար։',
    answerEs: 'Debo comprobar tres rasgos métricos indispensables: 1) Versos octosílabos (de 8 sílabas métricas), 2) Rima asonante en los versos pares, 3) Versos impares que quedan sueltos o libres (sin rima).',
    answerHy: 'Պետք է ստուգել 3 անհրաժեշտ չափական հատկանիշներ՝ 1) 8-վանկանի տողեր (octosílabos), 2) Ասոնանս հանգ զույգ տողերում (2, 4, 6, 8...), 3) Ազատ կենտ տողեր (1, 3, 5, 7...)՝ առանց հանգավորման:',
    examFormulaEs: '«Es un romance porque sus versos son octosílabos, con rima asonante en los versos pares y versos impares sueltos».',
    examFormulaHy: '«Սա ռոմանս է, քանի որ տողերը ութավանկ են, զույգ տողերում ասոնանս հանգով, իսկ կենտ տողերը՝ ազատ»:',
    examplesEs: [
      '«Por el camino del bosque (8 - libre) / va caminando una dama (8 - rima a-a)»',
      '«El jinete va deprisa (8 - libre) / por la senda del poblado (8 - rima a-o)»'
    ]
  },
  {
    id: 'oral-5',
    questionEs: '¿Por qué una leyenda no es exactamente lo mismo que un mito?',
    questionHy: 'Ինչո՞ւ ավանդազրույցն (leyenda) ու առասպելը (mito) նույնը չեն։',
    answerEs: 'Porque el mito explica el origen cosmogónico del universo o de fenómenos naturales mediante la acción de dioses en un tiempo primordial («Hace miles de años...»). La leyenda, en cambio, está anclada en un lugar geográfico y época histórica concretos, con protagonistas humanos, mezclando realidad y misterio transmitido oralmente.',
    answerHy: 'Որովհետև առասպելը բացատրում է տիեզերքի կամ բնական երևույթների (աստղերի, ծովերի) ծագումը աստվածների միջոցով անհիշելի ժամանակներում: Իսկ ավանդազրույցը կապված է կոնկրետ աշխարհագրական վայրի հետ՝ մարդկային հերոսներով:',
    examFormulaEs: '«El mito explica el origen del cosmos con dioses; la leyenda se sitúa en un lugar geográfico real con misterio popular».',
    examFormulaHy: '«Առասպելը բացատրում է տիեզերքի ծագումը աստվածներով, իսկ ավանդազրույցը տեղի է ունենում իրական աշխարհագրական վայրում՝ ժողովրդական առեղծվածով»:',
    examplesEs: [
      'Mito: «El origen de las estrellas» (la diosa Liria) / «El nacimiento del mar» (el dios Arion)',
      'Leyenda: «El misterio del castillo» (el castillo de Valverde) / «El secreto del bosque»'
    ]
  }
];

export const OralExamPractice: React.FC = () => {
  const [openQuestionId, setOpenQuestionId] = useState<string>('oral-1');

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white rounded-2xl p-6 md:p-8 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-xs">
            <Mic className="w-3.5 h-3.5 inline mr-1" />
            Entrenamiento Oral — Բանավոր Քննության Նախապատրաստում
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Ինչպե՞ս Պատասխանել Քննող Ուսուցչի Բանավոր Հարցերին
        </h2>
        <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-3xl">
          Քննության ժամանակ ուսուցիչը աշակերտից պահանջում է ոչ թե պարզապես ճանաչել արտահայտչամիջոցը, այլ <strong>իսպաներեն հիմնավորել</strong>՝ օգտագործելով «Es una metáfora porque...», «Se trata de una leyenda porque...», «Hay una repetición de...»:
        </p>
      </div>

      <div className="space-y-4">
        {ORAL_QUESTIONS.map((q, idx) => {
          const isOpen = openQuestionId === q.id;

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                isOpen
                  ? 'border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-400/20'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div
                onClick={() => setOpenQuestionId(isOpen ? '' : q.id)}
                className="p-5 cursor-pointer flex items-start justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Բանավոր հարց (Pregunta de examen)
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-slate-100">
                    {q.questionEs}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                    🇦🇲 {q.questionHy}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0 pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakSpanish(q.questionEs);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 transition"
                    title="Լսել հարցը"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {isOpen && (
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
                  {/* Spanish spoken answer */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        🇪🇸 Իսպաներեն Ամբողջական Պատասխան (Respuesta Modelo)
                      </span>
                      <button
                        onClick={() => speakSpanish(q.answerEs)}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 transition"
                      >
                        <Volume2 className="w-3.5 h-3.5" /> Լսել պատասխանը
                      </button>
                    </div>

                    <p className="text-sm md:text-base font-serif text-slate-900 dark:text-slate-100 leading-relaxed">
                      {q.answerEs}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                        🇦🇲 Հայերեն թարգմանություն
                      </span>
                      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                        {q.answerHy}
                      </p>
                    </div>
                  </div>

                  {/* Cheat Formula */}
                  <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs">
                    <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">
                      💡 Արագ բանաձև (Fórmula clave para memorizar):
                    </span>
                    <div className="font-mono text-slate-900 dark:text-slate-100 bg-white/70 dark:bg-slate-900/60 p-2 rounded border border-amber-200 dark:border-amber-900 mb-1">
                      {q.examFormulaEs}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      🇦🇲 {q.examFormulaHy}
                    </p>
                  </div>

                  {/* Examples from texts */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Տեքստային օրինակներ՝
                    </span>
                    <div className="space-y-1.5">
                      {q.examplesEs.map((ex, i) => (
                        <div
                          key={i}
                          className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-800 dark:text-slate-200"
                        >
                          • {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
