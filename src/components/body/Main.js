import React, { Component } from 'react'
import QuizHandler from './QuizHandler'
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state={ 
            selectedQuiz : null,
            quizEnded : false,
            onProgress : false,           
        }
    }
    handleSelect = (id) => this.setState({ selectedQuiz : id, onProgress: true })
    onQuizEnd = () => (
        this.setState({quizEnded: true, onProgress: false})
    )
    render(){
        const {quiz} = this.props;
        const {selectedQuiz, onProgress} = this.state;

        return (<div style={{textAlign : 'center'}}>
        <h1> Welcome to the Quiz land !  </h1>
        {!quiz ? <p> no quiz available yet, make one ? </p> : !onProgress ? <ul> {quiz.map( q =>
                 <li key={q.id} onClick={() => this.handleSelect(q.id)}> {q.title} </li>
            )} </ul>  : null }
        {onProgress  ?  <QuizHandler questions={quiz[selectedQuiz].questions} onEnd={this.onQuizEnd} /> : ''}
        
       </div> )   
    }
}