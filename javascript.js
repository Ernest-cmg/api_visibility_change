const video = document.getElementById("video");


addEventListener("visibilitychange", (e)=>{
      document.visibilityState === "visible" 
      ? video.play() 
      : video.pause();
});