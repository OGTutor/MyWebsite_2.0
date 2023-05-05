import { FC } from 'react';

export const NextArrow: FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<div className="showcase-navigation_next">
			<div className="showcase-navigation__next" onClick={onClick}></div>
		</div>
	);
};

export const PrevArrow: FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<div className="showcase-navigation_prev">
			<div className="showcase-navigation__prev" onClick={onClick}></div>
		</div>
	);
};
