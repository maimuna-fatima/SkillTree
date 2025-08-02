import { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        if (nextProgress > 100) {
          clearInterval(interval);
          if (onLoaded) {
            onLoaded();
          }
          return 100;
        }
        return nextProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="loading-container">
      <div className="loading-text-center">
        <div className="loading-progress">{progress} - 100</div>
        <div className="loading-title">
          YOUR <br />WEB EXPERIENCE <br />IS LOADING RIGHT <span className="loading-now">NOW</span>
        </div>
        <div className="loading-subtext">Please wait a few seconds.</div>
      </div>
    </div>
  );
};

export default LoadingPage;
