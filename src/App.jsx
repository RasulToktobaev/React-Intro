import { useState } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import { differences, ways } from './data'

export default function App() {
	const [contentType, setContentType] = useState(null)
	//let content = 'Нажми на кнопку'
	function hadleClick(type) {
		//console.log('Кнопка нажата', type)
		setContentType(type)
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

					{/* {contentType ? (
						<p>{differences[contentType]}</p>
					) : (
						<p>Нажми на кнопку</p>
					)} */}
					{/* 
					{!contentType ? <p>Нажми на кнопку</p> : null}
					{contentType ? <p>{differences[contentType]}</p> : null} */}

					{!contentType && <p>Нажми на кнопку</p>}
					{contentType && <p>{differences[contentType]}</p>}
				</section>
			</main>
		</div>
	)
}
