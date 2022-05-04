import {useRef, useEffect, useState} from 'react'

function useGame(timeRemaining) {
    let startingTime = timeRemaining
	const [text, setText] = useState('')
	const [wordCount, setWordCount] = useState(0)
	const [time, setTime] = useState(startingTime)
	const [hasStarted, setHasStarted] = useState(false)
	const textAreaElement = useRef(null)

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
		setTime(startingTime)
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

    return {
        text,
        wordCount,
        time,
        hasStarted,
        textAreaElement,
        startGame,
        handleOnChange
    }
}

export { useGame }