console.log('🌴');
const el = document.querySelector('.multi');
const opt = [];
const addOpt = (value) => {
  opt.push(value);
};
el.addEventListener('change', (e) => addOpt(e.target.value));
