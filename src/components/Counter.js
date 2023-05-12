
import { useSelector, useDispatch } from 'react-redux'
import { increment, encrement, uncrement, Amount } from '../redux/counter/counterSlice'
import {useState} from 'react'


function Counter(){
	const [amount, setAmount] = useState(3)
	const countValue = useSelector((state)=> state.counter.value)
	const dispatch = useDispatch();
	
	return(
		<>
		<h1>{countValue}</h1>
		<button onClick={()=> dispatch(increment())}>+</button>
		<button onClick={()=> dispatch(encrement())}>-</button>
		<button onClick={()=> dispatch(uncrement())}>*</button>
		<input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} />
		<button onClick={()=> dispatch(Amount(amount))}>art</button>
		</>
	)
}

export default Counter