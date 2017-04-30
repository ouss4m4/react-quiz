import React from 'react';

export const StartPage = ({onStart, onExit, name}) => (
    <div>
        <p> you have selected {name}, proceed ? </p>
        <button onClick={onStart} > Start </button>
        <button onClick={onExit} > Exit </button>
    </div>
)