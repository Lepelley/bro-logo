const logos = [
  'cray.webp', 'yumi.webp', 'vador.webp', 'drydry.webp', 'dark_vador.webp', 'dray.webp', 
  'drycontent.webp', 'bs.webp', '1186734127714664558.webp', '1186734128914251987.webp', '1186791942609195108.webp',
  'Anta', 'Cray2', 'crayPog', 'Dray2', 'MFRage', 'Ozi', 'Ozi2', 'Ozi3', 'vador2', 'yumi2'
]

let dvd = document.getElementById('dvd');
let interval_id;
let x_incr = 1;
let y_incr = 1;

function init() {
  update_color();
  dvd.style.position = 'absolute';
  // document.body.style.background = '#4d4d4d';
  setInterval(frame, 5);
}

function update_color() {
  random = Math.round((Math.random() * (logos.length - 1)))
  const img = dvd.querySelector('img')
  img.src = 'logos/' + logos[random]

  let color = Math.round((Math.random() * 100));
  dvd.style.fill = `hsl(${color},100%,50%)`;
}

function handle_collision() {
  let dvd_height = dvd.offsetHeight;
  let dvd_width = dvd.offsetWidth;
  let left = dvd.offsetLeft;
  let top = dvd.offsetTop;
  let win_height = window.innerHeight;
  let win_width = window.innerWidth;

  if (left <= 0 || left + dvd_width >= win_width) {
    x_incr = ~x_incr + 1;
    update_color();
  }
  if (top <= 0 || top + dvd_height >= win_height) {
    y_incr = ~y_incr + 1;
    update_color();
  }
}

function frame() {
  handle_collision();
  dvd.style.top = dvd.offsetTop + y_incr;
  dvd.style.left = dvd.offsetLeft + x_incr;
}

init();