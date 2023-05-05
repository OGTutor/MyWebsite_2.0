import React from 'react';
import images from '../assets/images/projects-page';
import video from '../assets/media/ProjectsPage/video_optimized.mp4';
import About from '../components/screens/about/About';
import Home from '../components/screens/home/Home';
import Projects from '../components/screens/projects/Projects';
import Skills from '../components/screens/skills/Skills';
import {
	IDataForProjectPage,
	IDataForSkillsPage,
	IScreenComponents,
	IScreens,
} from './constants.interface';

import bootstrapImage from '../assets/images/skills-page/images/bootstrap.png';
import cssImage from '../assets/images/skills-page/images/css.png';
import expressImage from '../assets/images/skills-page/images/expressjs.png';
import htmlImage from '../assets/images/skills-page/images/html.png';
import jsImage from '../assets/images/skills-page/images/js.png';
import nodeImage from '../assets/images/skills-page/images/node.png';
import reactImage from '../assets/images/skills-page/images/react.png';
import reduxImage from '../assets/images/skills-page/images/redux.png';
import sassImage from '../assets/images/skills-page/images/sass.png';
import tailwindImage from '../assets/images/skills-page/images/tailwind.png';
import typescriptImage from '../assets/images/skills-page/images/typescript.png';

export const SCREENS: IScreens = {
	HOME: 'Home',
	PROJECTS: 'Projects',
	SKILLS: 'Skills',
	ABOUT: 'About',
};

export const SCREEN_COMPONENTS: IScreenComponents = {
	[SCREENS.HOME]: Home,
	[SCREENS.PROJECTS]: Projects,
	[SCREENS.SKILLS]: Skills,
	[SCREENS.ABOUT]: About,
};

export const FRAME_FOR_LOGO_STYLE: React.CSSProperties = {
	position: 'relative',
	top: 'auto',
	left: '820px',
	width: 'calc(100px + 5px)',
	height: 'calc(50px + 5px)',
	background:
		"url('../assets/images/logo/FrameForLogo.png') no-repeat center / contain",
};

export const DATA_FOR_PROJECT_PAGE: IDataForProjectPage = {
	first: { title: 'Portfolio Page' },
	secondLeft: {
		position: 'left',
		image: images.one,
		bg: false,
		contents: 'image',
	},
	thirdRight: {
		position: 'right',
		video: `${video}`,
		bg: true,
		contents: 'video',
	},
	fourthRight: {
		position: 'right',
		title: 'Lorem ipsum',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem assumenda consequatur dicta error iure laboriosam temporibus omnis quae eaque aliquam esse unde accusamus dolores non soluta.',
		bg: false,
		contents: 'text',
	},
	fifthLeft: {
		position: 'left',
		image: images.two,
		bg: true,
		contents: 'image',
	},
	sixthRight: {
		position: 'right',
		image: images.three,
		bg: true,
		contents: 'image',
	},
	seventhLeft: {
		position: 'left',
		title: 'Lorem ipsum',
		paragraph:
			'Lorem ipsum dolor sit amet, consectetur elit. Rerum dolorem assumenda consequatur dicta error iure laboriosam temporibus omnis quae eaque aliquam esse unde accusamus dolores non soluta.',
		bg: false,
		contents: 'text',
	},
	eighthRight: {
		position: 'right',
		image: images.four,
		bg: true,
		contents: 'image',
	},
	ninthLeft: {
		position: 'left',
		video: `${video}`,
		bg: false,
		contents: 'video',
	},
	tenthRight: {
		position: 'right',
		image: images.five,
		bg: true,
		contents: 'image',
	},
};

export const DATA_FOR_SKILLS_PAGE: IDataForSkillsPage = {
	js: { image: jsImage, title: 'JavaScript' },
	css: { image: cssImage, title: 'CSS' },
	html: { image: htmlImage, title: 'HTML' },
	node: { image: nodeImage, title: 'NodeJS' },
	express: { image: expressImage, title: 'ExpressJS' },
	sass: { image: sassImage, title: 'Sass' },
	bootstrap: { image: bootstrapImage, title: 'Bootstrap' },
	tailwind: { image: tailwindImage, title: 'Tailwind' },
	react: { image: reactImage, title: 'React' },
	redux: { image: reduxImage, title: 'Redux' },
	typescript: { image: typescriptImage, title: 'TypeScript' },
};
