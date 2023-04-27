import { FC, useRef } from 'react';

import { GradientTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { IModel } from './Model.interface';

const Model: FC<IModel> = (props) => {
	const ref = useRef<any>(null);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += 0.1;
		}
	});

	return (
		<mesh {...props} ref={ref}>
			<boxGeometry args={[2, 2, 2]} />
			<meshBasicMaterial>
				<GradientTexture
					stops={[0, 1]}
					colors={['#00b3ff', '#fff']}
					size={1024}
				/>
			</meshBasicMaterial>
		</mesh>
	);
};

export default Model;
