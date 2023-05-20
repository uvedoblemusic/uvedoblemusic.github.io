<script>
  var currentAudio = null;

  function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    if (currentAudio !== null && currentAudio !== audio) {
      currentAudio.pause();
    }
    audio.play();
    currentAudio = audio;
  }
</script>