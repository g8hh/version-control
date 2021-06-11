function switchTab(new_tab) {
  for (let element of document.getElementsByClassName('menu')[0].children) {
    element.disabled = element.classList.contains('btn-' + new_tab);
  }
  for (let element of document.getElementsByClassName('tab')) {
    if (element.classList.contains('tab-' + new_tab)) element.style.display = "";
    else element.style.display = "none";
  }
}