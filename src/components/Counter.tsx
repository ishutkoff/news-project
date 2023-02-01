import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>{count}</h1>
			<button className={classes.button} onClick={() => setCount(count + 1)}>
				+
			</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</>
	)
}
