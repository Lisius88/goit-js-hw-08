import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTimeKey = 'videoplayer-current-time';
console.log(player);

player.on('timeupdate', throttle(writeCurrentTime, 1000));

player
  .setCurrentTime(localStorage.getItem(currentTimeKey))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

function writeCurrentTime(data) {
  localStorage.setItem(currentTimeKey, data.seconds);
}
