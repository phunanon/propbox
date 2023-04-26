import { Interface } from './interface';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  if (!canvas) return;

  const { HandleResize } = Interface(canvas);
  const handleDomResize = () => {
    HandleResize(document.body.offsetWidth, document.body.offsetHeight);
    canvas.width = document.body.offsetWidth;
    canvas.height = document.body.offsetHeight;
  };
  window.addEventListener('resize', handleDomResize);
  handleDomResize();
});
