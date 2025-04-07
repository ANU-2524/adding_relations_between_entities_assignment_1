import React from 'react';

const DestinationCard = ({ Data }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={Data.image} className="card-img-top" alt={Data.name} />
      <div className="card-body">
        <h5 className="card-title">{Data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Data.location}</h6>
        <p className="card-text">{Data.description}</p>
        <p className="text-success fw-bold">{Data.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
