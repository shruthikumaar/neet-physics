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
                    <div className="path-tab games-tab" onClick={() => onNavigate('games')}><IconAtom width={14} height={14}/> Games & Videos</div>
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
                        <div className="prereq-icon"><IconRuler width={32} height={32}/></div>
                        <h3>Arithmetic & Algebra</h3>
                        <p>Basic math skills for solving equations like Stress = F/A.</p>
                    </div>
                    <div className="prereq-card">
                        <div className="prereq-icon"><IconArrowRight width={32} height={32}/></div>
                        <h3>Vector Basics</h3>
                        <p>Understanding that forces have both magnitude and direction.</p>
                    </div>
                    <div className="prereq-card">
                        <div className="prereq-icon"><IconTarget width={32} height={32}/></div>
                        <h3>Kinematics</h3>
                        <p>Familiarity with interpreting linear and curved graphs.</p>
                    </div>
                </div>

                <div className="section-title" style={{fontSize: '1.15rem', color: '#2563eb', marginBottom: '1.5rem'}}>6 Big Questions</div>
                <div className="questions-grid">
                    <QuestionCard 
                        id="q1" color="blue" icon={<IconBookOpen width={24} height={24}/>} title="What" subtitle="is Elasticity?"
                        content="Elasticity is the property of a body by virtue of which it tends to regain its original size and shape when the applied deforming force is removed."
                        funFact="Rubber is actually less elastic than steel! Steel regains its original shape more perfectly than rubber when stretched by the same force."
                        isOpen={openQs.q1} toggleOpen={() => toggleQ('q1')}
                    />
                    <QuestionCard 
                        id="q2" color="green" icon={<IconSun width={24} height={24}/>} title="Why" subtitle="do solids deform?"
                        content="Solids deform because external forces overcome the internal interatomic forces, causing atoms to displace from their stable equilibrium positions."
                        funFact="If you pull atoms too far apart, the restoring force eventually snaps, leading to a permanent 'plastic' deformation."
                        isOpen={openQs.q2} toggleOpen={() => toggleQ('q2')}
                    />
                    <QuestionCard 
                        id="q3" color="purple" icon={<IconGlobe width={24} height={24}/>} title="Who" subtitle="defined these laws?"
                        content="Robert Hooke stated the fundamental law of elasticity in 1676, stating that for small deformations, stress is directly proportional to strain."
                        funFact="Hooke originally published his law as a Latin anagram 'ceiiinosssttuv' (Ut tensio, sic vis) to establish priority without revealing the secret!"
                        isOpen={openQs.q3} toggleOpen={() => toggleQ('q3')}
                    />
                    <QuestionCard 
                        id="q4" color="yellow" icon={<IconTarget width={24} height={24}/>} title="Where" subtitle="are they applied?"
                        content="These properties are applied in structural engineering for building bridges, designing vehicle chassis, and even in biomedical engineering for prosthetics."
                        funFact="Engineers purposefully design 'crumple zones' in cars to exploit the plastic deformation of metals to absorb impact energy."
                        isOpen={openQs.q4} toggleOpen={() => toggleQ('q4')}
                    />
                    <QuestionCard 
                        id="q5" color="red" icon={<IconRefreshCcw width={24} height={24}/>} title="When" subtitle="does a solid break?"
                        content="A solid breaks when the applied stress exceeds its 'Ultimate Tensile Strength'. Beyond this point, the material fractures."
                        funFact="Glass is very strong but breaks suddenly (brittle), while copper stretches significantly before breaking (ductile)."
                        isOpen={openQs.q5} toggleOpen={() => toggleQ('q5')}
                    />
                    <QuestionCard 
                        id="q6" color="pink" icon={<IconCube width={24} height={24}/>} title="How" subtitle="to calculate it?"
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
    { id: 't1', icon: <IconAtom />, title: 'Elasticity', definition: 'The inherent property of a material body by virtue of which it tends to regain its original size and shape after the removal of deforming forces.', examples: ['A stretched rubber band returning to its original size.', 'A steel spring bouncing back.'], hint: 'Think: "Snapping back". Perfect elasticity is an idealization.' },
    { id: 't2', icon: <IconCube />, title: 'Plasticity', definition: 'The property by which a material does not regain its original dimensions at all and acquires a permanent deformation when the deforming force is removed.', examples: ['Modeling clay or putty being molded.', 'Bending a paperclip until it stays bent.'], hint: 'Think: "Plastic surgery" - it changes shape permanently.' },
    { id: 't3', icon: <IconZap />, title: 'Stress', definition: 'The internal restoring force acting per unit area of a deformed body.', examples: ['Weight hanging from a wire creating tensile stress.', 'Submarine under water experiencing volume stress.'], hint: 'Formula: σ = F/A. Unit is Pascal (Pa).' },
    { id: 't4', icon: <IconRuler />, title: 'Strain', definition: 'The ratio of the change in dimension of a body to its original dimension.', examples: ['A 1m wire stretching by 1mm (Strain = 0.001).', 'A balloon shrinking under pressure.'], hint: 'It has no units! It is a pure ratio.' },
    { id: 't5', icon: <IconZapLarge />, title: 'Elastic Limit', definition: 'The maximum stress up to which a body completely recovers its original shape upon removal of the deforming force.', examples: ['Stretching a spring too far so it gets ruined.'], hint: 'Beyond this point, Hooke\'s law fails and permanent damage begins.' },
];

