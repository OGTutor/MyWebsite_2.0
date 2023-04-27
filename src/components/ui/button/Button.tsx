import { FC } from 'react';
import { IButton } from './Button.interface';
import './Button.scss';

const Button: FC<IButton> = ({
	content,
	name,
	handleMouseEnter,
	handleOnClick,
	style,
	...rest
}) => {
	return (
		<div className="btn">
			<a
				onMouseEnter={handleMouseEnter}
				onClick={handleOnClick}
				id={name}
				className="button"
				style={style}
			>
				<span className="button__line button__line--top"></span>
				<span className="button__line button__line--right"></span>
				<span className="button__line button__line--bottom"></span>
				<span className="button__line button__line--left"></span>
				{content}
			</a>
		</div>
	);
};

export default Button;
