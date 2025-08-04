const progressBarContent = document.getElementById('progressBarContent');
const progressBar = document.getElementById('progressBar');
const sliderHandle = document.getElementById('sliderHandle');
const gbLeft = document.getElementById('gbLeft');
const gbConsumed = document.getElementById('gbConsumed');

const TOTAL_GB = 1000;
let usedGB = 815; // initial value

function updateUI(percent) {
	// Clamp percent between 0 and 100
	percent = Math.max(0, Math.min(100, percent));
	progressBar.style.width = percent + '%';
	usedGB = Math.round((percent / 100) * TOTAL_GB);
	gbConsumed.textContent = usedGB;
	gbLeft.textContent = TOTAL_GB - usedGB;
}

// Drag logic
let isDragging = false;

sliderHandle.addEventListener('mousedown', (e) => {
	isDragging = true;
	document.body.style.userSelect = 'none';
});

document.addEventListener('mouseup', () => {
	isDragging = false;
	document.body.style.userSelect = '';
});

document.addEventListener('mousemove', (e) => {
	if (!isDragging) return;
	const rect = progressBarContent.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let percent = (x / rect.width) * 100;
	updateUI(percent);
});

// Touch support
sliderHandle.addEventListener('touchstart', (e) => {
	isDragging = true;
	document.body.style.userSelect = 'none';
	e.preventDefault();
});
document.addEventListener('touchend', () => {
	isDragging = false;
	document.body.style.userSelect = '';
});
document.addEventListener('touchmove', (e) => {
	if (!isDragging) return;
	const touch = e.touches[0];
	const rect = progressBarContent.getBoundingClientRect();
	let x = touch.clientX - rect.left;
	let percent = (x / rect.width) * 100;
	updateUI(percent);
});
