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

