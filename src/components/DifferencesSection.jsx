import { useState } from 'react'
import { differences } from '../data'
import Button from './Button/Button'

export default function DifferencesSection() {
	const [contentType, setContentType] = useState(null)

	function hadleClick(type) {
		setContentType(type)
	}
	return (
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
	)
}
