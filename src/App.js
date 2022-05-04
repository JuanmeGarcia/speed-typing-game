import './scss/main.scss'
import React from 'react'
import { useGame } from './hooks/useGame'

function App() {
	const {
        text,
        wordCount,
        time,
        hasStarted,
        textAreaElement,
        startGame,
        handleOnChange
    } = useGame(2)
	
	return (
		<main>
			<h1>How fast are u able to type?</h1>
			<textarea
				name="words"
				id=""
				cols="30"
				rows="10"
				value={text}
				onChange={handleOnChange}
				disabled={!hasStarted}// if u dont want to anyone type meanwhile the time is over
				ref={textAreaElement}
			/>
			<h4>Time remaining:{time}</h4>
			<button disabled={hasStarted} onClick={startGame}>
				{time ? 'Start' : 'New game'}
			</button>
			<h2>Word count:{wordCount}</h2>
		</main>
	)
}

export default App
