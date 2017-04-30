import React, {Component} from 'react';
import {QuestionHandler} from './QuestionHandler'
import {StartPage} from './StartPage'

export default class QuizHandler extends Component{
    constructor(props){
        super(props);
        this.state = {
            started : false,
            questionId : 0,
            score : 0,
            quizEnded : false
        }
    }
    componentWillMount(){
        this.setState({
            started: false,
            questionId : 0,
            score : 0,
            quizEnded: false,
        })
    }
    handleAnswer = (userAnswer) => {
        this.state.questionId !== this.props.questions.length  ? this.handleTransition(userAnswer) : this.handleEnding(userAnswer) 
    }
    handleTransition = (userAnswer) => {
        this.calculateScore(userAnswer)
        this.setState({ questionId : this.state.questionId + 1})
    }
    handleEnding = (userAnswer) => {
        this.calculateScore(userAnswer)
        alert('you scored : '+ this.state.score);
        this.props.onEnd();
    }
    calculateScore = (userAnswer) => {
        if (userAnswer === this.props.questions[this.state.questionId].correctAnswer){
            this.setState({score : this.state.score + 1})
        }
    }
    render(){
        const {questions} = this.props;
        const {questionId,started} =this.state;
        const currentQuestion = questions[questionId].questionText
        const currentAnswers = questions[questionId].questionAnswers

        return(<div>
            {started ? <QuestionHandler question={currentQuestion} answers={currentAnswers} onUserAnswer={this.handleAnswer}/> :
             <StartPage onStart={() => this.setState({started: true})} name={'math'} onExit={()=> this.props.onEnd()}/> 
        }</div>)
    }
}
    