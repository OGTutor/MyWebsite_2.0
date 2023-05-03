import { FC } from 'react';

export interface IVideo {
	bg?: boolean;
	position?: string;
	video?: string;
}

const Video: FC<IVideo> = ({ bg, position, video }) => {
	return (
		<>
			<div className={bg ? 'frame frame_bg' : 'frame'}>
				<div className="frame__content">
					<video
						className={
							position === 'left'
								? 'frame-media frame-media_left'
								: 'frame-media frame-media_right'
						}
						src={video}
						autoPlay
						loop
						muted
					></video>
				</div>
			</div>
			<div className="frame"></div>
		</>
	);
};

export default Video;
