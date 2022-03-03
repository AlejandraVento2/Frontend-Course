import React from 'react';

import Characters from '../../json/Characters.json';

import './Home.css';

function Home() {
  return (
    <>
      <p className="home-title">Futurama Wiki</p>
      <p className="subtitle">
        All of the things you should know about your favorite characters you can find it here!!
      </p>
      <div className="Home-container">
        {Characters.map((character, index) => (
          <div
            className="Home-character-item"
            key={index}
            onClick={() => {
              window.location.href = `/character-profile/${character.Name}`;
            }}
          >
            <img className="character-img" src={character.PicUrl} alt={character.Name} />
            <p className="character-name">{character.Name}</p>
          </div>
        ))}
      </div>
      <div className="survey-container">
        <div className="survey">
          <img
            src="https://www.zohowebstatic.com/sites/default/files/collect-survey-responses-header-2x.png"
            alt="surveyIcon"
          />
          <p>
            To ALL THE REAL FANS OF THE SHOW! Would you like to know which character are you alike?
          </p>
          <button
            className="survey-button"
            onClick={() => {
              window.location.href = `/survey`;
            }}
          >
            Find the character inside you!
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
