import React, { useState } from 'react';
import { Sparkles, ArrowRightLeft, CheckCircle2, Volume2 } from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface MetaphorItem {
  id: string;
  phraseEs: string;
  phraseHy: string;
  realA: string;
  realAHy: string;
  imaginaryB: string;
  imaginaryBHy: string;
  structure: 'A es B' | 'B de A' | 'A de B' | 'Solo B';
  structureDescription: string;
  transformedPhraseEs?: string;
  transformedPhraseHy?: string;
  transformedStructure?: string;
  isComparison?: boolean;
}

const METAPHOR_ITEMS: MetaphorItem[] = [
  {
    id: 'm1',
    phraseEs: 'Su corazón era un tambor.',
    phraseHy: 'Նրա սիրտը թմբուկ էր:',
    realA: 'corazón (սիրտ, արագ բաբախյուն)',
    realAHy: 'սիրտ',
    imaginaryB: 'tambor (թմբուկ, հարվածող գործիք)',
    imaginaryBHy: 'թմբուկ',
    structure: 'A es B',
    structureDescription: 'Término real A («corazón») + verbo ser («era») + Término imaginario B («un tambor»).',
    transformedPhraseEs: 'El tambor de su corazón.',
    transformedPhraseHy: 'Նրա սրտի թմբուկը:',
    transformedStructure: 'B de A'
  },
  {
    id: 'm2',
    phraseEs: 'Tus ojos son estrellas.',
    phraseHy: 'Քո աչքերը աստղեր են:',
    realA: 'ojos (աչքեր)',
    realAHy: 'աչքեր',
    imaginaryB: 'estrellas (աստղեր, պայծառ լույս)',
    imaginaryBHy: 'աստղեր',
    structure: 'A es B',
    structureDescription: 'A («Tus ojos») + son + B («estrellas»).',
    transformedPhraseEs: 'Las estrellas de tus ojos.',
    transformedPhraseHy: 'Քո աչքերի աստղերը:',
    transformedStructure: 'B de A'
  },
  {
    id: 'm3',
    phraseEs: 'La música de tu voz.',
    phraseHy: 'Քո ձայնի երաժշտությունը:',
    realA: 'voz (ձայն)',
    realAHy: 'ձայն',
    imaginaryB: 'música (երաժշտություն, հաճելի հնչողություն)',
    imaginaryBHy: 'երաժշտություն',
    structure: 'B de A',
    structureDescription: 'Término imaginario B («música») + «de» + Término real A («tu voz»).',
    transformedPhraseEs: 'Tu voz es música.',
    transformedPhraseHy: 'Քո ձայնը երաժշտություն է:',
    transformedStructure: 'A es B'
  },
  {
    id: 'm4',
    phraseEs: 'Sus manos de hielo.',
    phraseHy: 'Նրա սառույցից ձեռքերը / Նրա սառցե ձեռքերը:',
    realA: 'manos (ձեռքեր)',
    realAHy: 'ձեռքեր',
    imaginaryB: 'hielo (սառույց, ծայրահեղ սառնություն)',
    imaginaryBHy: 'սառույց',
    structure: 'A de B',
    structureDescription: 'Término real A («manos») + «de» + Término figurado B («hielo»).',
    transformedPhraseEs: 'Sus manos son hielo.',
    transformedPhraseHy: 'Նրա ձեռքերը սառույց են:',
    transformedStructure: 'A es B'
  },
  {
    id: 'm5',
    phraseEs: 'El fuego de tus ojos.',
    phraseHy: 'Քո աչքերի կրակը:',
    realA: 'ojos (աչքեր)',
    realAHy: 'աչքեր',
    imaginaryB: 'fuego (կրակ, բուռն հայացք/կիրք)',
    imaginaryBHy: 'կրակ',
    structure: 'B de A',
    structureDescription: 'B («fuego») + de + A («ojos»).',
    transformedPhraseEs: 'Tus ojos son fuego.',
    transformedPhraseHy: 'Քո աչքերը կրակ են:',
    transformedStructure: 'A es B'
  },
  {
    id: 'm6',
    phraseEs: 'Dos luceros brillaban en su rostro.',
    phraseHy: 'Երկու լուսատու փայլում էին նրա դեմքին:',
    realA: 'ojos (աչքեր - զեղչված/բացակա)',
    realAHy: 'աչքեր (զեղչված է)',
    imaginaryB: 'luceros (լուսատու աստղեր)',
    imaginaryBHy: 'լուսատուներ',
    structure: 'Solo B',
    structureDescription: 'Metáfora pura o sustitución: no aparece el término real A (ojos), solo el término metafórico B («luceros»).'
  },
  {
    id: 'm7',
    phraseEs: 'Su miedo era una prisión.',
    phraseHy: 'Նրա վախը բանտ էր:',
    realA: 'miedo (վախ, անկարողություն շարժվելու)',
    realAHy: 'վախ',
    imaginaryB: 'prisión (բանտ, փակված տարածք)',
    imaginaryBHy: 'բանտ',
    structure: 'A es B',
    structureDescription: 'A («Su miedo») + era + B («una prisión»).',
    transformedPhraseEs: 'La prisión de su miedo.',
    transformedPhraseHy: 'Նրա վախի բանտը:',
    transformedStructure: 'B de A'
  },
  {
    id: 'm8',
    phraseEs: 'Tus palabras son flechas.',
    phraseHy: 'Քո խոսքերը նետեր են:',
    realA: 'palabras (խոսքեր, ուղիղ արտահայտված)',
    realAHy: 'խոսքեր',
    imaginaryB: 'flechas (նետեր, խոցող զենք)',
    imaginaryBHy: 'նետեր',
    structure: 'A es B',
    structureDescription: 'A («palabras») + son + B («flechas»).',
    transformedPhraseEs: 'Las flechas de tus palabras.',
    transformedPhraseHy: 'Քո խոսքերի նետերը:',
    transformedStructure: 'B de A'
  }
];

