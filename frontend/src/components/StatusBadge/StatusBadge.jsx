import React from 'react';
import './StatusBadge.css';

const StatusBadge = () => {
  return (
    <div className='status-badge status-badge__paid'>
      <div className='status-badge__circle status-badge__circle-paid'></div>
      <div className='status-badge__text status-badge__text-paid'>Paid</div>
    </div>
  );
};

export default StatusBadge;
