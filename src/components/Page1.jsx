import React, { useState, useRef, useEffect } from 'react';

const Page1 = ({ width = '100%', height = '100vh' }) => {
  const [isPageOne, setIsPageOne] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const handleTransition = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const container = containerRef.current;
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
      transform: scale(0);
      animation: rippleExpand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      z-index: 10;
      pointer-events: none;
      top: 50%;
      left: 50%;
      width: 200vmax;
      height: 200vmax;
      margin-left: -100vmax;
      margin-top: -100vmax;
    `;

    container.appendChild(ripple);

    setTimeout(() => {
      setIsPageOne(!isPageOne);
    }, 600);

    setTimeout(() => {
      setIsTransitioning(false);
      container.removeChild(ripple);
    }, 1200);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rippleExpand {
        0% { transform: scale(0); opacity: 1; }
        50% { transform: scale(0.5); opacity: 0.8; }
        100% { transform: scale(1); opacity: 0; }
      }
      
      @keyframes slideInFromRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideInFromLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes fadeInUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes scaleIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .animate-slide-right { animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .animate-slide-left { animation: slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      .animate-fade-up { animation: fadeInUp 0.6s ease-out forwards; }
      .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  const styles = {
    container: {
      position: 'relative',
      width,
      height,
      fontFamily: '"Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      background: '#fff',
    },
    fullPage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 1rem',
      overflowY: 'auto',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    heading: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '40px',
      color: '#333',
      margin: '0 0 2rem 0',
      textAlign: 'center',
      textShadow: 'none',
      letterSpacing: '-0.02em',
    },
    button: {
      fontSize: '1rem',
      margin: '0 0 3rem 0',
      padding: '1rem 1rem',
      border: 'none',
      cursor: 'pointer',
      background: '#333',
      color: '#fff',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fontWeight: '600',
      letterSpacing: '0.5px',
      position: 'relative',
    },
    contentContainer: {
      maxWidth: '1000px',
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    },
    sectionTitle: {
      fontSize: '26px',
      margin: '0 0 1rem 0',
      color: '#333',
      fontWeight: '700',
      textAlign: 'center',
    },
    badgeWall: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    },
    badge: {
      padding: '1.5rem 2rem',
      background: 'linear-gradient(135deg, #f6d365, #fda085)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      fontWeight: '600',
      fontSize: '1.1rem',
      color: '#333',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    graphPlaceholder: {
      width: '100%',
      height: '200px',
      background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '600',
      fontSize: '1.2rem',
      color: '#333',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    highlightRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      width: '100%',
    },
    highlightBox: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      textAlign: 'center',
      color: '#333',
      transition: 'all 0.3s ease',
    },
    progressBar: {
      width: '100%',
      height: '12px',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '1rem',
      backdropFilter: 'blur(10px)',
    },
    progressFill: {
      width: '60%',
      height: '100%',
      background: 'linear-gradient(90deg, #00f5ff, #0072ff)',
      borderRadius: '10px',
      transition: 'width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      boxShadow: '0 0 20px rgba(0,245,255,0.5)',
    },
    progressText: {
      fontSize: '1rem',
      color: '#333',
      fontWeight: '500',
      textAlign: 'center',
    },
    challengeBox: {
      background: 'linear-gradient(to right, #facc8cff, #fcb69f)',
      padding: '2px',
      borderRadius: '25px',
      textAlign: 'center',
      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
      color: '#333',
      width: '100%',
      maxWidth: '500px',
    },
    leaderboard: {
      width: '100%',
      background: '#fff',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      color: '#333',
    },
    leaderItem: {
      fontSize: '1.1rem',
      padding: '1rem 0',
      borderBottom: '1px solid #ddd',
      fontWeight: '500',
      transition: 'all 0.3s ease',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    rewardNote: {
      fontSize: '1rem',
      textAlign: 'center',
      color: '#666',
      fontStyle: 'italic',
      fontWeight: '400',
    },
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <div style={styles.fullPage}>
        <h1
          style={styles.heading}
          className={!isTransitioning ? (isPageOne ? 'animate-slide-left' : 'animate-slide-right') : ''}
        >
          {isPageOne ? 'Achievements & Badges' : 'Community Challenges'}
        </h1>

        <button
          onClick={handleTransition}
          style={styles.button}
          disabled={isTransitioning}
          onMouseEnter={(e) => {
            if (!isTransitioning) {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isTransitioning) {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
            }
          }}
        >
          {isPageOne ? 'Go to Challenges' : 'Back to Achievements'}
        </button>

        {isPageOne ? (
          <div style={styles.contentContainer}>
            <h2 style={styles.sectionTitle} className="animate-fade-up">🏅 Your Badges</h2>
            <div style={styles.badgeWall}>
              {['🎖️ Explorer', '🏆 Master Coder', '⚡ Quick Learner'].map((badge, i) => (
                <div
                  key={i}
                  style={{ ...styles.badge, animationDelay: `${i * 0.1}s` }}
                  className="animate-scale-in"
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
            <div style={styles.highlightRow}>
              <div style={styles.highlightBox} className="animate-fade-up">
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>📚 Most Mastered</h3>
                <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>JavaScript Basics</p>
              </div>
              <div style={styles.highlightBox} className="animate-fade-up">
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.3rem' }}>⚡ Fastest Completion</h3>
                <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>CSS Grid - 5 min</p>
              </div>
            </div>

            <h2 style={styles.sectionTitle} className="animate-fade-up">🌱 Growth Progress</h2>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
          </div>
        ) : (
          <div style={styles.contentContainer}>
            <h2 style={styles.sectionTitle} className="animate-fade-up">🏆 Challenge of the Week</h2>
            <div style={styles.challengeBox} className="animate-scale-in">
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Build a Calculator (20 min)</h3>
              <p style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', opacity: 0.9 }}>💎 Earn 50 XP • ⏳ Deadline: 18h</p>
            </div>

            <h2 style={styles.sectionTitle} className="animate-fade-up">👥 Leaderboard</h2>
            <div style={styles.leaderboard} className="animate-fade-up">
              {['🥇 Alice - 150 XP', '🥈 Bob - 120 XP', '🥉 Charlie - 100 XP'].map((entry, i) => (
                <div
                  key={i}
                  style={{ ...styles.leaderItem, animationDelay: `${i * 0.1}s` }}
                  onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  {entry}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page1;