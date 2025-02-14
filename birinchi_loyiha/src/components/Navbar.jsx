import avatar from '../assets/images/Avatar.svg'
import '../assets/style/navbar.css'
import '../assets/style/style.css'

function Navbar() {
	return (
		<>
			<div className='container'>
				<nav>
					<div className='nav-btn'>
						<button>News</button>
						<button>Portal</button>
					</div>
					<div className='nav-avatar'>
						<a href='#'>News</a>
						<a href='#'>Blog</a>
						<img src={avatar} alt='Avatar' />
					</div>
				</nav>
			</div>
			<hr className='nav-hr' />
		</>
	)
}

export default Navbar
