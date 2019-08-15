'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.3) {
      btn.textContent = '大吉'; //30%
    } else if (n < 0.5) {
      btn.textContent = '小吉'; //20%
    } else {
      btn.textContent = '末吉';//50%
    }
  });

  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });

  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });

}
