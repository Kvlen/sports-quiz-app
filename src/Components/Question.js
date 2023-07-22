import React, { useEffect, useState } from 'react';
import { fetchTriviaQuestions } from '../api';
import Options from './Options';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Function to fetch trivia questions when the component mounts
  useEffect(() => {
    const getTriviaQuestions = async () => {
      const fetchedQuestions = await fetchTriviaQuestions();
      setQuestions(fetchedQuestions);
    };

    getTriviaQuestions();
  }, []);

  // Function to handle user's answer submission
  const handleAnswerSubmit = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }

    // Move to the next question or show the results if it's the last question
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    // If all questions have been answered, show the final score
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} out of {questions.length}</p>
        <button onClick={() => setShowResult(false)}>Restart Quiz</button>
      </div>
    );
  }

  if (questions.length === 0) {
    // If questions are still being fetched, show a loading message
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-section">
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p className="question" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
  
      <div className="options-container">
        <Options
          options={[currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]}
          onAnswerSubmit={handleAnswerSubmit}
        />
      </div>
    </div>
  );
}
export default Question;