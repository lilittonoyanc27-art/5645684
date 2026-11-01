import React, { useState } from 'react';
import { LITERARY_DEVICES } from './dataLiteraryDevices';
import { Volume2, RotateCw, Check, ArrowRight, ArrowLeft, Shuffle, Sparkles } from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface FlashcardsModeProps {
  forceShowArmenian: boolean;
}

export const FlashcardsMode: React.FC<FlashcardsModeProps> = () => {
  const [cards, setCards] = useState(LITERARY_DEVICES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState<'es-to-hy' | 'hy-to-es'>('es-to-hy');
  const [knownCards, setKnownCards] = useState<Record<string, boolean>>({});

  const currentCard = cards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleKnown = (id: string) => {
    setKnownCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const knownCount = Object.values(knownCards).filter(Boolean).length;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Flashcard header controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Քարտերով Ուսուցում (Flashcards)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Ստուգիր և ամրապնդիր գիտելիքներդ քարտերը շրջելով
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDirection(prev => (prev === 'es-to-hy' ? 'hy-to-es' : 'es-to-hy'))}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 transition hover:bg-indigo-100"
          >
            {direction === 'es-to-hy' ? '🇪🇸 Իսպաներեն ➔ 🇦🇲 Հայերեն' : '🇦🇲 Հայերեն ➔ 🇪🇸 Իսպաներեն'}
          </button>
          <button
            onClick={handleShuffle}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
            title="Խառնել քարտերը (Barajar)"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
        <span>
          Քարտ {currentIndex + 1} / {cards.length}
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
          Սովորած՝ {knownCount} / {cards.length}
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
        />
      </div>

      {/* The 3D Flip Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[340px] rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 select-none shadow-md border bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-600"
      >
        {/* Card Top */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            {isFlipped
              ? direction === 'es-to-hy' ? '🇦🇲 ՀԱՅԵՐԵՆ ՊԱՏԱՍԽԱՆ' : '🇪🇸 RESPUESTA EN ESPAÑOL'
              : direction === 'es-to-hy' ? '🇪🇸 PREGUNTA' : '🇦🇲 ՀԱՐՑ'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakSpanish(currentCard.nameEs);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 transition"
              title="Լսել արտասանությունը"
            >
              <Volume2 className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" /> Սեղմիր՝ շրջելու համար
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="py-6 text-center my-auto">
          {!isFlipped ? (
            direction === 'es-to-hy' ? (
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 tracking-tight font-serif">
                  {currentCard.nameEs}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  {currentCard.keyRuleEs}
                </p>
                <div className="mt-4 inline-block text-xs text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full">
                  Ի՞նչ է սա նշանակում հայերեն և ո՞րն է բանաձևը
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 tracking-tight">
                  {currentCard.nameHy}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  {currentCard.definitionHy}
                </p>
                <div className="mt-4 inline-block text-xs text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full">
                  Ինչպե՞ս է կոչվում այս գեղարվեստական միջոցը իսպաներեն
                </div>
              </div>
            )
          ) : (
            <div className="text-left space-y-4 max-w-lg mx-auto">
              <div>
                <h4 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                  {currentCard.nameEs} — {currentCard.nameHy}
                </h4>
              </div>

              <div className="text-xs md:text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-500 dark:text-slate-400 block mb-1">
                  Սահմանում և Կանոն՝
                </span>
                <p>{currentCard.definitionHy}</p>
              </div>

              {currentCard.examples[0] && (
                <div className="text-xs bg-amber-50 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-200 dark:border-amber-800">
                  <span className="font-bold text-amber-800 dark:text-amber-300 block mb-1">
                    🇪🇸 Օրինակ՝ {currentCard.examples[0].textEs}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300">
                    🇦🇲 {currentCard.examples[0].textHy}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleKnown(currentCard.id);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
              knownCards[currentCard.id]
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            {knownCards[currentCard.id] ? 'Արդեն գիտեմ (Dominado)' : 'Նշել որպես սովորած'}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition"
              title="Նախորդը"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition"
            >
              Հաջորդը <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
