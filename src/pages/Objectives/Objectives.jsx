import React from 'react';
import './Objectives.css';

const Objectives = () => {
  const objectiveData = [
    {
      id: 1,
      title: 'Multidisciplinary Skills Development',
      description: 'Promote comprehensive understanding and application of multidisciplinary skills in Control & Optimization across various engineering domains.',
      icon: '⚙️',
      iconClass: 'multidisciplinary',
      highlights: ['Control Systems', 'Optimization', 'Engineering Integration']
    },
    {
      id: 2,
      title: 'National Priority Sectors',
      description: 'Focus on cutting-edge technologies in national priority sectors including Electric Vehicles, Smart Grids, and Agricultural Technology.',
      icon: '🚗',
      iconClass: 'priority-sectors',
      highlights: ['Electric Vehicles', 'Smart Grids', 'Agritech']
    },
    {
      id: 3,
      title: 'Academia-Industry Collaboration',
      description: 'Foster strong partnerships between academic institutions and industry leaders to bridge the gap between theoretical knowledge and practical applications.',
      icon: '🤝',
      iconClass: 'collaboration',
      highlights: ['Research Partnerships', 'Industry Integration', 'Knowledge Transfer']
    },
    {
      id: 4,
      title: 'Policy Support & Vision',
      description: 'Align research and development efforts with national education policies and long-term vision for sustainable growth and innovation.',
      icon: '📋',
      iconClass: 'policy-support',
      highlights: ['NEP 2020', 'Viksit Bharat 2047', 'Educational Excellence']
    },
    {
      id: 5,
      title: 'Indigenous Research Excellence',
      description: 'Empower and strengthen indigenous research capabilities aligned with national initiatives for self-reliance and technological advancement.',
      icon: '🔬',
      iconClass: 'indigenous-research',
      highlights: ['Make in India', 'Digital India', 'Innovation Hub']
    }
  ];

  return (
    <div className="objectives-container" id='objectives'>
      <div className="objectives-header">
        <h1 className="objectives-title">Our Objectives</h1>
        <p className="objectives-subtitle">
          Driving innovation and excellence in Control & Optimization through comprehensive 
          research, collaboration, and technological advancement
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
