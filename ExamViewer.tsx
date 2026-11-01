import React, { useState } from 'react';
import { ExamData, ExamQuestion } from './types';
import { InteractiveSpanishBlock } from './InteractiveSpanishBlock';
import {
  BookOpen,
  CheckCircle,
  XCircle,
  HelpCircle,
  RotateCcw,
  Volume2,
  Award,
  Filter,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface ExamViewerProps {
  examData: ExamData;
  forceShowArmenian: boolean;
}

export const ExamViewer: React.FC<ExamViewerProps> = ({ examData, forceShowArmenian }) => {
  const [viewMode, setViewMode] = useState<'study' | 'quiz' | 'solutions'>('study');
  const [activeSection, setActiveSection] = useState<string>('all');
  const [userAnswers, setUserAnswers] = useState<Record<string | number, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string | number, boolean>>({});
  const [activeTextId, setActiveTextId] = useState<string>(examData.texts[0]?.id || '');

  // Extract unique sections
  const sections = Array.from(new Set(examData.questions.map(q => q.sectionTitleEs)));

  const filteredQuestions = examData.questions.filter(q =>
    activeSection === 'all' ? true : q.sectionTitleEs === activeSection
  );

  const handleSelectOption = (questionId: string | number, optionKey: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionKey }));
    setRevealedAnswers(prev => ({ ...prev, [questionId]: true }));
  };

  const handleToggleReveal = (questionId: string | number) => {
    setRevealedAnswers(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setRevealedAnswers({});
  };

  // Calculate score for multiple choice
  const totalMultipleChoice = examData.questions.filter(q => q.type === 'multiple-choice').length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = examData.questions.filter(
    q => q.type === 'multiple-choice' && userAnswers[q.id] === q.correctAnswer
  ).length;

  const currentText = examData.texts.find(t => t.id === activeTextId) || examData.texts[0];

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
            {examData.gradeEs} — {examData.gradeHy}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              📊 {examData.questions.length} քննական հարցեր
            </span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">
          {examData.titleEs}
        </h1>
        <p className="text-sm md:text-base font-medium text-emerald-700 dark:text-emerald-400 mb-3">
          🇦🇲 {examData.titleHy} — {examData.subtitleHy}
        </p>

        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-5">
          {examData.overviewEs}
          <span className="block mt-1 font-sans text-slate-700 dark:text-slate-300">
            {examData.overviewHy}
          </span>
        </p>

        {/* View mode buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setViewMode('study')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition ${
              viewMode === 'study'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            📖 Ընթերցանություն և Տեքստեր (Lecturas)
          </button>
          <button
            onClick={() => setViewMode('quiz')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition ${
              viewMode === 'quiz'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <Award className="w-4 h-4" />
            ✏️ Ինտերակտիվ Քննություն (Práctica Interactiva)
          </button>
          <button
            onClick={() => setViewMode('solutions')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold flex items-center gap-2 transition ${
              viewMode === 'solutions'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            📋 Պատասխաններ և Լուծումներ (Soluciones)
          </button>
        </div>
      </div>

      {/* READING MODE (Study & Texts) */}
      {viewMode === 'study' && (
        <div className="space-y-6">
          {/* Text selector tabs */}
          <div className="flex flex-wrap gap-2">
            {examData.texts.map(text => (
              <button
                key={text.id}
                onClick={() => setActiveTextId(text.id)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition flex items-center gap-2 ${
                  activeTextId === text.id
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{text.type === 'poem' ? '🎭' : text.type === 'myth' ? '⚡' : '🏰'}</span>
                <span>{text.titleEs}</span>
              </button>
            ))}
          </div>

          {/* Active Reading Box */}
          {currentText && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {currentText.type === 'poem' ? 'Lectura poética — Բանաստեղծություն (Romance)' : currentText.type === 'myth' ? 'Mito cosmogónico — Առասպել' : 'Lectura narrativa — Պատմվածք / Լեգենդ'}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {currentText.paragraphs.length} {currentText.type === 'poem' ? 'տող (versos)' : 'նախադասություն'}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {currentText.titleEs}
                </h2>
                <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                  🇦🇲 {currentText.titleHy}
                </p>

                {currentText.analysisNotesEs && (
                  <div className="mt-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs">
                    <p className="font-semibold text-blue-900 dark:text-blue-300">
                      💡 {currentText.analysisNotesEs}
                    </p>
                    <p className="mt-1 text-slate-700 dark:text-slate-300">
                      🇦🇲 {currentText.analysisNotesHy}
                    </p>
                  </div>
                )}
              </div>

              {/* Explanatory hint banner */}
              <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-center justify-between text-xs text-amber-900 dark:text-amber-300">
                <span>
                  👆 <strong>Ինտերակտիվ ուսուցում.</strong> Սեղմիր յուրաքանչյուր իսպաներեն տողի վրա՝ հայերեն թարգմանությունն ու գրական նշումները տեսնելու համար:
                </span>
                <span className="hidden sm:inline font-mono text-[11px] bg-amber-200/60 dark:bg-amber-900/60 px-2 py-0.5 rounded">
                  Clic para traducir
                </span>
              </div>

              {/* Line by line interactive list */}
              <div className="space-y-2">
                {currentText.paragraphs.map((p, idx) => (
                  <InteractiveSpanishBlock
                    key={p.id || idx}
                    spanish={p.spanish}
                    armenian={p.armenian}
                    notes={p.notes}
                    literaryDevice={p.literaryDevice}
                    syllables={p.syllables}
                    forceShowArmenian={forceShowArmenian}
                    badgeLabel={currentText.type === 'poem' ? `Verso ${idx + 1}` : undefined}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Bottom link to questions */}
          <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="font-semibold text-indigo-950 dark:text-indigo-200 text-sm">
                Տեքստը կարդալուց հետո անցի՛ր քննական հարցերին
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Ստուգիր տեքստի ըմբռնումը, գեղարվեստական միջոցները և բանաստեղծական չափը:
              </p>
            </div>
            <button
              onClick={() => setViewMode('quiz')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition"
            >
              Անցնել Քննությանը ➔
            </button>
          </div>
        </div>
      )}

      {/* QUIZ & PRACTICE MODE */}
      {viewMode === 'quiz' && (
        <div className="space-y-6">
          {/* Section filter & score bar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <button
                onClick={() => setActiveSection('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  activeSection === 'all'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                Բոլոր բաժինները ({examData.questions.length})
              </button>
              {sections.map(sec => (
                <button
                  key={sec}
                  onClick={() => setActiveSection(sec)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    activeSection === sec
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>

            {/* Score & reset */}
            <div className="flex items-center gap-3">
              <div className="text-xs font-semibold">
                Ճիշտ պատասխաններ: <span className="text-emerald-600 font-bold">{correctCount}</span> / {totalMultipleChoice}
              </div>
              <button
                onClick={handleResetQuiz}
                className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Վերսկսել քննությունը (Reiniciar)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question cards list */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCorrect = isAnswered && userAnswers[q.id] === q.correctAnswer;
              const isRevealed = Boolean(revealedAnswers[q.id]);

              return (
                <div
                  key={q.id}
                  className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 p-5 shadow-xs ${
                    isAnswered
                      ? isCorrect
                        ? 'border-emerald-300 dark:border-emerald-700/60 ring-1 ring-emerald-400/20'
                        : 'border-rose-300 dark:border-rose-700/60 ring-1 ring-rose-400/20'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {/* Question header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {q.sectionTitleEs}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isAnswered && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                            isCorrect
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                          }`}
                        >
                          {isCorrect ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'ՃԻՇՏ Է (¡Correcto!)' : 'ՍԽԱԼ Է (Incorrecto)'}
                        </span>
                      )}

                      <button
                        onClick={() => speakSpanish(q.questionEs)}
                        className="p-1 rounded-md text-slate-400 hover:text-indigo-600 transition"
                        title="Լսել հարցը"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Quote fragment if present */}
                  {q.quoteEs && (
                    <div className="mb-3">
                      <InteractiveSpanishBlock
                        spanish={q.quoteEs}
                        armenian={q.quoteHy || ''}
                        badgeLabel="Հատված տեքստից (Fragmento)"
                        forceShowArmenian={forceShowArmenian}
                        size="md"
                      />
                    </div>
                  )}

                  {/* Question statement - fully interactive */}
                  <div className="mb-4">
                    <InteractiveSpanishBlock
                      spanish={q.questionEs}
                      armenian={q.questionHy}
                      forceShowArmenian={forceShowArmenian}
                      size="md"
                    />
                  </div>

                  {/* Options for multiple-choice */}
                  {q.type === 'multiple-choice' && q.options && (
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {q.options.map(opt => {
                        const isSelected = userAnswers[q.id] === opt.key;
                        const isThisCorrect = opt.key === q.correctAnswer;
                        const showStatus = isAnswered || isRevealed;

                        return (
                          <button
                            key={opt.key}
                            onClick={() => handleSelectOption(q.id, opt.key)}
                            className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                              showStatus
                                ? isThisCorrect
                                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 text-emerald-950 dark:text-emerald-100 font-medium'
                                  : isSelected
                                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 dark:border-rose-600 text-rose-950 dark:text-rose-100'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
                                : isSelected
                                ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-400 text-indigo-950 dark:text-indigo-100'
                                : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 border-slate-200 dark:border-slate-800'
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                                showStatus && isThisCorrect
                                  ? 'bg-emerald-600 text-white'
                                  : showStatus && isSelected && !isThisCorrect
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {opt.key}
                            </span>
                            <div className="flex-1 text-sm">
                              <div className="font-medium text-slate-900 dark:text-slate-100">
                                {opt.textEs}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                🇦🇲 {opt.textHy}
                              </div>
                            </div>
                            {showStatus && isThisCorrect && (
                              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Open question / transformation reveal button */}
                  {q.type !== 'multiple-choice' && (
                    <div className="mb-4">
                      <button
                        onClick={() => handleToggleReveal(q.id)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition"
                      >
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        {isRevealed ? 'Թաքցնել պատասխանը' : 'Տեսնել ճիշտ պատասխանը (Ver respuesta modelo)'}
                      </button>
                    </div>
                  )}

                  {/* Explanation drawer when revealed or answered */}
                  {isRevealed && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-fadeIn">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100 mb-1">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>Ճիշտ պատասխան / Respuesta correcta:</span>
                          <span className="font-mono text-emerald-600 dark:text-emerald-400">
                            {q.correctAnswer}
                          </span>
                        </div>
                      </div>

                      {/* Explanation in Spanish & Armenian */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
                          <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">
                            🇪🇸 Explicación oficial
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                            {q.explanationEs}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40">
                          <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-1">
                            🇦🇲 Հայերեն մեկնաբանություն
                          </span>
                          <p className="text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                            {q.explanationHy}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FULL SOLUTIONS VIEW */}
      {viewMode === 'solutions' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-emerald-950 dark:text-emerald-200 text-sm md:text-base">
                Բոլոր {examData.questions.length} հարցերի պաշտոնական լուծումներն ու բացատրությունները
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Soluciones completas con razonamiento en español y armenio.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full">
              40 / 40 Respuestas
            </span>
          </div>

          <div className="space-y-4">
            {examData.questions.map((q, idx) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    Հարց {idx + 1} — {q.sectionTitleEs}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    Պատասխան՝ {q.correctAnswer}
                  </span>
                </div>

                <div className="font-serif font-medium text-slate-900 dark:text-slate-100 text-base mb-1">
                  {q.questionEs}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-sans">
                  🇦🇲 {q.questionHy}
                </div>

                {q.quoteEs && (
                  <div className="mb-3 text-xs bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 font-serif">
                    «{q.quoteEs}»
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      🇪🇸 Razón / Justificación
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                      {q.explanationEs}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                      🇦🇲 Հայերեն հիմնավորում
                    </span>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                      {q.explanationHy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Oral Challenge section if provided in exam data */}
      {examData.oralPrep && examData.oralPrep.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
              🎙️ Mini Reto Oral
            </span>
            <span className="text-xs text-white/70">
              Բանավոր ստուգում քննությունից առաջ
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Բանավոր Ստուգման Հարցեր և Իսպաներեն Պատասխաններ
          </h3>
          <p className="text-sm text-white/80 mb-6">
            Քննության վերջում ուսուցիչը կարող է տալ այսպիսի հարցեր՝ առանց պատասխանների տարբերակների։ 
            Սովորի՛ր պատասխանել իսպաներեն։
          </p>

          <div className="space-y-4">
            {examData.oralPrep.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-bold text-amber-300 text-sm md:text-base">
                    {idx + 1}. {item.questionEs}
                  </h4>
                  <button
                    onClick={() => speakSpanish(item.questionEs)}
                    className="p-1 rounded text-white/70 hover:text-white transition"
                    title="Լսել"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-white/70 mb-3">
                  🇦🇲 {item.questionHy}
                </p>

                <div className="p-3 rounded-lg bg-black/30 border border-white/10 text-xs mb-2">
                  <span className="text-emerald-300 font-bold block mb-1">
                    🇪🇸 Respuesta oral (Պատասխան)
                  </span>
                  <p className="text-white/95 leading-relaxed font-serif">
                    {item.answerEs}
                  </p>
                  <p className="text-white/70 mt-1 font-sans">
                    🇦🇲 {item.answerHy}
                  </p>
                </div>

                <div className="text-[11px] text-amber-200/90 italic">
                  💡 Խորհուրդ. {item.tipHy}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
