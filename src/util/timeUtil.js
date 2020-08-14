

export function getTimeDisplayString(totalSeconds) {  
  const seconds = Math.floor(totalSeconds % 60);
  let timeString = seconds.toString().padStart(2, "0");
   
  totalSeconds = Math.floor(totalSeconds / 60);
  const minutes = totalSeconds % 60;
  timeString = minutes.toString().padStart(2, "0") + ":" + timeString;

  totalSeconds = Math.floor(totalSeconds / 60);
  if(totalSeconds > 0) {
    timeString = totalSeconds.toString().padStart(2, "0") + ":" + timeString;
  }

  return timeString;
}
