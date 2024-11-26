import Header from './components/Header'

function WayToTeach() {
	return (
		<li>
			<p>
				<strong>Индивидуализация процесса</strong>Каждый ученик
				<br />
				уникален, поэтому мы разрабатываем <br />
				персонализированные
				<br />
				программы, учитывая уровень подготовки, цели и <br />
				предпочтения
				<br />
			</p>
		</li>
	)
}

export default function App() {
	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>
					<ul>
						<WayToTeach />
						<WayToTeach />
						<WayToTeach />
					</ul>
				</section>
			</main>
		</div>
	)
}
