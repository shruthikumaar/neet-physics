const TerminologyPage = ({ onBack, onNext, onNavigate }) => {
    const [tab, setTab] = useState('terms');
    const [selTerm, setSelTerm] = useState('t1');
    const [selLaw, setSelLaw] = useState('l1');
    
    const [qIdx, setQIdx] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const selectedOpt = answers[qIdx];
    const isAnswered = selectedOpt !== undefined;

    const handleQuizOptionClick = (idx) => {
        if (isAnswered) return;
        setAnswers(prev => ({ ...prev, [qIdx]: idx }));
        if (idx === quizData[qIdx].answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        if (qIdx < quizData.length - 1) {
            setQIdx(qIdx + 1);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setQIdx(0);
        setAnswers({});
        setScore(0);
        setIsFinished(false);
    };

    const currentQuiz = quizData[qIdx];
    const activeItem = tab === 'terms' ? termsData.find(t => t.id === selTerm) : lawsData.find(l => l.id === selLaw);

    return (
        <div>
            <div className="connectomics-header">
                <button className="back-btn" onClick={() => onBack('detail')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Dashboard
                </button>
                <div className="path-tabs">
                    <div className="path-tab connectomics-tab" onClick={() => onNavigate('connectomics')}><IconLink width={14} height={14}/> Connectomics</div>
                    <div className="path-tab intro-tab" onClick={() => onNavigate('intro')}><IconSun width={14} height={14}/> Intro</div>
                    <div className="path-tab terminology-tab active" onClick={() => onNavigate('terminology')}><IconBookOpen width={14} height={14}/> Terminology</div>
                    <div className="path-tab skills-tab" onClick={() => onNavigate('skills')}><IconTarget width={14} height={14}/> Skills</div>
                    <div className="path-tab exam-tab" onClick={() => onNavigate('exam')}><IconTrophy width={14} height={14}/> Exam Edge</div>
                </div>
            </div>

            <div className="lexicon-header">
                <h1>Physics <span>Lexicon</span></h1>
                <p>Test your vocabulary and laws knowledge!</p>
            </div>

            <div className="pill-nav">
                <button className={`pill-btn ${tab === 'terms' ? 'active' : ''}`} onClick={() => setTab('terms')}>
                    ðŸ·ï¸ Key Terms
                </button>
                <button className={`pill-btn ${tab === 'laws' ? 'active' : ''}`} onClick={() => setTab('laws')}>
                    âš–ï¸ Elastic Laws
                </button>
                <button className={`pill-btn ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}>
                    âœï¸ Quiz Time
                </button>
            </div>

            {tab !== 'quiz' && (
                <div className={`lexicon-layout ${tab === 'laws' ? `theme-${activeItem.id}` : ''}`}>
                    <div className="sidebar-list">
                        {(tab === 'terms' ? termsData : lawsData).map(item => (
                            <div 
                                key={item.id} 
                                className={`sidebar-item ${(tab === 'terms' ? selTerm : selLaw) === item.id ? 'active' : ''}`}
                                onClick={() => tab === 'terms' ? setSelTerm(item.id) : setSelLaw(item.id)}
                            >
                                <div className="sidebar-icon">{item.icon}</div>
                                {item.label ? (
                                    <div style={{display: 'flex', flexDirection: 'column', gap: '0.1rem'}}>
                                        <span style={{fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8}}>{item.label}</span>
                                        <span>{item.title}</span>
                                    </div>
                                ) : (
                                    <span>{item.title}</span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="content-card">
                        <div className="content-card-header">
                            <div className="content-card-icon">{activeItem.icon}</div>
                            <h2>{activeItem.title}</h2>
                        </div>
                        <div className={`content-definition ${tab === 'laws' ? 'content-definition-laws' : ''}`}>
                            {activeItem.definition}
                        </div>
                        <div className="content-split">
                            <div className="split-col">
                                <h4>EXAMPLES</h4>
                                {activeItem.examples.map((ex, i) => (
                                    <div key={i} className="example-box">{ex}</div>
                                ))}
                            </div>
                            <div className={`split-col ${tab === 'laws' ? 'theme-green' : ''}`}>
                                <h4>{tab === 'terms' ? 'QUICK MEMORY' : 'STUDENT TIP'}</h4>
                                <div className={`hint-box ${tab === 'laws' ? 'hint-green' : ''}`}>
                                    <strong>ðŸ’¡ {tab === 'terms' ? 'Pro-Hint:' : 'Formula:'}</strong>
                                    {activeItem.hint}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === 'quiz' && !isFinished && (
                <div className="quiz-container content-card" style={{maxWidth: '700px', margin: '0 auto 4rem'}}>
                    <div className="quiz-header-top">
                        <div>
                            <div className="q-num">QUESTION {qIdx + 1} OF {quizData.length}</div>
                            <div className="q-mode">Quiz Mode</div>
                        </div>
                        <div className="quiz-progress-circle">
                            {score}
                        </div>
                    </div>
                    
                    <div className="quiz-question">{currentQuiz.q}</div>
                    
                    <div className="quiz-options-grid">
                        {currentQuiz.options.map((opt, i) => {
                            let btnClass = "quiz-opt-btn ";
                            if (isAnswered) {
                                if (i === currentQuiz.answer) btnClass += "correct";
                                else if (i === selectedOpt) btnClass += "wrong";
                            }
                            return (
                                <button 
                                    key={i} 
                                    className={btnClass}
                                    onClick={() => handleQuizOptionClick(i)}
                                    disabled={isAnswered}
                                >
                                    {opt}
                                </button>
                            );
                        })}
                    </div>

                    {isAnswered && (
                        <div className="quiz-explanation">
                            <strong>Explanation:</strong> {currentQuiz.explanation}
                        </div>
                    )}

                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem'}}>
                        <button 
                            className="btn-outline" 
                            onClick={() => { if (qIdx > 0) setQIdx(qIdx - 1); }} 
                            disabled={qIdx === 0}
                            style={{ opacity: qIdx === 0 ? 0.5 : 1, cursor: qIdx === 0 ? 'not-allowed' : 'pointer', padding: '0.75rem 1.5rem' }}
                        >
                            â† Previous Question
                        </button>
                        <button 
                            className="quiz-next-btn" 
                            onClick={handleNextQuestion} 
                            disabled={!isAnswered}
                            style={{ margin: 0, opacity: !isAnswered ? 0.5 : 1, cursor: !isAnswered ? 'not-allowed' : 'pointer' }}
                        >
                            {qIdx < quizData.length - 1 ? 'Next Question â†’' : 'Finish Quiz â†’'}
                        </button>
                    </div>
                </div>
            )}

            {tab === 'quiz' && isFinished && (
                <div className="quiz-container content-card" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center', padding: '4rem 2rem'}}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>ðŸ’ª</div>
                    <h2 style={{fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Great effort!</h2>
                    <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>You scored <strong>{score} / {quizData.length}</strong></p>
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <button className="btn-outline" onClick={resetQuiz} style={{padding: '0.75rem 1.5rem', borderRadius: '9999px', border: '1px solid #3b82f6', color: '#3b82f6', background: 'transparent', fontWeight: 700, cursor: 'pointer'}}>Try Again</button>
                        <button className="btn-solid" onClick={onNext} style={{padding: '0.75rem 1.5rem', borderRadius: '9999px', border: 'none', color: 'white', background: '#2563eb', fontWeight: 700, cursor: 'pointer'}}>Practical Skills â†’</button>
                    </div>
                </div>
            )}

            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                <button className="btn-outline" onClick={onNext} style={{background: 'white'}}>Next Topic: Skills <IconArrowRight/></button>
            </div>
        </div>
    );
};

