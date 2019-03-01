import React from 'react';

import './Smurf.css';

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card-container">
          <h3 className="cardTitle">{props.name}</h3>
          <img className="cardImg" src="https://vignette.wikia.nocookie.net/smurfs/images/0/07/Smurf_Village_Comic_Books.jpg/revision/latest?cb=20120417231142" alt="Smurf Village" />
          <strong className="cardText">{props.height} cm tall</strong>
          <p className="cardText">{props.age} smurf years old</p>
        </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

