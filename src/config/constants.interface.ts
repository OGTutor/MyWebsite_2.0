export interface IScreens {
	HOME: string;
	PROJECTS: string;
	SKILLS: string;
	ABOUT: string;
}

export interface IScreenComponents {
	[key: string]: React.ComponentType<any>;
}

export interface ProjectPageImage {
	position: 'left' | 'right';
	image: string;
	bg: boolean;
	contents: string;
}

export interface ProjectPageVideo {
	position: 'left' | 'right';
	video: string;
	bg: boolean;
	contents: string;
}

export interface ProjectPageText {
	position: 'left' | 'right';
	title: string;
	paragraph: string;
	bg: boolean;
	contents: string;
}

export interface IDataForProjectPage extends Object {
	first: {
		title: string;
	};
	secondLeft: ProjectPageImage;
	thirdRight: ProjectPageVideo;
	fourthRight: ProjectPageText;
	fifthLeft: ProjectPageImage;
	sixthRight: ProjectPageImage;
	seventhLeft: ProjectPageText;
	eighthRight: ProjectPageImage;
	ninthLeft: ProjectPageVideo;
	tenthRight: ProjectPageImage;
}

export interface SkillIcon {
	image: string;
	title: string;
}

export interface IDataForSkillsPage {
	js: SkillIcon;
	css: SkillIcon;
	html: SkillIcon;
	node: SkillIcon;
	express: SkillIcon;
	sass: SkillIcon;
	bootstrap: SkillIcon;
	tailwind: SkillIcon;
	react: SkillIcon;
	redux: SkillIcon;
	typescript: SkillIcon;
}
