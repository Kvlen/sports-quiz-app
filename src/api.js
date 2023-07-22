import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';

export const fetchTriviaQuestions = async (amount = 25) => { // Update the amount to 25
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        amount,
        category: 21, // ID for the Sports category
        type: 'multiple', // We want multiple-choice questions
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching trivia questions:', error);
    return [];
  }
};