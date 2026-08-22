const flashCardsData = [
    { id: 1, category: 'terms', front: 'What is Elasticity?', back: 'The property of a material to regain its original shape and size after the deforming force is removed.' },
    { id: 2, category: 'terms', front: 'What is Plasticity?', back: 'The property by which a material undergoes permanent deformation and does not return to its original shape when the deforming force is removed.' },
    { id: 3, category: 'terms', front: 'Define Stress', back: 'Internal restoring force per unit area of a deformed body.\n\nFormula: σ = F / A\nUnit: Pascal (Pa) or N/m²' },
    { id: 4, category: 'terms', front: 'Define Strain', back: 'The ratio of change in dimension to the original dimension.\n\nExample: Longitudinal strain = ΔL / L\n\nIt is dimensionless (no units).' },
    { id: 5, category: 'terms', front: 'What is the Elastic Limit?', back: 'The maximum stress up to which a body completely recovers its original shape when the deforming force is removed. Beyond this, permanent deformation begins.' },
    { id: 6, category: 'terms', front: 'Tensile vs Compressive Stress', back: 'Tensile stress: force stretches the body (increases length).\n\nCompressive stress: force compresses the body (decreases length).' },
    { id: 7, category: 'terms', front: 'What is Poisson\'s Ratio (σ)?', back: 'The ratio of lateral strain to longitudinal strain when a body is stretched.\n\nσ = −(lateral strain) / (longitudinal strain)\n\nTypical value for metals: ~0.3' },
    { id: 8, category: 'formulas', front: 'State Hooke\'s Law', back: 'Within the elastic limit, stress is directly proportional to strain.\n\nStress ∝ Strain\nStress = E × Strain\n\n(E = modulus of elasticity)' },
    { id: 9, category: 'formulas', front: 'Young\'s Modulus (Y)', back: 'Ratio of tensile/compressive stress to longitudinal strain.\n\nY = (F/A) / (ΔL/L) = FL / (A·ΔL)\n\nUnit: Pa\nHigh Y → stiff material (e.g. steel)' },
    { id: 10, category: 'formulas', front: 'Bulk Modulus (B)', back: 'Ratio of volume stress to volume strain.\n\nB = −P / (ΔV/V)\n\nNegative sign: volume decreases as pressure increases.\nApplies to solids, liquids, and gases.' },
    { id: 11, category: 'formulas', front: 'Shear Modulus (G)', back: 'Ratio of shearing stress to shearing strain.\n\nAlso called Modulus of Rigidity.\n\nRelevant for twisting or sliding deformations (e.g. torsion of a cylinder).' },
    { id: 12, category: 'formulas', front: 'Energy Stored in a Stretched Wire', back: 'U = ½ × Stress × Strain × Volume\n\nU = ½ × Y × (Strain)² × Volume\n\nU = ½ × (Force)² / (Spring constant)' },
    { id: 13, category: 'formulas', front: 'Relation Between Y, G, and σ', back: 'Y = 2G(1 + σ)\n\nThis connects Young\'s modulus, Shear modulus, and Poisson\'s ratio for isotropic materials.' },
    { id: 14, category: 'concepts', front: 'Why is Steel more Elastic than Rubber?', back: 'Elasticity is measured by the stress required to produce a given strain. Steel needs much greater stress for the same deformation and regains shape more perfectly — so it is more elastic than rubber.' },
    { id: 15, category: 'concepts', front: 'Key Regions on a Stress-Strain Curve', back: '1. Proportional limit — Hooke\'s law holds\n2. Elastic limit (yield point) — max stress without permanent deformation\n3. Plastic region — permanent deformation\n4. Ultimate tensile strength — max stress before necking\n5. Breaking point — fracture' },
    { id: 16, category: 'concepts', front: 'If a Spring is Cut in Half?', back: 'Spring constant (stiffness) doubles.\n\nStiffness k is inversely proportional to length.\n\nEach half supports the same force but stretches half the original length.' },
    { id: 17, category: 'concepts', front: 'Which Modulus Applies to Fluids?', back: 'Only Bulk Modulus.\n\nFluids cannot sustain shear or tensile stress — they flow instead. They only resist volume compression, so B is the relevant elastic modulus.' },
    { id: 18, category: 'concepts', front: 'Stress vs Pressure — Same or Different?', back: 'Same dimensions [M L⁻¹ T⁻²] and same formula (Force/Area), but:\n\nStress = internal restoring force (solid mechanics)\nPressure = external normal force per unit area (fluids/gases)' },
    { id: 19, category: 'concepts', front: 'Ductile vs Brittle Materials', back: 'Ductile (e.g. copper): large plastic region, can be drawn into wires, shows necking before fracture.\n\nBrittle (e.g. glass): small plastic region, fractures suddenly with little warning.' },
    { id: 20, category: 'formulas', front: 'Breaking Stress vs Yield Strength', back: 'Yield strength: stress at which noticeable plastic deformation begins.\n\nBreaking stress (ultimate strength): maximum stress the material can withstand before fracture.\n\nBreaking stress ≥ Yield strength.' },
];

