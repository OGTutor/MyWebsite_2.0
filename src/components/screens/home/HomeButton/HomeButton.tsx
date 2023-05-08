import { FC } from 'react';
import './HomeButton.scss';

const HomeButton: FC = () => {
	return (
		<div className="btn__container__home__page">
			<div className="btn__home__page">
				<a href="#">Download CV</a>
			</div>
		</div>
	);
};

export default HomeButton;
