import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

import saveCurrentTime from './video/saveCurrentTime';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

player
  .setCurrentTime(localStorage.getItem('feedback-form-state'))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(`${error.name}`);
        break;

      default:
        console.log('Unknown error');
        break;
    }
  });
