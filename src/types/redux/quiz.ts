export type Answer = 'True' | 'False'

export interface Question {
  answer?: Answer
  category: string
  correct_answer: string
  difficulty: string
  question: string
  incorrect_answers: string[]
  type: string
}

export interface QuizState {
  questions: Question[]
}

interface SetQuizAnswerAction {
  type: 'SET_QUIZ_ANSWER'
  questionNumber: number
  value: Answer
}

interface SetQuizQuestionsAction {
  type: 'SET_QUIZ_QUESTIONS'
  payload: Question[]
}

export type QuizActionTypes = SetQuizQuestionsAction | SetQuizAnswerAction
