import Button from './components/Button/Button'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import { ways } from './data'

export default function App() {
	let content = 'Нажми на кнопку'
	function hadleClick(type) {
		console.log('Кнопка нажата', type)
		content = type
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
					<Button onClick={() => hadleClick('way')}>Кнопка 1</Button>
					<Button onClick={() => hadleClick('easy')}>Кнопка 2</Button>
					<Button onClick={() => hadleClick('program')}>Кнопка </Button>

					<p>{content}</p>
				</section>
			</main>
		</div>
	)
}
