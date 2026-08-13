const { useState } = React;

// --- Icons ---
const IconBook = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const IconCube = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const IconDroplets = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.8 3.9-4A3.99 3.99 0 0 0 7 8.3a3.99 3.99 0 0 0-3.9 4c-.1 2.2 1.7 4 3.9 4z"></path><path d="M17 21.3c2.2 0 4-1.8 3.9-4a3.99 3.99 0 0 0-3.9-4 3.99 3.99 0 0 0-3.9 4c-.1 2.2 1.7 4 3.9 4z"></path><path d="M12 9.3c2.2 0 4-1.8 3.9-4a3.99 3.99 0 0 0-3.9-4 3.99 3.99 0 0 0-3.9 4c-.1 2.2 1.7 4 3.9 4z"></path></svg>;
const IconThermometer = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>;
const IconChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
const IconLink = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
const IconSun = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
const IconBookOpen = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const IconTarget = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const IconTrophy = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>;
const IconCheck = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const IconClipboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>;
const IconShare2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>;
const IconArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const IconZap = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const IconGlobe = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const IconRefreshCcw = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>;
const IconAtom = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const IconRuler = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3l-10-10a2 2 0 0 0-2.8 0l-4.2 4.2a2 2 0 0 0 0 2.8l10 10a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8z"></path><path d="M14.5 14.5l-4-4"></path><path d="M12.5 16.5l-4-4"></path><path d="M10.5 18.5l-4-4"></path></svg>;
const IconZapLarge = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;

const IconTestTube = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>;
const IconDna = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.576 3.535-3.23 5.234-4.878"/><path d="M2 9c6.667 6 13.333 0 20 6"/><path d="M15 2c-1.798 1.576-3.535 3.23-5.234 4.878"/><path d="m17 18 2.5-2.5"/><path d="m13.5 14.5 2.5-2.5"/><path d="m10 10 2.5-2.5"/><path d="m6.5 6.5 2.5-2.5"/></svg>;

// --- Components ---
const Navbar = ({ onHomeClick }) => (
    <nav className="navbar">
        <div className="nav-brand" onClick={onHomeClick}>
            <img src="./logo.png" alt="Learners Logo" style={{width: 36, height: 36, objectFit: 'contain', borderRadius: '50%'}} />
            <span>skill100.ai</span>
        </div>
        <div className="nav-links">
            <a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a>
            <a href="#">Skill Discovery</a>
            <a href="#">IDY 2026</a>
            <a href="#">WYSD 2026</a>
            <a href="#">WYSD Maths</a>
            <a href="#">NEET</a>
            <a href="#">Rapid Math</a>
        </div>
        <button className="logout-btn">Logout</button>
    </nav>
);

const ChapterCard = ({ title, description, questions, icon, styleClass, onClick, disabled }) => (
    <div className={`card ${styleClass}`} onClick={disabled ? undefined : onClick} style={{ cursor: disabled ? 'default' : 'pointer' }}>
        <div className="card-icon-wrapper">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
            <span>{questions} Questions</span>
            {!disabled && <span className="start-text">Start <IconChevronRight /></span>}
        </div>
    </div>
);

