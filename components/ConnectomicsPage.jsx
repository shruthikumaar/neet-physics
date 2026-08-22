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
                    This chapter connects directly to <strong>Mechanical Properties of Fluids (Ch 10)</strong>, <strong>Thermal Properties of Matter (Ch 11)</strong>, and <strong>Oscillations & Waves (Ch 14, 15)</strong>. The principles of restoring force established here are fundamental â€” every subsequent chapter examining states of matter or wave propagation either applies or extends it.
                </div>
            </div>
        </div>

        <div className="page-section">
            <h2 className="section-title">The Web of Physics</h2>
            <div className="web-grid">
                <div className="web-card card-blue">
                    <div className="web-tag tag-blue">âš¡ Direct</div>
                    <div className="web-title">
                        <div>Laws of Motion (Ch.5)</div>
                        <div><span style={{color: '#94a3b8', marginRight: '0.25rem', fontSize: '0.85rem'}}>â†’</span> <span>Work, Energy & Power (Ch.6)</span></div>
                    </div>
                    <div className="web-desc">Force applied over a distance defines work. Without understanding F=ma, you can't derive kinetic energy or the work-energy theorem.</div>
                </div>
                <div className="web-card card-green">
                    <div className="web-tag tag-green">ðŸŒ Direct</div>
                    <div className="web-title">
                        <div>Laws of Motion (Ch.5)</div>
                        <div><span style={{color: '#94a3b8', marginRight: '0.25rem', fontSize: '0.85rem'}}>â†’</span> <span>Gravitation (Ch.8)</span></div>
                    </div>
                    <div className="web-desc">Newton's law of universal gravitation is a direct extension of his Third Law. Gravitational force provides the centripetal force for orbits.</div>
                </div>
                <div className="web-card card-purple">
                    <div className="web-tag tag-purple">ðŸ”„ Fundamental</div>
                    <div className="web-title">
                        <div>Laws of Motion (Ch.5)</div>
                        <div><span style={{color: '#94a3b8', marginRight: '0.25rem', fontSize: '0.85rem'}}>â†’</span> <span>Rotational Motion (Ch.7)</span></div>
                    </div>
                    <div className="web-desc">Torque is the rotational analogue of force. Newton's Second Law extends to rotation as Ï„ = IÎ±.</div>
                </div>
                <div className="web-card card-yellow">
                    <div className="web-tag tag-yellow">ðŸ” Mirror</div>
                    <div className="web-title">
                        <div>Laws of Motion (Ch.5)</div>
                        <div><span style={{color: '#94a3b8', marginRight: '0.25rem', fontSize: '0.85rem'}}>â†’</span> <span>Oscillations (Ch.14)</span></div>
                    </div>
                    <div className="web-desc">Simple Harmonic Motion is derived directly from Newton's Second Law: the restoring force F = -kx gives a = -Ï‰Â²x.</div>
                </div>
                <div className="web-card card-pink">
                    <div className="web-tag tag-pink">ðŸŒŠ Indirect</div>
                    <div className="web-title">
                        <div>Laws of Motion (Ch.5)</div>
                        <div><span style={{color: '#94a3b8', marginRight: '0.25rem', fontSize: '0.85rem'}}>â†’</span> <span>Waves (Ch.15)</span></div>
                    </div>
                    <div className="web-desc">Wave propagation in a medium depends on the forces between particles. The speed of sound itself is derived from Newton's formula.</div>
                </div>
            </div>
        </div>

        <div className="page-section">
            <h2 className="section-title">Real World Systems</h2>
            <div className="real-world-grid">
                <div className="rw-card">
                    <div className="rw-tag">IMPACT: HIGH</div>
                    <h3 className="rw-title">Automotive Safety Engineering</h3>
                    <p className="rw-desc">Seatbelts and airbags are designed using impulse-momentum theorem â€” they increase the time of collision to reduce the peak force on the body.</p>
                </div>
                <div className="rw-card">
                    <div className="rw-tag">IMPACT: ESSENTIAL</div>
                    <h3 className="rw-title">Space Mission Design</h3>
                    <p className="rw-desc">NASA uses Newton's Third Law to calculate exact thrust needed. Every rocket launch is a direct application of action-reaction forces.</p>
                </div>
                <div className="rw-card">
                    <div className="rw-tag">IMPACT: EMERGING</div>
                    <h3 className="rw-title">Sports Biomechanics</h3>
                    <p className="rw-desc">Athletes optimize performance using force analysis: cricketers lower hands while catching to reduce impulsive force, sprinters use spiked shoes for more friction.</p>
                </div>
            </div>
        </div>

        <div className="page-section">
            <div className="infinite-box">
                <div className="infinite-icon"><IconShare2 /></div>
                <h3>Infinite Connections</h3>
                <p>Newton's Laws aren't just a chapter â€” they're the backbone of engineering, sports science, and space exploration. Every time a car brakes or a rocket launches, these laws are at work.</p>
                <button className="btn-outline" onClick={onNext}>Next Topic: Intro <IconArrowRight/></button>
            </div>
        </div>
    </div>
);

