import React from 'react';

import {Header} from './components/header/Header'
import Main from './components/body/Main'
import {quizList} from './quizList'
export const App = () => (
    <div>
        <Header />
        <Main quiz={quizList}/>
    </div>
)