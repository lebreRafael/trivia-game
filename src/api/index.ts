/* eslint-disable import/prefer-default-export */

const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export async function loadQuestionsRequest() {
  const response = await fetch(apiUrl);
  return response.json();
}
