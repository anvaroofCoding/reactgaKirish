import Card from './components/Card'
import Filter from './components/Filter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className='App'>
			<div className='bosh-qism'>
				<Navbar />
				<Filter />
				<Card />
				<Footer />
			</div>
		</div>
	)
}

export default App
