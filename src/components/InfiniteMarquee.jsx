import './InfiniteMarquee.css';

const InfiniteMarquee = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }
  const duplicatedItems = [...items, ...items];

  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="marquee-card">
              <div className="user-info">
              <div className="user-avatar">
                {item.name?.charAt(0) || '?'}
              </div>
              <div className="user-details">
                <h4>{item.name}</h4>
                <p>@{item.username || item.name?.toLowerCase()}</p>
              </div>
            </div>
            <p className="marquee-message">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InfiniteMarquee;