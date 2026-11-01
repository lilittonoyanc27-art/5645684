export interface TextSegment {
  id: string;
  spanish: string;
  armenian: string;
  notes?: string;
  literaryDevice?: string;
  syllables?: string; // For poetry analysis
}

export interface ReadingText {
  id: string;
  titleEs: string;
  titleHy: string;
  type: 'narrative' | 'poem' | 'myth';
  paragraphs: TextSegment[];
  analysisNotesEs?: string;
  analysisNotesHy?: string;
}

export interface ExamQuestion {
  id: number | string;
  sectionTitleEs: string;
  sectionTitleHy: string;
  questionEs: string;
  questionHy: string;
  quoteEs?: string;
  quoteHy?: string;
  type: 'multiple-choice' | 'open' | 'transformation' | 'correction';
  options?: {
    key: string;
    textEs: string;
    textHy: string;
  }[];
  correctAnswer: string;
  explanationEs: string;
  explanationHy: string;
  literaryDevice?: string;
  metaphorComponents?: {
    realA: string;
    realAHy: string;
    imaginaryB: string;
    imaginaryBHy: string;
    structure?: string;
    structureDescription?: string;
  };
}

export interface LiteraryDevice {
  id: string;
  nameEs: string;
  nameHy: string;
  definitionEs: string;
  definitionHy: string;
  keyRuleEs: string;
  keyRuleHy: string;
  examples: {
    textEs: string;
    textHy: string;
    explanationEs: string;
    explanationHy: string;
  }[];
  justificationTemplateEs: string;
  justificationTemplateHy: string;
  commonConfusionEs?: string;
  commonConfusionHy?: string;
}

export interface ExamData {
  id: string;
  titleEs: string;
  titleHy: string;
  subtitleEs: string;
  subtitleHy: string;
  gradeEs: string;
  gradeHy: string;
  overviewEs: string;
  overviewHy: string;
  texts: ReadingText[];
  questions: ExamQuestion[];
  oralPrep?: {
    questionEs: string;
    questionHy: string;
    answerEs: string;
    answerHy: string;
    tipEs: string;
    tipHy: string;
  }[];
}
