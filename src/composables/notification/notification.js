const useNotification = (data) => {
  let html = `<div 
  class="notification py-4 px-6 ym d-flex align-center"
  style="background:${data.theme}"
  >
  <div class="v-avatar bg-white v-avatar--density-default v-avatar--size-default ml-2">
  <i class="mdi-${data.icon} mdi v-icon notranslate v-theme--BefarmanTheme v-icon--size-default">
  </i>
  </div>
  
  ${data.content}
  </div>`;
  let notif = document.createElement("div");
  notif.setAttribute("class", "d-flex justify-center");
  notif.innerHTML = html;
  document.body.appendChild(notif);
  setTimeout(() => {
    document.body.removeChild(notif);
  }, 3000);
  return;
};
