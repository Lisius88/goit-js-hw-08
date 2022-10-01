import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTimeKey = 'videoplayer-current-time';

console.log(player);

const onPlay = function (data) {
  localStorage.setItem(currentTimeKey, data.seconds);
};

player.on('timeupdate', onPlay);

player
  .setCurrentTime(localStorage.getItem(currentTimeKey))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
