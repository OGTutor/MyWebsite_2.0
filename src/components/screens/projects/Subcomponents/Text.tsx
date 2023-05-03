import { FC } from 'react';

export interface IText {
	bg?: boolean;
	position?: string;
	title?: string;
	paragraph?: string;
}

const Text: FC<IText> = ({ bg, position, paragraph, title }) => {
	return (
		<>
			<div className={bg ? 'frame frame_bg' : 'frame'}>
				<div
					className={
						position === 'left'
							? 'frame__content text-left'
							: 'frame__content text-right'
					}
				>
					<h3>{title}</h3>
					<p>{paragraph}</p>
				</div>
			</div>
			<div className="frame"></div>
		</>
	);
};

export default Text;
