export interface IScreens {
	HOME: string;
	PROJECTS: string;
	SKILLS: string;
	ABOUT: string;
}

export interface IScreenComponents {
	[key: string]: React.ComponentType<any>;
}

export interface IDataForProjectPage extends Object {
	first: {
		title: string;
	};
	secondLeft: {
		position: 'left' | 'right';
		image: string;
		bg: boolean;
		contents: string;
	};
	thirdRight: {
		position: 'left' | 'right';
		video: string;
		bg: boolean;
		contents: string;
	};
	fourthRight: {
		position: 'left' | 'right';
		title: string;
		paragraph: string;
		bg: boolean;
		contents: string;
	};
	fifthLeft: {
		position: 'left' | 'right';
		image: string;
		bg: boolean;
		contents: string;
	};
	sixthRight: {
		position: 'left' | 'right';
		image: string;
		bg: boolean;
		contents: string;
	};
	seventhLeft: {
		position: 'left' | 'right';
		title: string;
		paragraph: string;
		bg: boolean;
		contents: string;
	};
	eighthRight: {
		position: 'left' | 'right';
		image: string;
		bg: boolean;
		contents: string;
	};
	ninthLeft: {
		position: 'left' | 'right';
		video: string;
		bg: boolean;
		contents: string;
	};
	tenthRight: {
		position: 'left' | 'right';
		image: string;
		bg: boolean;
		contents: string;
	};
}
