import '../assets/style/filter.css'
import '../assets/style/style.css'
function Filter() {
	return (
		<div>
			<div className='container' id='filters'>
				<div className='filter-menu'>
					<ul className='filter-menus'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Breaking news</a>
						</li>
						<li>
							<a href='#'>Regular news</a>
						</li>
						<li>
							<a href='#'>International news</a>
						</li>
						<li>
							<a href='#'>Sports</a>
						</li>
						<li>
							<a href='#'>Entertainment</a>
						</li>
						<li>
							<a href='#'>Culture</a>
						</li>
						<li>
							<a href='#'>Arts</a>
						</li>
						<li>
							<a href='#'>All news</a>
						</li>
					</ul>
				</div>
				<div className='filter-about'>
					<h2>4 items found for category Entertainment</h2>
				</div>
				<div className='filter-btn'>
					<div className='select-op'>
						<label htmlFor='sort'>Sort By View:</label>
						<select name='sort' id='select'>
							<option value='1'>Defult</option>
							<option value='2'>yana nimadir</option>
							<option value='3'>va yana nimadir</option>
							<option value='4'>vashi nimadir</option>
							<option value='5'>oxirgi nimadir</option>
						</select>
					</div>
					<div className='select-btn'>
						<button>Today’s Pick</button>
						<button>Trending</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter
