import { useEffect, useState } from 'react';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './styles.scss';

export const Helper = () => {
	const [step, setStep] = useState(0);

	const handleStep = (action) => {
		const maxStep = 12;
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

	return (
		<div className="fixed">
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
