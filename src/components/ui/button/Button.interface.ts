import { HTMLAttributes, MouseEvent } from 'react';

export interface IButton extends HTMLAttributes<HTMLDivElement> {
	content: string;
	name: string;
	handleMouseEnter?: (event: MouseEvent<HTMLAnchorElement>) => void;
	handleOnClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
	style?: React.CSSProperties & { '--i'?: string };
}
