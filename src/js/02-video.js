import '@vimeo/player';
import throttle from 'lodash/throttle';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


const timeKey = 'videoplayer-current-time';

let data = {};

const currentTimeArr = localStorage.getItem(timeKey);

let parsedCurrentTimeArr = {};

if (currentTimeArr) {
  try {
    parsedCurrentTimeArr = JSON.parse(currentTimeArr);
  } catch (error) {
  }
}

const onTimeUpdate = function (data) {
  data = {
    ...data
  }
  console.log(data);
  console.log(data.seconds);

  const serializedTime = JSON.stringify(data);
  console.log(serializedTime);
  localStorage.setItem(timeKey, serializedTime);
};

player.setCurrentTime(parsedCurrentTimeArr.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));
