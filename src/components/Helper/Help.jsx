import { useEffect, useState } from 'react';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
	BsFillMoonFill,
	BsFillSunFill,
} from 'react-icons/bs';
import './styles.scss';

export const Helper = () => {
	const [lightMode, setLightMode] = useState(true);

	const [step, setStep] = useState(0);

	const handleStep = (action) => {
		const maxStep = 11;
		if (action === '>') {
			if (step < maxStep) {
				setStep(step + 1);
			}
		} else {
			if (step > 0) {
				setStep(step - 1);
			}
		}
	};

	useEffect(() => {
		window.location.hash = `#step${step}`;
		console.log(step);
	}, [step]);

	useEffect(() => {
		const body = document.querySelector('body');
		if (!lightMode) {
			body.classList.add('dark');
		} else {
			body.classList.remove('dark');
		}
	}, [lightMode]);

	return (
		<div className="fixed">
			<button onClick={() => setLightMode(!lightMode)}>
				{lightMode ? <BsFillMoonFill /> : <BsFillSunFill />}
			</button>
			<button
				onClick={() => {
					handleStep();
				}}
			>
				<BsFillArrowLeftCircleFill />
			</button>
			<button onClick={() => handleStep('>')}>
				<BsFillArrowRightCircleFill />
			</button>
		</div>
	);
};
