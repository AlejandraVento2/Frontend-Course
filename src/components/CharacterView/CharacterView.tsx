import React, { useEffect, useState } from 'react';

import Poster2 from "../../img/Love's_Labours_Lost_in_Space_Poster.png";
import fryYoungerPic from '../../img/young_fry.jpg';
import Character from '../../json/Characters.json';

import './CharacterView.css';

export interface ICharacter {
  Villain: boolean;
  Age: string;
  FirstAppearance: string;
  Name: string;
  PicUrl: string;
  Planet: string;
  Profession: string;
  Relatives: string;
  Species: string;
  Status: string;
  VoicedBy: string;
  SpeciesPic: string;
  YoungerPic: string;
  Description: string;
  FirstAppearancePic: string;
  RelativesPic: string;
  ProfessionPic: string;
  LegendaryQuotes?: string[];
  Gender: string;
}

function CharacterView() {
  const [character, setCharacter] = useState<ICharacter>();

  useEffect(() => {
    const characterName = window.location.pathname
      .split('/character-profile/')[1]
      .replaceAll('%20', ' ');

    const findCharacter = Character.reduce((previousItem: ICharacter | undefined, currentItem) => {
      if (currentItem.Name === characterName) {
        return currentItem;
      } else {
        return previousItem;
      }
    }, undefined);
    setCharacter(findCharacter);
  }, []);

  return (
    <div>
      <p className="character-name">{character?.Name}</p>
      <div className="character-principal-container">
        <div className=" character-principal-items">
          <img
            className="character-img"
            id="character-principal-img"
            src={character?.PicUrl}
            alt={character?.Name}
          />
        </div>
        <div className="character-principal-items">
          <p>
            <span className="character-attribute-title">Planet:</span> {character?.Planet}
          </p>
          <p>
            <span className="character-attribute-title">Description:</span> {character?.Description}
          </p>
          <p>
            <span className="character-attribute-title">Status:</span> {character?.Status}
          </p>
          <p>
            <span className="character-attribute-title">VoicedBy:</span> {character?.VoicedBy}
          </p>
        </div>
      </div>
      {character && character.LegendaryQuotes && character.LegendaryQuotes.length > 0 && (
        <div className="legendary-quotes">
          <p>
            <span className="character-attribute-title">Legendary Quotes:</span>
          </p>
          {character?.LegendaryQuotes?.map((quote, index) => (
            <p key={index} className="character-quote">
              {quote}
            </p>
          ))}
        </div>
      )}
      <div className="character-principal-container">
        <div className="character-attributes-item">
          <img
            className="character-attributes-img"
            src={
              character?.FirstAppearancePic === 'Poster' ? Poster2 : character?.FirstAppearancePic
            }
            alt="First Appearance Pic"
          />
          <p>
            <span className="character-attribute-title">First Appearance:</span>
            <br />
            {character?.FirstAppearance}
          </p>
        </div>
        <div className="character-attributes-item">
          <img className="character-attributes-img" src={character?.YoungerPic} alt="Younger" />
          <p>
            <span className="character-attribute-title">Age:</span> <br />
            {character?.Age}
          </p>
        </div>
        <div className="character-attributes-item">
          <img
            className="character-attributes-img"
            src={character?.ProfessionPic}
            alt="Profession"
          />
          <p>
            <span className="character-attribute-title">Profession:</span>
            <br /> {character?.Profession}
          </p>
        </div>
        <div className="character-attributes-item">
          <img className="character-attributes-img" src={character?.SpeciesPic} alt="Special" />
          <p>
            <span className="character-attribute-title">Species:</span> <br />
            {character?.Species}
          </p>
        </div>
        <div className="character-attributes-item">
          <img className="character-attributes-img" src={character?.RelativesPic} alt="Relatives" />
          <p>
            <span className="character-attribute-title">Relatives:</span>
            <br /> {character?.Relatives}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterView;
