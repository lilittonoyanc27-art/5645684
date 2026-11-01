import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Sparkles, Languages, Check } from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface InteractiveSpanishBlockProps {
  spanish: string;
  armenian: string;
  notes?: string;
  literaryDevice?: string;
  syllables?: string;
  forceShowArmenian?: boolean;
  inline?: boolean;
  badgeLabel?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const InteractiveSpanishBlock: React.FC<InteractiveSpanishBlockProps> = ({
  spanish,
  armenian,
  notes,
  literaryDevice,
  syllables,
  forceShowArmenian = false,
  inline = false,
  badgeLabel,
  size = 'md'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const showArmenian = forceShowArmenian || isOpen;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakSpanish(spanish);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${spanish}\n${armenian}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) {
    return (
      <span className="inline-block my-0.5">
        <span
          onClick={handleToggle}
          className={`cursor-pointer rounded px-1.5 py-0.5 font-medium transition-all duration-200 border ${
            showArmenian
              ? 'bg-amber-100 border-amber-300 text-amber-950 dark:bg-amber-950/40 dark:border-amber-700/60 dark:text-amber-200'
              : 'bg-indigo-50/80 hover:bg-indigo-100 border-indigo-200/80 text-indigo-950 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/40 dark:border-indigo-800/50 dark:text-indigo-200'
          }`}
          title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար (Click to see Armenian)"
        >
          {spanish}
        </span>
        {showArmenian && (
          <span className="ml-1 text-emerald-700 dark:text-emerald-400 font-normal text-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 rounded">
            🇦🇲 {armenian}
          </span>
        )}
      </span>
    );
  }

  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg md:text-xl' : 'text-base md:text-lg';

  return (
    <div
      onClick={handleToggle}
      className={`group relative rounded-xl transition-all duration-200 border cursor-pointer select-none ${
        showArmenian
          ? 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-600/60 shadow-md ring-1 ring-amber-300/50 dark:ring-amber-500/30'
          : 'bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800/90 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 shadow-xs hover:shadow-sm'
      } p-3.5 md:p-4 my-2`}
    >
      {/* Top action row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
              🇪🇸 ES
            </span>

            {literaryDevice && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <Sparkles className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                {literaryDevice}
              </span>
            )}

            {syllables && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                {syllables}
              </span>
            )}

            {badgeLabel && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                {badgeLabel}
              </span>
            )}
          </div>

          {/* Spanish content */}
          <div className={`font-serif tracking-tight text-slate-900 dark:text-slate-100 font-medium leading-relaxed ${textSize}`}>
            {spanish}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 shrink-0 pt-0.5">
          <button
            type="button"
            onClick={handleSpeak}
            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-400 dark:hover:text-indigo-300 dark:hover:bg-indigo-950/60 transition"
            title="Լսել իսպաներեն արտասանությունը (Escuchar pronunciación)"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition"
            title="Պատճենել (Copiar)"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Languages className="w-4 h-4" />}
          </button>
          <div className="text-slate-400 dark:text-slate-500 pl-1">
            {showArmenian ? <ChevronUp className="w-4 h-4 text-amber-600" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </div>

      {/* Armenian translation drawer */}
      {showArmenian ? (
        <div className="mt-3 pt-3 border-t border-amber-200/80 dark:border-amber-800/50 animate-fadeIn">
          <div className="flex items-start gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0 mt-0.5">
              🇦🇲 HY
            </span>
            <div className="text-slate-800 dark:text-slate-200 leading-relaxed font-sans text-sm md:text-base font-normal">
              {armenian}
            </div>
          </div>

          {notes && (
            <div className="mt-2 ml-9 text-xs text-slate-500 dark:text-slate-400 italic">
              💡 {notes}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-2 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400/90 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1">
            <span>👆 Սեղմիր այստեղ՝ հայերեն թարգմանությունը բացելու համար</span>
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">
            Haz clic para traducir
          </span>
        </div>
      )}
    </div>
  );
};
