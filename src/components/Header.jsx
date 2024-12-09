import { useState } from 'react'
import logo from '/vite.svg'

export default function Header() {
	const [now, setNow] = useState(new Date())
	setInterval(() => {
		setNow(new Date())
	}, 1000)
	return (
		<header>
			{/* <h3>Чукур</h3> */}
			<img src={logo} alt={'Logo'} />
			<span>Время сейчас :{now.toLocaleTimeString()} </span>
		</header>
	)
}
