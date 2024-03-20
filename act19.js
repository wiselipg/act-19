{
	const playingClass = 'playing';

	const playSound = e => {
		const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		if (!key || !audio) return;

		key.classList.add(playingClass);
		audio.currentTime = 0;
		audio.play();

		// Perform specific animations for certain keys
		switch (e.keyCode) {
			case 69: // E key for Crash
			case 82: // R key for Ride
				animateCrashOrRide();
				break;
			case 75: // K key for Hi-Hat Closed
				animateHiHatClosed();
				break;
		}
	};

	const removeKeyTransition = e => {
		if (e.propertyName !== 'transform') return;
		e.target.classList.remove(playingClass);
	};

	const drumKeys = document.querySelectorAll('.key');

	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	const animateCrashOrRide = () => {
		const crashRide = document.getElementById('crash-ride');
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

	const animateHiHatClosed = () => {
		const hiHatTop = document.getElementById('hihat-top');
		hiHatTop.style.top = '171px';
	};

	window.addEventListener('keydown', playSound);
}