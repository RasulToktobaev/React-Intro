import { useState } from 'react'
import Button from './components/Button/Button'
import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import { differences } from './data'

export default function App() {
	const [contentType, setContentType] = useState(null)

	function hadleClick(type) {
		setContentType(type)
	}
	return (
		<div>
			<Header />
			<main>
				<TeachingSection />
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
