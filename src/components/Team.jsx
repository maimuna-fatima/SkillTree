import { useState } from 'react';
import './Team.css';

import avatar1 from '../assets/h1.jpg';
import avatar2 from '../assets/h2.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Maimuna",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Mukki Sruthi",
    avatar: avatar2,
  },

];

const Team = () => {
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

  const hoveredMember = teamMembers.find(member => member.id === hoveredMemberId);

  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      <div className="team-container">
        <div className="member-list">
          {teamMembers.map(member => (
            <div
              key={member.id}
              className={`member-item ${hoveredMemberId === member.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredMemberId(member.id)}
              onMouseLeave={() => setHoveredMemberId(null)}
            >
              <div className="hover-avatar">
                <img src={member.avatar} alt={member.name} className="member-avatar" />
              </div>
              <span className="member-number">{member.id.toString().padStart(2, '0')}</span>
              <div className="member-info">
                <span className="member-name">{member.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;