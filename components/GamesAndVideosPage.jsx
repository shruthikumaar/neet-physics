const GamesAndVideosPage = ({ onBack, onNavigate }) => {
    const [activeTab, setActiveTab] = React.useState('flashcards'); // 'flashcards', 'videos', 'games'
    
    const flashcards = [
        { q: "A steel wire is stretched by 1kg weight. If the radius is doubled, what is the new Young's modulus?", a: "It remains the same. Young's modulus is a material property and doesn't depend on dimensions.", color: "blue" },
        { q: "Two wires of same material have lengths 1 to 2 and radii 1 to 2. If stretched by equal forces, what is the ratio of their extensions?", a: "ΔL is proportional to L/r². Ratio = (1/1²) / (2/2²) = 1 / (1/2) = 2 to 1.", color: "purple" },
        { q: "What is the elastic potential energy stored per unit volume of a stretched wire?", a: "U/V = 1/2 × Stress × Strain.", color: "green" },
        { q: "A wire can sustain 20 kg before breaking. If cut into two equal parts, what weight can each part sustain?", a: "20 kg. Breaking force depends on the cross-sectional area and material, not on the length.", color: "orange" },
        { q: "A liquid has a bulk modulus K. If compressed by applying a pressure P, what is the fractional decrease in its volume?", a: "ΔV/V = P/K.", color: "red" },
        { q: "Why are the girders supporting heavy bridges usually shaped as an I-section?", a: "To increase the depression threshold and bending moment for a given load while minimizing weight.", color: "pink" },
        { q: "What generally happens to the elasticity of a metal wire if it is heated?", a: "Elasticity decreases with an increase in temperature, meaning the restoring force becomes weaker.", color: "teal" },
        { q: "A uniform wire is pulled by a constant force F. What is the work done in stretching the wire by length l?", a: "Work Done = 1/2 × F × l.", color: "blue" },
        { q: "Is the restoring force conservative or non-conservative during perfectly elastic deformation?", a: "Conservative, as the work done in deforming the body is fully stored as elastic potential energy.", color: "purple" },
        { q: "What is the theoretical limit of Poisson's ratio for isotropic materials?", a: "-1 to 0.5. (For most practical materials, it is between 0 and 0.5).", color: "green" },
        { q: "Two wires of same material have lengths 1 to 2 and diameters 2 to 1. For equal load, ratio of strain is?", a: "Strain is proportional to 1/r². Since diameters are 2 to 1, radii are 2 to 1. Strain ratio = (1/2²) / (1/1²) = 1 to 4.", color: "orange" },
        { q: "How does the breaking stress of a wire change if its radius is halved?", a: "Breaking stress remains unchanged (it's a material property). Breaking FORCE would become 1/4th.", color: "red" },
        { q: "Compressibility of water is 4×10⁻⁵ /atm. What pressure is required to decrease its volume by 1%?", a: "Compressibility C = (ΔV/V) / P. P = (0.01) / (4×10⁻⁵) = 250 atm.", color: "pink" },
        { q: "Which is more elastic: steel or rubber, and mathematically why?", a: "Steel. For a given stress, the strain produced in steel is much less than in rubber, so its Young's Modulus is higher.", color: "teal" },
        { q: "What does the area under a stress-strain curve up to the elastic limit represent?", a: "The area represents the elastic potential energy stored per unit volume (strain energy density).", color: "blue" },
    ];

    const videos = [
        { 
            title: "🚀 Elasticity in Real Life (NEET prep)", 
            desc: "Watch how elasticity concepts are tested in NEET.",
            embedCode: `<!-- Elasticity in Real Life - Same frame as Hooke's Law -->
<iframe src="/elasticity-real-life.html" width="100%" height="520" style="border:0; border-radius:18px; overflow:hidden; max-width:720px; display:block; margin:0 auto; background:#fff;" allow="autoplay" loading="lazy" title="Elasticity in Real Life - 15s Explainer"></iframe>`
        },
        { 
            title: "🧬 Hooke's Law Experiment", 
            desc: "A fun demonstration of Hooke's Law with previous NEET examples.",
            embedCode: `<iframe src="/hooke-law.html" width="100%" height="520" style="border:0; border-radius:16px; overflow:hidden; max-width:720px; display:block; margin:0 auto;" allow="autoplay; clipboard-write" loading="lazy" title="Hooke's Law 15s Explainer"></iframe>`
        }
    ];

    const [flippedCards, setFlippedCards] = React.useState({});
    const [activeVideo, setActiveVideo] = React.useState(null);

    React.useEffect(() => {
        setFlippedCards({});
    }, [activeTab]);

    const toggleCard = (index) => {
        setFlippedCards(prev => ({...prev, [index]: !prev[index]}));
    };

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
                    <div className="path-tab exam-tab" onClick={() => onNavigate('exam')}><IconTrophy width={14} height={14}/> Exam Edge</div>
                    <div className="path-tab active" onClick={() => onNavigate('games')}><IconAtom width={14} height={14}/> Videos & Flashcards</div>
                </div>
            </div>

            <div className="exam-hero">
                <h1>Videos & <span>Flashcards</span></h1>
                <p>Curated videos and quick-fire flashcards tailored for your exam preparation.</p>
            </div>

            <div className="exam-nav">
                <button className={`exam-nav-btn ${activeTab === 'flashcards' ? 'active' : ''}`} onClick={() => setActiveTab('flashcards')}>Flashcards 🗂️</button>
                <button className={`exam-nav-btn ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => setActiveTab('videos')}>Videos 🎬</button>
            </div>

            <div className="exam-content exam-theme-neet">
                
                {activeTab === 'flashcards' && (
                    <div className="exam-strategy-card" style={{backgroundColor: '#f8fafc', borderColor: '#e2e8f0', padding: '3.5rem'}}>
                        <h2 className="strategy-title" style={{borderLeftColor: '#64748b'}}>Flashcards 🗂️</h2>
                        <div className="flashcards-grid" style={{gap: '2.5rem'}}>
                            {flashcards.map((card, index) => (
                                <div 
                                    key={'flashcard-' + index} 
                                    className={`flashcard-container ${flippedCards[index] ? 'flipped' : ''}`}
                                    onClick={() => toggleCard(index)}
                                >
                                    <div className={`flashcard ${card.color}`}>
                                        <div className="flashcard-front" style={{boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}}>
                                            <div className="card-number">#{index + 1}</div>
                                            <h3>{card.q}</h3>
                                            <p className="click-hint">Click to flip 🔄</p>
                                        </div>
                                        <div className="flashcard-back" style={{boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}}>
                                            <h3>Answer:</h3>
                                            <p>{card.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'videos' && (
                    <div className="exam-strategy-card" style={{backgroundColor: '#eff6ff', borderColor: '#bfdbfe', padding: '3.5rem'}}>
                        <h2 className="strategy-title" style={{borderLeftColor: '#3b82f6', color: '#1e3a8a'}}>Recommended Videos 🎬</h2>
                        <div className="video-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem'}}>
                            {videos.map((vid, idx) => (
                                <div key={idx} className="video-card" style={{backgroundColor: 'white', padding: '2.5rem', borderRadius: '16px', border: '2px solid #bfdbfe', boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.1)'}}>
                                    <h3 style={{color: '#2563eb', marginBottom: '15px'}}>{vid.title}</h3>
                                    <p style={{color: '#475569', fontSize: '0.95rem', lineHeight: 1.6}}>{vid.desc}</p>
                                    <button 
                                        className="btn-finish-topic" 
                                        style={{marginTop: '20px', padding: '0.75rem 2rem', fontSize: '0.9rem', backgroundColor: '#3b82f6'}}
                                        onClick={() => setActiveVideo(vid)}
                                    >
                                        Watch Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {activeVideo && (
                    <div 
                        style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
                            backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setActiveVideo(null)}
                    >
                        <div 
                            style={{
                                width: '100%', maxWidth: '800px', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden',
                                position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                            onClick={e => e.stopPropagation()} // Prevent clicking inside the modal from closing it
                        >
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#1e293b', color: 'white'}}>
                                <h3 style={{margin: 0, fontSize: '1.1rem'}}>{activeVideo.title}</h3>
                                <button 
                                    onClick={() => setActiveVideo(null)}
                                    style={{background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.5rem', cursor: 'pointer'}}
                                >
                                    ✖
                                </button>
                            </div>
                            
                            <div style={{padding: '0', width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#000', minHeight: '300px', alignItems: 'center'}}>
                                {activeVideo.embedCode ? (
                                    <div 
                                        style={{width: '100%', display: 'flex', justifyContent: 'center'}}
                                        dangerouslySetInnerHTML={{__html: activeVideo.embedCode}} 
                                    />
                                ) : (
                                    <p style={{color: '#94a3b8', textAlign: 'center', padding: '3rem'}}>
                                        No video embed code provided yet. <br/>
                                        Edit <code style={{color: '#38bdf8'}}>GamesAndVideosPage.jsx</code> and add an <code style={{color: '#38bdf8'}}>embedCode</code> property to this video in the <code style={{color: '#38bdf8'}}>videos</code> array!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};
