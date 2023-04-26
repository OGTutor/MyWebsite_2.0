import React from 'react';
import About from '../components/screens/about/About';
import Home from '../components/screens/home/Home';
import Projects from '../components/screens/projects/Projects';
import Skills from '../components/screens/skills/Skills';

export interface IScreens {
	HOME: string;
	PROJECTS: string;
	SKILLS: string;
	ABOUT: string;
}

export interface IScreenComponents {
	[key: string]: React.ComponentType<any>;
}

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
