import React, { useState } from 'react';
import { EXAMEN_1_DATA } from './dataExamen1';
import { EXAMEN_3_DATA } from './dataExamen3';
import { EXAMEN_4_DATA } from './dataExamen4';
import { ExamViewer } from './ExamViewer';
import { LiteraryFiguresGuide } from './LiteraryFiguresGuide';
import { MetaphorLab } from './MetaphorLab';
import { FlashcardsMode } from './FlashcardsMode';
import { OralExamPractice } from './OralExamPractice';
import {
  BookOpen,
  Sparkles,
  HelpCircle,
  GraduationCap,
  Volume2,
  Eye,
  EyeOff,
  Flame,
  Search,
  CheckCircle2,
  Languages
} from 'lucide-react';
import { speakSpanish } from './audioUtils';

export default function App() {
  const [selectedExamId, setSelectedExamId] = useState<string>('examen-1');
  const [activeTab, setActiveTab] = useState<'exam' | 'figures' | 'metaphor' | 'flashcards' | 'oral'>('exam');
  const [forceShowArmenian, setForceShowArmenian] = useState<boolean>(false);
  const [globalSearch, setGlobalSearch] = useState<string>('');

  const exams = [
    {
      id: 'examen-1',
      title: 'Examen 1',
      labelEs: 'El misterio del castillo (40 preguntas)',
      labelHy: 'Ամրոցի առեղծվածը (40 հարց)',
      badge: 'Հիմնական',
      data: EXAMEN_1_DATA
    },
    {
      id: 'examen-3',
      title: 'Examen 3',
      labelEs: 'El secreto del bosque (40 preguntas)',
      labelHy: 'Անտառի գաղտնիքը (40 հարց + Բանավոր)',
      badge: 'Խորացված',
      data: EXAMEN_3_DATA
    },
    {
      id: 'examen-4',
      title: 'Examen 4',
      labelEs: 'El secreto de la biblioteca (35 ejercicios)',
      labelHy: 'Գրադարանի գաղտնիքը (35 վարժություն + Սխալների ուղղում)',
      badge: 'Գործնական',
      data: EXAMEN_4_DATA
    }
  ];

  const currentExam = exams.find(e => e.id === selectedExamId)?.data || EXAMEN_1_DATA;

  // Search results across all exams
  const searchResults = globalSearch.trim().length > 1
    ? [
        ...EXAMEN_1_DATA.questions.map(q => ({ ...q, examTitle: 'Examen 1' })),
        ...EXAMEN_3_DATA.questions.map(q => ({ ...q, examTitle: 'Examen 3' })),
        ...EXAMEN_4_DATA.questions.map(q => ({ ...q, examTitle: 'Examen 4' }))
      ].filter(
        q =>
          q.questionEs.toLowerCase().includes(globalSearch.toLowerCase()) ||
          q.questionHy.toLowerCase().includes(globalSearch.toLowerCase()) ||
          q.correctAnswer.toLowerCase().includes(globalSearch.toLowerCase()) ||
          (q.quoteEs && q.quoteEs.toLowerCase().includes(globalSearch.toLowerCase()))
      )
    : [];

  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Top Banner / Announcement */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Logo & Branding */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm shadow-indigo-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <span>Examen de Lengua Castellana</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 font-bold">
                      7.º Curso
                    </span>
                  </h1>
                </div>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  🇦🇲 Իսպաներեն և Գրականություն — 7-րդ Դասարանի Քննություն
                </p>
              </div>
            </div>

            {/* Quick interactive controls: Toggle translation visibility */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setForceShowArmenian(!forceShowArmenian)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition border ${
                  forceShowArmenian
                    ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
                title={forceShowArmenian ? 'Թաքցնել հայերենը (սեղմելով բացել)' : 'Բոլոր հայերեն թարգմանությունները միշտ բացել'}
              >
                <Languages className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {forceShowArmenian ? '🇦🇲 Հայերենը միշտ բաց է' : '👆 Սեղմիր իսպաներենին՝ թարգմանելու համար'}
                </span>
                <span className="sm:hidden">
                  {forceShowArmenian ? 'Հայերեն միշտ' : 'Սեղմիր թարգմանել'}
                </span>
                {forceShowArmenian ? <Eye className="w-3.5 h-3.5 ml-0.5" /> : <EyeOff className="w-3.5 h-3.5 ml-0.5" />}
              </button>

              <button
                onClick={() => speakSpanish('¡Bienvenidos al examen de lengua castellana y literatura!')}
                className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition"
                title="Ստուգել իսպաներեն արտասանության ձայնը"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Bar: Main Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto py-2 border-t border-slate-100 dark:border-slate-800 scrollbar-none">
            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap transition ${
                activeTab === 'exam'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Քննություններ (3 Exámenes)</span>
            </button>

            <button
              onClick={() => setActiveTab('figures')}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap transition ${
                activeTab === 'figures'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>12 Արտահայտչամիջոցներ (Figuras)</span>
            </button>

            <button
              onClick={() => setActiveTab('metaphor')}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap transition ${
                activeTab === 'metaphor'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Flame className="w-4 h-4 text-purple-400" />
              <span>Փոխաբերության Լաբ (A es B / B de A)</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap transition ${
                activeTab === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>🃏 Քարտեր (Flashcards)</span>
            </button>

            <button
              onClick={() => setActiveTab('oral')}
              className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-1.5 whitespace-nowrap transition ${
                activeTab === 'oral'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>🎙️ Բանավոր Ստուգում (Oral)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Global Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={globalSearch}
            onChange={e => setGlobalSearch(e.target.value)}
            placeholder="Որոնել բառեր, տեքստեր, արտահայտչամիջոցներ կամ հարցեր 3 քննություններում (օր.՝ met\u00e1fora, campana, castillo, pleonasmo)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-xs"
          />
          {globalSearch && (
            <button
              onClick={() => setGlobalSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-semibold"
            >
              Մաքրել
            </button>
          )}
        </div>

        {/* Global Search Results Drawer */}
        {globalSearch.trim().length > 1 && (
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-800 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Գտնվել է {searchResults.length} հարց «{globalSearch}» հարցման համար
              </h3>
            </div>

            {searchResults.length === 0 ? (
              <p className="text-xs text-slate-500">Ոչ մի արդյունք չի գտնվել:</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {searchResults.slice(0, 10).map((r, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {r.examTitle} — Հարց {r.id} ({r.sectionTitleEs})
                      </span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        {r.correctAnswer}
                      </span>
                    </div>
                    <div className="font-serif text-slate-900 dark:text-slate-100 font-medium mb-1">
                      {r.questionEs}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      🇦🇲 {r.questionHy}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* EXAM TAB: Exam Switcher & Active Exam */}
        {activeTab === 'exam' && (
          <div className="space-y-6">
            {/* Exam selector buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {exams.map(exam => {
                const isSelected = selectedExamId === exam.id;

                return (
                  <button
                    key={exam.id}
                    onClick={() => setSelectedExamId(exam.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md'
                        : 'bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                          }`}
                        >
                          {exam.title}
                        </span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                          {exam.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                        {exam.labelEs}
                      </h3>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1 font-medium">
                        🇦🇲 {exam.labelHy}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Exam Viewer */}
            <ExamViewer
              examData={currentExam}
              forceShowArmenian={forceShowArmenian}
            />
          </div>
        )}

        {/* FIGURES & THEORY GUIDE TAB */}
        {activeTab === 'figures' && (
          <LiteraryFiguresGuide forceShowArmenian={forceShowArmenian} />
        )}

        {/* METAPHOR LAB TAB */}
        {activeTab === 'metaphor' && (
          <MetaphorLab />
        )}

        {/* FLASHCARDS TAB */}
        {activeTab === 'flashcards' && (
          <FlashcardsMode forceShowArmenian={forceShowArmenian} />
        )}

        {/* ORAL RETO TAB */}
        {activeTab === 'oral' && (
          <OralExamPractice />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            Examen de Lengua Castellana y Literatura — 7.º curso (7-րդ դասարան)
          </p>
          <p>
            Ներառում է 3 ամբողջական քննություն (Examen 1, Examen 3, Examen 4), 115 քննական հարց, 12 գեղարվեստական արտահայտչամիջոցների ամբողջական տեսություն, ռոմանսների և առասպելների վերլուծություն և բանավոր քննության նախապատրաստում։
          </p>
          <p className="text-[11px] text-slate-400">
            👆 Յուրաքանչյուր իսպաներեն արտահայտության վրա սեղմելիս բացվում է հայերեն թարգմանությունն ու բացատրությունը:
          </p>
        </div>
      </footer>
    </div>
  );
}
