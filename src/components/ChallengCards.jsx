import React, { useState, useRef } from 'react';

const ChallengeCard = ({ data, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const getRevealClass = () => {
    switch (type) {
      case 'xp': return 'xp-reveal';
      case 'badge': return 'badge-reveal';
      case 'time': return 'time-reveal';
      default: return 'xp-reveal';
    }
  };

  const getDifficultyClass = () => {
    switch (data.difficulty) {
      case 'easy': return 'easy';
      case 'medium': return 'medium';
      case 'hard': return 'hard';
      default: return 'easy';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`challenge-card`}
      data-type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`
      }}
    >
      <div className="card-base">
        <div className="card-category">{data.category}</div>
        <div className={`difficulty-indicator ${getDifficultyClass()}`}></div>
        <div className="challenge-title">{data.title}</div>
        <div className="challenge-description">{data.description}</div>
      </div>
      <div className={`card-reveal ${getRevealClass()} ${isHovered ? 'show' : ''}`}>
        <div className="reward-icon">{data.reward.icon}</div>
        <div className="reward-value">{data.reward.value}</div>
        {data.reward.name && <div className="badge-name">{data.reward.name}</div>}
        <div className="reward-label">{data.reward.label}</div>
      </div>
    </div>
  );
};

const ChallengCards = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [morphFrame, setMorphFrame] = useState(0);

  React.useEffect(() => {
    const animateCursor = () => {
      setMorphFrame(prev => prev + 0.05);
      requestAnimationFrame(animateCursor);
    };
    animateCursor();
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cardData = [
    {
      type: 'xp',
      category: 'Coding',
      difficulty: 'easy',
      title: 'Array Manipulation',
      description: 'Master essential array methods and solve practical coding problems',
      reward: {
        icon: '⚡',
        value: '250',
        label: 'XP Points'
      }
    },
    {
      type: 'badge',
      category: 'Design',
      difficulty: 'medium',
      title: 'UI Component Design',
      description: 'Create responsive components using modern CSS techniques',
      reward: {
        icon: '🏆',
        value: 'Badge',
        name: 'CSS Master',
        label: 'Achievement Unlocked'
      }
    },
    {
      type: 'time',
      category: 'Algorithm',
      difficulty: 'hard',
      title: 'Binary Search Tree',
      description: 'Implement and optimize BST operations for maximum efficiency',
      reward: {
        icon: '⏱️',
        value: '45',
        label: 'Minutes'
      }
    },
    {
      type: 'xp',
      category: 'Database',
      difficulty: 'medium',
      title: 'SQL Optimization',
      description: 'Learn advanced query optimization and indexing strategies',
      reward: {
        icon: '⚡',
        value: '180',
        label: 'XP Points'
      }
    },
    {
      type: 'badge',
      category: 'Security',
      difficulty: 'hard',
      title: 'Web Security Audit',
      description: 'Identify and fix common security vulnerabilities in web applications',
      reward: {
        icon: '🛡️',
        value: 'Badge',
        name: 'Security Expert',
        label: 'Achievement Unlocked'
      }
    },
    {
      type: 'time',
      category: 'Frontend',
      difficulty: 'easy',
      title: 'React Hooks Practice',
      description: 'Build interactive components using useState and useEffect hooks',
      reward: {
        icon: '⏱️',
        value: '30',
        label: 'Minutes'
      }
    }
  ];

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          height: 100%;
          overflow-x: hidden;
        }
        .title{
          color:black;
          font-weight:bold;
          text-align:center;
          font-family:'Poppins',sans-serif;
          font-size:42px;
        }
        .app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color:white;
          min-height: 100vh;
          width: 100vw;
          padding: 3rem 1rem;
          cursor: none;
          overflow-y: auto;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* Responsive breakpoints */
        @media (max-width: 1400px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 1200px) {
          .cards-container {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .app {
            padding: 2rem 0.5rem;
          }
          
          .cards-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .cards-container {
            gap: 0.75rem;
          }
        }

        .challenge-card {
          width: 100%;
          height: 280px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid transparent;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (max-width: 768px) {
          .challenge-card {
            height: 240px;
            border-radius: 16px;
            pointer-events: none;
          }
          
          .challenge-card:hover {
            transform: none;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          }
          
          .card-reveal {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .challenge-card {
            height: 200px;
            border-radius: 12px;
            pointer-events: none;
          }
          
          .challenge-card:hover {
            transform: none;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          }
          
          .card-reveal {
            display: none !important;
          }
        }

        .card-base {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          color: white;
          background: linear-gradient(145deg, #4f46e5, #7c3aed);
        }

        @media (max-width: 768px) {
          .card-base {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .card-base {
            padding: 1rem;
          }
        }

        .card-reveal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          color: white;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        @media (max-width: 768px) {
          .card-reveal {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .card-reveal {
            padding: 1rem;
          }
        }

        .card-reveal.show {
          opacity: 1;
        }

        /* Simple circle reveal shape for all card types */
        .challenge-card .card-reveal.show {
          clip-path: circle(120px at var(--mouse-x, 50%) var(--mouse-y, 50%));
        }

        @media (max-width: 768px) {
          .challenge-card .card-reveal.show {
            clip-path: circle(100px at var(--mouse-x, 50%) var(--mouse-y, 50%));
          }
        }

        @media (max-width: 480px) {
          .challenge-card .card-reveal.show {
            clip-path: circle(80px at var(--mouse-x, 50%) var(--mouse-y, 50%));
          }
        }

        /* XP Card Reveal */
        .xp-reveal {
          background: linear-gradient(145deg, #059669, #10b981);
        }

        /* Badge Card Reveal */
        .badge-reveal {
          background: linear-gradient(145deg, #dc2626, #f59e0b);
        }

        /* Time Card Reveal */
        .time-reveal {
          background: linear-gradient(145deg, #0891b2, #06b6d4);
        }

        .challenge-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .challenge-title {
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .challenge-title {
            font-size: 1.1rem;
            margin-bottom: 0.6rem;
          }
        }

        .challenge-description {
          font-size: 1.1rem;
          opacity: 0.9;
          line-height: 1.5;
          max-width: 90%;
        }

        @media (max-width: 768px) {
          .challenge-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .challenge-description {
            font-size: 0.9rem;
          }
        }

        .reward-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .reward-icon {
            font-size: 3rem;
            margin-bottom: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .reward-icon {
            font-size: 2.5rem;
            margin-bottom: 0.6rem;
          }
        }

        .reward-value {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .reward-value {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .reward-value {
            font-size: 1.8rem;
          }
        }

        .reward-label {
          font-size: 1rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 480px) {
          .reward-label {
            font-size: 0.9rem;
          }
        }

        .badge-name {
          font-size: 1.3rem;
          font-weight: 600;
          margin-top: 0.5rem;
          opacity: 0.95;
        }

        @media (max-width: 768px) {
          .badge-name {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .badge-name {
            font-size: 1rem;
          }
        }

        .difficulty-indicator {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .difficulty-indicator {
            top: 15px;
            right: 15px;
            width: 10px;
            height: 10px;
          }
        }

        @media (max-width: 480px) {
          .difficulty-indicator {
            top: 12px;
            right: 12px;
            width: 8px;
            height: 8px;
          }
        }

        .easy { 
          background-color: #10b981; 
        }
        
        .medium { 
          background-color: #f59e0b; 
        }
        
        .hard { 
          background-color: #ef4444; 
        }

        .card-category {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .card-category {
            top: 15px;
            left: 15px;
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .card-category {
            top: 12px;
            left: 12px;
            font-size: 0.7rem;
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>

      <h2 className='title'>Courses</h2><br></br>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <ChallengeCard
            key={index}
            data={card}
            type={card.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengCards;