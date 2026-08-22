const ChapterDetailPage = ({ onPathClick, onBack }) => (
    <div className="detail-container">
        <div className="detail-left">
            <div className="tag-outline" onClick={onBack} style={{cursor: 'pointer'}}>â† Grade 11 Physics</div>
            <h1>Master <br/><span>Mechanical Properties of Solids</span></h1>
            <p>Unlock the foundations of solid mechanics. From why bridges don't collapse to how springs work, master everything you need to know about elasticity, Hooke's Law, and material strength.</p>
            
            <div className="stats-grid">
                <div className="stat-box">
                    <div className="stat-value">8</div>
                    <div className="stat-label">Core Topics</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">20+</div>
                    <div className="stat-label">Practice Problems</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">12</div>
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
                        <span>â­ Fun Fact:</span> {funFact}
                    </div>
                </div>
            )}
        </div>
    );
};

