import React, { useState } from 'react';
import { LITERARY_DEVICES, GENRES_THEORY } from './dataLiteraryDevices';
import { InteractiveSpanishBlock } from './InteractiveSpanishBlock';
import { Sparkles, BookOpen, Search, HelpCircle, CheckCircle2 } from 'lucide-react';

interface LiteraryFiguresGuideProps {
  forceShowArmenian: boolean;
}

export const LiteraryFiguresGuide: React.FC<LiteraryFiguresGuideProps> = ({ forceShowArmenian }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'figures' | 'metaphor' | 'genres' | 'templates'>('figures');
  const [selectedFigureId, setSelectedFigureId] = useState<string | null>(null);

  const filteredFigures = LITERARY_DEVICES.filter(f =>
    f.nameEs.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.nameHy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.definitionEs.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Banner / Intro */}
      <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 p-6 md:p-8 rounded-2xl text-white shadow-lg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            7.º Curso — 7-րդ դասարանի տեսություն
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Figuras Literarias y Géneros — Գեղարվեստական Արտահայտչամիջոցներ
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Իսպաներեն գրականության քննության 12 հիմնական արտահայտչամիջոցները, ժանրերը (Ռոմանս, Առասպել, Ավանդազրույց) և փոխաբերության կառուցվածքները։ 
            <strong className="block mt-1 text-amber-200">
              💡 Սեղմիր ցանկացած իսպաներեն օրինակի վրա՝ հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար։
            </strong>
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/20">
          <button
            onClick={() => setActiveTab('figures')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition ${
              activeTab === 'figures'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            📚 12 Արտահայտչամիջոցներ (Tabla)
          </button>
          <button
            onClick={() => setActiveTab('metaphor')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition ${
              activeTab === 'metaphor'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            🧪 Փոխաբերության Կառուցվածքներ (A es B / B de A)
          </button>
          <button
            onClick={() => setActiveTab('genres')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition ${
              activeTab === 'genres'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            🏛️ Ժանրեր (Romance, Mito, Leyenda)
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition ${
              activeTab === 'templates'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/15 text-white hover:bg-white/25'
            }`}
          >
            🎙️ Քննական Հիմնավորման Կաղապարներ
          </button>
        </div>
      </div>

      {/* Figures Tab */}
      {activeTab === 'figures' && (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Փնտրել արտահայտչամիջոցը (Metáfora, Aliteración, Hipérbaton... կամ հայերեն)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
            />
          </div>

          {/* Quick Cheat-Sheet Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                Վերջնական կրկնության աղյուսակ (Tabla de repaso final)
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                12 figuras retóricas
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                    <th className="py-3 px-4">Figura literaria</th>
                    <th className="py-3 px-4">Qué hay que encontrar</th>
                    <th className="py-3 px-4">Ինչ գտնել (Հայերեն)</th>
                    <th className="py-3 px-4">Գործողություն</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {LITERARY_DEVICES.map(fig => (
                    <tr
                      key={fig.id}
                      onClick={() => setSelectedFigureId(fig.id)}
                      className={`hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 cursor-pointer transition ${
                        selectedFigureId === fig.id ? 'bg-amber-50/80 dark:bg-amber-950/30' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-bold text-slate-900 dark:text-slate-100">
                        {fig.nameEs}
                      </td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300 font-mono text-xs">
                        {fig.keyRuleEs.replace('Qué hay que encontrar: ', '')}
                      </td>
                      <td className="py-3 px-4 text-emerald-700 dark:text-emerald-400 font-medium">
                        {fig.nameHy}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFigureId(fig.id === selectedFigureId ? null : fig.id);
                          }}
                          className="text-xs px-2.5 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:hover:bg-indigo-900 dark:text-indigo-300 font-medium"
                        >
                          {selectedFigureId === fig.id ? 'Փակել' : 'Մանրամասն'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cards for each figure */}
          <div className="grid grid-cols-1 gap-4 pt-2">
            {filteredFigures.map(fig => (
              <div
                key={fig.id}
                id={`fig-${fig.id}`}
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 p-5 shadow-xs ${
                  selectedFigureId === fig.id
                    ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-400/20'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      {fig.nameEs}
                    </h3>
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mt-0.5">
                      🇦🇲 {fig.nameHy}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
                    {fig.keyRuleEs}
                  </span>
                </div>

                {/* Definitions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-1">
                      🇪🇸 DEFINICIÓN (Իսպաներեն սահմանում)
                    </span>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {fig.definitionEs}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                      🇦🇲 ՀԱՅԵՐԵՆ ԲԱՑԱՏՐՈՒԹՅՈՒՆ
                    </span>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {fig.definitionHy}
                    </p>
                  </div>
                </div>

                {/* Interactive Examples */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    💡 Օրինակներ քննության տեքստերից (Սեղմիր՝ հայերենը բացելու համար)
                  </h4>
                  <div className="space-y-2">
                    {fig.examples.map((ex, i) => (
                      <InteractiveSpanishBlock
                        key={i}
                        spanish={ex.textEs}
                        armenian={ex.textHy}
                        notes={ex.explanationEs}
                        badgeLabel={fig.nameEs}
                        forceShowArmenian={forceShowArmenian}
                      />
                    ))}
                  </div>
                </div>

                {/* Exam speech justification template */}
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs">
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    Քննության ժամանակ իսպաներեն պատասխանելու բանաձև (Plantilla oral / escrita):
                  </span>
                  <div className="font-mono text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 p-2 rounded border border-amber-200/60 dark:border-amber-900/40 mb-1.5">
                    «{fig.justificationTemplateEs}»
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 font-sans">
                    🇦🇲 {fig.justificationTemplateHy}
                  </p>
                </div>

                {fig.commonConfusionEs && (
                  <div className="mt-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong>Ուշադրություն (Diferencia clave):</strong> {fig.commonConfusionEs}
                      <p className="mt-1 text-slate-700 dark:text-slate-300">🇦🇲 {fig.commonConfusionHy}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Metaphor Structures Tab */}
      {activeTab === 'metaphor' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Փոխաբերության (Metáfora) Կառուցվածքները 7-րդ Դասարանում
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Փոխաբերությունը բաղկացած է երկու հիմնական բաղադրիչից՝ 
              <strong> A = Término real (իրական տարր)</strong> և 
              <strong> B = Término imaginario / figurado (փոխաբերական տարր)</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20">
                <div className="text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide mb-1">
                  Կառուցվածք 1
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                  A es B
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  Իրական A-ն միացված է պատկերավոր B-ին «ser» բայով:
                </p>
                <div className="space-y-1.5 text-xs font-mono bg-white dark:bg-slate-900 p-2.5 rounded border border-indigo-100 dark:border-indigo-900">
                  <div className="font-semibold text-indigo-950 dark:text-indigo-200">• Tus ojos son estrellas.</div>
                  <div className="text-slate-500">• Su corazón era un tambor.</div>
                  <div className="text-slate-500">• Tu sonrisa es un sol.</div>
                  <div className="text-slate-500">• Su miedo era una prisión.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                <div className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">
                  Կառուցվածք 2
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                  B de A (կամ A de B)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  Տարրերը կապված են «de» նախդիրով (օր.՝ A-ի B-ն):
                </p>
                <div className="space-y-1.5 text-xs font-mono bg-white dark:bg-slate-900 p-2.5 rounded border border-amber-100 dark:border-amber-900">
                  <div className="font-semibold text-amber-950 dark:text-amber-200">• Las estrellas de tus ojos (B de A).</div>
                  <div className="text-slate-500">• El fuego de tus ojos (B de A).</div>
                  <div className="text-slate-500">• La música de tu voz (B de A).</div>
                  <div className="text-slate-500">• Sus manos de hielo (A de B).</div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20">
                <div className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wide mb-1">
                  Կառուցվածք 3
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                  Solo B (Metáfora pura)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                  Իրական A-ն ընդհանրապես նշված չէ, միայն B-ն է:
                </p>
                <div className="space-y-1.5 text-xs font-mono bg-white dark:bg-slate-900 p-2.5 rounded border border-rose-100 dark:border-rose-900">
                  <div className="font-semibold text-rose-950 dark:text-rose-200">• Dos luceros brillaban en su rostro.</div>
                  <div className="text-slate-500 text-[11px] font-sans">
                    («Luceros»-ը փոխարինում է «ojos»-ին, աչքերը բացահայտ նշված չեն)
                  </div>
                </div>
              </div>
            </div>

            {/* Crucial comparison: Metáfora vs Comparación / Símil */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border border-red-200 dark:border-red-900">
              <h4 className="text-base font-bold text-red-950 dark:text-red-200 mb-2 flex items-center gap-2">
                ⚠️ Քննության ամենակարևոր տարբերությունը. Metáfora vs Comparación (Símil)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-red-100 dark:border-red-900/60">
                  <span className="font-bold text-red-700 dark:text-red-400 block mb-1">
                    1) METÁFORA (Փոխաբերություն)
                  </span>
                  <div className="font-mono text-slate-900 dark:text-slate-100 font-semibold mb-1">
                    «Tus ojos son estrellas»
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Նույնացում A = B <strong>առանց</strong> համեմատական շաղկապների: Աչքերը ուղղակի աստղեր են:
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-orange-100 dark:border-orange-900/60">
                  <span className="font-bold text-orange-700 dark:text-orange-400 block mb-1">
                    2) COMPARACIÓN o SÍMIL (Համեմատություն)
                  </span>
                  <div className="font-mono text-slate-900 dark:text-slate-100 font-semibold mb-1">
                    «Tus ojos son <span className="text-orange-600 font-bold underline">como</span> estrellas»
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Օգտագործում է համեմատական շաղկապ՝ <strong>«como»</strong> (ինչպես), <strong>«igual que»</strong>: Չի նույնացնում, այլ համեմատում է:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Genres Tab */}
      {activeTab === 'genres' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GENRES_THEORY.map((g, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                {g.genreEs}
              </h3>
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-4">
                🇦🇲 {g.genreHy}
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  🇪🇸 Características en español
                </span>
                <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  {g.characteristicsEs.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  🇦🇲 Հայերեն հատկանիշներ
                </span>
                <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  {g.characteristicsHy.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Templates Tab */}
      {activeTab === 'templates' && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Քննական Հիմնավորումների Իսպաներեն Կաղապարներ (Fórmulas para responder en el examen)
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Ուսուցչի խորհուրդ. աշակերտը քննությանը յուրաքանչյուր պատասխան պետք է հիմնավորի իսպաներեն՝ օգտագործելով այս հստակ արտահայտությունները:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Փոխաբերության հիմնավորում (Metáfora)
              </span>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                «Es una metáfora porque identifica el elemento real A (...) con el elemento imaginario B (...) a través de una relación de semejanza».
              </div>
              <p className="text-xs text-slate-500">
                🇦🇲 Սա փոխաբերություն է, որովհետև իրական A տարրը նույնացնում է պատկերավոր B տարրի հետ ըստ նմանության:
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Անձնավորման հիմնավորում (Personificación)
              </span>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                «Es una personificación porque atribuye una cualidad o acción exclusivamente humana (...) a un ser inanimado (...)».
              </div>
              <p className="text-xs text-slate-500">
                🇦🇲 Սա անձնավորում է, որովհետև մարդուն բնորոշ գործողություն կամ հատկություն է վերագրում անշունչ առարկային:
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Անաֆորայի հիմնավորում (Anáfora)
              </span>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                «Es una anáfora porque se repite la misma palabra (...) al comienzo de varias frases consecutivas».
              </div>
              <p className="text-xs text-slate-500">
                🇦🇲 Սա անաֆորա է, քանի որ նույն բառը կրկնվում է հաջորդական նախադասությունների սկզբում:
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Հիպերբատոնի հիմնավորում (Hipérbaton)
              </span>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                «Es un hipérbaton porque altera el orden sintáctico habitual; el orden ordinario sería (...)».
              </div>
              <p className="text-xs text-slate-500">
                🇦🇲 Սա հիպերբատոն է, որովհետև փոխում է սովորական շարադասությունը. սովորական կարգը կլիներ՝ (...):
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Ռոմանսի հիմնավորում (Romance)
              </span>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                «Se trata de un romance tradicional porque está compuesto por versos octosílabos con rima asonante en los versos pares, quedando sueltos los impares».
              </div>
              <p className="text-xs text-slate-500">
                🇦🇲 Սա ռոմանս է, որովհետև կազմված է ութավանկ տողերից՝ զույգ տողերում ասոնանս հանգով և կենտ տողերն ազատ:
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                Ավանդազրույցի և Առասպելի հիմնավորում (Leyenda vs Mito)
              </span>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100 mb-1">
                «Es una leyenda porque se ubica en un lugar concreto y mezcla historia con misterio oral; a diferencia del mito que explica el origen cósmico con dioses».
              </div>
              <p className="text-xs text-slate-500">
                🇦🇲 Սա ավանդազրույց է, որովհետև կապված է կոնկրետ վայրի հետ և միավորում է իրականությունն ու բանավոր առեղծվածը՝ ի տարբերություն առասպելի:
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
