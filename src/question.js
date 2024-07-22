class Question {
  // YOUR CODE HERE:
  //
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    this.choices = shuffleArray(this.choices);
  }
}

function shuffleArray(arr) {
  const initialChoices = [...arr];
  const shuffledChoices = [];

  for (let i = initialChoices.length; i > 0; i--) {
    const index = Math.floor(Math.random() * initialChoices.length);
    const [element] = initialChoices.splice(index, 1);

    shuffledChoices.push(element);
  }

  return [...shuffledChoices];
}
