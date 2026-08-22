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
