import cn from 'classnames';
import { FC } from 'react';
import { setVariable } from '../../../utils/styles-helpers/scssVar';
import Button from '../../ui/button/Button';
import { INavigation } from './Navigation.interface';
import './Navigation.scss';

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
							style={setVariable(idx)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navigation;
