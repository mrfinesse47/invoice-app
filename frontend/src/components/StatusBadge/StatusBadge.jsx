import React from 'react';
import './StatusBadge.css';

const StatusBadge = () => {
  return (
    <div className='status-badge'>
      <div className='status-badge__circle status-badge__paid'></div>
      <div>Paid</div>
    </div>
  );
};

export default StatusBadge;
