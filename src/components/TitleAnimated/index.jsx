import './styles.scss';
export const AnimatedTitle = ({ title }) => {
	return (
		<div className="title-anm">
			<video src="./video5.mp4" autoPlay loop muted />
			<h1>{title}</h1>
		</div>
	);
};
