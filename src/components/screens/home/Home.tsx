import { FC, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import PhotoImage from '../../../assets/images/home-page/hero.png';
import './Home.scss';
import HomeButton from './HomeButton/HomeButton';

const Home: FC = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				'01000110 01110010 01101111 01101110 01110100',
				'Frontend',
				'SyntaxError',
				'Developer',
				'undefined',
				'Frontend Developer',
			],
			typeSpeed: 50,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="screen" id="Home">
			<div className="main">
				<header className="header__one">
					<div className="wrapper__home">
						<section className="gallery">
							<header className="header__section__home">
								<img
									data-speed="0.6"
									src={PhotoImage}
									alt="Alt"
									className="photo__image"
								/>
								<div className="content__home">
									<h3>Hello, It`s Me</h3>
									<div className="logo">
										<div className="logo__image">
											<div className="box__logo">
												<div className="lightbar"></div>
												<div className="topLayer"></div>
												<div className="boxGlitch">
													<h1 className="glitch">
														<span className="fast-flicker">
															D
														</span>
														<span className="flicker">
															A
														</span>
														<span className="fast-flicker">
															N
														</span>
														<span className="flicker">
															I
														</span>
														<span className="fast-flicker">
															L
														</span>
														{'✠'}
														<span className="flicker">
															C
														</span>
														<span className="fast-flicker">
															H
														</span>
														<span className="flicker">
															E
														</span>
														<span className="fast-flicker">
															R
														</span>
														<span className="flicker">
															E
														</span>
														<span className="fast-flicker">
															N
														</span>
														<span className="flicker">
															K
														</span>
														<span className="fast-flicker">
															O
														</span>
													</h1>
												</div>
											</div>
										</div>
									</div>
									<h3>
										And I`m a{' '}
										<span ref={el}>Frontend Developer</span>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quam veritatis eaque
										eveniet minus porro alias aspernatur
										pariatur delectus tenetur at libero
										quidem omnis, molestias tempore iure
										voluptatibus enim laudantium veniam.
									</p>
								</div>
								<HomeButton />
							</header>
						</section>
					</div>
				</header>
			</div>

			<div className="main__background"></div>
			<div className="shadow one"></div>
			<div className="shadow two"></div>
		</div>
	);
};

export default Home;
