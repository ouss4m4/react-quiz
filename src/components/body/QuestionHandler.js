import React from 'react'

export const QuestionHandler = ({question, answers, onUserAnswer}) => {
    let node;
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = node.answer.value ;
        if(value === '' ){return }
        onUserAnswer(value)
        for(let i=0; i<node.answer.length; i++){
           node.answer[i].checked = false;
        }
    }
    return(
        <div>
            <h4> {question} </h4>
            <form onSubmit={handleSubmit} ref={ form => node = form}>
                {answers.map( a => 
                <span key={a}> <input type='radio' value={a} name='answer' /> {a}  </span>
                )}
                <input type='submit' value='next' />
            </form>
        </div>
        )
}