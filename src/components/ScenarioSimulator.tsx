import React, { useState } from 'react';
import { SCENARIOS_LIST } from '../data/scenariosData';
import { JOB_INSTRUCTIONS_LIST } from '../data/jobInstructionsData';
import { ScenarioChoice, UserStats, JobDomain } from '../types/fle';
import { AudioButton } from './AudioButton';
import { 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw,
  Sparkles,
  Building2,
  HeartPulse,
  HardHat,
  GraduationCap,
  Store,
  Utensils,
  HeartHandshake,
  FileCheck2,
  HelpCircle,
  ShieldAlert,
  ChevronRight,
  BookmarkCheck,
  Flame,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { markExerciseCompleted } from '../utils/storage';

interface ScenarioSimulatorProps {
  stats: UserStats;
  onUpdateStats: (stats: UserStats) => void;
}

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({ stats, onUpdateStats }) => {
  // Mode switcher: Dialogue Simulator vs Professional Instructions (Compréhension écrite)
  const [activeMode, setActiveMode] = useState<'instructions' | 'dialogue'>('instructions');

  // Trade selection
  const [selectedDomain, setSelectedDomain] = useState<JobDomain>('restauration');

  // -------------------------------------------------------------
  // STATE FOR INSTRUCTIONS (COMPRÉHENSION ÉCRITE)
  // -------------------------------------------------------------
  const [instructionAnswers, setInstructionAnswers] = useState<Record<string, number>>({});

  // -------------------------------------------------------------
  // STATE FOR DIALOGUE SCENARIOS (3 PER DOMAIN)
  // -------------------------------------------------------------
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);
  const [isScenarioFinished, setIsScenarioFinished] = useState(false);

  // Active items
  const currentInstruction = JOB_INSTRUCTIONS_LIST.find((i) => i.domain === selectedDomain) || JOB_INSTRUCTIONS_LIST[0];
  const domainScenarios = SCENARIOS_LIST.filter((s) => s.domain === selectedDomain);
  const currentScenario = domainScenarios[selectedScenarioIndex] || domainScenarios[0] || SCENARIOS_LIST[0];
  const currentNode = currentScenario?.dialogueNodes[currentNodeIndex] || currentScenario?.dialogueNodes[0];

  const domainIcons: Record<string, React.ReactNode> = {
    restauration: <Utensils size={17} className="text-amber-500" />,
    service_personne: <HeartHandshake size={17} className="text-rose-500" />,
    libre_service: <Store size={17} className="text-emerald-500" />,
    sante: <HeartPulse size={17} className="text-red-500" />,
    periscolaire: <GraduationCap size={17} className="text-teal-500" />,
    btp: <HardHat size={17} className="text-orange-500" />,
    secretariat: <Building2 size={17} className="text-blue-500" />,
  };

  const handleSelectDomain = (domain: JobDomain) => {
    setSelectedDomain(domain);
    setSelectedScenarioIndex(0);
    setCurrentNodeIndex(0);
    setSelectedChoice(null);
    setIsScenarioFinished(false);
    setInstructionAnswers({});
  };

  const handleSelectScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    setCurrentNodeIndex(0);
    setSelectedChoice(null);
    setIsScenarioFinished(false);
  };

  const handleInstructionAnswer = (qId: string, optIdx: number, correctIdx: number) => {
    setInstructionAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    if (optIdx === correctIdx) {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.6 },
      });
      const updated = markExerciseCompleted(`inst_${qId}`, 15);
      onUpdateStats(updated);
    }
  };

  const handleChoose = (choice: ScenarioChoice) => {
    setSelectedChoice(choice);
    if (choice.isAppropriate) {
      if (currentNodeIndex + 1 >= currentScenario.dialogueNodes.length) {
        setIsScenarioFinished(true);
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
        });
        const updated = markExerciseCompleted(`scenario_${currentScenario.id}`, 25);
        onUpdateStats(updated);
      }
    }
  };

  const handleNextStep = () => {
    if (currentNodeIndex + 1 < currentScenario.dialogueNodes.length) {
      setCurrentNodeIndex((prev) => prev + 1);
      setSelectedChoice(null);
    }
  };

  const handleRestartDialogue = () => {
    setCurrentNodeIndex(0);
    setSelectedChoice(null);
    setIsScenarioFinished(false);
  };

  const handleGoToNextDialogue = () => {
    if (selectedScenarioIndex + 1 < domainScenarios.length) {
      handleSelectScenario(selectedScenarioIndex + 1);
    } else {
      handleSelectScenario(0);
    }
  };

  // Calculate score for instructions
  const answeredInstructionCount = Object.keys(instructionAnswers).length;
  const correctInstructionCount = currentInstruction.comprehensionQuestions.filter(
    (q) => instructionAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Situations Professionnelles & Consignes de Poste
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Fiches de consignes officielles (6 instructions et 6 exercices de compréhension par métier)
          et simulateur de dialogues professionnels (3 situations interactives par métier avec séparation graphique).
        </p>

        {/* Mode Switcher Buttons */}
        <div className="mt-5 flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl w-fit">
          <button
            onClick={() => setActiveMode('instructions')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
              activeMode === 'instructions'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCheck2 size={16} />
            <span>Fiches d’instructions (6 consignes + 6 exercices)</span>
          </button>
          <button
            onClick={() => setActiveMode('dialogue')}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
              activeMode === 'dialogue'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MessageSquare size={16} />
            <span>Dialogues interactifs (3 dialogues par métier)</span>
          </button>
        </div>

        {/* Domain Selector Tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {JOB_INSTRUCTIONS_LIST.map((item) => {
            const isSelected = item.domain === selectedDomain;
            return (
              <button
                key={item.domain}
                onClick={() => handleSelectDomain(item.domain)}
                className={`flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {domainIcons[item.domain] || <Briefcase size={16} />}
                <span>{item.domainTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODE 1: PROFESSIONAL INSTRUCTIONS (COMPRÉHENSION ÉCRITE) */}
      {/* ========================================================= */}
      {activeMode === 'instructions' && (
        <div className="space-y-6">
          {/* Progress / stats bar for instructions */}
          <div className="bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Fiche officielle : {currentInstruction.consignes.length} instructions & {currentInstruction.comprehensionQuestions.length} exercices
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-600 dark:text-slate-400">
                Progression : <strong>{answeredInstructionCount}/{currentInstruction.comprehensionQuestions.length}</strong> répondus
              </span>
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 rounded-md font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                Score : {correctInstructionCount}/{currentInstruction.comprehensionQuestions.length}
              </span>
            </div>
          </div>

          {/* Official Document Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
                  Fiche de poste · {currentInstruction.jobTitle}
                </span>
                <AudioButton 
                  text={`${currentInstruction.documentTitle}. ${currentInstruction.consignes.map(c => `${c.stepNumber}. ${c.title}. ${c.detail}`).join(' ')}`} 
                  size="sm" 
                  label="Écouter toute la fiche" 
                />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                {currentInstruction.documentTitle}
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                Lisez attentivement ces 6 consignes professionnelles réelles, puis répondez aux 6 questions de compréhension écrite ci-dessous.
              </p>
            </div>

            {/* Consignes Steps (All 6 displayed cleanly) */}
            <div className="space-y-4">
              {currentInstruction.consignes.map((c) => (
                <div
                  key={c.stepNumber}
                  className="bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {c.stepNumber}
                      </span>
                      <h3 className="font-bold text-sm md:text-base text-slate-900 dark:text-white">
                        {c.title}
                      </h3>
                    </div>
                    <AudioButton text={`${c.title}. ${c.detail} ${c.caution ? c.caution : ''}`} size="sm" />
                  </div>

                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-9">
                    {c.detail}
                  </p>

                  {c.caution && (
                    <div className="ml-9 mt-2 p-2.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 rounded-lg flex items-start gap-2 text-xs text-amber-900 dark:text-amber-200">
                      <ShieldAlert size={15} className="text-amber-600 shrink-0 mt-0.5" />
                      <span><strong>Vigilance / Sécurité :</strong> {c.caution}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Reading Comprehension Questions Section (All 6 exercises) */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <HelpCircle size={15} />
                  <span>Compréhension écrite de la fiche d’instructions</span>
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  6 exercices de compréhension sur les consignes (+15 XP par bonne réponse)
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg">
                Total : 6 questions
              </span>
            </div>

            <div className="space-y-6">
              {currentInstruction.comprehensionQuestions.map((q, idx) => {
                const userAns = instructionAnswers[q.id];
                const isAnswered = userAns !== undefined;

                return (
                  <div key={q.id} className="bg-slate-50 dark:bg-slate-900/40 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100">
                        {idx + 1}. {q.question}
                      </p>
                      <AudioButton text={q.question} size="sm" />
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = userAns === oIdx;
                        const isCorrect = oIdx === q.correctIndex;

                        let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400';
                        if (isAnswered) {
                          if (isCorrect) {
                            btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-300 font-bold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'border-red-400 bg-red-50 dark:bg-red-950/40 text-red-950 dark:text-red-100';
                          } else {
                            btnStyle = 'border-slate-200 dark:border-slate-700 opacity-50 bg-slate-50 dark:bg-slate-800/40';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isAnswered}
                            onClick={() => handleInstructionAnswer(q.id, oIdx, q.correctIndex)}
                            className={`w-full p-3 text-xs md:text-sm font-medium rounded-xl border text-left transition-all ${btnStyle}`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {isAnswered && isCorrect && <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />}
                              {isAnswered && isSelected && !isCorrect && <XCircle size={16} className="text-red-600 shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60 mt-2">
                        <strong>Explication :</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 2: INTERACTIVE ROLEPLAY DIALOGUES (3 PER DOMAIN)      */}
      {/* ========================================================= */}
      {activeMode === 'dialogue' && (
        <div className="space-y-6">
          {/* ===================================================== */}
          {/* GRAPHICAL SEPARATION RIBBON : 3 DIALOGUES SELECTOR    */}
          {/* ===================================================== */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
              <div className="flex items-center gap-2">
                <Flame className="text-orange-500" size={18} />
                <span className="font-bold text-sm text-slate-900 dark:text-white">
                  3 Dialogues professionnels pour : {currentScenario.domainTitle}
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Cliquez sur un dialogue pour vous entraîner
              </span>
            </div>

            {/* Visual 3-Dialogue Cards with distinct graphic separation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {domainScenarios.map((scen, sIdx) => {
                const isActive = sIdx === selectedScenarioIndex;
                const isCompleted = stats.completedExercisesIds.includes(`scenario_${scen.id}`);

                return (
                  <button
                    key={scen.id}
                    onClick={() => handleSelectScenario(sIdx)}
                    className={`relative p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isActive
                        ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/50 shadow-sm ring-2 ring-indigo-500/20'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    {/* Top Dialogue Number Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        Dialogue {sIdx + 1} / 3
                      </span>

                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 size={13} />
                          <span>Validé</span>
                        </span>
                      ) : isActive ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 bg-indigo-100/60 dark:bg-indigo-900/50 px-2 py-0.5 rounded-full">
                          <span>En cours</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">À faire</span>
                      )}
                    </div>

                    {/* Dialogue Title */}
                    <h4 className={`text-sm font-bold line-clamp-2 ${
                      isActive ? 'text-indigo-950 dark:text-indigo-200' : 'text-slate-900 dark:text-slate-100'
                    }`}>
                      {scen.title.replace(/^Dialogue \d+ : /, '')}
                    </h4>

                    {/* Node count */}
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1">
                      <span>{scen.dialogueNodes.length} échange{scen.dialogueNodes.length > 1 ? 's' : ''}</span>
                      <span>·</span>
                      <span>+25 XP</span>
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================== */}
          {/* ACTIVE DIALOGUE CONTAINER WITH GRAPHICAL HEADER       */}
          {/* ===================================================== */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
            
            {/* Prominent Graphical Separator Bar */}
            <div className="relative py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                  Dialogue {selectedScenarioIndex + 1} sur 3
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Étape {currentNodeIndex + 1}/{currentScenario.dialogueNodes.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRestartDialogue}
                  className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 rounded-md"
                >
                  <RotateCcw size={13} />
                  <span>Recommencer</span>
                </button>
              </div>
            </div>

            {/* Graphical Divider Line */}
            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-indigo-200 dark:border-indigo-900/60" />
              <div className="absolute px-3 bg-white dark:bg-slate-800 text-indigo-500 text-xs font-semibold flex items-center gap-1.5">
                <span>✦</span>
                <span>Mise en situation #{selectedScenarioIndex + 1}</span>
                <span>✦</span>
              </div>
            </div>

            {/* Scenario Header Info */}
            <div className="space-y-2 pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                {currentScenario.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
                {currentScenario.description}
              </p>
              <div className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <strong>Contexte professionnel :</strong> {currentScenario.initialContext}
              </div>
            </div>

            {/* Interlocutor Speech Bubble */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {currentNode.interlocutorName}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ({currentNode.interlocutorRole})
                  </span>
                </div>
                <AudioButton text={currentNode.interlocutorText} size="sm" label="Écouter" />
              </div>

              <div className="p-5 bg-indigo-50/70 dark:bg-indigo-950/40 rounded-2xl rounded-tl-sm border border-indigo-100 dark:border-indigo-900/50 text-slate-900 dark:text-slate-100 text-base md:text-lg leading-relaxed font-medium">
                « {currentNode.interlocutorText} »
              </div>
            </div>

            {/* User Prompt & Decision Choices (Zero nested button, interactive div) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <MessageSquare size={15} className="text-indigo-600" />
                <span>{currentNode.userPrompt}</span>
              </div>

              <div className="space-y-3">
                {currentNode.choices.map((choice, idx) => {
                  const isSelected = selectedChoice === choice;
                  return (
                    <div
                      key={idx}
                      onClick={() => !selectedChoice?.isAppropriate && handleChoose(choice)}
                      role="button"
                      tabIndex={selectedChoice?.isAppropriate ? -1 : 0}
                      onKeyDown={(e) => {
                        if ((e.key === 'Enter' || e.key === ' ') && !selectedChoice?.isAppropriate) {
                          e.preventDefault();
                          handleChoose(choice);
                        }
                      }}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        isSelected && choice.isAppropriate
                          ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-300'
                          : isSelected && !choice.isAppropriate
                          ? 'border-red-400 bg-red-50/80 dark:bg-red-950/40 text-red-950 dark:text-red-100 ring-2 ring-red-300'
                          : selectedChoice?.isAppropriate
                          ? 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 opacity-60 cursor-default'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm md:text-base leading-relaxed font-medium">
                          {choice.text}
                        </p>
                        <div onClick={(e) => e.stopPropagation()} className="shrink-0">
                          <AudioButton text={choice.text} size="sm" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Feedback on Selected Choice */}
            {selectedChoice && (
              <div
                className={`p-5 rounded-xl border space-y-3 ${
                  selectedChoice.isAppropriate
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 text-emerald-900 dark:text-emerald-200'
                    : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 text-amber-900 dark:text-amber-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {selectedChoice.isAppropriate ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      <span>Réaction professionnelle et adaptée !</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={18} className="text-amber-600" />
                      <span>Réaction à corriger :</span>
                    </>
                  )}
                </div>

                <p className="text-xs md:text-sm leading-relaxed">
                  {selectedChoice.feedback}
                </p>

                {selectedChoice.isAppropriate && !isScenarioFinished && (
                  <div className="pt-2">
                    <button
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors"
                    >
                      <span>Continuer le dialogue</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Scenario Completion */}
            {isScenarioFinished && (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 rounded-2xl text-center space-y-4">
                <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 rounded-full">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                  Dialogue {selectedScenarioIndex + 1} validé avec succès ! (+25 XP)
                </h3>
                <p className="text-xs md:text-sm text-emerald-700 dark:text-emerald-300 max-w-lg mx-auto">
                  Vous avez utilisé le vocabulaire professionnel adéquat et respecté les codes de communication du métier.
                </p>

                {/* Transition to next dialogue if available */}
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleRestartDialogue}
                    className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    Rejouer ce dialogue
                  </button>

                  {selectedScenarioIndex + 1 < domainScenarios.length ? (
                    <button
                      onClick={handleGoToNextDialogue}
                      className="px-5 py-2 text-xs md:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-all flex items-center gap-2"
                    >
                      <span>Passer au Dialogue {selectedScenarioIndex + 2} / 3</span>
                      <ArrowRight size={15} />
                    </button>
                  ) : (
                    <div className="w-full mt-3 p-3 bg-white dark:bg-slate-800 rounded-xl border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-center justify-center gap-2">
                      <Award size={18} className="text-amber-500" />
                      <span className="font-bold">Bravo ! Vous avez terminé les 3 dialogues de ce métier !</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ===================================================== */}
            {/* GRAPHICAL ROADMAP SEPARATION : 3 DIALOGUES OVERVIEW   */}
            {/* ===================================================== */}
            <div className="border-t border-slate-200 dark:border-slate-700/80 pt-6 mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <BookmarkCheck size={14} className="text-indigo-600" />
                  <span>Progression des 3 dialogues du métier ({currentScenario.domainTitle})</span>
                </h4>
                <span className="text-xs text-slate-500">
                  {domainScenarios.filter(s => stats.completedExercisesIds.includes(`scenario_${s.id}`)).length} / 3 validés
                </span>
              </div>

              {/* Graphical separated timeline cards */}
              <div className="space-y-3">
                {domainScenarios.map((scen, idx) => {
                  const isCurrent = idx === selectedScenarioIndex;
                  const isDone = stats.completedExercisesIds.includes(`scenario_${scen.id}`);

                  return (
                    <div key={scen.id} className="relative">
                      {/* Graphical connection divider between dialogues */}
                      {idx > 0 && (
                        <div className="flex items-center justify-center my-2">
                          <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700" />
                          <span className="px-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800">
                            Séparation Dialogue {idx} ➔ Dialogue {idx + 1}
                          </span>
                          <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700" />
                        </div>
                      )}

                      <div
                        onClick={() => handleSelectScenario(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleSelectScenario(idx);
                          }
                        }}
                        className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-indigo-50/50 dark:bg-indigo-950/30 border-indigo-400 ring-1 ring-indigo-300 dark:ring-indigo-700'
                            : 'bg-slate-50/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                            isDone
                              ? 'bg-emerald-600 text-white'
                              : isCurrent
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {isDone ? <CheckCircle2 size={16} /> : `D${idx + 1}`}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-900 dark:text-white">
                                {scen.title}
                              </span>
                              {isCurrent && (
                                <span className="text-[10px] bg-indigo-100 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-semibold">
                                  En cours
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {scen.description}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-2">
                          <ChevronRight size={16} className={isCurrent ? 'text-indigo-600' : 'text-slate-400'} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
