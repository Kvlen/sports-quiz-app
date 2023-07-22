import React, { useState } from 'react';

const Options = ({ options, onAnswerSubmit }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption !== '') {
      onAnswerSubmit(selectedOption);
      setSelectedOption('');
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="option">
          <input
            type="radio"
            id={`option-${index}`}
            name="options"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option-${index}`} dangerouslySetInnerHTML={{ __html: option }} />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Options;