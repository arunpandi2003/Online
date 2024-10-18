import React, { useState } from 'react';
import './Question.css';

const Question = ({ question }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  // Handle checkbox selection
  const handleCheckboxChange = (qIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  // Calculate the score based on user's selections
  const calculateScore = () => {
    let correctCount = 0;
    let wrongCount = 0;

    question.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    setScore({ correct: correctCount, wrong: wrongCount });
  };

  return (
    <main className='question-page'>
      <div className='question-div'>
        <ul>
          {question.map((q, index) => (
            <li key={index}>
              <p>{q.question}</p>
              {q.options.map((option, optIndex) => (
                <div key={optIndex}>
                  <input className='check'
                    type="radio"
                    id={`q${index}-opt${optIndex}`}
                    name={`question-${index}`}
                    value={option}
                    checked={selectedAnswers[index] === option}
                    onChange={() => handleCheckboxChange(index, option)}
                  />
                  <label htmlFor={`q${index}-opt${optIndex}`}>{option}</label>
                </div>
              ))}
            </li>
          ))}
        </ul>

        <button onClick={calculateScore}>Submit</button>

        <div className='score'>
          <p>Correct Answers: {score.correct}</p>
          <p>Wrong Answers: {score.wrong}</p>
        </div>
      </div>
    </main>
  );
};

export default Question;
