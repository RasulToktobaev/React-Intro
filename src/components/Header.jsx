import logo from '/vite.svg'

export default function Header() {
	const now = new Date()
	return (
		<header>
			{/* <h3>Чукур</h3> */}
			<img src={logo} alt={'Logo'} />
			<span>Время сейчас :{now.toLocaleTimeString()} </span>
		</header>
	)
}
