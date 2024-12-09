import './Button.css'

export default function Button({ children, onClick, isActive }) {
	//console.log('App render')
	return (
		<button className={isActive ? 'button active' : 'button'} onClick={onClick}>
			{children}
		</button>
	)
}
