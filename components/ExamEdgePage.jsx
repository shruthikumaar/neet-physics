const ExamEdgePage = ({ onBack, onNavigate }) => {
    const [activeTab, setActiveTab] = useState('neet');
    const data = examEdgeData[activeTab];

    return (
        <div style={{paddingBottom: '4rem'}}>
            <div className="connectomics-header">
                <button className="back-btn" onClick={() => onBack('detail')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Dashboard
                </button>
                <div className="path-tabs">
                    <div className="path-tab connectomics-tab" onClick={() => onNavigate('connectomics')}><IconLink width={14} height={14}/> Connectomics</div>
                    <div className="path-tab intro-tab" onClick={() => onNavigate('intro')}><IconSun width={14} height={14}/> Intro</div>
                    <div className="path-tab terminology-tab" onClick={() => onNavigate('terminology')}><IconBookOpen width={14} height={14}/> Terminology</div>
                    <div className="path-tab skills-tab" onClick={() => onNavigate('skills')}><IconTarget width={14} height={14}/> Skills</div>
                    <div className="path-tab exam-tab active" onClick={() => onNavigate('exam')}><IconTrophy width={14} height={14}/> Exam Edge</div>
                </div>
            </div>

            <div className="exam-hero">
                <h1>Prepare for the <span>Edge</span></h1>
                <p>See how Mechanical Properties of Solids are tested across major competitive exams and clear your conceptual hurdles.</p>
            </div>

            <div className="exam-nav">
                <button className={`exam-nav-btn neet ${activeTab === 'neet' ? 'active' : ''}`} onClick={() => setActiveTab('neet')}>NEET</button>
                <button className={`exam-nav-btn jee ${activeTab === 'jee' ? 'active' : ''}`} onClick={() => setActiveTab('jee')}>JEE Main</button>
                <button className={`exam-nav-btn cet ${activeTab === 'cet' ? 'active' : ''}`} onClick={() => setActiveTab('cet')}>Karnataka CET</button>
                <button className={`exam-nav-btn boards ${activeTab === 'boards' ? 'active' : ''}`} onClick={() => setActiveTab('boards')}>PUC / Boards</button>
            </div>

            <div className={`exam-content exam-theme-${activeTab}`}>
                <div className="exam-strategy-card">
                    <h2 className="strategy-title">{data.title}</h2>
                    
                    <div className="exam-metrics-grid">
                        <div className="metric-box">
                            <div className="metric-label">WEIGHTAGE</div>
                            <div className="metric-value">{data.metrics.weightage}</div>
                        </div>
                        <div className="metric-box">
                            <div className="metric-label">MARKS</div>
                            <div className="metric-value green">{data.metrics.marks}</div>
                        </div>
                        <div className="metric-box">
                            <div className="metric-label">DIFFICULTY</div>
                            <div className="metric-value">{data.metrics.difficulty}</div>
                        </div>
                    </div>

                    <h3 className="section-subtitle">What to Focus On</h3>
                    <div className="exam-focus-box">
                        {data.focus}
                    </div>

                    <h3 className="section-subtitle">ðŸ“š Previous Year Questions (Trend)</h3>
                    {data.pyqs.map((pyq, i) => (
                        <div key={i} className="pyq-card">
                            <div className="pyq-year">{pyq.year}</div>
                            <div className="pyq-q">{pyq.q}</div>
                            <div className="pyq-solution-outline">
                                <div className="solution-label">SOLUTION OUTLINE</div>
                                <div className="solution-text">{pyq.solution}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="exam-section-center">
                    <h2 className="section-title">ðŸ“ Formula Sheet</h2>
                    <p className="section-desc">All key formulae from Mechanical Properties of Solids in one place.</p>
                    
                    <table className="formula-table">
                        <thead>
                            <tr>
                                <th>QUANTITY</th>
                                <th>FORMULA</th>
                                <th>UNIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.formulae.map((f, i) => (
                                <tr key={i}>
                                    <td>{f.quantity}</td>
                                    <td className="formula-cell">{f.formula}</td>
                                    <td>{f.unit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="exam-section-center">
                    <h2 className="section-title">âš¡ Quick Revision Module</h2>
                    <p className="section-desc">Everything you need for last-minute revision. One card = one topic.</p>
                    
                    <div className="revision-grid">
                        {data.revisionCards.map((card, i) => (
                            <div key={i} className="revision-card">
                                <h4>âš¡ {card.title}</h4>
                                <ul>
                                    {card.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="final-strategy-box">
                        <div className="final-label">âš¡ FINAL EXAM STRATEGY</div>
                        <p>{data.finalStrategy}</p>
                    </div>

                    <div style={{textAlign: 'center', marginTop: '3rem'}}>
                        <button className="btn-finish-topic" onClick={() => onBack('detail')}>Finish Topic âœ“</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