const PathItem = ({ category, title, description, borderColor, iconColor, icon, onClick }) => (
    <div className="path-item" style={{ borderLeftColor: borderColor }} onClick={onClick}>
        <div className="path-icon" style={{ color: iconColor }}>{icon}</div>
        <div className="path-content">
            <h4>{category}</h4>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

// --- Pages ---
const SubjectSelectionPage = ({ onSubjectClick }) => {
    const subjects = [
        {
            id: 'math',
            title: "Mathematics",
            description: "Algebra, Trigonometry, Calculus & more",
            icon: <IconRuler />,
            styleClass: "card-purple"
        },
        {
            id: 'physics',
            title: "Physics",
            description: "Mechanics, Waves, Thermodynamics & more",
            icon: <IconAtom />,
            styleClass: "card-pink"
        },
        {
            id: 'chemistry',
            title: "Chemistry",
            description: "Organic, Inorganic & Physical Chemistry",
            icon: <IconTestTube />,
            styleClass: "card-cyan"
        },
        {
            id: 'biology',
            title: "Biology",
            description: "Botany, Zoology, Human Physiology & more",
            icon: <IconDna />,
            styleClass: "card-green"
        }
    ];

    return (
        <main className="main-content">
            <div className="breadcrumb">
                <a href="#">Home</a> &gt; <span style={{color: '#0ea5e9', fontWeight: '500'}}>Grade 11</span>
            </div>
            
            <div className="header-section">
                <div className="tag" style={{background: '#e0e7ff', color: '#4338ca'}}>GRADE 11</div>
                <div className="title-container">
                    <h1 className="page-title">Choose Your Subject</h1>
                </div>
                <p className="page-subtitle">Select a subject to explore chapters, practice skills and take tests.</p>
            </div>

            <div className="cards-grid">
                {subjects.map((sub) => (
                    <div className={`card ${sub.styleClass}`} key={sub.id} onClick={() => onSubjectClick(sub.id)} style={{ cursor: 'pointer', height: '260px', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div className="card-icon-wrapper" style={{ marginBottom: '1.5rem' }}>{sub.icon}</div>
                        <h3 className="card-title" style={{ fontSize: '1.6rem' }}>{sub.title}</h3>
                        <p className="card-desc" style={{ fontSize: '0.95rem', opacity: 0.9 }}>{sub.description}</p>
                        <div className="card-footer" style={{ marginTop: 'auto', justifyContent: 'flex-end', borderTop: 'none', padding: 0 }}>
                            <span className="start-text" style={{ fontSize: '1rem', fontWeight: 600 }}>Explore <IconChevronRight /></span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

const HomePage = ({ onChapterClick, onGradeClick }) => {
    const chapters = [
        {
            id: 'laws_of_motion',
            title: "Laws of Motion",
            description: "Newton's laws, momentum, friction, equilibrium of concurrent forces, and circular motion.",
            questions: 35,
            icon: <IconAtom />,
            styleClass: "card-solid"
        },
        {
            id: 'kinematics',
            title: "Motion in a Straight Line",
            description: "Kinematics: distance, displacement, velocity, acceleration, equations of motion, and motion graphs.",
            questions: 30,
            icon: <IconRuler />,
            styleClass: "card-fluid"
        },
        {
            id: 'work_energy',
            title: "Work, Energy and Power",
            description: "Work-energy theorem, conservative forces, potential energy, mechanical energy conservation, and collisions.",
            questions: 80,
            icon: <IconZapLarge />,
            styleClass: "card-thermal"
        },
        {
            id: 'solids',
            title: "Mechanical Properties of Solids",
            description: "Elasticity, plasticity, Hooke's law, Young's modulus, shear modulus, bulk modulus, and the stress-strain curve.",
            questions: 45,
            icon: <IconCube />,
            styleClass: "card-cyan"
        }
    ];

    return (
        <main className="main-content">
            <div className="breadcrumb">
                <a href="#">Home</a> &gt; <a href="#" onClick={(e) => { e.preventDefault(); onGradeClick(); }}>Grade 11</a> &gt; <span style={{color: '#0ea5e9', fontWeight: '500'}}>Physics</span>
            </div>
            
            <div className="header-section">
                <div className="tag">GRADE 11 • PHYSICS</div>
                <div className="title-container">
                    <div className="title-icon-container"><IconBook /></div>
                    <h1 className="page-title">Physics Chapters</h1>
                </div>
                <p className="page-subtitle">Select a chapter to start practising.</p>
            </div>

            <div className="cards-grid">
                {chapters.map((chapter) => (
                    <ChapterCard 
                        key={chapter.id}
                        {...chapter}
                        disabled={chapter.id !== 'solids'}
                        onClick={() => onChapterClick(chapter.id)}
                    />
                ))}
            </div>
        </main>
    );
};

const ChapterDetailPage = ({ onPathClick, onBack }) => (
    <div className="detail-container">
        <div className="detail-left">
            <div className="tag-outline" onClick={onBack} style={{cursor: 'pointer'}}>← Grade 11 Physics</div>
            <h1>Master <br/><span>Mechanical Properties of Solids</span></h1>
            <p>Unlock the foundations of solid mechanics. From why bridges don't collapse to how springs work, master everything you need to know about elasticity, Hooke's Law, and material strength.</p>
            
            <div className="stats-grid">
                <div className="stat-box">
                    <div className="stat-value">6</div>
                    <div className="stat-label">Core Topics</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">45+</div>
                    <div className="stat-label">Practice Problems</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">8</div>
                    <div className="stat-label">Chapter Links</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">0%</div>
                    <div className="stat-label">Mastery</div>
                </div>
            </div>
        </div>
        <div className="detail-right">
            <div className="path-heading">Choose Your Path</div>
            
            <PathItem 
                category="Before You Begin"
                title="Connectomics"
                description="Verify your prerequisites and see how elasticity connects to other branches of physics."
                borderColor="#f59e0b" iconColor="#f59e0b" icon={<IconLink />}
                onClick={() => onPathClick('connectomics')}
            />
            <PathItem 
                category="Start Here"
                title="Introduction"
                description="Explore the big questions and prerequisites to begin your journey into solid mechanics."
                borderColor="#eab308" iconColor="#eab308" icon={<IconSun />}
                onClick={() => onPathClick('intro')}
            />
            <PathItem 
                category="The Language"
                title="Terminology"
                description="Master the key terms and fundamental principles like Stress, Strain, and Elastic Moduli."
                borderColor="#0ea5e9" iconColor="#0ea5e9" icon={<IconBookOpen />}
                onClick={() => onPathClick('terminology')}
            />
            <PathItem 
                category="Core Practice"
                title="Skills"
                description="Dive into individual skills with interactive Learn, Practice, and Assess modules."
                borderColor="#8b5cf6" iconColor="#8b5cf6" icon={<IconTarget />}
                onClick={() => onPathClick('skills')}
            />
            <PathItem 
                category="Test Ready"
                title="Exam Edge"
                description="Challenge yourself with exam-style questions and advanced problems from previous NEET tests."
                borderColor="#ef4444" iconColor="#ef4444" icon={<IconTrophy />}
                onClick={() => onPathClick('exam')}
            />
        </div>
    </div>
);

const QuestionCard = ({ id, color, icon, title, subtitle, content, funFact, isOpen, toggleOpen }) => {
    return (
        <div className={`q-card ${color} ${isOpen ? 'open' : ''}`}>
            <div className="q-header" onClick={toggleOpen}>
                <div className="q-icon">{icon}</div>
                <div className="q-title-area">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <div className="q-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            {isOpen && (
                <div className="q-content">
                    <p>{content}</p>
                    <div className="q-fun-fact">
                        <span>⭐ Fun Fact:</span> {funFact}
                    </div>
                </div>
            )}
        </div>
    );
};

const IntroPage = ({ onBack, onNext, onNavigate }) => {
    const [openQs, setOpenQs] = useState({});

    const toggleQ = (id) => {
        setOpenQs(prev => ({ ...prev, [id]: !prev[id] }));
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
                    <div className="path-tab intro-tab active" onClick={() => onNavigate('intro')}><IconSun width={14} height={14}/> Intro</div>
                    <div className="path-tab terminology-tab" onClick={() => onNavigate('terminology')}><IconBookOpen width={14} height={14}/> Terminology</div>
                    <div className="path-tab skills-tab" onClick={() => onNavigate('skills')}><IconTarget width={14} height={14}/> Skills</div>
                    <div className="path-tab exam-tab" onClick={() => onNavigate('exam')}><IconTrophy width={14} height={14}/> Exam Edge</div>
                </div>
            </div>

            <div className="page-section">
                <div className="intro-header">
                    <h1>Dive into <span>Mechanical Properties of Solids</span></h1>
                    <p>Get started with the 6 big questions and check your prerequisites.</p>
                </div>

                <div className="section-title" style={{fontSize: '1.15rem', color: '#2563eb', marginBottom: '1.5rem'}}>Prerequisites</div>
                <div className="prereq-grid">
                    <div className="prereq-card">
                        <div className="prereq-icon">÷</div>
                        <h3>Arithmetic & Algebra</h3>
                        <p>Basic math skills for solving equations like Stress = F/A.</p>
                    </div>
                    <div className="prereq-card">
                        <div className="prereq-icon">↗</div>
                        <h3>Vector Basics</h3>
                        <p>Understanding that forces have both magnitude and direction.</p>
                    </div>
                    <div className="prereq-card">
                        <div className="prereq-icon">📈</div>
                        <h3>Kinematics</h3>
                        <p>Familiarity with interpreting linear and curved graphs.</p>
                    </div>
                </div>

                <div className="section-title" style={{fontSize: '1.15rem', color: '#2563eb', marginBottom: '1.5rem'}}>6 Big Questions</div>
                <div className="questions-grid">
                    <QuestionCard 
                        id="q1" color="blue" icon="❓" title="What" subtitle="is Elasticity?"
                        content="Elasticity is the property of a body by virtue of which it tends to regain its original size and shape when the applied deforming force is removed."
                        funFact="Rubber is actually less elastic than steel! Steel regains its original shape more perfectly than rubber when stretched by the same force."
                        isOpen={openQs.q1} toggleOpen={() => toggleQ('q1')}
                    />
                    <QuestionCard 
                        id="q2" color="green" icon="💡" title="Why" subtitle="do solids deform?"
                        content="Solids deform because external forces overcome the internal interatomic forces, causing atoms to displace from their stable equilibrium positions."
                        funFact="If you pull atoms too far apart, the restoring force eventually snaps, leading to a permanent 'plastic' deformation."
                        isOpen={openQs.q2} toggleOpen={() => toggleQ('q2')}
                    />
                    <QuestionCard 
                        id="q3" color="purple" icon="👤" title="Who" subtitle="defined these laws?"
                        content="Robert Hooke stated the fundamental law of elasticity in 1676, stating that for small deformations, stress is directly proportional to strain."
                        funFact="Hooke originally published his law as a Latin anagram 'ceiiinosssttuv' (Ut tensio, sic vis) to establish priority without revealing the secret!"
                        isOpen={openQs.q3} toggleOpen={() => toggleQ('q3')}
                    />
                    <QuestionCard 
                        id="q4" color="yellow" icon="📍" title="Where" subtitle="are they applied?"
                        content="These properties are applied in structural engineering for building bridges, designing vehicle chassis, and even in biomedical engineering for prosthetics."
                        funFact="Engineers purposefully design 'crumple zones' in cars to exploit the plastic deformation of metals to absorb impact energy."
                        isOpen={openQs.q4} toggleOpen={() => toggleQ('q4')}
                    />
                    <QuestionCard 
                        id="q5" color="red" icon="⏰" title="When" subtitle="does a solid break?"
                        content="A solid breaks when the applied stress exceeds its 'Ultimate Tensile Strength'. Beyond this point, the material fractures."
                        funFact="Glass is very strong but breaks suddenly (brittle), while copper stretches significantly before breaking (ductile)."
                        isOpen={openQs.q5} toggleOpen={() => toggleQ('q5')}
                    />
                    <QuestionCard 
                        id="q6" color="pink" icon="⚙️" title="How" subtitle="to calculate it?"
                        content="You calculate it using Moduli of Elasticity (Young's, Shear, or Bulk Modulus), which is simply the ratio of applied Stress to the resulting Strain."
                        funFact="Young's Modulus of diamond is over 1000 GPa, making it one of the stiffest known materials in the universe!"
                        isOpen={openQs.q6} toggleOpen={() => toggleQ('q6')}
                    />
                </div>

                <div className="ready-banner">
                    <div>
                        <h3>Ready to learn the language?</h3>
                        <p>Next up: Key terms and theoretical definitions of solids.</p>
                    </div>
                    <button className="btn-solid" onClick={onNext}>Terminology ➔</button>
                </div>
            </div>
        </div>
    );
};

const termsData = [
    { id: 't1', icon: '🌀', title: 'Elasticity', definition: 'The inherent property of a material body by virtue of which it tends to regain its original size and shape after the removal of deforming forces.', examples: ['A stretched rubber band returning to its original size.', 'A steel spring bouncing back.'], hint: 'Think: "Snapping back". Perfect elasticity is an idealization.' },
    { id: 't2', icon: '🧱', title: 'Plasticity', definition: 'The property by which a material does not regain its original dimensions at all and acquires a permanent deformation when the deforming force is removed.', examples: ['Modeling clay or putty being molded.', 'Bending a paperclip until it stays bent.'], hint: 'Think: "Plastic surgery" - it changes shape permanently.' },
    { id: 't3', icon: '⚡', title: 'Stress', definition: 'The internal restoring force acting per unit area of a deformed body.', examples: ['Weight hanging from a wire creating tensile stress.', 'Submarine under water experiencing volume stress.'], hint: 'Formula: σ = F/A. Unit is Pascal (Pa).' },
    { id: 't4', icon: '📏', title: 'Strain', definition: 'The ratio of the change in dimension of a body to its original dimension.', examples: ['A 1m wire stretching by 1mm (Strain = 0.001).', 'A balloon shrinking under pressure.'], hint: 'It has no units! It is a pure ratio.' },
    { id: 't5', icon: '⚠️', title: 'Elastic Limit', definition: 'The maximum stress up to which a body completely recovers its original shape upon removal of the deforming force.', examples: ['Stretching a spring too far so it gets ruined.'], hint: 'Beyond this point, Hooke\'s law fails and permanent damage begins.' },
];

const lawsData = [
    { id: 'l1', icon: '⚖️', label: 'Law 1', title: "Hooke's Law", definition: "For small deformations, the stress and strain are directly proportional to each other. Stress ∝ Strain.", examples: ['Spring balances rely entirely on this principle.', 'The linear part of a stress-strain curve.'], hint: "Stress = E × Strain. (Where E is the modulus of elasticity)" },
    { id: 'l2', icon: '🏗️', label: 'Modulus 1', title: "Young's Modulus (Y)", definition: "The ratio of tensile (or compressive) stress to the longitudinal strain. Relevant for 1D stretching.", examples: ['Calculating how much a steel cable will stretch under an elevator.', 'Comparing stiffness of bones.'], hint: "Y = (F/A) / (ΔL/L). High Y = Stiff material." },
    { id: 'l3', icon: '✂️', label: 'Modulus 2', title: "Shear Modulus (G)", definition: "The ratio of shearing stress to the corresponding shearing strain. Relevant for twisting or sliding forces.", examples: ['Twisting a metal cylinder (torsion).', 'A thick book being pushed sideways.'], hint: "Also known as the Modulus of Rigidity." },
    { id: 'l4', icon: '🎈', label: 'Modulus 3', title: "Bulk Modulus (B)", definition: "The ratio of hydraulic (volume) stress to the corresponding volume strain. Relevant for all states of matter.", examples: ['Compressing water deep in the ocean.', 'Air compression in a sealed syringe.'], hint: "B = -P / (ΔV/V). The negative sign indicates volume decreases as pressure increases." },
];

const quizData = [
    { q: "Which of the following materials is generally considered the most elastic?", options: ["Rubber", "Steel", "Glass", "Wood"], answer: 1, explanation: "Steel is more elastic than rubber because it requires a much larger restoring force for a given deformation, and it regains its shape more perfectly." },
    { q: "What is the dimensional formula for Stress?", options: ["[M L T⁻²]", "[M L⁻¹ T⁻²]", "[M L² T⁻²]", "Dimensionless"], answer: 1, explanation: "Stress = Force / Area. Force is [M L T⁻²] and Area is [L²]. Dividing them gives [M L⁻¹ T⁻²], same as pressure." },
    { q: "Strain is a dimensionless quantity because it is:", options: ["Too small to measure", "A ratio of two identical physical quantities", "A scalar quantity", "Constant for all materials"], answer: 1, explanation: "Strain is defined as the change in dimension divided by the original dimension (e.g., length/length). Thus, units cancel out." },
    { q: "Which modulus of elasticity is relevant for fluids (liquids and gases)?", options: ["Young's Modulus", "Shear Modulus", "Bulk Modulus", "None of them"], answer: 2, explanation: "Fluids can only resist a change in volume, not length or shape. Therefore, only Bulk Modulus applies to fluids." },
    { q: "The point on the stress-strain curve beyond which the material exhibits permanent plastic deformation is called:", options: ["Proportional Limit", "Yield Point (Elastic Limit)", "Breaking Point", "Ultimate Strength"], answer: 1, explanation: "The Yield Point (or Elastic Limit) marks the end of elastic behavior. Beyond this, the material will not return to its original shape." }
];

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
                    🏷️ Key Terms
                </button>
                <button className={`pill-btn ${tab === 'laws' ? 'active' : ''}`} onClick={() => setTab('laws')}>
                    ⚖️ Elastic Laws
                </button>
                <button className={`pill-btn ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}>
                    ✏️ Quiz Time
                </button>
            </div>

            {tab !== 'quiz' && (
                <div className="lexicon-layout">
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
                        <div className="content-definition">
                            {activeItem.definition}
                        </div>
                        <div className="content-split">
                            <div className="split-col">
                                <h4>EXAMPLES</h4>
                                {activeItem.examples.map((ex, i) => (
                                    <div key={i} className="example-box">{ex}</div>
                                ))}
                            </div>
                            <div className="split-col">
                                <h4>{tab === 'terms' ? 'QUICK MEMORY' : 'STUDENT TIP'}</h4>
                                <div className="hint-box">
                                    <strong>💡 {tab === 'terms' ? 'Pro-Hint:' : 'Formula:'}</strong>
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
                            {qIdx + 1}
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
                            ← Previous Question
                        </button>
                        <button 
                            className="quiz-next-btn" 
                            onClick={handleNextQuestion} 
                            disabled={!isAnswered}
                            style={{ margin: 0, opacity: !isAnswered ? 0.5 : 1, cursor: !isAnswered ? 'not-allowed' : 'pointer' }}
                        >
                            {qIdx < quizData.length - 1 ? 'Next Question →' : 'Finish Quiz →'}
                        </button>
                    </div>
                </div>
            )}

            {tab === 'quiz' && isFinished && (
                <div className="quiz-container content-card" style={{maxWidth: '700px', margin: '0 auto 4rem', textAlign: 'center', padding: '4rem 2rem'}}>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💪</div>
                    <h2 style={{fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Great effort!</h2>
                    <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>You scored <strong>{score} / {quizData.length}</strong></p>
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <button className="btn-outline" onClick={resetQuiz} style={{padding: '0.75rem 1.5rem', borderRadius: '9999px', border: '1px solid #3b82f6', color: '#3b82f6', background: 'transparent', fontWeight: 700, cursor: 'pointer'}}>Try Again</button>
                        <button className="btn-solid" onClick={onNext} style={{padding: '0.75rem 1.5rem', borderRadius: '9999px', border: 'none', color: 'white', background: '#2563eb', fontWeight: 700, cursor: 'pointer'}}>Practical Skills →</button>
                    </div>
                </div>
            )}

            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
                <button className="btn-outline" onClick={onNext} style={{background: 'white'}}>Next Topic: Skills <IconArrowRight/></button>
            </div>
        </div>
    );
};

const ConnectomicsPage = ({ onBack, onNext, onNavigate }) => (
    <div>
        <div className="connectomics-header">
            <button className="back-btn" onClick={onBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Dashboard
            </button>
            <div className="path-tabs">
                <div className="path-tab connectomics-tab active" onClick={() => onNavigate('connectomics')}><IconLink width={14} height={14}/> Connectomics</div>
                <div className="path-tab intro-tab" onClick={() => onNavigate('intro')}><IconSun width={14} height={14}/> Intro</div>
                <div className="path-tab terminology-tab" onClick={() => onNavigate('terminology')}><IconBookOpen width={14} height={14}/> Terminology</div>
                <div className="path-tab skills-tab" onClick={() => onNavigate('skills')}><IconTarget width={14} height={14}/> Skills</div>
                <div className="path-tab exam-tab" onClick={() => onNavigate('exam')}><IconTrophy width={14} height={14}/> Exam Edge</div>
            </div>
        </div>
        
        <div className="banner">
            <h1>Mechanical Properties of Solids <span>Connectomics</span></h1>
            <p>Discover the hidden threads linking the behavior of solids to the entire world of science and engineering.</p>
        </div>

        <div className="page-section">
            <div className="section-title"><IconClipboard /> Connectomic Checkpoint</div>
            <p className="section-subtitle">Every concept in this chapter rests on what you already know. Verify these before proceeding.</p>
            
            <div className="checkpoint-box">
                <div className="checkpoint-header">
                    <IconCheck width={18}/> You must be comfortable with:
                </div>
                <div className="checkpoint-grid">
                    <div className="checkpoint-item"><IconCheck /> Vectors and Scalars</div>
                    <div className="checkpoint-item"><IconCheck /> Equilibrium of forces</div>
                    <div className="checkpoint-item"><IconCheck /> Newton's Laws of Motion</div>
                    <div className="checkpoint-item"><IconCheck /> Work and Energy theorem</div>
                    <div className="checkpoint-item"><IconCheck /> Concepts of Stress & Strain (Basic)</div>
                    <div className="checkpoint-item"><IconCheck /> Atomic Structure (Intermolecular forces)</div>
                </div>
            </div>

            <div className="chapter-link-box">
                <div className="chapter-link-tag"><IconLink width={14}/> CHAPTER LINK</div>
                <div className="chapter-link-desc">
                    This chapter connects directly to <strong>Mechanical Properties of Fluids (Ch 10)</strong>, <strong>Thermal Properties of Matter (Ch 11)</strong>, and <strong>Oscillations & Waves (Ch 14, 15)</strong>. The principles of restoring force established here are fundamental — every subsequent chapter examining states of matter or wave propagation either applies or extends it.
                </div>
            </div>
        </div>

        <div className="page-section">
            <h2 className="section-title">The Web of Physics</h2>
            <div className="web-grid">
                <div className="web-card">
                    <div className="web-tag direct">⚡ Direct</div>
                    <div className="web-title">
                        Solids (Ch.9) <span>→ Fluids (Ch.10)</span>
                    </div>
                    <div className="web-desc">Stress and Strain in solids transitions to Pressure and Volume changes in fluids. Bulk Modulus is applied directly in fluids.</div>
                </div>
                <div className="web-card">
                    <div className="web-tag indirect">🌊 Indirect</div>
                    <div className="web-title">
                        Solids (Ch.9) <span>→ Thermal (Ch.11)</span>
                    </div>
                    <div className="web-desc">Thermal expansion of solids introduces thermal stress, combining temperature changes with Young's Modulus and Hooke's Law.</div>
                </div>
                <div className="web-card">
                    <div className="web-tag fundamental">🔁 Fundamental</div>
                    <div className="web-title">
                        Solids (Ch.9) <span>→ Waves (Ch.15)</span>
                    </div>
                    <div className="web-desc">Wave propagation through a medium depends entirely on its elastic properties. The speed of sound is derived directly from the Elastic Modulus.</div>
                </div>
                <div className="web-card">
                    <div className="web-tag mirror">🔄 Mirror</div>
                    <div className="web-title">
                        Solids (Ch.9) <span>→ Oscillations (Ch.14)</span>
                    </div>
                    <div className="web-desc">Simple Harmonic Motion relies on restoring force (F = -kx). The spring constant 'k' is intrinsically linked to the material's elasticity.</div>
                </div>
                <div className="web-card">
                    <div className="web-tag applied">🛠️ Applied</div>
                    <div className="web-title">
                        Solids (Ch.9) <span>→ Work & Energy (Ch.6)</span>
                    </div>
                    <div className="web-desc">Deforming a solid stores Elastic Potential Energy (U = ½kx²), directly applying the work-energy theorem to solid mechanics.</div>
                </div>
            </div>
        </div>

        <div className="page-section">
            <h2 className="section-title">Real World Systems</h2>
            <div className="real-world-grid">
                <div className="rw-card">
                    <div className="rw-tag">IMPACT: HIGH</div>
                    <h3 className="rw-title">Civil Engineering & Architecture</h3>
                    <p className="rw-desc">Skyscrapers and bridges are designed using Young's Modulus and Yield Strength. Engineers calculate the exact breaking points to ensure structural integrity under immense loads.</p>
                </div>
                <div className="rw-card">
                    <div className="rw-tag">IMPACT: ESSENTIAL</div>
                    <h3 className="rw-title">Aerospace Materials</h3>
                    <p className="rw-desc">NASA uses advanced alloys and composites. Understanding sheer stress and strain is critical when designing rocket hulls that must withstand extreme atmospheric friction and pressure.</p>
                </div>
                <div className="rw-card">
                    <div className="rw-tag">IMPACT: EMERGING</div>
                    <h3 className="rw-title">Biomechanics & Orthopedics</h3>
                    <p className="rw-desc">Human bones behave like elastic materials. Medical researchers use stress-strain curves to design prosthetic limbs and joint replacements that perfectly mimic human bone elasticity.</p>
                </div>
            </div>
        </div>

        <div className="page-section">
            <div className="infinite-box">
                <div className="infinite-icon"><IconShare2 /></div>
                <h3>Infinite Connections</h3>
                <p>Mechanical properties aren't just a chapter — they're the backbone of engineering, material science, and modern architecture. Every time a bridge holds weight or a spring rebounds, these laws are at work.</p>
                <button className="btn-outline" onClick={onNext}>Next Topic: Intro <IconArrowRight/></button>
            </div>
        </div>
    </div>
);

const skillsData = [
    {
        id: 's1', icon: '📏', title: 'Stress & Strain Analysis', 
        desc: 'Master the definitions, formulas, and types of stress and corresponding strains.',
        assessColor: 'blue',
        learnSections: [
            { 
              title: 'Overview', 
              content: (
                  <>
                      <p>The study of mechanical properties of solids is the foundation of material science and structural engineering. In NEET, this chapter is critical for:</p>
                      <ul style={{marginBottom: '2rem', paddingLeft: '1.5rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6'}}>
                          <li>Direct formula-based MCQs on Stress and Strain</li>
                          <li>Graphical analysis of Stress-Strain curves</li>
                          <li>Calculating Elastic Potential Energy in stretched wires</li>
                      </ul>
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Stress (σ):</h3>
                      <p>When a deforming force is applied to a body, internal restoring forces arise. The restoring force per unit area is called stress.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>σ = F / A</div>
                      
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Strain (ε):</h3>
                      <p>The ratio of change in dimension to the original dimension is called strain. It is a dimensionless quantity.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>ε = ΔL / L</div>
                      
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Elasticity:</h3>
                      <p>The property of a body by virtue of which it tends to regain its original size and shape when the applied force is removed.</p>
                  </>
              )
            },
            { 
              title: 'Types of Stress', 
              content: (
                  <>
                      <p>Stress is classified based on the direction and nature of the applied force. NEET often tests your ability to distinguish between these cases in numericals.</p>
                      
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>1. Longitudinal Stress:</h3>
                      <p>When the deforming force is applied parallel to the length of a body, causing a change in its length. It has two subtypes:</p>
                      <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6'}}>
                          <li><strong>Tensile Stress:</strong> Force causes an increase in length (e.g., hanging a mass from a wire).</li>
                          <li><strong>Compressive Stress:</strong> Force causes a decrease in length (e.g., pillars supporting a building).</li>
                      </ul>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>σ_L = F_perpendicular / A</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>2. Tangential (Shear) Stress:</h3>
                      <p>When the deforming force is applied parallel (tangential) to the surface, causing a change in shape without changing volume.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>σ_S = F_parallel / A</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>3. Hydraulic (Volume) Stress:</h3>
                      <p>When a body is subjected to uniform force from all sides (like an object submerged in fluid), resulting in a change in volume.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>σ_V = Pressure (P)</div>
                  </>
              ),
              alert: { title: 'NEET Trap', content: 'In hydraulic stress, the force is applied perpendicularly from all directions, so Stress = Pressure = ρgh in fluid dynamics.' }
            },
            { 
              title: 'Types of Strain', 
              content: (
                  <>
                      <p>Strain is the response to stress. Since it is a ratio of similar quantities, it has no units and is dimensionless.</p>
                      
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>1. Longitudinal Strain:</h3>
                      <p>Ratio of change in length to original length. Produced by longitudinal stress.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>ε_L = ΔL / L</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>2. Shearing Strain:</h3>
                      <p>The angular displacement of a plane perpendicular to the fixed surface. Often denoted by θ.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>ε_S = Δx / L = tan(θ) ≈ θ</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>3. Volume Strain:</h3>
                      <p>Ratio of change in volume to original volume. Produced by hydraulic stress.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>ε_V = ΔV / V</div>
                  </>
              ),
              alert: { title: 'Classic NEET Misconception', content: 'Students often forget that strain is a dimensionless quantity [M^0 L^0 T^0] because it is a ratio of identical physical quantities.' }
            },
            { 
              title: 'Elastic Limit (NEET asks this!)', 
              content: (
                  <>
                      <p>Every material has a breaking point. But before it breaks, there is a limit to its elasticity.</p>
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>Definition:</h3>
                      <p>The maximum stress up to which a body completely recovers its original shape and size after the removal of the deforming force.</p>
                      <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6'}}>
                          <li>If stress is below this limit: the body behaves as perfectly elastic.</li>
                          <li>If stress exceeds this limit: the body acquires a permanent set (plastic deformation).</li>
                      </ul>
                  </>
              )
            },
            { 
              title: 'Hooke\'s Law Basics', 
              content: (
                  <>
                      <p>Hooke\'s Law is the fundamental principle governing the elastic behavior of materials.</p>
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>Statement:</h3>
                      <p>Within the elastic limit, the stress developed in a body is directly proportional to the strain produced in it.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Stress ∝ Strain</div>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Stress = E × Strain</div>
                      <p>Where <strong>E</strong> is the Modulus of Elasticity.</p>
                      <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6'}}>
                          <li>The value of E depends on the nature of the material and temperature.</li>
                          <li>It is independent of the dimensions of the body (length, volume, etc).</li>
                          <li>Unit of E is identical to Stress (N/m² or Pascal) since strain is dimensionless.</li>
                      </ul>
                  </>
              )
            }
        ],
        practiceQuestions: [
            { q: 'What is the SI unit of stress?', options: ['Newton', 'Joule', 'Pascal', 'Watt'], answer: 2, explanation: 'Stress = Force / Area. N/m² is also known as Pascal (Pa).' },
            { q: 'A wire is stretched to double its length. What is the longitudinal strain?', options: ['0.5', '1', '2', '4'], answer: 1, explanation: 'Strain = ΔL/L. Since final length is 2L, ΔL = 2L - L = L. Strain = L/L = 1.' },
            { q: 'Which of the following is a dimensionless quantity?', options: ['Stress', 'Strain', 'Young\'s Modulus', 'Pressure'], answer: 1, explanation: 'Strain is a ratio of two lengths, hence it has no units and is dimensionless.' },
            { q: 'Hooke\'s law defines the proportionality between:', options: ['Force and Area', 'Stress and Strain', 'Mass and Velocity', 'Pressure and Volume'], answer: 1, explanation: 'Hooke\'s law states that within the elastic limit, stress is directly proportional to strain.' },
            { q: 'Which material is more elastic?', options: ['Rubber', 'Steel', 'Plastic', 'Wood'], answer: 1, explanation: 'Steel is more elastic than rubber because it requires a greater force to produce a given strain and returns to its original shape faster.' },
            { q: 'The ratio of lateral strain to longitudinal strain is called:', options: ['Young\'s Modulus', 'Bulk Modulus', 'Poisson\'s Ratio', 'Shear Modulus'], answer: 2, explanation: 'Poisson\'s Ratio is defined as the ratio of lateral strain to longitudinal strain.' },
            { q: 'Bulk modulus applies to:', options: ['Solids only', 'Liquids only', 'Gases only', 'Solids, liquids, and gases'], answer: 3, explanation: 'Bulk modulus relates to volume changes, which can happen in all three states of matter.' },
            { q: 'The reciprocal of bulk modulus is called:', options: ['Compressibility', 'Elasticity', 'Plasticity', 'Rigidity'], answer: 0, explanation: 'Compressibility is defined as the fractional change in volume per unit increase in pressure, which is 1 / Bulk Modulus.' },
            { q: 'Shear modulus is also known as:', options: ['Modulus of elasticity', 'Modulus of rigidity', 'Bulk modulus', 'Young\'s modulus'], answer: 1, explanation: 'Shear modulus relates to the change in shape (shearing) and is called the modulus of rigidity.' },
            { q: 'If the radius of a wire is doubled while the load remains the same, the stress:', options: ['Doubles', 'Halves', 'Becomes one-fourth', 'Remains the same'], answer: 2, explanation: 'Stress = Force / Area = F / (πr²). If r is doubled, Area becomes 4 times larger, so stress becomes 1/4.' },
            { q: 'The point on a stress-strain curve beyond which deformation is permanent is:', options: ['Proportional limit', 'Elastic limit', 'Fracture point', 'Ultimate strength'], answer: 1, explanation: 'Beyond the elastic limit (yield point), the material enters the plastic region and will not return to its original shape.' },
            { q: 'What type of strain is associated with a change in volume?', options: ['Longitudinal strain', 'Shearing strain', 'Lateral strain', 'Volume strain'], answer: 3, explanation: 'Volume strain is the ratio of the change in volume to the original volume.' },
            { q: 'When a material breaks just after reaching the elastic limit, it is called:', options: ['Ductile', 'Malleable', 'Brittle', 'Plastic'], answer: 2, explanation: 'Brittle materials fracture almost immediately after the elastic limit is exceeded, without significant plastic deformation.' },
            { q: 'The area under the force-extension graph gives:', options: ['Stress', 'Strain', 'Work done', 'Modulus of elasticity'], answer: 2, explanation: 'The area under a force-extension curve represents the elastic potential energy or work done in stretching the wire.' },
            { q: 'Which is a correct unit for Young\'s Modulus?', options: ['N/m', 'N/m²', 'N·m', 'N/m³'], answer: 1, explanation: 'Young\'s Modulus = Stress / Strain. Since strain is dimensionless, its unit is the same as stress, N/m².' }
        ]
    },
    {
        id: 's2', icon: '⚖️', title: 'Hooke\'s Law & Moduli', 
        desc: 'Understand the linear relationship between stress and strain.',
        assessColor: 'green',
        learnSections: [
            { title: 'Hooke\'s Law', content: 'For small deformations, the stress and strain are directly proportional to each other. This means Stress ∝ Strain, or Stress = E × Strain.', formula: 'Stress = E × Strain' },
            { title: 'Young\'s Modulus (Y)', content: 'The ratio of tensile stress to longitudinal strain. Y = (F/A) / (ΔL/L). It measures the resistance of a solid to a change in its length.', formula: 'Y = \u03C3 / \u03B5 = (F/A) / (\u0394L/L)', alert: { title: 'Exam Tip', content: 'Steel has a higher Young\'s modulus than rubber, making it more elastic (it resists deformation more strongly).' } },
            { title: 'Bulk & Shear Moduli', content: 'Bulk Modulus (B) relates to volume changes (B = -P / (ΔV/V)). Shear Modulus (G or η) relates to shape changes.' },
            { title: 'Moduli of Fluids', content: 'Fluids (liquids and gases) can only resist changes in volume, not shape or length. Thus, they only possess Bulk Modulus.', table: { headers: ['State', 'Young\'s', 'Bulk', 'Shear'], rows: [['Solids', 'Yes', 'Yes', 'Yes'], ['Liquids', 'No', 'Yes', 'No'], ['Gases', 'No', 'Yes', 'No']] } },
            { title: 'Gases (NEET HOTS)', content: 'For a gas, the bulk modulus depends on the thermodynamic process. Isothermal bulk modulus = Pressure (P). Adiabatic bulk modulus = γ × Pressure (γP).' }
        ],
        practiceQuestions: [
            { q: 'According to Hooke\'s law of elasticity, if stress is increased, the ratio of stress to strain:', options: ['Increases', 'Decreases', 'Becomes zero', 'Remains constant'], answer: 3, explanation: 'The ratio of stress to strain is the Modulus of Elasticity, which is a constant for a given material within the elastic limit.' },
            { q: 'Which of the following has the highest Young\'s modulus?', options: ['Rubber', 'Wood', 'Steel', 'Aluminium'], answer: 2, explanation: 'Steel is highly resistant to stretching compared to the others, meaning a large force produces a small strain.' },
            { q: 'The unit of Young\'s modulus is:', options: ['N/m', 'N/m²', 'N·m', 'Dimensionless'], answer: 1, explanation: 'It is the ratio of stress (N/m²) to strain (dimensionless).' },
            { q: 'Bulk modulus relates to which type of strain?', options: ['Longitudinal', 'Shear', 'Volume', 'Lateral'], answer: 2, explanation: 'Bulk modulus is the ratio of normal stress to volume strain.' },
            { q: 'Which modulus describes a material\'s resistance to shear?', options: ['Young\'s', 'Bulk', 'Rigidity', 'Elastic'], answer: 2, explanation: 'The shear modulus or modulus of rigidity describes resistance to shearing forces.' },
            { q: 'Is it possible to have a negative Poisson\'s ratio?', options: ['Yes, auxetic materials', 'No, never', 'Only in liquids', 'Only in gases'], answer: 0, explanation: 'Materials that expand laterally when stretched longitudinally are called auxetics.' },
            { q: 'Hooke\'s law is valid up to:', options: ['Yield point', 'Elastic limit', 'Proportional limit', 'Breaking point'], answer: 2, explanation: 'It is strictly valid only up to the proportional limit on the stress-strain curve.' },
            { q: 'The bulk modulus of an incompressible fluid is:', options: ['Zero', 'One', 'Infinity', 'Negative'], answer: 2, explanation: 'Incompressible means volume strain is zero, so bulk modulus is infinity.' },
            { q: 'Modulus of rigidity is defined as the ratio of:', options: ['Tensile stress to tensile strain', 'Shear stress to shear strain', 'Volume stress to volume strain', 'Lateral stress to lateral strain'], answer: 1, explanation: 'Shear modulus = shear stress / shear strain.' },
            { q: 'If a spring is cut into two equal halves, the stiffness (spring constant) of each half:', options: ['Halves', 'Doubles', 'Remains same', 'Quadruples'], answer: 1, explanation: 'Stiffness is inversely proportional to length.' },
            { q: 'Young\'s modulus for a perfectly rigid body is:', options: ['Zero', 'Infinity', 'One', 'Depends on material'], answer: 1, explanation: 'A rigid body does not deform, so strain is zero, making Young\'s modulus infinity.' },
            { q: 'Which is true for fluids?', options: ['They have Young\'s modulus', 'They have shear modulus', 'They have bulk modulus', 'They have no moduli'], answer: 2, explanation: 'Fluids can only resist volume changes, not shape or length changes.' },
            { q: 'The inverse of bulk modulus is called:', options: ['Compressibility', 'Extensibility', 'Plasticity', 'Ductility'], answer: 0, explanation: 'Compressibility is 1/B.' },
            { q: 'When a wire is heated, its length increases. This strain is:', options: ['Thermal strain', 'Elastic strain', 'Plastic strain', 'Shear strain'], answer: 0, explanation: 'Strain caused by temperature change is thermal strain.' },
            { q: 'The elastic modulus depends on:', options: ['Length', 'Area', 'Nature of material', 'Applied force'], answer: 2, explanation: 'It is a material property and does not depend on dimensions or force.' }
        ]
    },
    {
        id: 's3', icon: '📈', title: 'Stress-Strain Curve', 
        desc: 'Analyze the behavior of materials under increasing load, identifying key points like yield strength and fracture.',
        assessColor: 'purple',
        learnSections: [
            { title: 'Proportional Limit', content: 'The region where Hooke\'s Law is obeyed perfectly. The graph is a straight line.' },
            { title: 'Yield Point', content: 'The point beyond which the material starts showing permanent deformation (plasticity).' },
            { title: 'Fracture Point & UTS', content: 'Ultimate Tensile Strength (UTS) is the peak stress a material can withstand. The Fracture Point is where it actually breaks.' },
            { title: 'Ductile vs Brittle', content: 'Ductile materials (e.g., copper, aluminium) have a large plastic region between yield and fracture. Brittle materials (e.g., glass, high carbon steel) fracture almost immediately after the elastic limit.', alert: { title: 'Key Concept', content: 'Elastomers (like rubber) do not obey Hooke\'s law over large ranges and have a very large elastic region but no distinct plastic region.' } }
        ],
        practiceQuestions: [
            { q: 'The point on the stress-strain curve beyond which Hooke\'s Law is no longer valid is called:', options: ['Yield Point', 'Proportional Limit', 'Fracture Point', 'Elastic Limit'], answer: 1, explanation: 'Hooke\'s Law is only strictly valid up to the proportional limit.' },
            { q: 'The area under the stress-strain curve represents:', options: ['Force', 'Energy density', 'Work done', 'Power'], answer: 1, explanation: 'The area under the curve gives energy per unit volume (energy density).' },
            { q: 'Materials with a large plastic region before fracture are called:', options: ['Brittle', 'Ductile', 'Elastomers', 'Rigid'], answer: 1, explanation: 'Ductile materials can undergo large plastic deformation before breaking.' },
            { q: 'Materials that break immediately after the elastic limit are:', options: ['Ductile', 'Brittle', 'Malleable', 'Tough'], answer: 1, explanation: 'Brittle materials have very little plastic deformation.' },
            { q: 'Rubber is an example of:', options: ['Brittle material', 'Ductile material', 'Elastomer', 'Plastic'], answer: 2, explanation: 'Elastomers can be stretched to large strains and return to original shape.' },
            { q: 'The maximum stress a material can withstand before breaking is:', options: ['Yield strength', 'Ultimate tensile strength', 'Breaking stress', 'Elastic limit'], answer: 1, explanation: 'Ultimate tensile strength is the peak of the stress-strain curve.' },
            { q: 'The slope of the stress-strain curve in the linear region gives:', options: ['Energy', 'Force', 'Young\'s Modulus', 'Poisson\'s ratio'], answer: 2, explanation: 'Slope = Stress/Strain = Young\'s Modulus.' },
            { q: 'Yield strength is the stress at which:', options: ['Material breaks', 'Proportional limit ends', 'Noticeable plastic deformation begins', 'Material becomes a liquid'], answer: 2, explanation: 'Yield strength marks the onset of plasticity.' },
            { q: 'Necking occurs in a ductile material:', options: ['Before yield point', 'Between yield and ultimate strength', 'After ultimate tensile strength', 'At the proportional limit'], answer: 2, explanation: 'Necking starts when stress drops after the ultimate tensile strength.' },
            { q: 'For brittle materials, the ultimate tensile strength is:', options: ['Much higher than fracture point', 'Close to the fracture point', 'Lower than yield point', 'Zero'], answer: 1, explanation: 'Brittle materials fracture almost immediately after yielding.' },
            { q: 'A stress-strain curve is valid for:', options: ['Only solids', 'Solids and liquids', 'Gases only', 'All states of matter'], answer: 0, explanation: 'Only solids can sustain tensile and shear stresses to plot such a curve.' },
            { q: 'If the stress-strain curve is steep, the material is:', options: ['Stiff', 'Flexible', 'Soft', 'Weak'], answer: 0, explanation: 'A steep slope means high Young\'s modulus, so it is stiff.' },
            { q: 'The permanent deformation remaining after stress is removed is:', options: ['Elastic set', 'Plastic set', 'Fracture', 'Toughness'], answer: 1, explanation: 'Also known as permanent set.' },
            { q: 'Toughness of a material is indicated by:', options: ['Height of the curve', 'Slope of the curve', 'Total area under the curve to fracture', 'Length of the linear region'], answer: 2, explanation: 'Area to fracture represents the total energy absorbed before breaking.' },
            { q: 'A material that can be drawn into wires is:', options: ['Malleable', 'Ductile', 'Brittle', 'Elastic'], answer: 1, explanation: 'Ductility allows drawing into wires.' }
        ]
    },
    {
        id: 's4', icon: '⚡', title: 'Strain Energy', 
        desc: 'Calculate the elastic potential energy stored in a deformed body.',
        assessColor: 'orange',
        learnSections: [
            { title: 'Formula', content: 'Energy U = ½ × Stress × Strain × Volume. Energy density (energy per unit volume) is ½ × Stress × Strain.' },
            { title: 'Alternative Forms', content: 'Strain energy density (u) can also be written in terms of Young\'s Modulus (Y).', formula: 'u = \u00BD \u00D7 (\u03C3\u00B2 / Y) = \u00BD \u00D7 Y \u00D7 \u03B5\u00B2' },
            { title: 'Spring Analogy (NEET Tip)', content: 'A stretched wire behaves exactly like a spring with force constant k = YA/L.', formula: 'Work Done = \u00BD k x\u00B2 = \u00BD (YA/L) (\u0394L)\u00B2' }
        ],
        practiceQuestions: [
            { q: 'The energy stored per unit volume in a stretched wire is:', options: ['½ × Stress × Strain', 'Stress × Strain', '½ × Load × Extension', 'Zero'], answer: 0, explanation: 'Energy density = ½ × Stress × Strain.' },
            { q: 'Total strain energy in a stretched wire is given by:', options: ['½ F × ΔL', 'F × ΔL', '2 F × ΔL', '½ F / ΔL'], answer: 0, explanation: 'Total energy is ½ × Load × Extension.' },
            { q: 'When a spring is stretched, the work done is stored as:', options: ['Kinetic energy', 'Thermal energy', 'Elastic potential energy', 'Chemical energy'], answer: 2, explanation: 'Work done against restorative forces is stored as elastic potential energy.' },
            { q: 'If a wire is stretched to double its extension, the strain energy:', options: ['Doubles', 'Halves', 'Quadruples', 'Remains same'], answer: 2, explanation: 'Energy U = ½ k x². Doubling x makes U four times larger.' },
            { q: 'The area under a force-extension graph gives:', options: ['Force', 'Stress', 'Strain energy', 'Young\'s modulus'], answer: 2, explanation: 'Area = ½ F × ΔL = Strain energy.' },
            { q: 'Strain energy per unit volume can also be written as:', options: ['½ × Stress² / Y', '½ × Strain² / Y', '½ × Stress × Y', '½ × Strain / Y'], answer: 0, explanation: 'Substitute Strain = Stress/Y into ½ × Stress × Strain.' },
            { q: 'If Young\'s modulus is higher, for the same stress, the stored energy density is:', options: ['Higher', 'Lower', 'Same', 'Zero'], answer: 1, explanation: 'U = ½ Stress² / Y, so it is inversely proportional to Y for a given stress.' },
            { q: 'If a wire is unloaded, the energy recovered is represented by:', options: ['Area under loading curve', 'Area under unloading curve', 'Difference in areas', 'Zero'], answer: 1, explanation: 'The unloading curve area represents the recovered elastic energy.' },
            { q: 'The energy lost during a loading-unloading cycle is called:', options: ['Elastic energy', 'Hysteresis loss', 'Potential energy', 'Thermal energy'], answer: 1, explanation: 'The area between the loading and unloading curves is the hysteresis loss.' },
            { q: 'Which material has the largest hysteresis loop?', options: ['Steel', 'Glass', 'Vulcanized rubber', 'Wood'], answer: 2, explanation: 'Rubber exhibits significant elastic hysteresis, used for shock absorption.' },
            { q: 'A wire is stretched by force F. If cut in half and same force applied, the energy stored in one half is:', options: ['Same', 'Half', 'Double', 'Quarter'], answer: 1, explanation: 'U = ½ F² L / (A Y). Halving L halves U.' },
            { q: 'Elastic hysteresis is used in:', options: ['Making springs', 'Shock absorbers', 'Electrical wires', 'Thermometers'], answer: 1, explanation: 'Hysteresis dissipates energy as heat, useful for dampening vibrations.' },
            { q: 'When rubber is stretched and relaxed, the energy dissipated appears as:', options: ['Light', 'Sound', 'Heat', 'Electricity'], answer: 2, explanation: 'Hysteresis loss converts mechanical energy into thermal energy.' },
            { q: 'The unit of strain energy is:', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 0, explanation: 'It is a form of energy, so the unit is Joule.' },
            { q: 'The unit of strain energy density is:', options: ['Joule', 'J/m³', 'N/m', 'Watt/m²'], answer: 1, explanation: 'Energy per unit volume is Joules per cubic meter.' }
        ]
    },
    {
        id: 's5', icon: '↔️', title: 'Poisson\'s Ratio', 
        desc: 'Understand lateral strain and its relationship to longitudinal strain.',
        assessColor: 'red',
        learnSections: [
            { title: 'Definition', content: 'Poisson\'s ratio (σ) is the ratio of lateral strain to longitudinal strain. For most practical materials, it lies between 0 and 0.5.' },
            { title: 'Volume Change', content: 'When a wire is stretched, its volume changes. The fractional change in volume is directly related to Poisson\'s ratio.', formula: '\u0394V/V = (1 - 2\u03C3) \u00D7 (\u0394L/L)', alert: { title: 'Important', content: 'If a material is perfectly incompressible (like ideal rubber), its volume doesn\'t change (ΔV=0), meaning σ = 0.5.' } },
            { title: 'Relations between Constants', content: 'These four formulas relating Y, Bulk Modulus (K), Shear Modulus (η), and σ are extremely frequent in NEET numericals.', formula: 'Y = 3K(1 - 2\u03C3)\nY = 2\u03B7(1 + \u03C3)\n9/Y = 1/K + 3/\u03B7\n\u03C3 = (3K - 2\u03B7) / (6K + 2\u03B7)' }
        ],
        practiceQuestions: [
            { q: 'The theoretical value of Poisson\'s ratio lies between:', options: ['-1 and 0.5', '0 and 1', '0.5 and 1', '-1 and 0'], answer: 0, explanation: 'Theoretically, it can be between -1 and 0.5, though practical materials are usually between 0 and 0.5.' },
            { q: 'Poisson\'s ratio is defined as:', options: ['Lateral strain / Longitudinal strain', 'Longitudinal strain / Lateral strain', 'Shear strain / Volume strain', 'Stress / Strain'], answer: 0, explanation: 'It is the ratio of lateral (transverse) strain to longitudinal (axial) strain.' },
            { q: 'For an incompressible material, Poisson\'s ratio is exactly:', options: ['0', '0.25', '0.5', '1.0'], answer: 2, explanation: 'If volume is constant, ΔV = 0, which corresponds to σ = 0.5.' },
            { q: 'Which of the following is a unitless quantity?', options: ['Young\'s modulus', 'Bulk modulus', 'Poisson\'s ratio', 'Force constant'], answer: 2, explanation: 'It is a ratio of two strains, both of which are unitless.' },
            { q: 'Most common metals have a Poisson\'s ratio around:', options: ['0.1', '0.3', '0.5', '0.7'], answer: 1, explanation: 'Metals typically have σ ~ 0.3.' },
            { q: 'A negative Poisson\'s ratio means the material:', options: ['Shrinks laterally when stretched', 'Expands laterally when stretched', 'Does not deform', 'Breaks instantly'], answer: 1, explanation: 'Auxetic materials expand laterally when stretched.' },
            { q: 'Cork has a Poisson\'s ratio close to:', options: ['0.5', '0.3', '0', '-0.5'], answer: 2, explanation: 'Cork barely expands laterally when compressed, which is why it is used for wine bottles (σ ~ 0).' },
            { q: 'The relation between Young\'s modulus (Y), Bulk modulus (B) and Poisson\'s ratio (σ) is:', options: ['Y = 3B(1 - 2σ)', 'Y = 2B(1 + σ)', 'Y = B(1 - σ)', 'Y = 3B(1 + 2σ)'], answer: 0, explanation: 'This is a standard elastic constant relation.' },
            { q: 'The relation between Y, Shear modulus (G) and σ is:', options: ['Y = 2G(1 + σ)', 'Y = 3G(1 - 2σ)', 'Y = G(1 + σ)', 'Y = 2G(1 - σ)'], answer: 0, explanation: 'Standard relation: Y = 2G(1 + σ).' },
            { q: 'If Poisson\'s ratio is 0.5, the Bulk modulus B is:', options: ['Zero', 'Infinity', 'Equal to Y', 'Equal to G'], answer: 1, explanation: 'Y = 3B(1 - 2σ). If σ=0.5, 1-2σ=0, so B must be infinity (incompressible).' },
            { q: 'If a wire is stretched, its volume:', options: ['Always increases', 'Always decreases', 'Remains constant if σ = 0.5', 'Is independent of σ'], answer: 2, explanation: 'Volume is strictly constant only if σ = 0.5.' },
            { q: 'Poisson\'s effect occurs because:', options: ['Bonds are broken', 'Volume tends to be conserved', 'Temperature changes', 'Material yields'], answer: 1, explanation: 'Materials tend to conserve volume when stretched, causing lateral contraction.' },
            { q: 'Can Poisson\'s ratio be greater than 0.5 in an isotropic material?', options: ['Yes', 'No', 'Only in liquids', 'Only at high temperatures'], answer: 1, explanation: 'Thermodynamics requires σ ≤ 0.5 for isotropic materials.' },
            { q: 'Rubber has a Poisson\'s ratio close to:', options: ['0', '0.2', '0.33', '0.5'], answer: 3, explanation: 'Rubber is nearly incompressible, so σ ~ 0.5.' },
            { q: 'If longitudinal strain is 2% and lateral strain is 0.5%, Poisson\'s ratio is:', options: ['0.25', '0.5', '4', '0.01'], answer: 0, explanation: 'σ = 0.5 / 2 = 0.25.' }
        ]
    },
    {
        id: 's6', icon: '🕰️', title: 'Elastic After-Effect', 
        desc: 'Learn about the delayed recovery of materials and fatigue from repeated stress.',
        assessColor: 'blue',
        learnSections: [
            { title: 'After-Effect', content: 'The temporary delay in regaining original shape after the removal of deforming forces. Quartz and phosphor bronze have minimal after-effect.' },
            { title: 'Elastic Fatigue', content: 'The loss of strength of a material due to repeated alternating strains. This is why bridges are declared unsafe after long use.' },
            { title: 'Elastic Hysteresis', content: 'The lagging of strain behind stress during a loading-unloading cycle. The area of the hysteresis loop gives the energy dissipated as heat.' },
            { title: 'Applications', content: '1. Car tyres are made of synthetic rubber with large hysteresis loops to dissipate vibrational energy safely.\n2. Galvanometer suspensions use quartz because its elastic after-effect is virtually zero, ensuring immediate needle return.' }
        ],
        practiceQuestions: [
            { q: 'Which material has the least elastic after-effect?', options: ['Rubber', 'Steel', 'Quartz', 'Copper'], answer: 2, explanation: 'Quartz and phosphor bronze have almost zero elastic after-effect, making them ideal for suspensions in galvanometers.' },
            { q: 'Elastic after-effect is defined as:', options: ['Immediate recovery of shape', 'Delayed recovery of shape', 'Permanent deformation', 'Breaking of material'], answer: 1, explanation: 'It is the delay in regaining original dimensions after the deforming force is removed.' },
            { q: 'Glass exhibits:', options: ['No elastic after-effect', 'Small elastic after-effect', 'Large elastic after-effect', 'Negative elastic after-effect'], answer: 2, explanation: 'Glass has a noticeable elastic after-effect.' },
            { q: 'Elastic fatigue is the property due to which a material:', options: ['Becomes stronger after repeated stress', 'Becomes weaker after repeated alternating stress', 'Melts under stress', 'Becomes more elastic'], answer: 1, explanation: 'Repeated alternating stresses cause a loss of strength, known as elastic fatigue.' },
            { q: 'Which of the following causes a wire to break if bent back and forth repeatedly?', options: ['Elastic after-effect', 'Elastic fatigue', 'Yield point', 'High Young\'s modulus'], answer: 1, explanation: 'Bending back and forth applies alternating stress, leading to fatigue.' },
            { q: 'To minimize elastic after-effect in sensitive instruments, suspensions are made of:', options: ['Copper', 'Aluminium', 'Phosphor bronze', 'Iron'], answer: 2, explanation: 'Phosphor bronze has a very small elastic after-effect.' },
            { q: 'The delay in returning to the original state is due to:', options: ['Internal friction', 'Thermal expansion', 'Mass loss', 'Chemical change'], answer: 0, explanation: 'Internal friction between molecules delays the recovery.' },
            { q: 'A bridge is declared unsafe after long use because of:', options: ['Elastic after-effect', 'Elastic fatigue', 'Increase in Young\'s modulus', 'Decrease in mass'], answer: 1, explanation: 'Long use subjects it to alternating stresses, causing elastic fatigue.' },
            { q: 'Springs are usually made of steel, not copper, because steel has:', options: ['Lower Young\'s modulus', 'Higher Young\'s modulus and less fatigue', 'Higher density', 'More elastic after-effect'], answer: 1, explanation: 'Steel recovers its shape better and resists fatigue better than copper.' },
            { q: 'If a material has zero elastic after-effect, its recovery is:', options: ['Instantaneous', 'Slow', 'Incomplete', 'Impossible'], answer: 0, explanation: 'Zero after-effect means it regains its shape the moment force is removed.' },
            { q: 'Elastic fatigue can lead to:', options: ['Increased toughness', 'Unexpected sudden fracture', 'Higher elasticity', 'Lower density'], answer: 1, explanation: 'Micro-cracks propagate under repeated stress, causing sudden failure.' },
            { q: 'Which factor does NOT significantly affect elastic fatigue?', options: ['Number of cycles', 'Magnitude of stress', 'Color of the material', 'Temperature'], answer: 2, explanation: 'Color is an optical property, unrelated to mechanical fatigue.' },
            { q: 'The stress at which a material fails under repeated loading is called:', options: ['Yield stress', 'Ultimate stress', 'Fatigue limit (Endurance limit)', 'Breaking stress'], answer: 2, explanation: 'The fatigue limit is the stress below which it can endure infinite cycles.' },
            { q: 'Elastic after-effect is most prominent in:', options: ['Quartz', 'Phosphor bronze', 'Polymers/Rubber', 'Steel'], answer: 2, explanation: 'Polymers and rubber take a long time to recover their exact original shape.' },
            { q: 'Why are galvanometer coils suspended by quartz fibers?', options: ['It is cheap', 'It conducts electricity well', 'It has negligible elastic after-effect', 'It is very dense'], answer: 2, explanation: 'This ensures the pointer returns exactly to zero immediately.' }
        ]
    }
];

const examEdgeData = {
    'neet': {
        title: 'NEET Strategy',
        metrics: { weightage: '1 - 2 Qs', marks: '4 - 8', difficulty: 'Easy to Medium' },
        focus: 'Direct formula-based questions. Focus on Young\'s modulus, Bulk modulus, and energy stored in a stretched wire. Stress-strain curve is highly important.',
        pyqs: [
            {
                year: 'NEET 2023',
                q: 'A wire of length L, area of cross section A is hanging from a fixed support. The length of the wire changes to L1 when mass M is suspended from its free end. The expression for Young\'s modulus is:',
                options: ['Mg(L1-L)/AL', 'MgL/A(L1-L)', 'MgL1/AL', 'MgL/(AL1)'],
                answer: 1,
                solution: 'Young\'s modulus Y = (F/A) / (ΔL/L). Here F = Mg, ΔL = L1 - L. Therefore, Y = (Mg/A) / ((L1 - L)/L) = MgL / (A(L1 - L)).'
            },
            {
                year: 'NEET 2022',
                q: 'The stretch in a steel wire of length 2m and cross-sectional area 2 mm² under a load of 4 kg is: (Given Y = 2 × 10¹¹ N/m², g = 9.8 m/s²)',
                options: ['0.196 mm', '1.96 mm', '0.0196 mm', '19.6 mm'],
                answer: 0,
                solution: 'ΔL = FL / AY = (4 × 9.8 × 2) / (2×10⁻⁶ × 2×10¹¹) = 78.4 / (4×10⁵) = 19.6 × 10⁻⁵ m = 0.196 mm.'
            },
            {
                year: 'NEET 2020',
                q: 'Two wires are made of the same material and have the same volume. The first wire has cross-sectional area A and the second wire has cross-sectional area 3A. If the length of the first wire is increased by ΔL on applying a force F, how much force is needed to stretch the second wire by the same amount?',
                options: ['F', '4F', '6F', '9F'],
                answer: 3,
                solution: 'Since V = AL, length of second wire is L/3. Force F = YAΔL/L. For second wire, F\' = Y(3A)ΔL / (L/3) = 9 (YAΔL/L) = 9F.'
            }
        ],
        formulae: [
            { quantity: 'Stress', formula: 'σ = F / A', unit: 'N/m²' },
            { quantity: 'Strain', formula: 'ε = ΔL / L', unit: 'No unit' },
            { quantity: 'Young\'s Modulus', formula: 'Y = σ / ε', unit: 'N/m²' },
            { quantity: 'Bulk Modulus', formula: 'B = -ΔP / (ΔV/V)', unit: 'N/m²' },
            { quantity: 'Shear Modulus', formula: 'η = (F/A) / θ', unit: 'N/m²' },
            { quantity: 'Poisson\'s Ratio', formula: 'ν = - (Δd/d) / (ΔL/L)', unit: 'No unit' },
            { quantity: 'Thermal Stress', formula: 'σ_t = Y α ΔT', unit: 'N/m²' },
            { quantity: 'Work Done (Stretching)', formula: 'W = ½ × F × ΔL = ½ (YA/L) ΔL²', unit: 'J' },
            { quantity: 'Energy Density', formula: 'u = ½ × Stress × Strain', unit: 'J/m³' },
            { quantity: 'Relation (Y, B, ν)', formula: 'Y = 3B(1 - 2ν)', unit: '-' },
            { quantity: 'Relation (Y, η, ν)', formula: 'Y = 2η(1 + ν)', unit: '-' }
        ],
        revisionCards: [
            { title: 'STRESS-STRAIN CURVE', points: ['Proportional limit: Hooke\'s law obeys', 'Elastic limit (Yield point): Max stress without permanent deformation', 'Breaking point: Material fractures'] },
            { title: 'ELASTIC MODULI', points: ['Y for solids only', 'B for solids, liquids, and gases', 'Shear modulus (G) for solids only'] },
            { title: 'POISSON\'S RATIO', points: ['Ratio of lateral strain to longitudinal strain', 'Theoretical limits: -1 to 0.5', 'Practical limits: 0 to 0.5'] }
        ],
        finalStrategy: 'In Mechanical Properties of Solids, ~80% questions are numericals based on direct formulas. Always ensure units are consistent (convert mm to m). For theoretical questions, master the Stress-Strain graph.'
    },
    'jee': {
        title: 'JEE Main Strategy',
        metrics: { weightage: '1 Qs', marks: '4', difficulty: 'Medium' },
        focus: 'Combination problems (e.g., thermal stress, fluids + solids). Pay attention to elastic potential energy and breaking stress in accelerating systems.',
        pyqs: [
            {
                year: 'JEE Main 2023',
                q: 'A steel wire of length 3.2 m and cross-section area 0.2 cm² is stretched by a force. The Young\'s modulus of steel is 2.0 × 10¹¹ N/m². If the elastic potential energy stored in the wire is 0.8 J, what is the elongation of the wire?',
                options: ['0.5 mm', '1.13 mm', '2.0 mm', '2.5 mm'],
                answer: 1,
                solution: 'U = ½ F ΔL. Since F = YAΔL/L, U = ½ (YA/L)(ΔL)². 0.8 = ½ × (2×10¹¹ × 0.2×10⁻⁴ / 3.2) × (ΔL)². 0.8 = ½ × (1.25×10⁶) × (ΔL)². ΔL² = 1.28×10⁻⁶ => ΔL ≈ 1.13 mm.'
            },
            {
                year: 'JEE Main 2022',
                q: 'Two wires are made of the same material and have the same volume. However, wire 1 has cross-sectional area A and wire 2 has cross-sectional area 3A. If the length of wire 1 increases by Δx on applying force F, how much force is needed to stretch wire 2 by the same amount?',
                options: ['F', '4F', '6F', '9F'],
                answer: 3,
                solution: 'Volume V = A₁L₁ = A₂L₂. So L₁ = V/A, L₂ = V/3A. Δx = FL/(AY). F₁ = YA₁Δx/L₁ = YA²Δx/V. F₂ = YA₂Δx/L₂ = Y(3A)²Δx/V = 9YA²Δx/V = 9F₁.'
            }
        ],
        formulae: [
            { quantity: 'Thermal Stress', formula: 'σ = YαΔT', unit: 'N/m²' },
            { quantity: 'Work done in stretching', formula: 'W = 1/2 × F × ΔL', unit: 'J' },
            { quantity: 'Depression of a beam', formula: 'δ = Wl³ / (4bd³Y)', unit: 'm' }
        ],
        revisionCards: [
            { title: 'THERMAL STRESS', points: ['Arises when thermal expansion is restricted', 'F = YAαΔT', 'Independent of length'] },
            { title: 'ENERGY STORED', points: ['U = 1/2 × F × ΔL = 1/2 × (YA/L) × (ΔL)²', 'Acts like a spring with k = YA/L'] }
        ],
        finalStrategy: 'Questions often mix elasticity with mechanics or thermal expansion. Focus on the relationship between length, area, and volume constraints.'
    },
    'cet': {
        title: 'Karnataka CET Strategy',
        metrics: { weightage: '2 - 3 Qs', marks: '2 - 3', difficulty: 'Easy' },
        focus: 'Factual and direct formula questions. Memorize dimensional formulas and standard values (e.g., Poisson\'s ratio limits).',
        pyqs: [
            {
                year: 'KCET 2022',
                q: 'The Bulk modulus of water is 2.1 × 10⁹ N/m². To reduce its volume by 0.1%, what pressure is required?',
                options: ['2.1 × 10⁶ N/m²', '2.1 × 10⁵ N/m²', '2.1 × 10⁷ N/m²', '2.1 × 10⁸ N/m²'],
                answer: 0,
                solution: 'B = P / (ΔV/V) => P = B × (ΔV/V). P = (2.1 × 10⁹) × (0.1/100) = 2.1 × 10⁹ × 10⁻³ = 2.1 × 10⁶ N/m².'
            },
            {
                year: 'KCET 2021',
                q: 'The dimensional formula for Young\'s modulus is:',
                options: ['[M L^-1 T^-2]', '[M L T^-2]', '[M L^-2 T^-2]', '[M L^2 T^-2]'],
                answer: 0,
                solution: 'Young\'s modulus = Stress / Strain. Strain is dimensionless. Stress = Force / Area = [M L T^-2] / [L^2] = [M L^-1 T^-2].'
            }
        ],
        formulae: [
            { quantity: 'Young\'s Modulus', formula: 'Y = (F/A) / (ΔL/L)', unit: 'N/m²' },
            { quantity: 'Bulk Modulus', formula: 'B = -ΔP / (ΔV/V)', unit: 'N/m²' },
            { quantity: 'Compressibility', formula: 'K = 1 / B', unit: 'm²/N' },
            { quantity: 'Shear Modulus', formula: 'η = (F/A) / θ', unit: 'N/m²' },
            { quantity: 'Poisson\'s Ratio', formula: 'ν = - (ΔD/D) / (ΔL/L)', unit: 'No unit' },
            { quantity: 'Depression of Beam', formula: 'δ = Wl³ / (4bd³Y)', unit: 'm' },
            { quantity: 'Elongation due to self weight', formula: 'ΔL = (ρgL²) / (2Y)', unit: 'm' }
        ],
        revisionCards: [
            { title: 'DIMENSIONS', points: ['Stress, Pressure, Modulus of Elasticity have the same dimensions: [M L⁻¹ T⁻²]', 'Strain and Poisson\'s ratio are dimensionless'] }
        ],
        finalStrategy: 'Speed is key. Do not waste time deriving formulas. Directly apply standard results.'
    },
    'boards': {
        title: 'PUC / Boards Strategy',
        metrics: { weightage: '1 Long Answer + 1 MCQ', marks: '5 - 6', difficulty: 'Easy' },
        focus: 'Derivations and definitions. Learn the stress-strain curve derivation, expressions for elastic potential energy, and definitions of various moduli.',
        pyqs: [
            {
                year: 'PUC 2023',
                q: 'State Hooke\'s law of elasticity.',
                options: ['Stress ∝ Strain', 'Stress ∝ 1/Strain', 'Stress = Strain', 'Force ∝ Area'],
                answer: 0,
                solution: 'Hooke\'s law states that within the elastic limit, stress developed in a body is directly proportional to the strain produced in it.'
            },
            {
                year: 'PUC 2022',
                q: 'Which of the following materials is most elastic?',
                options: ['Rubber', 'Steel', 'Plastic', 'Glass'],
                answer: 1,
                solution: 'Steel is more elastic than rubber because a greater force is required to produce the same strain in steel compared to rubber (Y_steel > Y_rubber).'
            }
        ],
        formulae: [
            { quantity: 'Hooke\'s Law', formula: 'Stress ∝ Strain (within elastic limit)', unit: '-' }
        ],
        revisionCards: [
            { title: 'IMPORTANT DEFINITIONS', points: ['Elasticity: Property to regain original shape', 'Plasticity: Permanent deformation', 'Hooke\'s Law'] },
            { title: 'DERIVATIONS', points: ['Expression for elastic potential energy in a stretched wire: U = 1/2 × stress × strain × volume'] }
        ],
        finalStrategy: 'Write clear definitions and draw neat diagrams (especially the stress-strain graph). State Hooke\'s law properly with the condition "within the elastic limit".'
    }
};

const SkillsPage = ({ onBack, onNavigate }) => {
    const [view, setView] = useState('list'); // 'list', 'learn', 'practice', 'practice-end', 'assess'
    const [activeSkillId, setActiveSkillId] = useState(null);
    const [learnIdx, setLearnIdx] = useState(0);
    const [qIdx, setQIdx] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    
    // Assessment State
    const [markedReview, setMarkedReview] = useState({});
    const [timeLeft, setTimeLeft] = useState(900); // 15 mins
    const [openSolutions, setOpenSolutions] = useState({});

    // Timer effect
    React.useEffect(() => {
        let timer;
        if (view === 'assess' && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && view === 'assess') {
            setView('practice-end'); // Auto-submit
        }
        return () => clearInterval(timer);
    }, [view, timeLeft]);

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
        setActiveSkillId(id); setQIdx(0); setAnswers({}); setScore(0); setMarkedReview({}); setTimeLeft(900); setOpenSolutions({}); setView('assess');
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
                                        <button className="btn-skill" onClick={() => startLearn(skill.id)}>📖 Learn</button>
                                        <button className="btn-skill" onClick={() => startPractice(skill.id)}>🖋️ Practice</button>
                                    </div>
                                    <button className={`btn-skill-assess ${skill.assessColor}`} onClick={() => startAssess(skill.id)}>🏆 Assess</button>
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
                                        <span style={{marginRight: '0.5rem', opacity: 0.6}}>📄</span> {sec.title}
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
                                        <div className="learn-alert-title">💡 {activeSkill.learnSections[learnIdx].alert.title}</div>
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
                    <div className="learn-top-bar" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <button className="learn-back-btn" onClick={() => setView('list')}>← Exit Practice</button>
                        <div style={{fontSize: '0.85rem', fontWeight: 700, color: '#3b82f6'}}>Practice {qIdx + 1}/{activeSkill.practiceQuestions.length}</div>
                    </div>
                    <div className="quiz-container content-card">
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
                                <strong>{selectedOpt === activeSkill.practiceQuestions[qIdx].answer ? '✓ Correct!' : '✕ Not quite!'}</strong>
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
                            <span className="report-icon">📊</span>
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
                                <div className="stat-value time">⏱ {formatTime(900 - timeLeft)}</div>
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
                                                {isUnanswered ? '■ Skipped' : (isCorrect ? '✓ Correct' : '✕ Wrong')}
                                                <div className="bk-time">⏱ 5s</div>
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
                                                        {optState === 'correct' && <div className="bk-opt-icon correct">✓</div>}
                                                        {optState === 'wrong' && <div className="bk-opt-icon wrong">✕</div>}
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
                                                    <div className="sol-title">💡 Step-by-Step Logic</div>
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
                            <div className="assess-timer">⏱ {formatTime(timeLeft)}</div>
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

                    <h3 className="section-subtitle">📚 Previous Year Questions (Trend)</h3>
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
                    <h2 className="section-title">📐 Formula Sheet</h2>
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
                    <h2 className="section-title">⚡ Quick Revision Module</h2>
                    <p className="section-desc">Everything you need for last-minute revision. One card = one topic.</p>
                    
                    <div className="revision-grid">
                        {data.revisionCards.map((card, i) => (
                            <div key={i} className="revision-card">
                                <h4>⚡ {card.title}</h4>
                                <ul>
                                    {card.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="final-strategy-box">
                        <div className="final-label">⚡ FINAL EXAM STRATEGY</div>
                        <p>{data.finalStrategy}</p>
                    </div>

                    <div style={{textAlign: 'center', marginTop: '3rem'}}>
                        <button className="btn-finish-topic" onClick={() => onBack('detail')}>Finish Topic ✓</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [view, setView] = useState('subjects');

    return (
        <div>
            <Navbar onHomeClick={() => setView('subjects')} />
            {view === 'subjects' && <SubjectSelectionPage onSubjectClick={(sub) => { if(sub === 'physics') setView('home') }} />}
            {view === 'home' && <HomePage onChapterClick={(id) => setView('detail')} onGradeClick={() => setView('subjects')} />}
            {view === 'detail' && <ChapterDetailPage onPathClick={(path) => setView(path)} onBack={() => setView('home')} />}
            {view === 'connectomics' && <ConnectomicsPage onBack={() => setView('detail')} onNext={() => setView('intro')} onNavigate={setView} />}
            {view === 'intro' && <IntroPage onBack={(path) => setView(path || 'detail')} onNext={() => setView('terminology')} onNavigate={setView} />}
            {view === 'terminology' && <TerminologyPage onBack={(path) => setView(path || 'detail')} onNext={() => setView('skills')} onNavigate={setView} />}
            {view === 'skills' && <SkillsPage onBack={(path) => setView(path || 'detail')} onNavigate={setView} />}
            {view === 'exam' && <ExamEdgePage onBack={(path) => setView(path || 'detail')} onNavigate={setView} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
