import './scss/main.scss'
import React, { useEffect } from 'react'

function App() {
	const STARTING_TIME = 2

	const [text, setText] = React.useState('')
	const [wordCount, setWordCount] = React.useState(0)
	const [time, setTime] = React.useState(STARTING_TIME)
	const [hasStarted, setHasStarted] = React.useState(false)

	const textAreaElement = React.useRef(null)

	function handleOnChange(event) {
		const { value } = event.target
		setText(value)
	}

	function countWords(text) {
		const words = text.trim().split(/\s+/)
		setWordCount(() => (words[0] === '' ? 0 : words.length))
	}

	function startGame() {
		setHasStarted(true)
		setText('')
		setTime(STARTING_TIME)
		textAreaElement.current.disabled = false
		textAreaElement.current.focus()
	}

	//syncronize the text input with the word count
	/* 
    useEffect(() => {
        countWords(text)
    }, [text]) */

	useEffect(() => {
		if (time > 0 && hasStarted === true) {
			setTimeout(() => {
				setTime(prevtime => prevtime - 1)
			}, 1000)
		}
		if (time === 0) {
			setHasStarted(false)
			countWords(text)
		}
	}, [time, hasStarted])

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
				// disabled={!hasStarted}// if u dont want to anyone type meanwhile the time is over
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
