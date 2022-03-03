import React, { useEffect, useState } from 'react';

import { isMetaProperty } from 'typescript';

import Characters from '../../json/Characters.json';
import { ICharacter } from '../CharacterView/CharacterView';

import './Survey.css';

function Survey() {
  const [finalCharacter, setFinalCharacter] = useState<ICharacter | null>(null);
  const [step, setStep] = useState<number>(0);
  const [lastCharacters, setLastCharacters] = useState<ICharacter[]>([]);
  const gender: string[] = ['Male', 'Female'];
  const villain: string[] = ['Yes!', 'No!'];
  const species: string[] = [
    'Human',
    'Robot',
    'Mutant',
    'Decapodian Monster',
    'Amphibiosans (Amphibian)',
    'Nibblonian',
    'Omicronian',
    'Alien',
  ];

  function handleSecondStep(elem: string) {
    const nextCharacters: ICharacter[] = Characters.filter(item => item.Species.includes(elem));
    if (nextCharacters.length === 1) {
      setFinalCharacter(nextCharacters[0]);
      setStep(5);
    } else {
      setLastCharacters(nextCharacters);
      setStep(2);
    }
  }
  function handleThirdStep(elem: string) {
    const nextCharacters: ICharacter[] = lastCharacters.filter(item => item.Gender === elem);
    if (nextCharacters.length === 1) {
      setFinalCharacter(nextCharacters[0]);
      setStep(5);
    } else {
      setLastCharacters(nextCharacters);
      setStep(3);
    }
  }
  function handleFourthStep(elem: string) {
    const villain = elem === 'Yes!' ? true : false;
    const nextCharacters: ICharacter[] = lastCharacters.filter(item => item.Villain === villain);
    if (nextCharacters.length === 1) {
      setFinalCharacter(nextCharacters[0]);
      setStep(5);
    } else {
      setLastCharacters(nextCharacters);
      setStep(4);
    }
  }
  function handleFinalStep(elem: string) {
    const character: ICharacter | undefined = lastCharacters.find(item => item.Age === elem);
    if (character) {
      setStep(5);
      setFinalCharacter(character);
    }
  }

  return (
    <div className="Survey-container">
      <div className="intern-container">
        <p className="Survey-title">Futurama Survey</p>
        {step === 0 && (
          <>
            <p className="Survey-subtitle">
              Are you ready to start with this aventure? Just think twice before choosing, if not
              you could be identify as the insane Roberto!
            </p>
            <button className="survey-button" onClick={() => setStep(1)}>
              Click here!
            </button>
          </>
        )}
        {step === 1 && (
          <>
            <p className="character-name">Which species fits you the best?</p>
            {species.map((elem, index) => (
              <div className="Home-character-item" key={index}>
                <p
                  className="Survey-subtitle cursor-pointer"
                  onClick={() => handleSecondStep(elem)}
                >
                  {elem}
                </p>
              </div>
            ))}
          </>
        )}
        {step === 2 && (
          <>
            <p className="character-name">Which gender?</p>
            {gender.map((elem, index) => (
              <div className="Home-character-item" key={index}>
                <p className="Survey-subtitle cursor-pointer" onClick={() => handleThirdStep(elem)}>
                  {elem}
                </p>
              </div>
            ))}
          </>
        )}
        {step === 3 && (
          <>
            <p className="character-name">Are you a villain?</p>
            {villain.map((elem, index) => (
              <div className="Home-character-item" key={index}>
                <p
                  className="Survey-subtitle cursor-pointer"
                  onClick={() => handleFourthStep(elem)}
                >
                  {elem}
                </p>
              </div>
            ))}
          </>
        )}
        {step === 4 && (
          <>
            <p className="character-name">Between which ages?</p>
            {lastCharacters.map((elem, index) => (
              <div className="Home-character-item" key={index}>
                <p
                  className="Survey-subtitle cursor-pointer"
                  onClick={() => handleFinalStep(elem.Age)}
                >
                  {elem.Age}
                </p>
              </div>
            ))}
          </>
        )}
        {finalCharacter && finalCharacter.Name && (
          <div className="final-character">
            <img
              className="character-attributes-img"
              src={finalCharacter.PicUrl}
              alt={`${finalCharacter.Name}`}
            />
            <p className="character-name">
              Congratulations you are a {finalCharacter.Age} years old {finalCharacter.Species}{' '}
              {finalCharacter.Gender} who lives in {finalCharacter.Planet} called{' '}
              {finalCharacter.Name}, who is {finalCharacter.Profession}!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Survey;
