import { useState } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import { differences, ways } from './data'

export default function App() {
	const [content, setContent] = useState('Нажми на кнопку')
	//let content = 'Нажми на кнопку'
	function hadleClick(type) {
		//console.log('Кнопка нажата', type)
		setContent(type)
	}
	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>
					<ul>
						<WayToTeach
							title={ways[0].title}
							description={ways[0].description}
						/>
						<WayToTeach {...ways[1]} />
						<WayToTeach {...ways[2]} />
						<WayToTeach {...ways[3]} />
					</ul>
				</section>
				<section>
					<h3>Функционал для кнопки из кастомного компонента </h3>
					<Button onClick={() => hadleClick('way')}>Подход</Button>
					<Button onClick={() => hadleClick('easy')}>Компонент</Button>
					<Button onClick={() => hadleClick('program')}>Кнопка </Button>

					<p>{differences[content]}</p>
				</section>
			</main>
		</div>
	)
}
