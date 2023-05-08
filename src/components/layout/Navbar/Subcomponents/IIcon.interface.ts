import { AnchorHTMLAttributes } from 'react';

export interface IIcon extends AnchorHTMLAttributes<HTMLAnchorElement> {
	style?: React.CSSProperties & { '--i'?: string };
}
