import DifferencesSection from './components/DifferencesSection'
import Header from './components/Header'
import TeachingSection from './components/TeachingSection'

export default function App() {
	return (
		<div>
			<Header />
			<main>
				<TeachingSection />
				<DifferencesSection />
			</main>
		</div>
	)
}
