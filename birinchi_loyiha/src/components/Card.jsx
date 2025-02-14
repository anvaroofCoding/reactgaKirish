import imgGirl from '../assets/images/gril.svg'
import imgRight from '../assets/images/left.svg'
import imgMan from '../assets/images/man1.png'
import imgMan2 from '../assets/images/man2.png'
import imgMan3 from '../assets/images/man3.png'
import imgMan4 from '../assets/images/man4.png'
import imgPros from '../assets/images/prosmotr.svg'
import imgStar from '../assets/images/star.svg'
import '../assets/style/card.css'
import '../assets/style/style.css'
function Card() {
	return (
		<div>
			<div className='container' id='container'>
				<div className='card'>
					<div>
						<img src={imgMan} alt='man' />
					</div>
					<div className='title'>
						<div className='titles'>
							<h2>
								The best fashion influencers to follow for sartorial inspiration
							</h2>
							<p>
								From our favourite UK influencers to the best missives from
								Milan and the coolest New Yorkers, read on some of the best
								fashion blogs out there, and for even more inspiration, do head
								to our separate black fashion influencer round-up...
							</p>
							<p>
								Fancy some shopping deals? Check out these amazing sales: Zara
								Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci
								Black Friday...
							</p>
						</div>
						<div className='profile-status'>
							<div className='avatar'>
								<div>
									<img src={imgGirl} alt='girl' />
								</div>
								<div className='avatar-title'>
									<p>Jane Cooper</p>
									<p>Jan 10, 2022 </p>
								</div>
							</div>
							<img src={imgPros} alt='Prosmotr' />
							<img src={imgStar} alt='star' />
							<img src={imgRight} alt='right' />
						</div>
					</div>
				</div>
				<div className='card'>
					<div>
						<img src={imgMan2} alt='man' />
					</div>
					<div className='title'>
						<div className='titles'>
							<h2>
								The best fashion influencers to follow for sartorial inspiration
							</h2>
							<p>
								From our favourite UK influencers to the best missives from
								Milan and the coolest New Yorkers, read on some of the best
								fashion blogs out there, and for even more inspiration, do head
								to our separate black fashion influencer round-up...
							</p>
							<p>
								Fancy some shopping deals? Check out these amazing sales: Zara
								Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci
								Black Friday...
							</p>
						</div>
						<div className='profile-status'>
							<div className='avatar'>
								<div>
									<img src={imgGirl} alt='girl' />
								</div>
								<div className='avatar-title'>
									<p>Jane Cooper</p>
									<p>Jan 10, 2022 </p>
								</div>
							</div>
							<img src={imgPros} alt='Prosmotr' />
							<img src={imgStar} alt='star' />
							<img src={imgRight} alt='right' />
						</div>
					</div>
				</div>
				<div className='card'>
					<div>
						<img src={imgMan3} alt='man' />
					</div>
					<div className='title'>
						<div className='titles'>
							<h2>
								The best fashion influencers to follow for sartorial inspiration
							</h2>
							<p>
								From our favourite UK influencers to the best missives from
								Milan and the coolest New Yorkers, read on some of the best
								fashion blogs out there, and for even more inspiration, do head
								to our separate black fashion influencer round-up...
							</p>
							<p>
								Fancy some shopping deals? Check out these amazing sales: Zara
								Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci
								Black Friday...
							</p>
						</div>
						<div className='profile-status'>
							<div className='avatar'>
								<div>
									<img src={imgGirl} alt='girl' />
								</div>
								<div className='avatar-title'>
									<p>Jane Cooper</p>
									<p>Jan 10, 2022 </p>
								</div>
							</div>
							<img src={imgPros} alt='Prosmotr' />
							<img src={imgStar} alt='star' />
							<img src={imgRight} alt='right' />
						</div>
					</div>
				</div>
				<div className='card'>
					<div>
						<img src={imgMan4} alt='man' />
					</div>
					<div className='title'>
						<div className='titles'>
							<h2>
								The best fashion influencers to follow for sartorial inspiration
							</h2>
							<p>
								From our favourite UK influencers to the best missives from
								Milan and the coolest New Yorkers, read on some of the best
								fashion blogs out there, and for even more inspiration, do head
								to our separate black fashion influencer round-up...
							</p>
							<p>
								Fancy some shopping deals? Check out these amazing sales: Zara
								Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci
								Black Friday...
							</p>
						</div>
						<div className='profile-status'>
							<div className='avatar'>
								<div>
									<img src={imgGirl} alt='girl' />
								</div>
								<div className='avatar-title'>
									<p>Jane Cooper</p>
									<p>Jan 10, 2022 </p>
								</div>
							</div>
							<img src={imgPros} alt='Prosmotr' />
							<img src={imgStar} alt='star' />
							<img src={imgRight} alt='right' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
