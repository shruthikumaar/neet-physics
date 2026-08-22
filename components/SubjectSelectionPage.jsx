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

