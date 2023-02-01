import Player from '@vimeo/player';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

export default saveCurrentTime = () => {
  player
    .getCurrentTime()
    .then(time => {
      localStorage.setItem('feedback-form-state', `${time}`);
    })
    .catch(error => console.log(error));
};
