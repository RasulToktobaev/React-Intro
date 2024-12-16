import { useState } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import { differences, ways } from './data'

export default function App() {
	const [contentType, setContentType] = useState(null)

	function hadleClick(type) {
		setContentType(type)
	}
	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>
					<ul>
						{ways.map((way) => (
							<WayToTeach key={way.title} {...way} />
						))}
					</ul>
				</section>
				<section>
					<h3>Функционал для кнопки из кастомного компонента </h3>
					<Button
						isActive={contentType === 'way'}
						onClick={() => hadleClick('way')}
					>
						Подход
					</Button>
					<Button
						isActive={contentType === 'easy'}
						onClick={() => hadleClick('easy')}
					>
						Компонент
					</Button>
					<Button
						isActive={contentType === 'program'}
						onClick={() => hadleClick('program')}
					>
						Кнопка{' '}
					</Button>

					{!contentType && <p>Нажми на кнопку</p>}
					{contentType && <p>{differences[contentType]}</p>}
				</section>
			</main>
		</div>
	)
}
