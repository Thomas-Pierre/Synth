let visualizer;
const color = 'rgb(105,139,105)';

function getCanvas() {
	const canvas = document.querySelector('.screen__wave');
	const canvasCtx = canvas.getContext('2d');
	const WIDTH = canvas.width;
	const HEIGHT = canvas.height;

	canvasCtx.fillStyle = color;
	canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

	return { canvas, canvasCtx, HEIGHT, WIDTH };
}

export function visualize(audioCtx, oscillator) {
	const analyser = audioCtx.createAnalyser();
	analyser.fftSize = 512;

	oscillator.connect(analyser);

	const bufferLengthAlt = analyser.frequencyBinCount / 2;
	const data = new Uint8Array(bufferLengthAlt);

	const { canvasCtx, HEIGHT, WIDTH } = getCanvas();

	const drawAlt = () => {
		visualizer = requestAnimationFrame(drawAlt);

		analyser.getByteFrequencyData(data);

		let x = 0;
		canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

		for (const i of data) {
			const barWidth = WIDTH / bufferLengthAlt;
			const barHeight = (100 / HEIGHT) * i;
			canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

			x += barWidth;
		}
	};

	drawAlt();
}
