import './App.css'
import { decrement, increment, incrementByAmount } from './redux/counter'
import { useDispatch, useSelector } from 'react-redux'

function App() {
	const { count } = useSelector(state => state.counter)
	const dispatch = useDispatch()
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => dispatch(increment())}>increment</button>
			<button onClick={() => dispatch(decrement())}>decrement</button>
			<button onClick={() => dispatch(incrementByAmount(33))}>Increment by 33</button>
		</div>
	)
}

export default App
