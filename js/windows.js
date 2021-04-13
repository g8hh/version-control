function openWindow(type) {
  for (let element of document.getElementsByClassName('window')) {
    if (element.attributes.type.value == type) element.style.display = "";
    else element.style.display = "none";
  }
}

function closeWindow() {
  openWindow('');
}