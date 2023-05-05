import { FC, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import smokeVideo from '../../../assets/images/skills-page/video/Smoke.mp4';
import { DATA_FOR_SKILLS_PAGE } from '../../../config/constants';
import './Skills.scss';
import { NextArrow, PrevArrow } from './Subcomponents/Arrows';

const Skills: FC = () => {
	const [imageIndex, setImageIndex] = useState(0);

	const settings: Settings = {
		infinite: true,
		lazyLoad: 'progressive',
		speed: 1800,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '0px',
		nextArrow: <NextArrow onClick={() => {}} />,
		prevArrow: <PrevArrow onClick={() => {}} />,
		beforeChange: (current: number, next: number) => setImageIndex(next),
	};

	return (
		<div className="screen" id="Skills">
			<div className="main">
				<header className="header_three">
					<div className="container">
						<section className="showcase">
							<h2 className="showcase__header">
								Hard <span>Skills</span>
							</h2>
							<div className="showcase__content-wrapper">
								<div className="showcase__content">
									<div className="showcase-carousel">
										<Slider
											className="swiper-wrapper"
											{...settings}
										>
											{Object.values(
												DATA_FOR_SKILLS_PAGE
											).map((element, idx) => (
												<div
													key={idx}
													className={
														idx === imageIndex
															? 'swiper-slide-active showcase-carousel__item'
															: 'swiper-slide showcase-carousel__item'
													}
												>
													<div className="showcase-carousel__image-wrapper">
														<div className="showcase-carousel__image-left">
															<div
																className="showcase-carousel__image"
																style={{
																	backgroundImage: `url(${element.image})`,
																}}
															></div>
														</div>
														<div className="showcase-carousel__image-right">
															<div
																className="showcase-carousel__image"
																style={{
																	backgroundImage: `url(${element.image})`,
																}}
															></div>
														</div>
													</div>
													<p>{element.title}</p>
												</div>
											))}
										</Slider>
									</div>
								</div>
							</div>
							<video
								src={smokeVideo}
								className="showcase__video__skills__page"
								autoPlay
								loop
								muted
							/>
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

export default Skills;
