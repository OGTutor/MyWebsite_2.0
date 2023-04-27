import { HTMLAttributes, RefObject } from 'react';

export interface INavbar extends HTMLAttributes<HTMLElement> {
	containerRef: RefObject<HTMLDivElement>;
}
