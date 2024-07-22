class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    this.questions = shuffleArray(this.questions);
  }

  checkAnswer(answer) {
    const answerIsCorrect =
      this.questions[this.currentQuestionIndex].answer === answer;
    if (answerIsCorrect) {
      this.correctAnswers++;
    }
  }

  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      const filteredQuestions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
      this.questions = filteredQuestions;
    }
  }

  averageDifficulty() {
    const difficultyArr = this.questions.map((question) => question.difficulty);
    const avgDifficulty =
      difficultyArr.reduce((acc, curr) => acc + curr, 0) / difficultyArr.length;
    return avgDifficulty;
  }
}
