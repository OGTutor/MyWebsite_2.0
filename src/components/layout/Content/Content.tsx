import { FC, useMemo } from 'react';

const Content: FC<{ component: React.ComponentType<any> }> = ({
	component: Component,
}) => {
	const component = useMemo(() => <Component />, [Component]);

	return <>{component}</>;
};

export default Content;
