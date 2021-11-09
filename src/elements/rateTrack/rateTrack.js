const rateTracks = document.querySelectorAll('.rate-track');

if(rateTracks.length>0){
  initRateTracks();
}

function initRateTracks(){
  let rateTrackActive, rateTrackValue;
  for (let index = 0; index < rateTracks.length; index++) {
    const rateTrack = rateTracks[index];
    initRateTrack(rateTrack);
  }
}

function initRateTrack(rateTrack){
  initRateTrackVars(rateTrack);
  setRateTrackActiveWidth();
  if(rateTrack.classList.contains('rating_set')){
    setRating(rateTrack);
  }

}

function initRateTrackVars(rateTrack){
  rateTrackActive = rateTrack.querySelector('.rate-track__active');
  rateTrackValue = rateTrack.querySelector('.rate-track__value');
  rateTrackItemsContainer = rateTrack.querySelector('.rate-track__items');

}

function setRateTrackActiveWidth(index = rateTrackValue.innerHTML) {
  const rateTrackActiveWidth = index/0.05;
  rateTrackActive.style.width = `${rateTrackActiveWidth}%`
  
}

function setRating(rateTrack) {
  const ratingItems = rateTrack.querySelectorAll('.rate-track__item');
  for (let index = 0; index < ratingItems.length; index++) {
    const ratingItem = ratingItems[index];
    ratingItem.addEventListener('mouseenter', function (e) {
      initRateTrackVars(rateTrack);
      setRateTrackActiveWidth(ratingItem.value);
    })
    rateTrackItemsContainer.addEventListener('mouseleave', function (e) {
      setRateTrackActiveWidth();
    })
    ratingItem.addEventListener('click', function (e) {
      rateTrackValue.innerHTML = ratingItem.value;
    })
  }
}