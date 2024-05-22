import React, { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Flashcard() {
  const [selectedID, setSelectedID] = useState(null);
  return (
    <div className="flashcard__container">
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() =>
              setSelectedID(question.id !== selectedID ? question.id : null)
            }
            className={selectedID === question.id ? "selected" : ""}
          >
            <p>
              {question.id === selectedID ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashcard;
