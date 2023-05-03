import { FC, useEffect } from 'react';
import gif from '../../../assets/images/projects-page/gif/SoundImage.gif';
import sound from '../../../assets/media/ProjectsPage/sound/sound.mp3';
import { DATA_FOR_PROJECT_PAGE } from '../../../config/constants';
import './Projects.scss';
import Image from './Subcomponents/Image';
import Text from './Subcomponents/Text';
import Video from './Subcomponents/Video';

export interface IContentType {
	position?: string;
	image?: string;
	bg?: boolean;
	contents?: string;
	title?: string;
	video?: string;
	paragraph?: string;
}

const Projects: FC = () => {
	const defineContentType = (content: IContentType) => {
		switch (content.contents) {
			case 'image':
				return <Image {...content} />;
			case 'video':
				return <Video {...content} />;
			case 'text':
				return <Text {...content} />;
			default:
				return null;
		}
	};

	window.onscroll = function () {
		const zSpacing = -610;
		let lastPos = zSpacing / 8;
		const $frames = document.getElementsByClassName('frame');
		const frames = Array.from($frames);
		const zVals: number[] = [];

		const progressBar = document.getElementsByClassName(
			'progressBar'
		) as HTMLCollectionOf<HTMLDivElement>;

		const totalHeight = document.body.scrollHeight - window.innerHeight;
		const progressHeight = (window.pageYOffset / totalHeight) * 100;

		for (let i = 0; i < progressBar.length; i++) {
			progressBar[i].style.height = progressHeight + '%';
		}

		const top = document.documentElement.scrollTop;
		const delta = lastPos - top;

		lastPos = top;

		frames.forEach(function (n, i) {
			zVals.push(i * zSpacing + zSpacing);
			zVals[i] += delta * -5.5;
			const frame = frames[i];
			const transform = `translateZ(${zVals[i]}px)`;
			const opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
			frame.setAttribute(
				'style',
				`transform: ${transform}; opacity: ${opacity}`
			);
		});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// Audio

	const handleClickOnSoundButton = (
		event: React.MouseEvent<HTMLImageElement, MouseEvent>
	) => {
		const soundButton =
			document.querySelector<HTMLImageElement>('.soundbutton');
		const audio = document.querySelector<HTMLAudioElement>('.audio');

		if (soundButton && audio) {
			soundButton.classList.toggle('paused');
			audio.paused ? audio.play() : audio.pause();
		}
	};

	window.onfocus = function () {
		const soundButton =
			document.querySelector<HTMLImageElement>('.soundbutton');
		const audio = document.querySelector<HTMLAudioElement>('.audio');

		if (soundButton && audio) {
			soundButton.classList.contains('paused')
				? audio.pause()
				: audio.play();
		}
	};

	window.onblur = function () {
		const audio = document.querySelector<HTMLAudioElement>('.audio');

		if (audio) {
			audio.pause();
		}
	};

	return (
		<div className="screen" id="Portfolio">
			<div className="main">
				<header className="header_three">
					<div className="container">
						<div id="progressBar" className="progressBar"></div>
						<section className="gallery">
							{Object.values(DATA_FOR_PROJECT_PAGE).map(
								(element, idx) =>
									idx === 0 ? (
										<>
											<div className="frame" key={idx}>
												<div className="frame__content">
													<h2>{element.title}</h2>
												</div>
											</div>
											<div className="frame"></div>
											<div className="frame"></div>
										</>
									) : (
										<>{defineContentType(element)}</>
									)
							)}
							<div className="frame frame_bg">
								<div className="frame__content">
									<video
										className="frame-media"
										src={
											DATA_FOR_PROJECT_PAGE.thirdRight
												.video
										}
										autoPlay
										loop
										muted
									></video>
								</div>
							</div>

							<div className="frame"></div>
							<div className="frame"></div>

							<div className="frame">
								<div className="frame__content">© OGTutor</div>
							</div>
						</section>
					</div>

					<img
						className="soundbutton paused"
						onClick={(event) => handleClickOnSoundButton(event)}
						src={gif}
						alt="Alt"
					/>
					<audio className="audio" src={sound} loop></audio>
				</header>
			</div>
			<div className="main__background"></div>
			<div className="shadow one"></div>
			<div className="shadow two"></div>
		</div>
	);
};

export default Projects;
