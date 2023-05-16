import { FC, useEffect } from 'react';
import Image from './index';

import './About.scss';

const About: FC = () => {
	const handleScroll = (e: MouseEvent) => {
		const positionX = e.clientX - window.innerWidth / 2;
		const positionY = e.clientY - window.innerHeight / 2;

		const rotateDegree = (positionX / (window.innerWidth / 2)) * 20;

		const parallax = document.querySelectorAll('.parallax');
		parallax.forEach((el) => {
			const speedX = (el as HTMLElement).dataset.speedx;
			const speedY = (el as HTMLElement).dataset.speedy;
			const speedZ = (el as HTMLElement).dataset.speedz;
			const rotateSpeed = (el as HTMLElement).dataset.rotation;

			const isInLeft =
				parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
					? 1
					: -1;
			const positionZ =
				(e.clientX - parseFloat(getComputedStyle(el).left)) *
				isInLeft *
				0.1;

			(
				el as HTMLElement
			).style.transform = `perspective(2300px) translateZ(${
				positionZ * Number(speedZ)
			}px) rotateY(${
				rotateDegree * Number(rotateSpeed)
			}deg) translateX(calc(-50% + ${
				-positionX * Number(speedX)
			}px)) translateY(calc(-50% + ${positionY * Number(speedY)}px))`;
		});
	};

	useEffect(() => {
		const main = document.querySelector('main');
		if (window.innerWidth >= 725 && main) {
			(main as HTMLElement).style.maxHeight = `${
				window.innerWidth * 0.6
			}px`;
		} else if (main) {
			(main as HTMLElement).style.maxHeight = `${
				window.innerWidth * 1.6
			}px`;
		}

		window.addEventListener('mousemove', handleScroll);

		return () => {
			window.removeEventListener('mousemove', handleScroll);
		};
	}, []);

	return (
		<div className="screen" id="About">
			<div className="main">
				<header className="header__four">
					<div className="container">
						<div className="wrapper__about">
							<div className="vignette"></div>
							<img
								src={Image.BackgroundImage}
								alt="Background"
								className="parallax bg-img"
								data-speedx="0.3"
								data-speedy="0.38"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Fog7Image}
								alt="Fog-7"
								className="parallax fog-7"
								data-speedx="0.27"
								data-speedy="0.32"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Mountain10Image}
								alt="Mountain-10"
								className="parallax mountain-10"
								data-speedx="0.195"
								data-speedy="0.305"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Fog6Image}
								alt="Fog-6"
								className="parallax fog-6"
								data-speedx="0.25"
								data-speedy="0.28"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Mountain9Image}
								alt="Mountain-9"
								className="parallax mountain-9"
								data-speedx="0.125"
								data-speedy="0.155"
								data-speedz="0.15"
								data-rotation="0.02"
							/>
							<img
								src={Image.Mountain8Image}
								alt="Mountain-8"
								className="parallax mountain-8"
								data-speedx="0.1"
								data-speedy="0.11"
								data-speedz="0"
								data-rotation="0.02"
							/>
							<img
								src={Image.Fog5Image}
								alt="Fog-5"
								className="parallax fog-5"
								data-speedx="0.16"
								data-speedy="0.105"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Mountain7Image}
								alt="Mountain-7"
								className="parallax mountain-7"
								data-speedx="0.1"
								data-speedy="0.1"
								data-speedz="0"
								data-rotation="0.09"
							/>
							<div
								className="text parallax"
								data-speedx="0.07"
								data-speedy="0.07"
								data-speedz="0"
								data-rotation="0.11"
							>
								<h2>About me</h2>
								<h1>Front-end Developer</h1>
							</div>
							<img
								src={Image.Mountain6Image}
								alt="Mountain-6"
								className="parallax mountain-6"
								data-speedx="0.065"
								data-speedy="0.05"
								data-speedz="0.05"
								data-rotation="0.12"
							/>
							<img
								src={Image.Fog4Image}
								alt="Fog-4"
								className="parallax fog-4"
								data-speedx="0.135"
								data-speedy="0.04"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Mountain5Image}
								alt="Mountain-5"
								className="parallax mountain-5"
								data-speedx="0.08"
								data-speedy="0.03"
								data-speedz="0.13"
								data-rotation="0.1"
							/>
							<img
								src={Image.Fog3Image}
								alt="Fog-3"
								className="parallax fog-3"
								data-speedx="0.11"
								data-speedy="0.018"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Mountain4Image}
								alt="Mountain-4"
								className="parallax mountain-4"
								data-speedx="0.059"
								data-speedy="0.024"
								data-speedz="0.35"
								data-rotation="0.14"
							/>
							<img
								src={Image.Mountain3Image}
								alt="Mountain-3"
								className="parallax mountain-3"
								data-speedx="0.04"
								data-speedy="0.018"
								data-speedz="0.32"
								data-rotation="0.05"
							/>
							<img
								src={Image.Fog2Image}
								alt="Fog-2"
								className="parallax fog-2"
								data-speedx="0.15"
								data-speedy="0.0115"
								data-speedz="0"
								data-rotation="0"
							/>
							<img
								src={Image.Mountain2Image}
								alt="Mountain-2"
								className="parallax mountain-2"
								data-speedx="0.0235"
								data-speedy="0.013"
								data-speedz="0.42"
								data-rotation="0.15"
							/>
							<img
								src={Image.Mountain1Image}
								alt="Mountain-1"
								className="parallax mountain-1"
								data-speedx="0.027"
								data-speedy="0.018"
								data-speedz="0.53"
								data-rotation="0.2"
							/>
							<img
								src={Image.SunRaysImage}
								alt="Sun-rays"
								className="sun-rays"
							/>
							<img
								src={Image.BlackShadowImage}
								alt="Black-shadow"
								className="black-shadow"
							/>
							<img
								src={Image.Fog1Image}
								alt="Fog-1"
								className="parallax fog-1"
								data-speedx="0.12"
								data-speedy="0.01"
								data-speedz="0"
								data-rotation="0"
							/>
						</div>
					</div>
				</header>
			</div>

			<div className="main__background"></div>
			<div className="shadow one"></div>
			<div className="shadow two"></div>
		</div>
	);
};

export default About;