const lawsData = [
    { id: 'l1', icon: <IconBook />, label: 'Law 1', title: "Hooke's Law", definition: "For small deformations, the stress and strain are directly proportional to each other. Stress ∝ Strain.", examples: ['Spring balances rely entirely on this principle.', 'The linear part of a stress-strain curve.'], hint: "Stress = E × Strain. (Where E is the modulus of elasticity)" },
    { id: 'l2', icon: <IconCube />, label: 'Modulus 1', title: "Young's Modulus (Y)", definition: "The ratio of tensile (or compressive) stress to the longitudinal strain. Relevant for 1D stretching.", examples: ['Calculating how much a steel cable will stretch under an elevator.', 'Comparing stiffness of bones.'], hint: "Y = (F/A) / (ΔL/L). High Y = Stiff material." },
    { id: 'l3', icon: <IconZap />, label: 'Modulus 2', title: "Shear Modulus (G)", definition: "The ratio of shearing stress to the corresponding shearing strain. Relevant for twisting or sliding forces.", examples: ['Twisting a metal cylinder (torsion).', 'A thick book being pushed sideways.'], hint: "Also known as the Modulus of Rigidity." },
    { id: 'l4', icon: <IconDroplets />, label: 'Modulus 3', title: "Bulk Modulus (B)", definition: "The ratio of hydraulic (volume) stress to the corresponding volume strain. Relevant for all states of matter.", examples: ['Compressing water deep in the ocean.', 'Air compression in a sealed syringe.'], hint: "B = -P / (ΔV/V). The negative sign indicates volume decreases as pressure increases." },
];

const quizData = [
    { q: "Which of the following materials is generally considered the most elastic?", options: ["Rubber", "Steel", "Glass", "Wood"], answer: 1, explanation: "Steel is more elastic than rubber because it requires a much larger restoring force for a given deformation, and it regains its shape more perfectly." },
    { q: "What is the dimensional formula for Stress?", options: ["[M L T⁻²]", "[M L⁻¹ T⁻²]", "[M L² T⁻²]", "Dimensionless"], answer: 1, explanation: "Stress = Force / Area. Force is [M L T⁻²] and Area is [L²]. Dividing them gives [M L⁻¹ T⁻²], same as pressure." },
    { q: "Strain is a dimensionless quantity because it is:", options: ["Too small to measure", "A ratio of two identical physical quantities", "A scalar quantity", "Constant for all materials"], answer: 1, explanation: "Strain is defined as the change in dimension divided by the original dimension (e.g., length/length). Thus, units cancel out." },
    { q: "Which modulus of elasticity is relevant for fluids (liquids and gases)?", options: ["Young's Modulus", "Shear Modulus", "Bulk Modulus", "None of them"], answer: 2, explanation: "Fluids can only resist a change in volume, not length or shape. Therefore, only Bulk Modulus applies to fluids." },
    { q: "The point on the stress-strain curve beyond which the material exhibits permanent plastic deformation is called:", options: ["Proportional Limit", "Yield Point (Elastic Limit)", "Breaking Point", "Ultimate Strength"], answer: 1, explanation: "The Yield Point (or Elastic Limit) marks the end of elastic behavior. Beyond this, the material will not return to its original shape." }
];

