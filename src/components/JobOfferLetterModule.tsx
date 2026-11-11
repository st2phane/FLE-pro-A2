import React, { useState } from 'react';
import { JobOffer, JobDomain, UserStats } from '../types/fle';
import { JOB_OFFERS_LIST } from '../data/jobOffersData';
import { AudioButton } from './AudioButton';
import { 
  Briefcase, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Copy, 
  Check, 
  Lightbulb, 
  Building2, 
  MapPin, 
  Clock, 
  Banknote,
  PenTool,
  Store,
  Utensils,
  HeartHandshake,
  HeartPulse,
  GraduationCap,
  HardHat
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { markExerciseCompleted } from '../utils/storage';

interface JobOfferLetterModuleProps {
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
}

export const JobOfferLetterModule: React.FC<JobOfferLetterModuleProps> = ({
  stats,
  onUpdateStats,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<JobDomain>('restauration');
  
  // Comprehension & synonym answers state: map of qId -> selectedIndex
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [copySuccess, setCopySuccess] = useState(false);

  // Motivation letter interactive customization
  const [applicantName, setApplicantName] = useState('Jean Dupont');
  const [applicantCity, setApplicantCity] = useState('Lyon');
  const [customLetterBody, setCustomLetterBody] = useState<string>('');

  const currentOffer = JOB_OFFERS_LIST.find((o) => o.domain === selectedDomain) || JOB_OFFERS_LIST[0];

  // Initialize or update default letter when offer changes
  React.useEffect(() => {
    const fullTemplate = `${applicantName}\n${applicantCity}\nTél : 06 12 34 56 78\nCourriel : candidat.fle@exemple.fr\n\n${currentOffer.companyName}\n${currentOffer.location}\n\nObjet : ${currentOffer.letterTemplate.subject}\n\n${currentOffer.letterTemplate.intro}\n\n${currentOffer.letterTemplate.missionsHook}\n\n${currentOffer.letterTemplate.competencesHook}\n\n${currentOffer.letterTemplate.politeClosing}\n\n${applicantName}`;
    setCustomLetterBody(fullTemplate);
    setAnswers({});
  }, [currentOffer.id]);

  const domainIcons: Record<string, React.ReactNode> = {
    restauration: <Utensils size={17} className="text-amber-500" />,
    service_personne: <HeartHandshake size={17} className="text-rose-500" />,
    libre_service: <Store size={17} className="text-emerald-500" />,
    sante: <HeartPulse size={17} className="text-red-500" />,
    periscolaire: <GraduationCap size={17} className="text-teal-500" />,
    btp: <HardHat size={17} className="text-orange-500" />,
    secretariat: <Building2 size={17} className="text-blue-500" />,
  };

  const handleSelectAnswer = (qId: string, optionIdx: number, correctIdx: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    if (optionIdx === correctIdx) {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.6 },
      });
      const updated = markExerciseCompleted(`job_${qId}`, 15);
      onUpdateStats(updated);
    }
  };

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(customLetterBody);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  const handleResetLetter = () => {
    const fullTemplate = `${applicantName}\n${applicantCity}\nTél : 06 12 34 56 78\nCourriel : candidat.fle@exemple.fr\n\n${currentOffer.companyName}\n${currentOffer.location}\n\nObjet : ${currentOffer.letterTemplate.subject}\n\n${currentOffer.letterTemplate.intro}\n\n${currentOffer.letterTemplate.missionsHook}\n\n${currentOffer.letterTemplate.competencesHook}\n\n${currentOffer.letterTemplate.politeClosing}\n\n${applicantName}`;
    setCustomLetterBody(fullTemplate);
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Répondre à une Offre d’Emploi A2
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl">
          Découvrez des offres d’emploi types pour chaque métier, travaillez le vocabulaire des annonces
          avec la recherche de synonymes et rédigez votre lettre de motivation professionnelle.
        </p>

        {/* Trade Selector */}
        <div className="mt-6 flex flex-wrap gap-2">
          {JOB_OFFERS_LIST.map((offer) => {
            const isSelected = offer.domain === selectedDomain;
            return (
              <button
                key={offer.domain}
                onClick={() => setSelectedDomain(offer.domain)}
                className={`flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {domainIcons[offer.domain] || <Briefcase size={16} />}
                <span>{offer.domainTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: THE AUTHENTIC JOB OFFER POSTING */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Header of Job Offer */}
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
                  Offre d’emploi · {currentOffer.contractType}
                </span>
                <AudioButton text={`${currentOffer.jobTitle}. ${currentOffer.companyName}`} size="sm" label="Écouter le titre" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {currentOffer.jobTitle}
              </h2>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-slate-200">
                  <Building2 size={14} className="text-slate-400" />
                  <span>{currentOffer.companyName}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-slate-400" />
                  <span>{currentOffer.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-slate-400" />
                  <span>{currentOffer.workingHours}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Banknote size={14} className="text-slate-400" />
                  <span>{currentOffer.salary}</span>
                </span>
              </div>
            </div>

            {/* Missions List */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Briefcase size={15} className="text-indigo-600" />
                <span>Missions principales du poste</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {currentOffer.missions.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile requirements */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Lightbulb size={15} className="text-amber-500" />
                <span>Profil recherché & Compétences</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {currentOffer.requiredProfile.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COMPREHENSION & SYNONYMES DE L'OFFRE D'EMPLOI */}
          {/* ========================================================= */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <HelpCircle size={16} />
                <span>Compréhension de l’annonce & Synonymes métiers</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Testez votre compréhension de l’offre (+15 XP)
              </h3>
            </div>

            {/* Synonym questions */}
            <div className="space-y-5">
              {currentOffer.synonymQuestions.map((q) => {
                const userAns = answers[q.id];
                const isAnswered = userAns !== undefined;

                return (
                  <div key={q.id} className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase">
                        Synonyme du mot : « {q.termInOffer} »
                      </span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {q.question}
                      </p>
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
                            onClick={() => handleSelectAnswer(q.id, oIdx, q.correctIndex)}
                            className={`w-full p-2.5 text-xs md:text-sm font-medium rounded-lg border text-left transition-all ${btnStyle}`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {isAnswered && isCorrect && <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />}
                              {isAnswered && isSelected && !isCorrect && <XCircle size={15} className="text-red-600 shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                        <strong>Explication :</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Comprehension question */}
              {currentOffer.comprehensionQuestions.map((q) => {
                const userAns = answers[q.id];
                const isAnswered = userAns !== undefined;

                return (
                  <div key={q.id} className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                        Question de compréhension écrite
                      </span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {q.question}
                      </p>
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
                            onClick={() => handleSelectAnswer(q.id, oIdx, q.correctIndex)}
                            className={`w-full p-2.5 text-xs md:text-sm font-medium rounded-lg border text-left transition-all ${btnStyle}`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{opt}</span>
                              {isAnswered && isCorrect && <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />}
                              {isAnswered && isSelected && !isCorrect && <XCircle size={15} className="text-red-600 shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                        <strong>Explication :</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: LETTRE DE MOTIVATION WRITING WORKSHOP */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <PenTool size={16} />
                <span>Atelier d’écriture A2</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Rédiger ma Lettre de Motivation
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personnalisez le modèle professionnel adapté à cette annonce d’emploi.
              </p>
            </div>

            {/* Advice Callout */}
            <div className="p-4 bg-amber-50 dark:bg-amber-950/25 border border-amber-200/80 dark:border-amber-900/40 rounded-xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                <Lightbulb size={14} />
                <span>Conseils clés pour une lettre de motivation en France (A2) :</span>
              </span>
              <ul className="text-xs text-amber-900 dark:text-amber-200 space-y-1 pl-4 list-disc">
                <li><strong>Structure en 3 temps :</strong> 1. Vous (l'entreprise et le poste) → 2. Moi (mon profil et mes compétences) → 3. Nous (notre collaboration future).</li>
                <li><strong>Politesse formelle :</strong> Utilisez toujours « Madame, Monsieur » et vouvoyez.</li>
                <li><strong>Simplicité et clarté :</strong> Privilégiez des phrases courtes (Sujet + Verbe + Complément).</li>
                {currentOffer.letterAdvice.map((adv, i) => (
                  <li key={i}>{adv}</li>
                ))}
              </ul>
            </div>

            {/* Personalization Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Votre Prénom et Nom :
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                  Votre Ville de résidence :
                </label>
                <input
                  type="text"
                  value={applicantCity}
                  onChange={(e) => setApplicantCity(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Editable Letter Textarea */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Votre texte prêt à envoyer :
                </label>
                <button
                  type="button"
                  onClick={handleResetLetter}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Réinitialiser le modèle
                </button>
              </div>

              <textarea
                rows={14}
                value={customLetterBody}
                onChange={(e) => setCustomLetterBody(e.target.value)}
                className="w-full p-4 text-xs md:text-sm font-sans bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl leading-relaxed text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Copy button & Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyLetter}
                className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                {copySuccess ? (
                  <>
                    <Check size={16} />
                    <span>Lettre copiée dans le presse-papiers !</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copier ma lettre de motivation</span>
                  </>
                )}
              </button>

              <AudioButton
                text={customLetterBody.slice(0, 300)}
                size="md"
                label="Écouter le début"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
