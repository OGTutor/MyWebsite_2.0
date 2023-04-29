import { FC, useState } from 'react';
import { INavbar } from './Navbar.interface';
import './Navbar.scss';

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
							{/* <Canvas
								style={FRAME_FOR_LOGO_STYLE}
								camera={{ position: [0, 0, 5] }}
							>
								<Model position={new Vector3(-1.5, 0, 0)} />
								<Model
									position={new Vector3(0, 0, 0)}
									rotation={
										new Euler(Math.PI / 4, Math.PI / 4, 0)
									}
								/>
								<Model position={new Vector3(1.5, 0, 0)} />
							</Canvas> */}
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
