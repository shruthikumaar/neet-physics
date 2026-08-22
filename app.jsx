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
