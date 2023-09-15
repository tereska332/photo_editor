const brightnessBar = document.getElementById('brightness-bar');
const contrastBar = document.getElementById('contrast-bar');
const saturationBar = document.getElementById('saturation-bar');
const hueBar = document.getElementById('hue-bar');
const blurBar = document.getElementById('blur-bar');
const exampleImage = document.getElementById('example-image');
const root = document.documentElement;

const bars = [brightnessBar, contrastBar, saturationBar, hueBar, blurBar];

const updateFilters = () => {
    root.style.setProperty('--brightness', brightnessBar.value + '%');
    root.style.setProperty('--contrast', contrastBar.value + '%');
    root.style.setProperty('--saturate', saturationBar.value + '%');
    root.style.setProperty('--hue', hueBar.value + 'deg');
    root.style.setProperty('--blur', blurBar.value + 'px');
};



bars.forEach((bar) => {
    bar.addEventListener('input', updateFilters);
});