const skillsData = [
    {
        id: 's1', icon: 'ðŸ“', title: 'Stress & Strain Analysis', 
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
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Stress (Ïƒ):</h3>
                      <p>When a deforming force is applied to a body, internal restoring forces arise. The restoring force per unit area is called stress.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Ïƒ = F / A</div>
                      
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b'}}>Strain (Îµ):</h3>
                      <p>The ratio of change in dimension to the original dimension is called strain. It is a dimensionless quantity.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Îµ = Î”L / L</div>
                      
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
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Ïƒ_L = F_perpendicular / A</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>2. Tangential (Shear) Stress:</h3>
                      <p>When the deforming force is applied parallel (tangential) to the surface, causing a change in shape without changing volume.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Ïƒ_S = F_parallel / A</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>3. Hydraulic (Volume) Stress:</h3>
                      <p>When a body is subjected to uniform force from all sides (like an object submerged in fluid), resulting in a change in volume.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Ïƒ_V = Pressure (P)</div>
                  </>
              ),
              alert: { title: 'NEET Trap', content: 'In hydraulic stress, the force is applied perpendicularly from all directions, so Stress = Pressure = Ïgh in fluid dynamics.' }
            },
            { 
              title: 'Types of Strain', 
              content: (
                  <>
                      <p>Strain is the response to stress. Since it is a ratio of similar quantities, it has no units and is dimensionless.</p>
                      
                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>1. Longitudinal Strain:</h3>
                      <p>Ratio of change in length to original length. Produced by longitudinal stress.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Îµ_L = Î”L / L</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>2. Shearing Strain:</h3>
                      <p>The angular displacement of a plane perpendicular to the fixed surface. Often denoted by Î¸.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Îµ_S = Î”x / L = tan(Î¸) â‰ˆ Î¸</div>

                      <h3 style={{fontSize: '1rem', fontWeight: 800, marginBottom: '0.5rem', marginTop: '1.5rem', color: '#1e293b'}}>3. Volume Strain:</h3>
                      <p>Ratio of change in volume to original volume. Produced by hydraulic stress.</p>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Îµ_V = Î”V / V</div>
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
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Stress âˆ Strain</div>
                      <div className="learn-formula" style={{padding: '0.75rem', fontSize: '1rem'}}>Stress = E Ã— Strain</div>
                      <p>Where <strong>E</strong> is the Modulus of Elasticity.</p>
                      <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.6'}}>
                          <li>The value of E depends on the nature of the material and temperature.</li>
                          <li>It is independent of the dimensions of the body (length, volume, etc).</li>
                          <li>Unit of E is identical to Stress (N/mÂ² or Pascal) since strain is dimensionless.</li>
                      </ul>
                  </>
              )
            }
        ],
        practiceQuestions: [
            { q: 'What is the SI unit of stress?', options: ['Newton', 'Joule', 'Pascal', 'Watt'], answer: 2, explanation: 'Stress = Force / Area. N/mÂ² is also known as Pascal (Pa).' },
            { q: 'A wire is stretched to double its length. What is the longitudinal strain?', options: ['0.5', '1', '2', '4'], answer: 1, explanation: 'Strain = Î”L/L. Since final length is 2L, Î”L = 2L - L = L. Strain = L/L = 1.' },
            { q: 'Which of the following is a dimensionless quantity?', options: ['Stress', 'Strain', 'Young\'s Modulus', 'Pressure'], answer: 1, explanation: 'Strain is a ratio of two lengths, hence it has no units and is dimensionless.' },
            { q: 'Hooke\'s law defines the proportionality between:', options: ['Force and Area', 'Stress and Strain', 'Mass and Velocity', 'Pressure and Volume'], answer: 1, explanation: 'Hooke\'s law states that within the elastic limit, stress is directly proportional to strain.' },
            { q: 'Which material is more elastic?', options: ['Rubber', 'Steel', 'Plastic', 'Wood'], answer: 1, explanation: 'Steel is more elastic than rubber because it requires a greater force to produce a given strain and returns to its original shape faster.' },
            { q: 'The ratio of lateral strain to longitudinal strain is called:', options: ['Young\'s Modulus', 'Bulk Modulus', 'Poisson\'s Ratio', 'Shear Modulus'], answer: 2, explanation: 'Poisson\'s Ratio is defined as the ratio of lateral strain to longitudinal strain.' },
            { q: 'Bulk modulus applies to:', options: ['Solids only', 'Liquids only', 'Gases only', 'Solids, liquids, and gases'], answer: 3, explanation: 'Bulk modulus relates to volume changes, which can happen in all three states of matter.' },
            { q: 'The reciprocal of bulk modulus is called:', options: ['Compressibility', 'Elasticity', 'Plasticity', 'Rigidity'], answer: 0, explanation: 'Compressibility is defined as the fractional change in volume per unit increase in pressure, which is 1 / Bulk Modulus.' },
            { q: 'Shear modulus is also known as:', options: ['Modulus of elasticity', 'Modulus of rigidity', 'Bulk modulus', 'Young\'s modulus'], answer: 1, explanation: 'Shear modulus relates to the change in shape (shearing) and is called the modulus of rigidity.' },
            { q: 'If the radius of a wire is doubled while the load remains the same, the stress:', options: ['Doubles', 'Halves', 'Becomes one-fourth', 'Remains the same'], answer: 2, explanation: 'Stress = Force / Area = F / (Ï€rÂ²). If r is doubled, Area becomes 4 times larger, so stress becomes 1/4.' },
            { q: 'The point on a stress-strain curve beyond which deformation is permanent is:', options: ['Proportional limit', 'Elastic limit', 'Fracture point', 'Ultimate strength'], answer: 1, explanation: 'Beyond the elastic limit (yield point), the material enters the plastic region and will not return to its original shape.' },
            { q: 'What type of strain is associated with a change in volume?', options: ['Longitudinal strain', 'Shearing strain', 'Lateral strain', 'Volume strain'], answer: 3, explanation: 'Volume strain is the ratio of the change in volume to the original volume.' },
            { q: 'When a material breaks just after reaching the elastic limit, it is called:', options: ['Ductile', 'Malleable', 'Brittle', 'Plastic'], answer: 2, explanation: 'Brittle materials fracture almost immediately after the elastic limit is exceeded, without significant plastic deformation.' },
            { q: 'The area under the force-extension graph gives:', options: ['Stress', 'Strain', 'Work done', 'Modulus of elasticity'], answer: 2, explanation: 'The area under a force-extension curve represents the elastic potential energy or work done in stretching the wire.' },
            { q: 'Which is a correct unit for Young\'s Modulus?', options: ['N/m', 'N/mÂ²', 'NÂ·m', 'N/mÂ³'], answer: 1, explanation: 'Young\'s Modulus = Stress / Strain. Since strain is dimensionless, its unit is the same as stress, N/mÂ².' }
        ]
    },
    {
        id: 's2', icon: 'âš–ï¸', title: 'Hooke\'s Law & Moduli', 
        desc: 'Understand the linear relationship between stress and strain.',
        assessColor: 'green',
        learnSections: [
            { title: 'Hooke\'s Law', content: 'For small deformations, the stress and strain are directly proportional to each other. This means Stress âˆ Strain, or Stress = E Ã— Strain.', formula: 'Stress = E Ã— Strain' },
            { title: 'Young\'s Modulus (Y)', content: 'The ratio of tensile stress to longitudinal strain. Y = (F/A) / (Î”L/L). It measures the resistance of a solid to a change in its length.', formula: 'Y = \u03C3 / \u03B5 = (F/A) / (\u0394L/L)', alert: { title: 'Exam Tip', content: 'Steel has a higher Young\'s modulus than rubber, making it more elastic (it resists deformation more strongly).' } },
            { title: 'Bulk & Shear Moduli', content: 'Bulk Modulus (B) relates to volume changes (B = -P / (Î”V/V)). Shear Modulus (G or Î·) relates to shape changes.' },
            { title: 'Moduli of Fluids', content: 'Fluids (liquids and gases) can only resist changes in volume, not shape or length. Thus, they only possess Bulk Modulus.', table: { headers: ['State', 'Young\'s', 'Bulk', 'Shear'], rows: [['Solids', 'Yes', 'Yes', 'Yes'], ['Liquids', 'No', 'Yes', 'No'], ['Gases', 'No', 'Yes', 'No']] } },
            { title: 'Gases (NEET HOTS)', content: 'For a gas, the bulk modulus depends on the thermodynamic process. Isothermal bulk modulus = Pressure (P). Adiabatic bulk modulus = Î³ Ã— Pressure (Î³P).' }
        ],
        practiceQuestions: [
            { q: 'According to Hooke\'s law of elasticity, if stress is increased, the ratio of stress to strain:', options: ['Increases', 'Decreases', 'Becomes zero', 'Remains constant'], answer: 3, explanation: 'The ratio of stress to strain is the Modulus of Elasticity, which is a constant for a given material within the elastic limit.' },
            { q: 'Which of the following has the highest Young\'s modulus?', options: ['Rubber', 'Wood', 'Steel', 'Aluminium'], answer: 2, explanation: 'Steel is highly resistant to stretching compared to the others, meaning a large force produces a small strain.' },
            { q: 'The unit of Young\'s modulus is:', options: ['N/m', 'N/mÂ²', 'NÂ·m', 'Dimensionless'], answer: 1, explanation: 'It is the ratio of stress (N/mÂ²) to strain (dimensionless).' },
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
        id: 's3', icon: 'ðŸ“ˆ', title: 'Stress-Strain Curve', 
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
        id: 's4', icon: 'âš¡', title: 'Strain Energy', 
        desc: 'Calculate the elastic potential energy stored in a deformed body.',
        assessColor: 'orange',
        learnSections: [
            { title: 'Formula', content: 'Energy U = Â½ Ã— Stress Ã— Strain Ã— Volume. Energy density (energy per unit volume) is Â½ Ã— Stress Ã— Strain.' },
            { title: 'Alternative Forms', content: 'Strain energy density (u) can also be written in terms of Young\'s Modulus (Y).', formula: 'u = \u00BD \u00D7 (\u03C3\u00B2 / Y) = \u00BD \u00D7 Y \u00D7 \u03B5\u00B2' },
            { title: 'Spring Analogy (NEET Tip)', content: 'A stretched wire behaves exactly like a spring with force constant k = YA/L.', formula: 'Work Done = \u00BD k x\u00B2 = \u00BD (YA/L) (\u0394L)\u00B2' }
        ],
        practiceQuestions: [
            { q: 'The energy stored per unit volume in a stretched wire is:', options: ['Â½ Ã— Stress Ã— Strain', 'Stress Ã— Strain', 'Â½ Ã— Load Ã— Extension', 'Zero'], answer: 0, explanation: 'Energy density = Â½ Ã— Stress Ã— Strain.' },
            { q: 'Total strain energy in a stretched wire is given by:', options: ['Â½ F Ã— Î”L', 'F Ã— Î”L', '2 F Ã— Î”L', 'Â½ F / Î”L'], answer: 0, explanation: 'Total energy is Â½ Ã— Load Ã— Extension.' },
            { q: 'When a spring is stretched, the work done is stored as:', options: ['Kinetic energy', 'Thermal energy', 'Elastic potential energy', 'Chemical energy'], answer: 2, explanation: 'Work done against restorative forces is stored as elastic potential energy.' },
            { q: 'If a wire is stretched to double its extension, the strain energy:', options: ['Doubles', 'Halves', 'Quadruples', 'Remains same'], answer: 2, explanation: 'Energy U = Â½ k xÂ². Doubling x makes U four times larger.' },
            { q: 'The area under a force-extension graph gives:', options: ['Force', 'Stress', 'Strain energy', 'Young\'s modulus'], answer: 2, explanation: 'Area = Â½ F Ã— Î”L = Strain energy.' },
            { q: 'Strain energy per unit volume can also be written as:', options: ['Â½ Ã— StressÂ² / Y', 'Â½ Ã— StrainÂ² / Y', 'Â½ Ã— Stress Ã— Y', 'Â½ Ã— Strain / Y'], answer: 0, explanation: 'Substitute Strain = Stress/Y into Â½ Ã— Stress Ã— Strain.' },
            { q: 'If Young\'s modulus is higher, for the same stress, the stored energy density is:', options: ['Higher', 'Lower', 'Same', 'Zero'], answer: 1, explanation: 'U = Â½ StressÂ² / Y, so it is inversely proportional to Y for a given stress.' },
            { q: 'If a wire is unloaded, the energy recovered is represented by:', options: ['Area under loading curve', 'Area under unloading curve', 'Difference in areas', 'Zero'], answer: 1, explanation: 'The unloading curve area represents the recovered elastic energy.' },
            { q: 'The energy lost during a loading-unloading cycle is called:', options: ['Elastic energy', 'Hysteresis loss', 'Potential energy', 'Thermal energy'], answer: 1, explanation: 'The area between the loading and unloading curves is the hysteresis loss.' },
            { q: 'Which material has the largest hysteresis loop?', options: ['Steel', 'Glass', 'Vulcanized rubber', 'Wood'], answer: 2, explanation: 'Rubber exhibits significant elastic hysteresis, used for shock absorption.' },
            { q: 'A wire is stretched by force F. If cut in half and same force applied, the energy stored in one half is:', options: ['Same', 'Half', 'Double', 'Quarter'], answer: 1, explanation: 'U = Â½ FÂ² L / (A Y). Halving L halves U.' },
            { q: 'Elastic hysteresis is used in:', options: ['Making springs', 'Shock absorbers', 'Electrical wires', 'Thermometers'], answer: 1, explanation: 'Hysteresis dissipates energy as heat, useful for dampening vibrations.' },
            { q: 'When rubber is stretched and relaxed, the energy dissipated appears as:', options: ['Light', 'Sound', 'Heat', 'Electricity'], answer: 2, explanation: 'Hysteresis loss converts mechanical energy into thermal energy.' },
            { q: 'The unit of strain energy is:', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 0, explanation: 'It is a form of energy, so the unit is Joule.' },
            { q: 'The unit of strain energy density is:', options: ['Joule', 'J/mÂ³', 'N/m', 'Watt/mÂ²'], answer: 1, explanation: 'Energy per unit volume is Joules per cubic meter.' }
        ]
    },
    {
        id: 's5', icon: 'â†”ï¸', title: 'Poisson\'s Ratio', 
        desc: 'Understand lateral strain and its relationship to longitudinal strain.',
        assessColor: 'red',
        learnSections: [
            { title: 'Definition', content: 'Poisson\'s ratio (Ïƒ) is the ratio of lateral strain to longitudinal strain. For most practical materials, it lies between 0 and 0.5.' },
            { title: 'Volume Change', content: 'When a wire is stretched, its volume changes. The fractional change in volume is directly related to Poisson\'s ratio.', formula: '\u0394V/V = (1 - 2\u03C3) \u00D7 (\u0394L/L)', alert: { title: 'Important', content: 'If a material is perfectly incompressible (like ideal rubber), its volume doesn\'t change (Î”V=0), meaning Ïƒ = 0.5.' } },
            { title: 'Relations between Constants', content: 'These four formulas relating Y, Bulk Modulus (K), Shear Modulus (Î·), and Ïƒ are extremely frequent in NEET numericals.', formula: 'Y = 3K(1 - 2\u03C3)\nY = 2\u03B7(1 + \u03C3)\n9/Y = 1/K + 3/\u03B7\n\u03C3 = (3K - 2\u03B7) / (6K + 2\u03B7)' }
        ],
        practiceQuestions: [
            { q: 'The theoretical value of Poisson\'s ratio lies between:', options: ['-1 and 0.5', '0 and 1', '0.5 and 1', '-1 and 0'], answer: 0, explanation: 'Theoretically, it can be between -1 and 0.5, though practical materials are usually between 0 and 0.5.' },
            { q: 'Poisson\'s ratio is defined as:', options: ['Lateral strain / Longitudinal strain', 'Longitudinal strain / Lateral strain', 'Shear strain / Volume strain', 'Stress / Strain'], answer: 0, explanation: 'It is the ratio of lateral (transverse) strain to longitudinal (axial) strain.' },
            { q: 'For an incompressible material, Poisson\'s ratio is exactly:', options: ['0', '0.25', '0.5', '1.0'], answer: 2, explanation: 'If volume is constant, Î”V = 0, which corresponds to Ïƒ = 0.5.' },
            { q: 'Which of the following is a unitless quantity?', options: ['Young\'s modulus', 'Bulk modulus', 'Poisson\'s ratio', 'Force constant'], answer: 2, explanation: 'It is a ratio of two strains, both of which are unitless.' },
            { q: 'Most common metals have a Poisson\'s ratio around:', options: ['0.1', '0.3', '0.5', '0.7'], answer: 1, explanation: 'Metals typically have Ïƒ ~ 0.3.' },
            { q: 'A negative Poisson\'s ratio means the material:', options: ['Shrinks laterally when stretched', 'Expands laterally when stretched', 'Does not deform', 'Breaks instantly'], answer: 1, explanation: 'Auxetic materials expand laterally when stretched.' },
            { q: 'Cork has a Poisson\'s ratio close to:', options: ['0.5', '0.3', '0', '-0.5'], answer: 2, explanation: 'Cork barely expands laterally when compressed, which is why it is used for wine bottles (Ïƒ ~ 0).' },
            { q: 'The relation between Young\'s modulus (Y), Bulk modulus (B) and Poisson\'s ratio (Ïƒ) is:', options: ['Y = 3B(1 - 2Ïƒ)', 'Y = 2B(1 + Ïƒ)', 'Y = B(1 - Ïƒ)', 'Y = 3B(1 + 2Ïƒ)'], answer: 0, explanation: 'This is a standard elastic constant relation.' },
            { q: 'The relation between Y, Shear modulus (G) and Ïƒ is:', options: ['Y = 2G(1 + Ïƒ)', 'Y = 3G(1 - 2Ïƒ)', 'Y = G(1 + Ïƒ)', 'Y = 2G(1 - Ïƒ)'], answer: 0, explanation: 'Standard relation: Y = 2G(1 + Ïƒ).' },
            { q: 'If Poisson\'s ratio is 0.5, the Bulk modulus B is:', options: ['Zero', 'Infinity', 'Equal to Y', 'Equal to G'], answer: 1, explanation: 'Y = 3B(1 - 2Ïƒ). If Ïƒ=0.5, 1-2Ïƒ=0, so B must be infinity (incompressible).' },
            { q: 'If a wire is stretched, its volume:', options: ['Always increases', 'Always decreases', 'Remains constant if Ïƒ = 0.5', 'Is independent of Ïƒ'], answer: 2, explanation: 'Volume is strictly constant only if Ïƒ = 0.5.' },
            { q: 'Poisson\'s effect occurs because:', options: ['Bonds are broken', 'Volume tends to be conserved', 'Temperature changes', 'Material yields'], answer: 1, explanation: 'Materials tend to conserve volume when stretched, causing lateral contraction.' },
            { q: 'Can Poisson\'s ratio be greater than 0.5 in an isotropic material?', options: ['Yes', 'No', 'Only in liquids', 'Only at high temperatures'], answer: 1, explanation: 'Thermodynamics requires Ïƒ â‰¤ 0.5 for isotropic materials.' },
            { q: 'Rubber has a Poisson\'s ratio close to:', options: ['0', '0.2', '0.33', '0.5'], answer: 3, explanation: 'Rubber is nearly incompressible, so Ïƒ ~ 0.5.' },
            { q: 'If longitudinal strain is 2% and lateral strain is 0.5%, Poisson\'s ratio is:', options: ['0.25', '0.5', '4', '0.01'], answer: 0, explanation: 'Ïƒ = 0.5 / 2 = 0.25.' }
        ]
    },
    {
        id: 's6', icon: 'ðŸ•°ï¸', title: 'Elastic After-Effect', 
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
                solution: 'Young\'s modulus Y = (F/A) / (Î”L/L). Here F = Mg, Î”L = L1 - L. Therefore, Y = (Mg/A) / ((L1 - L)/L) = MgL / (A(L1 - L)).'
            },
            {
                year: 'NEET 2022',
                q: 'The stretch in a steel wire of length 2m and cross-sectional area 2 mmÂ² under a load of 4 kg is: (Given Y = 2 Ã— 10Â¹Â¹ N/mÂ², g = 9.8 m/sÂ²)',
                options: ['0.196 mm', '1.96 mm', '0.0196 mm', '19.6 mm'],
                answer: 0,
                solution: 'Î”L = FL / AY = (4 Ã— 9.8 Ã— 2) / (2Ã—10â»â¶ Ã— 2Ã—10Â¹Â¹) = 78.4 / (4Ã—10âµ) = 19.6 Ã— 10â»âµ m = 0.196 mm.'
            },
            {
                year: 'NEET 2020',
                q: 'Two wires are made of the same material and have the same volume. The first wire has cross-sectional area A and the second wire has cross-sectional area 3A. If the length of the first wire is increased by Î”L on applying a force F, how much force is needed to stretch the second wire by the same amount?',
                options: ['F', '4F', '6F', '9F'],
                answer: 3,
                solution: 'Since V = AL, length of second wire is L/3. Force F = YAÎ”L/L. For second wire, F\' = Y(3A)Î”L / (L/3) = 9 (YAÎ”L/L) = 9F.'
            }
        ],
        formulae: [
            { quantity: 'Stress', formula: 'Ïƒ = F / A', unit: 'N/mÂ²' },
            { quantity: 'Strain', formula: 'Îµ = Î”L / L', unit: 'No unit' },
            { quantity: 'Young\'s Modulus', formula: 'Y = Ïƒ / Îµ', unit: 'N/mÂ²' },
            { quantity: 'Bulk Modulus', formula: 'B = -Î”P / (Î”V/V)', unit: 'N/mÂ²' },
            { quantity: 'Shear Modulus', formula: 'Î· = (F/A) / Î¸', unit: 'N/mÂ²' },
            { quantity: 'Poisson\'s Ratio', formula: 'Î½ = - (Î”d/d) / (Î”L/L)', unit: 'No unit' },
            { quantity: 'Thermal Stress', formula: 'Ïƒ_t = Y Î± Î”T', unit: 'N/mÂ²' },
            { quantity: 'Work Done (Stretching)', formula: 'W = Â½ Ã— F Ã— Î”L = Â½ (YA/L) Î”LÂ²', unit: 'J' },
            { quantity: 'Energy Density', formula: 'u = Â½ Ã— Stress Ã— Strain', unit: 'J/mÂ³' },
            { quantity: 'Relation (Y, B, Î½)', formula: 'Y = 3B(1 - 2Î½)', unit: '-' },
            { quantity: 'Relation (Y, Î·, Î½)', formula: 'Y = 2Î·(1 + Î½)', unit: '-' }
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
                q: 'A steel wire of length 3.2 m and cross-section area 0.2 cmÂ² is stretched by a force. The Young\'s modulus of steel is 2.0 Ã— 10Â¹Â¹ N/mÂ². If the elastic potential energy stored in the wire is 0.8 J, what is the elongation of the wire?',
                options: ['0.5 mm', '1.13 mm', '2.0 mm', '2.5 mm'],
                answer: 1,
                solution: 'U = Â½ F Î”L. Since F = YAÎ”L/L, U = Â½ (YA/L)(Î”L)Â². 0.8 = Â½ Ã— (2Ã—10Â¹Â¹ Ã— 0.2Ã—10â»â´ / 3.2) Ã— (Î”L)Â². 0.8 = Â½ Ã— (1.25Ã—10â¶) Ã— (Î”L)Â². Î”LÂ² = 1.28Ã—10â»â¶ => Î”L â‰ˆ 1.13 mm.'
            },
            {
                year: 'JEE Main 2022',
                q: 'Two wires are made of the same material and have the same volume. However, wire 1 has cross-sectional area A and wire 2 has cross-sectional area 3A. If the length of wire 1 increases by Î”x on applying force F, how much force is needed to stretch wire 2 by the same amount?',
                options: ['F', '4F', '6F', '9F'],
                answer: 3,
                solution: 'Volume V = Aâ‚Lâ‚ = Aâ‚‚Lâ‚‚. So Lâ‚ = V/A, Lâ‚‚ = V/3A. Î”x = FL/(AY). Fâ‚ = YAâ‚Î”x/Lâ‚ = YAÂ²Î”x/V. Fâ‚‚ = YAâ‚‚Î”x/Lâ‚‚ = Y(3A)Â²Î”x/V = 9YAÂ²Î”x/V = 9Fâ‚.'
            }
        ],
        formulae: [
            { quantity: 'Thermal Stress', formula: 'Ïƒ = YÎ±Î”T', unit: 'N/mÂ²' },
            { quantity: 'Work done in stretching', formula: 'W = 1/2 Ã— F Ã— Î”L', unit: 'J' },
            { quantity: 'Depression of a beam', formula: 'Î´ = WlÂ³ / (4bdÂ³Y)', unit: 'm' }
        ],
        revisionCards: [
            { title: 'THERMAL STRESS', points: ['Arises when thermal expansion is restricted', 'F = YAÎ±Î”T', 'Independent of length'] },
            { title: 'ENERGY STORED', points: ['U = 1/2 Ã— F Ã— Î”L = 1/2 Ã— (YA/L) Ã— (Î”L)Â²', 'Acts like a spring with k = YA/L'] }
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
                q: 'The Bulk modulus of water is 2.1 Ã— 10â¹ N/mÂ². To reduce its volume by 0.1%, what pressure is required?',
                options: ['2.1 Ã— 10â¶ N/mÂ²', '2.1 Ã— 10âµ N/mÂ²', '2.1 Ã— 10â· N/mÂ²', '2.1 Ã— 10â¸ N/mÂ²'],
                answer: 0,
                solution: 'B = P / (Î”V/V) => P = B Ã— (Î”V/V). P = (2.1 Ã— 10â¹) Ã— (0.1/100) = 2.1 Ã— 10â¹ Ã— 10â»Â³ = 2.1 Ã— 10â¶ N/mÂ².'
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
            { quantity: 'Young\'s Modulus', formula: 'Y = (F/A) / (Î”L/L)', unit: 'N/mÂ²' },
            { quantity: 'Bulk Modulus', formula: 'B = -Î”P / (Î”V/V)', unit: 'N/mÂ²' },
            { quantity: 'Compressibility', formula: 'K = 1 / B', unit: 'mÂ²/N' },
            { quantity: 'Shear Modulus', formula: 'Î· = (F/A) / Î¸', unit: 'N/mÂ²' },
            { quantity: 'Poisson\'s Ratio', formula: 'Î½ = - (Î”D/D) / (Î”L/L)', unit: 'No unit' },
            { quantity: 'Depression of Beam', formula: 'Î´ = WlÂ³ / (4bdÂ³Y)', unit: 'm' },
            { quantity: 'Elongation due to self weight', formula: 'Î”L = (ÏgLÂ²) / (2Y)', unit: 'm' }
        ],
        revisionCards: [
            { title: 'DIMENSIONS', points: ['Stress, Pressure, Modulus of Elasticity have the same dimensions: [M Lâ»Â¹ Tâ»Â²]', 'Strain and Poisson\'s ratio are dimensionless'] }
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
                options: ['Stress âˆ Strain', 'Stress âˆ 1/Strain', 'Stress = Strain', 'Force âˆ Area'],
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
            { quantity: 'Hooke\'s Law', formula: 'Stress âˆ Strain (within elastic limit)', unit: '-' }
        ],
        revisionCards: [
            { title: 'IMPORTANT DEFINITIONS', points: ['Elasticity: Property to regain original shape', 'Plasticity: Permanent deformation', 'Hooke\'s Law'] },
            { title: 'DERIVATIONS', points: ['Expression for elastic potential energy in a stretched wire: U = 1/2 Ã— stress Ã— strain Ã— volume'] }
        ],
        finalStrategy: 'Write clear definitions and draw neat diagrams (especially the stress-strain graph). State Hooke\'s law properly with the condition "within the elastic limit".'
    }
};

