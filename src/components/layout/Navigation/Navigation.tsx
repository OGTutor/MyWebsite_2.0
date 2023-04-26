import cn from 'classnames';
import { FC } from 'react';
import Button from '../../ui/button/Button';
import { INavigation } from './Navigation.interface';

const Navigation: FC<INavigation> = ({
	screens,
	activeScreen,
	onScreenChange,
	containerRef,
	className,
	...rest
}) => {
	const handleOnClick = (event: React.MouseEvent) => {
		event.preventDefault();
		containerRef.current?.classList.toggle('active');
	};

	return (
		<div className={cn(className, 'links')} {...rest}>
			<ul>
				{Object.values(screens).map((screen, idx) => (
					<li key={screen}>
						<Button
							content={screen}
							name={screen}
							handleMouseEnter={() => onScreenChange(screen)}
							handleOnClick={handleOnClick}
							className="link"
							style={
								idx === 0
									? { '--i': '0.1s' }
									: { '--i': '0.15s' }
									? { '--i': '0.2s' }
									: { '--i': '0.25s' }
							}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navigation;
