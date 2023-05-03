import { FC } from 'react';

export interface IImage {
	position?: string;
	image?: string;
	bg?: boolean;
}

const Image: FC<IImage> = ({ bg, image, position }) => {
	return (
		<>
			<div className="frame"></div>
			<div className={bg ? 'frame frame_bg' : 'frame'}>
				<div className="frame__content">
					<div
						className={
							position === 'left'
								? 'frame-media frame-media_left'
								: 'frame-media frame-media_right'
						}
						style={{
							backgroundImage: `url(${image})`,
						}}
					></div>
				</div>
			</div>
			<div className="frame"></div>
		</>
	);
};

export default Image;