const FlashCardsPage = ({ onBack, onNavigate }) => {
    const [category, setCategory] = useState('all');
    const [cardIdx, setCardIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [known, setKnown] = useState({});

    const filtered = category === 'all'
        ? flashCardsData
        : flashCardsData.filter(c => c.category === category);

    const current = filtered[cardIdx];
    const knownCount = filtered.filter(c => known[c.id]).length;

    React.useEffect(() => {
        setCardIdx(0);
        setFlipped(false);
    }, [category]);

    const goNext = () => {
        setFlipped(false);
        setCardIdx(i => Math.min(i + 1, filtered.length - 1));
    };

    const goPrev = () => {
        setFlipped(false);
        setCardIdx(i => Math.max(i - 1, 0));
    };

    const shuffleDeck = () => {
        setFlipped(false);
        setCardIdx(Math.floor(Math.random() * filtered.length));
    };

    const toggleKnown = () => {
        if (!current) return;
        setKnown(prev => ({ ...prev, [current.id]: !prev[current.id] }));
    };

    const categoryLabel = { terms: 'Key Terms', formulas: 'Formulas', concepts: 'Concepts' };

    return (
        <div style={{ paddingBottom: '4rem' }}>
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
                    <div className="path-tab flashcards-tab active" onClick={() => onNavigate('flashcards')}><IconLayers width={14} height={14}/> Flash Cards</div>
                </div>
            </div>

            <div className="flash-hero">
                <h1>Quick <span>Flash Cards</span></h1>
                <p>Flip through key terms, formulas, and concepts from Mechanical Properties of Solids. Tap a card to reveal the answer.</p>
            </div>

            <div className="flash-stats">
                <div className="flash-stat">
                    <span className="flash-stat-value">{filtered.length}</span>
                    <span className="flash-stat-label">Cards</span>
                </div>
                <div className="flash-stat">
                    <span className="flash-stat-value">{knownCount}</span>
                    <span className="flash-stat-label">Mastered</span>
                </div>
                <div className="flash-stat">
                    <span className="flash-stat-value">{cardIdx + 1}/{filtered.length}</span>
                    <span className="flash-stat-label">Progress</span>
                </div>
            </div>

            <div className="pill-nav flash-pill-nav">
                <button className={`pill-btn ${category === 'all' ? 'active' : ''}`} onClick={() => setCategory('all')}>All</button>
                <button className={`pill-btn ${category === 'terms' ? 'active' : ''}`} onClick={() => setCategory('terms')}>Key Terms</button>
                <button className={`pill-btn ${category === 'formulas' ? 'active' : ''}`} onClick={() => setCategory('formulas')}>Formulas</button>
                <button className={`pill-btn ${category === 'concepts' ? 'active' : ''}`} onClick={() => setCategory('concepts')}>Concepts</button>
            </div>

            {current && (
                <div className="flash-deck">
                    <div className="flash-category-tag">{categoryLabel[current.category] || 'Card'}</div>

                    <div
                        className={`flash-card ${flipped ? 'flipped' : ''} ${known[current.id] ? 'mastered' : ''}`}
                        onClick={() => setFlipped(f => !f)}
                    >
                        <div className="flash-card-inner">
                            <div className="flash-card-front">
                                <div className="flash-card-label">Question</div>
                                <p className="flash-card-text">{current.front}</p>
                                <div className="flash-card-hint">Tap to flip</div>
                            </div>
                            <div className="flash-card-back">
                                <div className="flash-card-label">Answer</div>
                                <p className="flash-card-text">{current.back.split('\n').map((line, i) => (
                                    <span key={i}>{line}{i < current.back.split('\n').length - 1 && <br/>}</span>
                                ))}</p>
                                <div className="flash-card-hint">Tap to flip back</div>
                            </div>
                        </div>
                    </div>

                    <div className="flash-controls">
                        <button className="flash-btn secondary" onClick={goPrev} disabled={cardIdx === 0}>Previous</button>
                        <button className={`flash-btn known ${known[current.id] ? 'active' : ''}`} onClick={toggleKnown}>
                            {known[current.id] ? 'Mastered' : 'Mark as Known'}
                        </button>
                        <button className="flash-btn secondary" onClick={shuffleDeck}>Shuffle</button>
                        <button className="flash-btn primary" onClick={goNext} disabled={cardIdx === filtered.length - 1}>Next</button>
                    </div>

                    <div className="flash-progress-bar">
                        <div className="flash-progress-fill" style={{ width: `${((cardIdx + 1) / filtered.length) * 100}%` }} />
                    </div>
                </div>
            )}
        </div>
    );
};
