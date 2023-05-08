import { FC, useState } from 'react';
import { INavbar } from './Navbar.interface';
import './Navbar.scss';
import GitHubIcon from './Subcomponents/GitHubIcon';
import InstagramIcon from './Subcomponents/InstagramIcon';
import LinkedInIcon from './Subcomponents/LinkedInIcon';
import RadiationIcon from './Subcomponents/RadiationIcon';
import ReactIcon from './Subcomponents/ReactIcon';

const Navbar: FC<INavbar> = ({ containerRef }) => {
	const [openBar, setOpenBar] = useState(false);

	const toggleActiveContainer = () => {
		containerRef.current?.classList.toggle('active');
		setOpenBar((prevState) => !prevState);
	};

	return (
		<nav className="navbar">
			<div className="menu">
				<div className="logo">
					<div className="logo__image">
						<div className="box__logo">
							<div className="lightbar"></div>
							<div className="topLayer"></div>
							<div className="boxGlitch">
								<h3 className="glitch">
									<span className="fast-flicker">O</span>
									<span className="flicker">G</span>
									<span className="fast-flicker">T</span>
									<span className="flicker">u</span>
									<span className="fast-flicker">t</span>
									<span className="flicker">o</span>
									<span className="fast-flicker">r</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="burger" onClick={toggleActiveContainer}>
					<div className="social-media">
						<ReactIcon style={{ '--i': '1' }} />
						<InstagramIcon style={{ '--i': '2' }} />
						<GitHubIcon style={{ '--i': '3' }} />
						<LinkedInIcon style={{ '--i': '4' }} />
						<RadiationIcon style={{ '--i': '5' }} />
					</div>
					<div
						className={`bar ${openBar ? 'open' : ''}`}
						ref={containerRef}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
