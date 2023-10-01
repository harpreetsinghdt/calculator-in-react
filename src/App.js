import { useState, useRef } from 'react';
import './App.css';

function App() {
	const inputRef = useRef(null);
	const resultRef = useRef(null);
	const [result, setResult] = useState(0);

	function plus(e) {
		// Add the code for the plus function
		e.preventDefault();
		setResult((result) => result + Number(inputRef.current.value));
	}

	function minus(e) {
		// Add the code for the minus function
		e.preventDefault();
		setResult((result) => result - Number(inputRef.current.value));
	}

	function times(e) {
		// Add the code for the plus function
		e.preventDefault();
		setResult((result) => result * Number(inputRef.current.value));
	}

	function divide(e) {
		// Add the code for the divide function
		e.preventDefault();
		setResult((result) => result / Number(inputRef.current.value));
	}

	function resetInput(e) {
		// Add the code for the resetInput function
		e.preventDefault();
		inputRef.current.value = null;
	}

	function resetResult(e) {
		// Add the code for the resetResult function
    e.preventDefault();
		setResult((result) => result * 0);
    // resultRef.current.value= null;
	}

	return (
		<div className='app'>
			<div>
				<h1>Calculator App in React</h1>
			</div>
			<form>
				<span className='dv-area'>
					<p ref={resultRef}>{result}</p>
					<input
						id='amount'
						pattern='[0-9]'
						ref={inputRef}
						type='number'
						placeholder='Type a number'
					/>
				</span>
				<span className='dv-flex1'>
					{/* Add the subtract button */}
					{/* Add the multiply button */}
					{/* Add the divide button */}
					{/* Add the resetInput button */}
					{/* Add the resetResult button */}
					<button onClick={plus}>Add</button>
					<button onClick={minus}>Subtract</button>
					<button onClick={times}>Multiply</button>
					<button onClick={divide}>Divide</button>
					<button onClick={resetInput}>Reset Input</button>
					<button onClick={resetResult}>Reset Result</button>
				</span>
			</form>
		</div>
	);
}

export default App;
