document.addEventListener("DOMContentLoaded", function () {
  let clickbtn = document.querySelectorAll(".audioPlay");

  for (audio of clickbtn) {
    audio.addEventListener("click", function () {
      let audio = this.value;
      let tom1 = new Audio(audio);
      tom1.play();
    });
  }

  
});
