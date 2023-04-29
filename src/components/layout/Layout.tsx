import { FC, useRef, useState } from 'react';
import VideoBackground from '../../assets/media/LayoutBackground/Untitled.mp4';
import { SCREENS, SCREEN_COMPONENTS } from '../../config/constants';
import Content from './Content/Content';
import './Layout.scss';
import Navbar from './Navbar/Navbar';
import Navigation from './Navigation/Navigation';

const Layout: FC = () => {
	const [activeScreen, setActiveScreen] = useState(SCREENS.HOME);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScreenChange = (screen: string) => {
		setActiveScreen(screen);
	};

	return (
		<div className="container" ref={containerRef}>
			<Navbar containerRef={containerRef} />
			{/* 3DModel */}
			<Navigation
				screens={SCREENS}
				activeScreen={activeScreen}
				onScreenChange={handleScreenChange}
				containerRef={containerRef}
			/>
			<Content component={SCREEN_COMPONENTS[activeScreen]} />
			<video
				src={`${VideoBackground}`}
				className="showcase__video"
				autoPlay
				loop
				muted
			/>
		</div>
	);
};

export default Layout;
