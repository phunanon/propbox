import { Interface } from './interface';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;

  const { HandleResize, HandlePlayToggle } = Interface(canvas);
  const handleDomResize = () => {
    HandleResize(document.body.offsetWidth, document.body.offsetHeight);
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
  };
  window.addEventListener('resize', handleDomResize);
  window.addEventListener('orientationchange', handleDomResize);
  window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      HandlePlayToggle();
    }
  });
  handleDomResize();
});
