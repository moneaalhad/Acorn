function yesClicked() {
  document.getElementById('hidden-container').style.display = 'block';
}

function noClicked() {
  const button = document.querySelector('button:nth-child(2)');
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

  button.style.position = 'absolute';
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
