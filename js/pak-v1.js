function log(output) {
  console.log(output);
}

function notiy(icon, title, body) {
  Notification.requestPermission();
  const options = {icon: icon,body: body};
  new Notification(title, options);
}
