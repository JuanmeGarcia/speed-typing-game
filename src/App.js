import './scss/main.scss'
import React, { useEffect } from 'react'

function App() {
	const [text, setText] = React.useState('')
    const [wordCount, setWordCount] = React.useState(0)
    const [time, setTime] = React.useState(2)

	function handleOnChange(event) {
		const { value } = event.target
		setText(value)
	}

    function countWords (text){
        const words = text.trim().split(/\s+/)
        setWordCount(()=> words[0] === '' ? 0 : words.length)
    }

    useEffect(() => {
        countWords(text)
    }, [text])

    useEffect(()=>{
        if(time > 0){
            setTimeout(()=>{
                setTime(prevtime => prevtime - 1)
            }, 1000)
        }
    }, [time])

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
			/>
			<h4>Time remaining:{time}</h4>
			<button>Start</button>
			<h2>Word count:{wordCount}</h2>
		</main>
	)
}

export default App
