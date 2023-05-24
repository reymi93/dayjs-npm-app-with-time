let hora = document.getElementById("hour");
let timezone = document.getElementById("timezone");
let fecha = document.getElementById("date");

dayjs.locale("es");
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

hora.innerText = dayjs().format("HH:mm:ss");
timezone.innerText = dayjs.tz.guess();
fecha.innerText = dayjs().format("dddd, D MMM, YYYY");
