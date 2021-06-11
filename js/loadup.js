function loadUp() {
  let vc_element = document.getElementsByClassName("version-control")[0];
  for (let ver of Object.keys(VERSIONS)) {
    let element = document.createElement("div");
    element.classList.add("version");
    if (ver == player.current_version) element.classList.add("current");
    if (ver < player.current_version) element.classList.add("complete");
    element.textContent = VERSIONS[ver]["name"];
    vc_element.appendChild(element);
  }

  let action_item_element = document.getElementsByClassName("action-items")[0];
  for (let name of ACTION_RESOURCES) {
    if (document.getElementById("action_item_" + name) === null) {
      let element = document.createElement("div");
      element.classList.add('action-item');
      element.id = "action_item_" + name;
      element.innerHTML = "<p class='amount'></p><p class='name'>" + name + "</p>";
      action_item_element.appendChild(element);
    }
  }
}

function cleanUp() {
  let versions = document.getElementsByClassName("version-control")[0].getElementsByClassName("version");
  while (versions[0]) versions[0].remove();
}