export const MetaphorLab: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('m1');
  const [showTransformation, setShowTransformation] = useState(false);

  const currentItem = METAPHOR_ITEMS.find(m => m.id === selectedId) || METAPHOR_ITEMS[0];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-900 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-900">
            Laboratorio de Metáforas — Փոխաբերության Լաբորատորիա
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          Վարպետացի՛ր A և B Տարրերի Տարբերակման և Ձևափոխության Մեջ
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          7-րդ դասարանի քննության ամենակարևոր հարցերից մեկը փոխաբերությունների կառուցվածքների փոփոխությունն է (A es B ⇄ B de A) և A-ի ու B-ի որոշումը:
        </p>

        {/* Item selector pills */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          {METAPHOR_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedId(item.id);
                setShowTransformation(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedId === item.id
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {item.phraseEs}
            </button>
          ))}
        </div>
      </div>

      {/* Main interactive workbench */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
              Estructura actual: {currentItem.structure}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mt-1">
              «{currentItem.phraseEs}»
            </h3>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 font-sans mt-0.5">
              🇦🇲 {currentItem.phraseHy}
            </p>
          </div>

          <button
            onClick={() => speakSpanish(currentItem.phraseEs)}
            className="p-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300 transition"
            title="Լսել արտասանությունը"
          >
            <Volume2 className="w-5 h-5" />
          </button>
        </div>

        {/* A and B Breakdown cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Término Real A (Իրական տարր)
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                A
              </span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif">
              {currentItem.realA}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Այն առարկան կամ զգացմունքը, որն իրականում նկատի ունի հեղինակը:
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                Término Imaginario B (Փոխաբերական տարր)
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
                B
              </span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100 font-serif">
              {currentItem.imaginaryB}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Այն պատկերավոր կերպարը, որի հետ նույնացվում է իրական A-ն ըստ նմանության:
            </p>
          </div>
        </div>

        {/* Structure description */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
            Կառուցվածքի բացատրություն (Estructura gramatical):
          </span>
          <p className="text-slate-800 dark:text-slate-200">
            {currentItem.structureDescription}
          </p>
        </div>

        {/* Transformation toggle if applicable */}
        {currentItem.transformedPhraseEs && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-purple-600" />
                  Քննական ձևափոխություն՝ {currentItem.structure} ➔ {currentItem.transformedStructure}
                </h4>
                <p className="text-xs text-slate-500">
                  Սեղմիր կոճակը՝ ձևափոխված տարբերակը տեսնելու համար:
                </p>
              </div>

              <button
                onClick={() => setShowTransformation(!showTransformation)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-xs transition"
              >
                {showTransformation ? 'Թաքցնել' : 'Ցուցադրել ձևափոխությունը (Transformar)'}
              </button>
            </div>

            {showTransformation && (
              <div className="pt-3 border-t border-purple-200/60 dark:border-purple-900/40 animate-fadeIn">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                      Ձևափոխված տարբերակ ({currentItem.transformedStructure}):
                    </span>
                    <div className="text-xl font-bold font-serif text-slate-900 dark:text-slate-100 mt-1">
                      «{currentItem.transformedPhraseEs}»
                    </div>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-0.5">
                      🇦🇲 {currentItem.transformedPhraseHy}
                    </p>
                  </div>
                  <button
                    onClick={() => speakSpanish(currentItem.transformedPhraseEs || '')}
                    className="p-1.5 text-slate-400 hover:text-purple-600 transition"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Símil / Comparación vs Metáfora interactive comparison */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Քննական Հարց 40-ի հատուկ պարզաբանում (Metáfora vs Símil)
        </h3>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Ուսուցչի հարց. <em>«¿Qué diferencia hay entre "Tus ojos son estrellas" y "Tus ojos son como estrellas"?»</em>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20">
            <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
              «Tus ojos son estrellas» ➔ METÁFORA
            </span>
            <p className="text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
              Այստեղ կա ուղղակի նույնացում (identificación directa A = B) առանց համեմատական շաղկապի: Աչքերը հենց աստղերն են:
            </p>
            <div className="font-mono text-xs text-emerald-900 dark:text-emerald-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded">
              A es B (sin nexo comparativo)
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/40 dark:bg-amber-950/20">
            <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">
              «Tus ojos son como estrellas» ➔ COMPARACIÓN (SÍMIL)
            </span>
            <p className="text-slate-700 dark:text-slate-300 mb-2 leading-relaxed">
              Այստեղ օգտագործված է <strong>«como»</strong> (ինչպես) շաղկապը: Աչքերը չեն նույնացվում, այլ համեմատվում են աստղերի հետ:
            </p>
            <div className="font-mono text-xs text-amber-900 dark:text-amber-300 bg-white/70 dark:bg-slate-900/60 p-2 rounded">
              A es COMO B (con nexo «como»)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
