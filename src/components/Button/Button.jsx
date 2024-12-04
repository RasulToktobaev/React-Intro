import './Button.css'

export default function Button({ children, onClick }) {
	//console.log('App render')
	return (
		<button className="button active" onClick={onClick}>
			{children}
		</button>
	)
}
