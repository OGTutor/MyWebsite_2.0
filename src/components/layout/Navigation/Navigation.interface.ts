import { HTMLAttributes, RefObject } from 'react';
import { IScreens } from '../../../config/constants';

export interface INavigation extends HTMLAttributes<HTMLDivElement> {
	screens: IScreens;
	activeScreen: string;
	containerRef: RefObject<HTMLDivElement>;
	onScreenChange: (screen: string) => void;
}
