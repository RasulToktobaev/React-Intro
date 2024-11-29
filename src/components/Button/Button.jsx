import './Button.css'

export default function Button({ children }) {
	function handleClick() {
		console.log('handleClick')
	}

	const handleEnter = () => console.log('handleEnter')

	return (
		<button className="button" onClick={handleClick} onMouseEnter={handleEnter}>
			{children}
		</button>
	)
}
