import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, useEffect } from 'react';
import PhotoImage from '../../../assets/images/home-page/hero.png';
import FirstWorkImage from '../../../assets/images/home-page/work/1.jpg';
import SecondWorkImage from '../../../assets/images/home-page/work/2.jpg';
import ThirdWorkImage from '../../../assets/images/home-page/work/3.jpg';
import FourthWorkImage from '../../../assets/images/home-page/work/4.jpg';
import FifthWorkImage from '../../../assets/images/home-page/work/5.jpg';
import SixthWorkImage from '../../../assets/images/home-page/work/6.jpg';
import './Home.scss';

const Home: FC = () => {
	useEffect(() => {
		if (ScrollTrigger.isTouch !== 1) {
			gsap.registerPlugin(ScrollTrigger);

			gsap.fromTo(
				'.header__section__home',
				{ opacity: 1 },
				{
					opacity: 0,
					scrollTrigger: {
						trigger: '.header__section__home',
						start: 'center',
						end: '820',
						scrub: true,
					},
				}
			);

			const itemsLeft = gsap.utils.toArray(
				'.gallery__home__left .gallery__item'
			);
			itemsLeft.forEach((item) => {
				gsap.fromTo(
					item as HTMLElement,
					{ opacity: 0, x: -100 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item as HTMLElement,
							start: '-850',
							end: '-100',
							scrub: true,
						},
					}
				);
			});

			const itemsRight = gsap.utils.toArray(
				'.gallery__home__right .gallery__item'
			);
			itemsRight.forEach((item) => {
				gsap.fromTo(
					item as HTMLElement,
					{ opacity: 0, x: 100 },
					{
						opacity: 1,
						x: 0,
						scrollTrigger: {
							trigger: item as HTMLElement,
							start: '-750',
							end: 'top',
							scrub: true,
						},
					}
				);
			});
		}
	}, []);

	return (
		<div className="screen" id="Home">
			<div className="main">
				<header className="header__one">
					<div className="wrapper__gsap__smoother">
						<div className="content__gsap__smoother">
							<div className="wrapper__home">
								<header className="header__section__home">
									<img
										data-speed="0.6"
										src={PhotoImage}
										alt="Alt"
										className="photo__image"
									/>
									<div className="container__home">
										<div className="main__header__home">
											<h1 className="main__title__home">
												creative scroll
											</h1>
										</div>
									</div>
								</header>
								<div className="portfolio__home">
									<div className="container__home">
										<main className="gallery__home">
											<div className="gallery__home__left">
												<img
													className="gallery__item"
													src={FirstWorkImage}
													alt="Alt"
												/>
												<img
													className="gallery__item"
													src={SecondWorkImage}
													alt="Alt"
												/>
												<div className="text-block gallery__item">
													<h2 className="text-block__h">
														Lorem ipsum dolor sit
														amet consectetur
													</h2>
													<p className="text-block__p">
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Inventore fugiat ullam,
														perferendis maiores
														eaque consequuntur dolor
														accusantium quo
														dignissimos quibusdam
														quaerat, sequi vero
														veniam. Eum aliquid
														temporibus corrupti
														error necessitatibus.
													</p>
												</div>
												<img
													className="gallery__item"
													src={SixthWorkImage}
													alt="Alt"
												/>
											</div>
											<div className="gallery__home__right">
												<div className="text-block gallery__item">
													<h2 className="text-block__h">
														Lorem ipsum dolor sit
														amet consectetur
													</h2>
													<p className="text-block__p">
														Lorem ipsum dolor sit
														amet consectetur
														adipisicing elit.
														Inventore fugiat ullam,
														perferendis maiores
														eaque consequuntur dolor
														accusantium quo
														dignissimos quibusdam
														quaerat, sequi vero
														veniam. Eum aliquid
														temporibus corrupti
														error necessitatibus.
													</p>
												</div>
												<img
													className="gallery__item"
													src={ThirdWorkImage}
													alt="Alt"
												/>
												<img
													className="gallery__item"
													src={FourthWorkImage}
													alt="Alt"
												/>
												<img
													className="gallery__item"
													src={FifthWorkImage}
													alt="Alt"
												/>
											</div>
										</main>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="header">
						<div className="header__item">
							<h2 className="title">Home page</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Maiores unde nulla odio saepe,
								eius provident.
							</p>
						</div>
					</div> */}
				</header>
			</div>

			<div className="main__background"></div>
			<div className="shadow one"></div>
			<div className="shadow two"></div>
		</div>
	);
};

export default Home;
