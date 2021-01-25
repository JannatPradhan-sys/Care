import React, { Component } from 'react'
import { QuizData } from './QuizData';
import { Button } from 'react-bootstrap';
import './Quiz.css';

class Quiz extends Component {
    state = {
        userAnswer: null,    //current users answer
        currentIndex: 0,  //current questions index
        options: [],       //the four options
        quizEnd: false,
        score: 0,
        disabled: true
    }
    constructor(props) {
        super(props);
    };

    //Component that holds the current quiz
    loadQuiz = () => {
        const { currentIndex } = this.state //get the current index
        console.log("index val", currentIndex)
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }

        }
        )
    }


    //Handles Click event for the next button
    nextQuestionHandler = () => {
        const { userAnswer, answer, score } = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        //Check for correct answer and increment score
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }
        this.props.increaseProgressBar();
    }

    //Handles Click event for the previous button
    previousQuiz =()=>{
        
        this.setState({
            currentIndex: this.state.currentIndex - 1
        })
        this.props.decreaseProgressBar();
    }

    //Load the quiz once the component mounts
    componentDidMount() {
        this.loadQuiz();
    }

    //Update the component
    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            });

        }
    }

    //Check the answer
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    //Responds to the click of the finish button
    finishHandler = () => {
        const { userAnswer, answer, score } = this.state
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
        //Check for correct answer and increment score
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }


    }

    render() {
        const { question, options, currentIndex, userAnswer, quizEnd } = this.state //get the current state  
        if (quizEnd) {
            return (
                <div>
                    <h5>Final score is {this.state.score} points</h5>
                    <p>The correct Answers for the quiz are</p>
                    <ul>
                        {QuizData.map((item, index) => (
                            <li className='options'
                                key={index}>
                                {item.answer}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }

        return (
            <div className='parent_div'>
                <h5>{question}</h5>
                {
                    //<span>{`Question ${currentIndex+1} of ${QuizData.length}`}</span>
                }
                {options.map(option => (  //for each option, new paragraph
                    <p key={option.id}
                        className={`options ${userAnswer === option ? "selected" : null}`}
                        onClick={() => this.checkAnswer(option)}>
                        {option}
                    </p>
                ))}
                {currentIndex < QuizData.length - 1 &&
                    // Next button only displays if the above is true
                    <>
                        <Button
                            variant="outline-primary"
                            style={{ border: '2px solid #45b6fe', borderRadius: '5px' }}
                            onClick={this.previousQuiz}
                        >Previous
                </Button>
                        <Button
                            variant="outline-primary"
                            className="ui inverted button"
                            style={{ border: '2px solid #45b6fe', borderRadius: '5px' }}
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHandler}
                        >Next Question
                 </Button>
                    </>
                }
                {currentIndex === QuizData.length - 1 &&
                    <Button
                        variant="outline-primary"
                        className="ui inverted button"
                        disabled={this.state.disabled}
                        onClick={this.finishHandler}
                    >Finish</Button>
                }


            </div>
        )
    }
}

export default Quiz