import React, { useState, useMemo } from 'react';
import { VocabularyItem, UserStats, ThemeCategory, JobDomain, DailyDomain } from '../types/fle';
import { VOCABULARY_LIST } from '../data/vocabularyData';
import { AudioButton } from './AudioButton';
import { toggleLearnedVocab, toggleBookmarkVocab } from '../utils/storage';
import { 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  HelpCircle,
  List,
  RotateCcw,
  Volume2,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface VocabularyViewerProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export const VocabularyViewer: React.FC<VocabularyViewerProps> = ({
  stats,
  onUpdateStats,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ThemeCategory | 'favorites'>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'qcm' | 'list'>('qcm');
  const [currentIndex, setCurrentIndex] = useState(0);

  // States for the QCM interaction
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  // Domains definition (including Restauration and Service à la personne)
  const jobDomains: { id: JobDomain; label: string }[] = [
    { id: 'restauration', label: 'Restauration' },
    { id: 'service_personne', label: 'Service à la personne' },
    { id: 'libre_service', label: 'Libre-service' },
    { id: 'sante', label: 'Santé & Soins' },
    { id: 'periscolaire', label: 'Périscolaire' },
    { id: 'btp', label: 'BTP & Chantier' },
    { id: 'secretariat', label: 'Secrétariat' },
  ];

  const dailyDomains: { id: DailyDomain; label: string }[] = [
    { id: 'logement', label: 'Logement' },
    { id: 'transports', label: 'Transports' },
    { id: 'sante_quotidienne', label: 'Santé quotidienne' },
    { id: 'demarches', label: 'Démarches' },
    { id: 'courses', label: 'Courses' },
  ];

  // Filtering
  const filteredList = useMemo(() => {
    return VOCABULARY_LIST.filter((item) => {
      if (selectedCategory === 'favorites') {
        if (!stats.bookmarkedVocabIds.includes(item.id)) return false;
      } else if (selectedCategory !== 'all') {
        if (item.category !== selectedCategory) return false;
      }

      if (selectedDomain !== 'all') {
        if (item.domain !== selectedDomain) return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchWord = item.word.toLowerCase().includes(query);
        const matchDef = item.definition.toLowerCase().includes(query);
        const matchEx = item.exampleSentence.toLowerCase().includes(query);
        const matchLabel = item.domainLabel.toLowerCase().includes(query);
        if (!matchWord && !matchDef && !matchEx && !matchLabel) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedDomain, searchQuery, stats.bookmarkedVocabIds]);

  const currentItem = filteredList[currentIndex] || filteredList[0];

  // Generate 4 plausible options for the current vocabulary item
  const currentOptions = useMemo(() => {
    if (!currentItem) return [];
    const correct = currentItem.word;
    
    // Pick distractors from same category or pool
    const otherWords = VOCABULARY_LIST.filter((v) => v.id !== currentItem.id).map((v) => v.word);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
    const distractors = shuffledOthers.slice(0, 3);
    
    return [correct, ...distractors].sort(() => 0.5 - Math.random());
  }, [currentItem?.id]);

  const handleSelectOption = (word: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(word);
    setIsAnswerSubmitted(true);

    if (word === currentItem.word) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 },
      });
      const updated = toggleLearnedVocab(currentItem.id);
      onUpdateStats(updated);
    }
  };

  const handleNextWord = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, filteredList.length));
  };

  const handlePrevWord = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setCurrentIndex((prev) => (prev - 1 + filteredList.length) % Math.max(1, filteredList.length));
  };

  const handleResetCurrent = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const handleToggleBookmark = (id: string) => {
    const updated = toggleBookmarkVocab(id);
    onUpdateStats(updated);
  };

  const handleToggleLearned = (id: string) => {
    const updated = toggleLearnedVocab(id);
    onUpdateStats(updated);
  };

  const genderLabel = (type: VocabularyItem['genderOrType']) => {
    switch (type) {
      case 'm.': return 'Nom masculin';
      case 'f.': return 'Nom féminin';
      case 'v.': return 'Verbe d’action';
      case 'adj.': return 'Adjectif';
      case 'exp.': return 'Expression';
      case 'pl.': return 'Nom pluriel';
      default: return '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Vocabulaire Pratique A2 (Définitions & QCM)
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Apprenez le vocabulaire clé du travail (restauration, service à la personne, commerce, santé, BTP, secrétariat)
          et du quotidien à partir des définitions avec choix multiple et phrases de contexte professionnelles.
        </p>

        {/* Category Filter Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setSelectedCategory('all'); setSelectedDomain('all'); setCurrentIndex(0); handleResetCurrent(); }}
            className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Tous les thèmes ({VOCABULARY_LIST.length})
          </button>
          <button
            onClick={() => { setSelectedCategory('travail'); setSelectedDomain('all'); setCurrentIndex(0); handleResetCurrent(); }}
            className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === 'travail'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Monde du travail (7 métiers)
          </button>
          <button
            onClick={() => { setSelectedCategory('quotidien'); setSelectedDomain('all'); setCurrentIndex(0); handleResetCurrent(); }}
            className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-colors ${
              selectedCategory === 'quotidien'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            Vie quotidienne & Logement
          </button>
          <button
            onClick={() => { setSelectedCategory('favorites'); setSelectedDomain('all'); setCurrentIndex(0); handleResetCurrent(); }}
            className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              selectedCategory === 'favorites'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Bookmark size={14} />
            <span>Mes favoris ({stats.bookmarkedVocabIds.length})</span>
          </button>
        </div>

        {/* Sub-domain filter buttons */}
        {selectedCategory === 'travail' && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-500 font-medium mr-1">Métier :</span>
            <button
              onClick={() => { setSelectedDomain('all'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-2.5 py-1 text-xs rounded-md ${
                selectedDomain === 'all'
                  ? 'bg-indigo-100 text-indigo-900 font-semibold dark:bg-indigo-900/60 dark:text-indigo-200'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Tous les métiers
            </button>
            {jobDomains.map((job) => (
              <button
                key={job.id}
                onClick={() => { setSelectedDomain(job.id); setCurrentIndex(0); handleResetCurrent(); }}
                className={`px-2.5 py-1 text-xs rounded-md ${
                  selectedDomain === job.id
                    ? 'bg-indigo-100 text-indigo-900 font-semibold dark:bg-indigo-900/60 dark:text-indigo-200'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {job.label}
              </button>
            ))}
          </div>
        )}

        {selectedCategory === 'quotidien' && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-500 font-medium mr-1">Thème :</span>
            <button
              onClick={() => { setSelectedDomain('all'); setCurrentIndex(0); handleResetCurrent(); }}
              className={`px-2.5 py-1 text-xs rounded-md ${
                selectedDomain === 'all'
                  ? 'bg-emerald-100 text-emerald-900 font-semibold dark:bg-emerald-900/60 dark:text-emerald-200'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Tous les thèmes
            </button>
            {dailyDomains.map((dom) => (
              <button
                key={dom.id}
                onClick={() => { setSelectedDomain(dom.id); setCurrentIndex(0); handleResetCurrent(); }}
                className={`px-2.5 py-1 text-xs rounded-md ${
                  selectedDomain === dom.id
                    ? 'bg-emerald-100 text-emerald-900 font-semibold dark:bg-emerald-900/60 dark:text-emerald-200'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {dom.label}
              </button>
            ))}
          </div>
        )}

        {/* Search bar and View mode switch */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentIndex(0); handleResetCurrent(); }}
              placeholder="Rechercher un mot, un métier ou un exemple..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-1 self-end sm:self-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('qcm')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'qcm'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <HelpCircle size={14} />
              <span>Défi Définitions QCM</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <List size={14} />
              <span>Catalogue & Fiches</span>
            </button>
          </div>
        </div>
      </div>

      {/* Empty Filter State */}
      {filteredList.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-10 text-center border border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-300 font-medium">Aucun mot ne correspond à votre recherche.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSelectedDomain('all'); setSearchQuery(''); handleResetCurrent(); }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : viewMode === 'qcm' && currentItem ? (
        /* ========================================================= */
        /* MULTIPLE CHOICE DEFINITIONS CHALLENGE MODE */
        /* ========================================================= */
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>
              Définition <strong className="text-slate-900 dark:text-slate-100 font-bold">{currentIndex + 1}</strong> sur {filteredList.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-slate-500">{currentItem.domainLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{currentItem.difficulty}</span>
            </div>
          </div>

          {/* Main Question Card with Definition */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6 relative">
            {/* Top metadata */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{genderLabel(currentItem.genderOrType)}</span>
                <span aria-hidden="true">·</span>
                <span>{currentItem.category === 'travail' ? 'Monde du travail' : 'Vie quotidienne'}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleBookmark(currentItem.id)}
                  title={stats.bookmarkedVocabIds.includes(currentItem.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  className={`p-1.5 rounded-lg transition-colors ${
                    stats.bookmarkedVocabIds.includes(currentItem.id)
                      ? 'text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  <Bookmark size={18} fill={stats.bookmarkedVocabIds.includes(currentItem.id) ? 'currentColor' : 'none'} />
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleLearned(currentItem.id)}
                  title={stats.learnedVocabIds.includes(currentItem.id) ? 'Marqué comme acquis' : 'Marquer comme acquis'}
                  className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
                    stats.learnedVocabIds.includes(currentItem.id)
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  <CheckCircle2 size={15} />
                  <span>{stats.learnedVocabIds.includes(currentItem.id) ? 'Acquis' : 'À apprendre'}</span>
                </button>
              </div>
            </div>

            {/* Definition Prompt */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                <HelpCircle size={15} />
                <span>Quelle est la formule ou le mot correspondant à cette définition ?</span>
              </span>

              <div className="p-5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                « {currentItem.definition} »
              </div>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Choisissez le mot exact :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentOptions.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentItem.word;

                  let style = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400 hover:bg-indigo-50/40';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      style = 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-300 font-bold';
                    } else if (isSelected && !isCorrect) {
                      style = 'border-red-400 bg-red-50/90 dark:bg-red-950/50 text-red-950 dark:text-red-100';
                    } else {
                      style = 'border-slate-200 dark:border-slate-700 opacity-50 bg-slate-50 dark:bg-slate-800/40';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(option)}
                      className={`p-3.5 text-sm md:text-base font-semibold rounded-xl border text-left transition-all flex items-center justify-between ${style}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle size={18} className="text-red-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Answer Feedback & Context Sentence (USER SPECIFIC REQUIREMENT: "Conserver une phrase de contexte lors de la réponse") */}
            {isAnswerSubmitted && (
              <div className="space-y-4 pt-2 animate-in fade-in duration-200">
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    selectedAnswer === currentItem.word
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 text-emerald-900 dark:text-emerald-200'
                      : 'bg-red-50 dark:bg-red-950/30 border-red-200 text-red-900 dark:text-red-200'
                  }`}
                >
                  {selectedAnswer === currentItem.word ? (
                    <CheckCircle2 size={20} className="text-emerald-600 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle size={20} className="text-red-600 mt-0.5 shrink-0" />
                  )}
                  <div className="space-y-1 text-sm">
                    <div className="font-bold flex items-center gap-2">
                      <span>{selectedAnswer === currentItem.word ? 'Bravo ! C’est le mot exact (+10 XP)' : `La réponse attendue était : « ${currentItem.word} »`}</span>
                      <AudioButton text={currentItem.word} size="sm" />
                    </div>
                    {currentItem.contextNote && (
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        <strong>Conseil pratique :</strong> {currentItem.contextNote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phrase de contexte conservée */}
                <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Phrase de contexte professionnel / quotidien :
                    </span>
                    <AudioButton text={currentItem.exampleSentence} size="sm" label="Écouter la phrase" />
                  </div>
                  <p className="text-sm md:text-base text-slate-900 dark:text-slate-100 italic leading-relaxed">
                    « {currentItem.exampleSentence} »
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevWord}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <ChevronLeft size={16} />
              <span>Précédent</span>
            </button>

            {isAnswerSubmitted && (
              <button
                onClick={handleResetCurrent}
                className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium"
              >
                <RotateCcw size={13} />
                <span>Recommencer ce mot</span>
              </button>
            )}

            <button
              onClick={handleNextWord}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
            >
              <span>Mot suivant</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* CATALOG & LIST MODE */
        /* ========================================================= */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredList.map((item) => {
            const isLearned = stats.learnedVocabIds.includes(item.id);
            const isBookmarked = stats.bookmarkedVocabIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`bg-white dark:bg-slate-800 rounded-xl p-5 border transition-all ${
                  isLearned
                    ? 'border-emerald-200 dark:border-emerald-900/50 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{item.domainLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{genderLabel(item.genderOrType)}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400">{item.difficulty}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.word}
                      </h3>
                      <AudioButton text={item.word} size="sm" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked ? 'text-amber-500' : 'text-slate-400 hover:text-slate-600'
                      }`}
                      title={isBookmarked ? 'Favori' : 'Ajouter aux favoris'}
                    >
                      <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleLearned(item.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isLearned
                          ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                      title={isLearned ? 'Acquis' : 'Marquer comme appris'}
                    >
                      <CheckCircle2 size={18} fill={isLearned ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <p className="mt-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {item.definition}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-start justify-between gap-2 bg-slate-50 dark:bg-slate-900/40 p-2.5 rounded-lg">
                  <p className="text-xs text-slate-800 dark:text-slate-200 italic leading-snug">
                    « {item.exampleSentence} »
                  </p>
                  <AudioButton text={item.exampleSentence} size="sm" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
