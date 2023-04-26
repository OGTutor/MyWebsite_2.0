import { FC, useRef, useState } from 'react';
import { SCREENS, SCREEN_COMPONENTS } from '../../config/constants';
import Content from './Content/Content';
import './Layout.module.scss';
import Navigation from './Navigation/Navigation';

const Layout: FC = () => {
	const [activeScreen, setActiveScreen] = useState(SCREENS.HOME);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScreenChange = (screen: string) => {
		setActiveScreen(screen);
	};

	return (
		<div className="container" ref={containerRef}>
			{/* 3DModel */}
			<Navigation
				screens={SCREENS}
				activeScreen={activeScreen}
				onScreenChange={handleScreenChange}
				containerRef={containerRef}
			/>
			<Content component={SCREEN_COMPONENTS[activeScreen]} />
			{/* video-background */}
		</div>
	);
};

export default Layout;
