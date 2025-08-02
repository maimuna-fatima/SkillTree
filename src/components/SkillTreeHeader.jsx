import { useState } from 'react';

const SkillTreeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, html {
          width: 100%;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        
        #root {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(34, 197, 94, 0.5),
                         0 0 40px rgba(34, 197, 94, 0.3),
                         0 0 60px rgba(34, 197, 94, 0.2);
          }
          50% { 
            text-shadow: 0 0 30px rgba(34, 197, 94, 0.8),
                         0 0 60px rgba(34, 197, 94, 0.5),
                         0 0 90px rgba(34, 197, 94, 0.3);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes bounceIn {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(5deg); }
          70% { transform: scale(0.9) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes pulseRing {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blinkCaret {
          from, to { border-color: transparent; }
          50% { border-color: #10b981; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes sparkleFloat {
          0% { transform: translateY(0) scale(0); opacity: 1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .skill-tree-header {
          background: linear-gradient(90deg, #0f172a, #064e3b, #0f172a);
          position: relative;
          overflow: hidden;
          padding: 48px 0;
          width: 100vw;
          height: auto;
          min-height: 100vh;
          box-sizing: border-box;
          margin: 0;
          left: 0;
          right: 0;
        }
        
        .background-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
        }
        
        .bg-circle-1 {
          position: absolute;
          top: 40px;
          left: 40px;
          width: 128px;
          height: 128px;
          background: rgba(34, 197, 94, 0.2);
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 3s ease-in-out infinite;
        }
        
        .bg-circle-2 {
          position: absolute;
          bottom: 40px;
          right: 40px;
          width: 160px;
          height: 160px;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          filter: blur(40px);
          animation: pulse 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .container {
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 10;
          padding: 0 32px;
        }
        
        .top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          font-size: 20px;
          animation: float 3s ease-in-out infinite;
        }
        
        .user-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .xp-badge {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        
        .level-badge {
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          padding: 8px 16px;
          color: #10b981;
          font-weight: 600;
          font-size: 14px;
        }
        
        .avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
        }
        
        .menu-button {
          display: none;
        }
        
        .title-section {
          text-align: center;
          margin-bottom: 48px;
          position: relative;
        }
        
        .floating-icon {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          animation: float 3s ease-in-out infinite;
          color: white;
          font-size: 20px;
        }
        
        .floating-icon-1 {
          top: -32px;
          left: -32px;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          animation-delay: 0s;
        }
        
        .floating-icon-2 {
          top: -16px;
          right: -48px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          animation-delay: 1s;
        }
        
        .floating-icon-3 {
          top: 80px;
          left: -64px;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          animation-delay: 2s;
          font-size: 14px;
        }
        
        .floating-icon-4 {
          top: 64px;
          right: -32px;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #10b981, #22c55e);
          animation-delay: 0.5s;
        }
        
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 384px;
          height: 384px;
          border: 2px solid rgba(34, 197, 94, 0.3);
          border-radius: 50%;
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
        
        .pulse-ring-2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 384px;
          height: 384px;
          border: 2px solid rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          animation: pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
          animation-delay: 1s;
        }
        
        .title-content {
          position: relative;
          z-index: 10;
        }
        
        .main-title {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 900;
          margin-bottom: 16px;
          letter-spacing: 0.1em;
          background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6, #f59e0b, #10b981);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite, glow 2s ease-in-out infinite alternate, bounceIn 1s ease-out;
        }
        
        .letter {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        
        .letter:hover {
          transform: scale(1.1) rotate(5deg);
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .letter {
            pointer-events: none;
            transform: none !important;
          }
          
          .letter:hover {
            transform: none !important;
          }
          
          .main-title {
            pointer-events: none;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .letter {
            pointer-events: none;
            transform: none !important;
          }
          
          .letter:hover {
            transform: none !important;
          }
          
          .main-title {
            pointer-events: none;
          }
        }

        .subtitle {
          font-size: clamp(1.25rem, 3vw, 2rem);
          color: #6ee7b7;
          font-weight: 300;
          overflow: hidden;
          border-right: 2px solid #10b981;
          white-space: nowrap;
          margin: 0 auto;
          animation: typewriter 2s steps(40, end) 1s both, blinkCaret 1s step-end infinite 3s;
          width: fit-content;
        }
        
        .decorative-elements {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 24px;
          gap: 16px;
        }
        
        .decorative-line {
          height: 1px;
          width: 96px;
          background: linear-gradient(90deg, transparent, #10b981, transparent);
        }
        
        .decorative-dot {
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .dot-1 {
          width: 12px;
          height: 12px;
          background: #10b981;
        }
        
        .dot-2 {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          animation-delay: 0.5s;
        }
        
        .dot-3 {
          width: 12px;
          height: 12px;
          background: #8b5cf6;
          animation-delay: 1s;
        }
        
        .navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          margin-bottom: 32px;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 8px;
        }
        
        .nav-link:hover {
          color: #6ee7b7;
          background: rgba(34, 197, 94, 0.1);
        }
        
        .cta-section {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .cta-button {
          position: relative;
          background: linear-gradient(90deg, #059669, #2563eb, #7c3aed);
          color: white;
          padding: 16px 48px;
          border-radius: 50px;
          font-size: 20px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          transition: all 0.5s ease;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }
        
        .cta-button:hover {
          transform: scale(1.1);
          background: linear-gradient(90deg, #047857, #1d4ed8, #6d28d9);
        }
        
        .mobile-menu {
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(15px);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          border: 1px solid rgba(34, 197, 94, 0.2);
          animation: slideDown 0.3s ease-out;
        }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .mobile-nav-link {
          color: white;
          text-decoration: none;
          padding: 16px 12px;
          font-size: 18px;
          font-weight: 500;
          transition: all 0.3s ease;
          border-radius: 12px;
          border-left: 3px solid transparent;
        }
        
        .mobile-nav-link:hover {
          color: #6ee7b7;
          background: rgba(34, 197, 94, 0.1);
          border-left-color: #10b981;
          transform: translateX(8px);
        }
        
        .mobile-user-info {
          padding-top: 20px;
          margin-top: 20px;
          border-top: 1px solid rgba(34, 197, 94, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .mobile-user-stats {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .mobile-xp {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.1);
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .mobile-level {
          background: rgba(59, 130, 246, 0.1);
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #3b82f6;
          font-weight: 600;
          font-size: 14px;
        }
        
        .mobile-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .stats-bar {
          padding-top: 24px;
          border-top: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .stats-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 24px;
          font-size: 14px;
        }
        
        .stat {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 12px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .stat:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .sparkle {
          position: absolute;
          background: #fbbf24;
          border-radius: 50%;
          pointer-events: none;
          animation: sparkleFloat 2s ease-out forwards;
        }
        
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .container {
            padding: 0 24px;
          }
          .title-section {
            margin-bottom: 32px;
          }
          .navigation {
            gap: 24px;
          }
          .nav-link {
            font-size: 18px;
          }
          .pulse-ring, .pulse-ring-2 {
            width: 300px;
            height: 300px;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
          .user-info {
            display: none;
          }
          .container {
            padding: 0 16px;
          }
          .skill-tree-header {
            padding: 32px 0;
            min-height: 100vh;
          }
          .top-bar {
            margin-bottom: 32px;
          }
          .title-section {
            margin-bottom: 24px;
          }
          .navigation {
            gap: 16px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .nav-link {
            font-size: 16px;
            padding: 6px 12px;
          }
          .logo-icon {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .bg-circle-1, .bg-circle-2 {
            width: 80px;
            height: 80px;
          }
          .pulse-ring, .pulse-ring-2 {
            width: 250px;
            height: 250px;
          }
          .decorative-line {
            width: 48px;
          }
          .decorative-elements {
            gap: 12px;
          }
          .stats-container {
            gap: 16px;
            font-size: 13px;
          }
          .stat {
            padding: 6px 10px;
          }
        }
        
        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .container {
            padding: 0 12px;
          }
          .skill-tree-header {
            padding: 24px 0;
          }
          .main-title {
            font-size: clamp(2rem, 10vw, 3.5rem) !important;
            letter-spacing: 0.05em;
          }
          .subtitle {
            font-size: clamp(1rem, 4vw, 1.25rem) !important;
          }
          .navigation {
            gap: 8px;
            margin-bottom: 24px;
          }
          .nav-link {
            font-size: 14px;
            padding: 4px 8px;
          }
          .logo-icon {
            width: 36px;
            height: 36px;
            font-size: 16px;
          }
          .cta-button {
            padding: 12px 32px;
            font-size: 16px;
          }
          .stats-container {
            gap: 12px;
            font-size: 12px;
          }
          .stat {
            padding: 4px 8px;
            font-size: 11px;
          }
          .floating-icon-1,
          .floating-icon-2,
          .floating-icon-3,
          .floating-icon-4 {
            display: none;
          }
          .pulse-ring, .pulse-ring-2 {
            width: 200px;
            height: 200px;
          }
          .bg-circle-1 {
            top: 20px;
            left: 20px;
            width: 60px;
            height: 60px;
          }
          .bg-circle-2 {
            bottom: 20px;
            right: 20px;
            width: 80px;
            height: 80px;
          }
          .decorative-line {
            width: 32px;
          }
          .decorative-elements {
            gap: 8px;
            margin-top: 16px;
          }
          .dot-1, .dot-3 {
            width: 8px;
            height: 8px;
          }
          .dot-2 {
            width: 6px;
            height: 6px;
          }
        }
        
        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .container {
            padding: 0 8px;
          }
          .main-title {
            font-size: clamp(1.5rem, 12vw, 2.5rem) !important;
          }
          .subtitle {
            font-size: clamp(0.9rem, 5vw, 1rem) !important;
          }
          .navigation {
            gap: 4px;
            flex-direction: column;
          }
          .nav-link {
            font-size: 12px;
            padding: 3px 6px;
          }
          .stats-container {
            gap: 8px;
          }
          .stat {
            font-size: 10px;
            padding: 3px 6px;
          }
        }
      `}</style>

      <header className="skill-tree-header">
        <div className="background-effects">
          <div className="bg-circle-1"></div>
          <div className="bg-circle-2"></div>
        </div>

        <div className="container">
          <div className="top-bar">
            <div className="logo">
              <div className="logo-icon">
                <span>🌳</span>
              </div>
            </div>
            <div className="user-info">
              <div className="xp-badge">
                <span>⚡</span>
                <span>2,450 XP</span>
              </div>
              <div className="level-badge">
                <span>Level 12</span>
              </div>
              <div className="avatar">
                <span>JD</span>
              </div>
            </div>
            <button
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ display: 'none' }}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          <div className="title-section">
            <div className="floating-icon floating-icon-1">
              <span>🎯</span>
            </div>
            <div className="floating-icon floating-icon-2">
              <span>⚡</span>
            </div>
            <div className="floating-icon floating-icon-3">
              <span>🚀</span>
            </div>
            <div className="floating-icon floating-icon-4">
              <span>🧠</span>
            </div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring-2"></div>
            <div className="title-content">
              <h1 className="main-title">
                <span className="letter">S</span>
                <span className="letter">k</span>
                <span className="letter">i</span>
                <span className="letter">l</span>
                <span className="letter">l</span>
                <span className="letter" style={{ margin: '0 8px' }}>🌳</span>
                <span className="letter">T</span>
                <span className="letter">r</span>
                <span className="letter">e</span>
                <span className="letter">e</span>
              </h1>

              <p className="subtitle">
                Microlearning Adventure
              </p>

              <div className="decorative-elements">
                <div className="decorative-line"></div>
                <div className="decorative-dot dot-1"></div>
                <div className="decorative-dot dot-2"></div>
                <div className="decorative-dot dot-3"></div>
                <div className="decorative-line"></div>
              </div>
            </div>
          </div>

          <nav className="navigation">
            <a href="#learn" className="nav-link">📚 Learn</a>
            <a href="#challenges" className="nav-link">🏆 Challenges</a>
            <a href="#progress" className="nav-link">📈 Progress</a>
            <a href="#community" className="nav-link">👥 Community</a>
            <a href="#leaderboard" className="nav-link">🏅 Leaderboard</a>
          </nav>

          {isMenuOpen && (
            <div className="mobile-menu">
              <nav className="mobile-nav-links">
                <a href="#learn" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>📚 Learn</a>
                <a href="#challenges" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>🏆 Challenges</a>
                <a href="#progress" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>📈 Progress</a>
                <a href="#community" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>👥 Community</a>
                <a href="#leaderboard" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>🏅 Leaderboard</a>
                
                <div className="mobile-user-info">
                  <div className="mobile-user-stats">
                    <div className="mobile-xp">
                      <span>⚡</span>
                      <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>2,450 XP</span>
                    </div>
                    <div className="mobile-level">Level 12</div>
                  </div>
                  <div className="mobile-avatar">
                    <span>JD</span>
                  </div>
                </div>
              </nav>
            </div>
          )}

          <div className="stats-bar">
            <div className="stats-container">
              <div className="stat">
                <span style={{ color: '#6ee7b7' }}>🔥 7 Day Streak</span>
              </div>
              <div className="stat">
                <span style={{ color: '#93c5fd' }}>📚 23 Modules</span>
              </div>
              <div className="stat">
                <span style={{ color: '#c4b5fd' }}>🏆 15 Badges</span>
              </div>
              <div className="stat">
                <span style={{ color: '#fde68a' }}>⭐ 4.8 Score</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SkillTreeHeader;