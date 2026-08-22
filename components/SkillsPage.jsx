const SkillsPage = ({ onBack, onNavigate }) => {
    const [view, setView] = useState('list'); // 'list', 'learn', 'practice', 'practice-end', 'assess'
    const [activeSkillId, setActiveSkillId] = useState(null);
    const [learnIdx, setLearnIdx] = useState(0);
    const [qIdx, setQIdx] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    
    // Assessment State
    const [markedReview, setMarkedReview] = useState({});
    const [timeLeft, setTimeLeft] = useState(0); // Time elapsed in seconds
    const [openSolutions, setOpenSolutions] = useState({});

    // Timer effect
    React.useEffect(() => {
        let timer;
        if (view === 'assess') {
            timer = setInterval(() => setTimeLeft(prev => prev + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [view]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const activeSkill = skillsData.find(s => s.id === activeSkillId);

    const selectedOpt = answers[qIdx];
    const isAnswered = selectedOpt !== undefined;

    const startLearn = (id) => { setActiveSkillId(id); setLearnIdx(0); setView('learn'); };
    const startPractice = (id) => { 
        setActiveSkillId(id); setQIdx(0); setAnswers({}); setScore(0); setOpenSolutions({}); setView('practice'); 
    };
    const startAssess = (id) => {
        setActiveSkillId(id); setQIdx(0); setAnswers({}); setScore(0); setMarkedReview({}); setTimeLeft(0); setOpenSolutions({}); setView('assess');
    };

    const handleQuizOpt = (idx) => {
        if (view === 'practice' && isAnswered) return;
        setAnswers(prev => ({ ...prev, [qIdx]: idx }));
    };

    const calculateScore = () => {
        if (!activeSkill) return 0;
        let s = 0;
        activeSkill.practiceQuestions.forEach((q, i) => {
            if (answers[i] === q.answer) s++;
        });
        return s;
    };

    const nextQuizQ = () => {
        if (qIdx < activeSkill.practiceQuestions.length - 1) {
            setQIdx(qIdx + 1);
        } else {
            setView('practice-end');
        }
    };

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
                    <div className="path-tab terminology-tab" onClick={() => onNavigate('terminology')}><IconBookOpen width={14} height={14}/> Terminology</div>
                    <div className="path-tab skills-tab active" onClick={() => onNavigate('skills')}><IconTarget width={14} height={14}/> Skills</div>
                    <div className="path-tab exam-tab" onClick={() => onNavigate('exam')}><IconTrophy width={14} height={14}/> Exam Edge</div>
                    <div className="path-tab games-tab" onClick={() => onNavigate('games')}><IconAtom width={14} height={14}/> Games & Videos</div>
                </div>
            </div>

            {view === 'list' && (
                <div>
                    <div className="lexicon-header">
                        <h1>Core <span>Skills</span></h1>
                        <p>Choose a skill below. Read the lesson, practice to build confidence, and take the assessment to earn your mastery!</p>
                    </div>
                    <div className="skills-list-container">
                        {skillsData.map(skill => (
                            <div key={skill.id} className="skill-card">
                                <div className="skill-card-icon">{skill.icon}</div>
                                <div className="skill-card-content">
                                    <h3>{skill.title}</h3>
                                    <p>{skill.desc}</p>
                                </div>
                                <div className="skill-card-actions">
                                    <div className="skill-action-row">
                                        <button className="btn-skill" onClick={() => startLearn(skill.id)}><div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center'}}><IconBookOpen width={14} height={14}/> Learn</div></button>
                                        <button className="btn-skill" onClick={() => startPractice(skill.id)}><div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center'}}><IconTestTube width={14} height={14}/> Practice</div></button>
                                    </div>
                                    <button className={`btn-skill-assess ${skill.assessColor}`} onClick={() => startAssess(skill.id)}><div style={{display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center'}}><IconTrophy width={14} height={14}/> Assess</div></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {view === 'learn' && activeSkill && (
                <div>
                    <div className="learn-top-bar">
                        <button className="learn-back-btn" onClick={() => setView('list')}>← Back to Skills</button>
                    </div>
                    <div className="learn-layout">
                        <div className="learn-sidebar">
                            <div className="learn-sidebar-header">
                                <div style={{fontSize: '2rem', marginBottom: '0.25rem', color: '#cbd5e1'}}>{activeSkill.icon}</div>
                                {activeSkill.title}
                            </div>
                            <div className="learn-sidebar-container">
                                {activeSkill.learnSections.map((sec, idx) => (
                                    <div key={idx} className={`learn-nav-item ${learnIdx === idx ? 'active' : ''}`} onClick={() => setLearnIdx(idx)}>
                                        <span style={{marginRight: '0.5rem', opacity: 0.6, display: 'inline-flex', verticalAlign: 'middle'}}><IconBook width={14} height={14}/></span> {sec.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="learn-content">
                            <div className="learn-content-inner">
                                <div className="section-tag">TOPIC {learnIdx + 1}</div>
                                <h2>{activeSkill.learnSections[learnIdx].title}</h2>
                                <div className="learn-content-text">{activeSkill.learnSections[learnIdx].content}</div>
                                
                                {activeSkill.learnSections[learnIdx].table && (
                                    <table className="learn-table">
                                        <thead>
                                            <tr>{activeSkill.learnSections[learnIdx].table.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                                        </thead>
                                        <tbody>
                                            {activeSkill.learnSections[learnIdx].table.rows.map((row, i) => (
                                                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                                
                                {activeSkill.learnSections[learnIdx].formula && (
                                    <div className="learn-formula">
                                        {activeSkill.learnSections[learnIdx].formula}
                                    </div>
                                )}
                                
                                {activeSkill.learnSections[learnIdx].alert && (
                                    <div className="learn-alert">
                                        <div className="learn-alert-title" style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><IconZap width={16} height={16}/> {activeSkill.learnSections[learnIdx].alert.title}</div>
                                        <p>{activeSkill.learnSections[learnIdx].alert.content}</p>
                                    </div>
                                )}
                            </div>
                            <div className="learn-footer">
                                <button className="btn-learn-nav" onClick={() => learnIdx > 0 ? setLearnIdx(prev => prev - 1) : setView('list')}>
                                    ← Previous
                                </button>
                                <button className="btn-learn-next" onClick={() => learnIdx < activeSkill.learnSections.length - 1 ? setLearnIdx(prev => prev + 1) : setView('list')}>
                                    {learnIdx < activeSkill.learnSections.length - 1 ? 'Next Topic →' : 'Finish Lesson ✔'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {view === 'practice' && activeSkill && (
                <div>
                    <div className="quiz-container content-card">
                        <div className="learn-top-bar" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
                            <button className="learn-back-btn" onClick={() => setView('list')}>← Exit Practice</button>
                            <div style={{fontSize: '0.85rem', fontWeight: 700, color: '#3b82f6'}}>Practice {qIdx + 1}/{activeSkill.practiceQuestions.length}</div>
                        </div>
                        <div className="quiz-question">{activeSkill.practiceQuestions[qIdx].q}</div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem'}}>
                            {activeSkill.practiceQuestions[qIdx].options.map((opt, i) => {
                                let btnClass = "quiz-opt-btn ";
                                if (isAnswered) {
                                    if (i === activeSkill.practiceQuestions[qIdx].answer) btnClass += "correct";
                                    else if (i === selectedOpt) btnClass += "wrong";
                                }
                                return (
                                    <button key={i} className={btnClass} onClick={() => handleQuizOpt(i)} disabled={isAnswered}>
                                        <span style={{marginRight: '0.75rem', opacity: 0.5}}>{String.fromCharCode(65+i)}</span> {opt}
                                    </button>
                                );
                            })}
                        </div>
                        {isAnswered && (
                            <div className={`practice-feedback ${selectedOpt === activeSkill.practiceQuestions[qIdx].answer ? 'correct' : 'wrong'}`}>
                                <strong>{selectedOpt === activeSkill.practiceQuestions[qIdx].answer ? <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><IconCheck width={16} height={16}/> Correct!</span> : <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Not quite!</span>}</strong>
                                <p style={{margin: '0.5rem 0 0 0'}}>{activeSkill.practiceQuestions[qIdx].explanation}</p>
                            </div>
                        )}
                        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem'}}>
                            <button 
                                className="btn-outline" 
                                onClick={() => { if (qIdx > 0) setQIdx(qIdx - 1); }} 
                                disabled={qIdx === 0}
                                style={{ opacity: qIdx === 0 ? 0.5 : 1, cursor: qIdx === 0 ? 'not-allowed' : 'pointer', padding: '0.75rem 1.5rem' }}
                            >
                                ← Previous Question
                            </button>
                            <button 
                                className="quiz-next-btn" 
                                onClick={nextQuizQ} 
                                disabled={!isAnswered}
                                style={{ margin: 0, opacity: !isAnswered ? 0.5 : 1, cursor: !isAnswered ? 'not-allowed' : 'pointer' }}
                            >
                                {qIdx < activeSkill.practiceQuestions.length - 1 ? 'Next Question →' : 'Finish Practice →'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {view === 'practice-end' && activeSkill && (
                <div style={{padding: '2rem 0'}}>
                    <div className="report-card">
                        <div className="report-header">
                            <span className="report-icon" style={{display: 'inline-flex'}}><IconClipboard width={28} height={28}/></span>
                            <h2>Assessment Report</h2>
                        </div>
                        
                        <div className="report-stats">
                            <div className="stat-box">
                                <div className="stat-title">TOTAL SCORE</div>
                                <div className="stat-value"><span className="score-main">{calculateScore()}</span><span className="score-sub">/{activeSkill.practiceQuestions.length}</span></div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-title">ACCURACY</div>
                                <div className={`stat-value ${Math.round((calculateScore() / activeSkill.practiceQuestions.length) * 100) >= 80 ? 'green' : (Math.round((calculateScore() / activeSkill.practiceQuestions.length) * 100) >= 50 ? 'orange' : 'red')}`}>
                                    {Math.round((calculateScore() / activeSkill.practiceQuestions.length) * 100)}%
                                </div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-title">TIME TAKEN</div>
                                <div className="stat-value time" style={{display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'center'}}><IconRefreshCcw width={18} height={18}/> {formatTime(timeLeft)}</div>
                            </div>
                        </div>

                        <h3 className="breakdown-title">Question Breakdown</h3>
                        
                        <div className="breakdown-list">
                            {activeSkill.practiceQuestions.map((q, i) => {
                                const isCorrect = answers[i] === q.answer;
                                const isUnanswered = answers[i] === undefined;
                                const statusClass = isUnanswered ? 'skipped' : (isCorrect ? 'correct' : 'wrong');
                                const isSolOpen = openSolutions[i];
                                
                                return (
                                    <div key={i} className={`bk-card ${statusClass}`}>
                                        <div className="bk-top">
                                            <div className={`bk-qnum ${statusClass}`}>{i + 1}</div>
                                            <div className="bk-qtext">{q.q}</div>
                                            <div className={`bk-status ${statusClass}`}>
                                                {isUnanswered ? <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> Skipped</span> : (isCorrect ? <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><IconCheck width={14} height={14}/> Correct</span> : <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Wrong</span>)}
                                                <div className="bk-time" style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><IconRefreshCcw width={12} height={12}/> 5s</div>
                                            </div>
                                        </div>
                                        
                                        <div className="bk-options">
                                            {q.options.map((opt, optIdx) => {
                                                let optState = 'normal';
                                                if (optIdx === q.answer) optState = 'correct';
                                                else if (answers[i] === optIdx) optState = 'wrong';
                                                
                                                return (
                                                    <div key={optIdx} className={`bk-opt ${optState}`}>
                                                        <div className={`bk-opt-letter ${optState}`}>{String.fromCharCode(65+optIdx)}</div>
                                                        <div className="bk-opt-text">{opt}</div>
                                                        {optState === 'correct' && <div className="bk-opt-icon correct"><IconCheck width={14} height={14}/></div>}
                                                        {optState === 'wrong' && <div className="bk-opt-icon wrong"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        
                                        <div className="bk-footer">
                                            <div className="btn-check-solution" onClick={() => setOpenSolutions(prev => ({...prev, [i]: !prev[i]}))}>
                                                {isSolOpen ? '^ Hide Solution' : 'v Check Solution'}
                                            </div>
                                            {isSolOpen && (
                                                <div className="bk-solution-box">
                                                    <div className="sol-title" style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><IconZap width={16} height={16}/> Step-by-Step Logic</div>
                                                    <div className="sol-content">{q.explanation}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div style={{textAlign: 'center', marginTop: '2rem'}}>
                            <button className="btn-solid" style={{padding: '0.75rem 2rem', borderRadius: '9999px', background: '#2563eb', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer'}} onClick={() => setView('list')}>Back to Skills</button>
                        </div>
                    </div>
                </div>
            )}

            {view === 'assess' && activeSkill && (
                <div className="assess-layout">
                    <div className="assess-card">
                        <div className="assess-question-pill">QUESTION {qIdx + 1}</div>
                        <div className="assess-question">{activeSkill.practiceQuestions[qIdx].q}</div>
                        
                        <div className="assess-options">
                            {activeSkill.practiceQuestions[qIdx].options.map((opt, i) => (
                                <button 
                                    key={i} 
                                    className={`assess-opt-btn ${answers[qIdx] === i ? 'selected' : ''}`}
                                    onClick={() => handleQuizOpt(i)}
                                >
                                    <span className="opt-letter">{String.fromCharCode(65+i)}</span> 
                                    {opt}
                                </button>
                            ))}
                        </div>
                        
                        <div className="assess-bottom-bar">
                            <button 
                                className="btn-outline" 
                                onClick={() => { if (qIdx > 0) setQIdx(qIdx - 1); }} 
                                disabled={qIdx === 0}
                                style={{ opacity: qIdx === 0 ? 0.5 : 1, cursor: qIdx === 0 ? 'not-allowed' : 'pointer' }}
                            >
                                ← Previous
                            </button>
                            
                            <button 
                                className="btn-outline"
                                onClick={() => setMarkedReview(prev => ({...prev, [qIdx]: !prev[qIdx]}))}
                                style={{ borderColor: markedReview[qIdx] ? '#eab308' : '#e2e8f0', backgroundColor: markedReview[qIdx] ? '#fef08a' : 'white', color: markedReview[qIdx] ? '#854d0e' : '#64748b' }}
                            >
                                Mark for Review
                            </button>
                            
                            {qIdx < activeSkill.practiceQuestions.length - 1 ? (
                                <button className="quiz-next-btn" style={{margin:0}} onClick={() => setQIdx(qIdx + 1)}>
                                    Next →
                                </button>
                            ) : (
                                <button className="btn-submit-assess" style={{margin:0, width: 'auto'}} onClick={() => setView('practice-end')}>
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                    
                    <div>
                        <div className="assess-card" style={{padding: '1.5rem'}}>
                            <div className="assess-timer" style={{display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center'}}><IconRefreshCcw width={16} height={16}/> {formatTime(timeLeft)}</div>
                            <div className="palette-title">Question Palette</div>
                            <div className="palette-grid">
                                {activeSkill.practiceQuestions.map((_, i) => {
                                    let btnClass = "palette-btn";
                                    if (answers[i] !== undefined) btnClass += " answered";
                                    if (markedReview[i]) btnClass += " marked";
                                    const currentStyle = qIdx === i ? { outline: '2px solid #1e293b', outlineOffset: '2px' } : {};
                                    return (
                                        <button 
                                            key={i} 
                                            className={btnClass} 
                                            style={currentStyle}
                                            onClick={() => setQIdx(i)}
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                            
                            <div className="palette-legend">
                                <div className="legend-item"><div className="legend-box answered"></div> Answered</div>
                                <div className="legend-item"><div className="legend-box unanswered"></div> Not Answered</div>
                                <div className="legend-item"><div className="legend-box marked"></div> Marked for Review</div>
                            </div>
                            
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: '1.5rem'}}>
                                <button className="btn-submit-assess" onClick={() => setView('practice-end')}>
                                    Submit Assessment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

