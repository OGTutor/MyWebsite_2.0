import { FC } from 'react';
import './Home.scss';

const Home: FC = () => {
	return (
		<div className="screen" id="Home">
			<div className="main">
				<header className="header__one">
					<div className="header">
						<div className="header__item">
							<h2 className="title">Home page</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Maiores unde nulla odio saepe,
								eius provident.
							</p>
						</div>
					</div>
				</header>
			</div>

			<div className="main__background"></div>
			<div className="shadow one"></div>
			<div className="shadow two"></div>
		</div>
	);
};

export default Home;
