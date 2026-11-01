export function speakSpanish(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel(); // Stop current speech
  const cleanText = text.replace(/«|»|—|¡|!|¿|\?/g, ' ').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'es-ES';
  utterance.rate = 0.95; // Slightly slower for language learners

  // Try to find Spanish voice if available
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith('es'));
  if (esVoice) {
    utterance.voice = esVoice;
  }

  window.speechSynthesis.speak(utterance);
}
