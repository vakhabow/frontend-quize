import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Test = ({ test, answers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState([]);
  const [trueAnswer, setTrueAnswer] = useState(0);

  const handleAnswerOptionClick = (isTrue, answer, id) => {
    if (isTrue) {
      setScore(score + 1);
      setTrueAnswer(trueAnswer + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < test.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    setCheckAnswer([...checkAnswer, { answer, id }]);
  };

  const handleRefresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setCheckAnswer([]);
  };

  // if(showScore) {
  //   useEffect(() => {

  //   }, [])
  // }

  return (
    <div>
      <div className="app">
        {showScore ? (
          <div className="section_score">
            <div>
              Правильных ответов {score} из {test.questions.length}
              {score < test.questions.length / 3 ? (
                <div className="result">Все плохо. Учи</div>
              ) : score < test.questions.length / 2 ? (
                <div className="result">Могло быть и хуже</div>
              ) : score < test.questions.length / 1.5 ? (
                <div className="result">Хороший результат</div>
              ) : score === test.questions.length / 1 ? (
                <div className="result">Все правильно. Молодец</div>
              ) : score < test.questions.length / 1 ? (
                <div className="result">Ты был близок, но недостаточно</div>
              ): ''}
              {answers.map((item) => {
                return (
                  <>
                    <div>{item.questName}</div>
                    {item.answers.map((elem) => {
                      if (elem.isTrue) {
                        return (
                          <div className="aaa">
                            <div style={{ color: "limegreen" }} className="ans">
                              {elem.answer}
                            </div>
                            {item.answers.map((element) => {
                              return (
                                <>
                                  {checkAnswer.map((item) => {
                                    if (item.answer.id === element._id) {
                                      return (
                                        <div
                                          style={{ color: "red" }}
                                          className="bbb"
                                        >
                                          {item.answer.answer}
                                        </div>
                                      );
                                    }
                                  })}
                                </>
                              );
                            })}
                          </div>
                        );
                      }
                    })}
                  </>
                );
              })}
              <button onClick={handleRefresh} className="refresh_btn">
                Попробовать еще раз
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz">
            <div className="question_section">
              <div className="question_count">
                <div className="question-count">
                  <span>{currentQuestion + 1}</span> / {test.questions.length}
                </div>
                <div className="question_text">
                  {test.questions[currentQuestion].questName}
                </div>
              </div>
            </div>
            <div className="answers_section">
              {test.questions[currentQuestion].answers.map((answer) => {
                return (
                  <button
                    key={answer._id}
                    onClick={() =>
                      handleAnswerOptionClick(answer.isTrue, {
                        answer: answer.answer,
                        id: answer._id,
                      })
                    }
                  >
                    {answer.answer}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
