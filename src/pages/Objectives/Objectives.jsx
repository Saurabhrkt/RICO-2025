import React from 'react';
import './Objectives.css';

const Objectives = () => {
  const objectiveData = [
    {
      id: 1,
      title: 'Multidisciplinary Knowledge in Control & Optimization',
      description: 'Provide participants with in-depth understanding of robust, adaptive, and AI-integrated control systems, and optimization techniques that are revolutionizing modern industry and infrastructure.',
      icon: '📘',
      iconClass: 'multidisciplinary',
      highlights: ['AI in Control', 'Nature-Inspired Optimization', 'Multidisciplinary Skills']
    },
    {
      id: 2,
      title: 'Focus on National Priority Sectors',
      description: 'Explore control and optimization technologies across EVs, Smart Grids, Agritech, Defense, and Space sectors.',
      icon: '🚀',
      iconClass: 'priority-sectors',
      highlights: ['Electric Vehicles', 'Smart Grids', 'Defense & Agritech']
    },
    {
      id: 3,
      title: 'Strengthen Academia-Industry Collaboration',
      description: 'Encourage co-development of indigenous technologies by linking academic research with real-world challenges in industry and defense.',
      icon: '🏭',
      iconClass: 'collaboration',
      highlights: ['Joint R&D', 'Prototypes', 'Industry-Academia Partnerships']
    },
    {
      id: 4,
      title: 'Foster Research Aligned with National Vision',
      description: 'Support NEP 2020 and Viksit Bharat 2047 by integrating research, innovation, and education towards a sustainable future.',
      icon: '📜',
      iconClass: 'policy-support',
      highlights: ['NEP 2020', 'Viksit Bharat 2047', 'Innovation-Led Learning']
    },
    {
      id: 5,
      title: 'Empower Indigenous Technological Advancements',
      description: 'Promote indigenous design and implementation under Make in India, Aatmanirbhar Bharat, and Digital India initiatives.',
      icon: '🧬',
      iconClass: 'indigenous-research',
      highlights: ['Made in India', 'Digital Control', 'Cyber-Physical Systems']
    }
  ];

  return (
    <div className="objectives-container" id='objectives'>
      <div className="objectives-header">
        <h1 className="objectives-title">Core Objectives</h1>
        <p className="objectives-subtitle">
          Empowering India's transformation through cutting-edge research in robust and data-driven control, and nature-inspired optimization techniques.
        </p>
      </div>

      <div className="objectives-grid">
        {objectiveData.map((objective) => (
          <div key={objective.id} className="objective-card">
            <div className={`card-icon ${objective.iconClass}`}>
              {objective.icon}
            </div>
            <h3 className="card-title">{objective.title}</h3>
            <p className="card-description">
              {objective.description}
            </p>
            <div className="card-highlights">
              {objective.highlights.map((highlight, index) => (
                <span key={index} className="card-highlight">
                  {highlight}
                  {index < objective.highlights.length - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;