const BODY = document.querySelector("body");
const P_HORAS = document.querySelector(".horas");
const P_MINUTOS = document.querySelector(".minutos");
const P_SEGUNDOS = document.querySelector(".segundos");
const R_DIGITAL = document.querySelector(".digital");
const RELOGIO = document.querySelector(".relogio");
const ZONE = document.querySelector("[selector]");

// Responsavel pelo Relogio digital
const rDigital = (horas, minutos, segundos) => {
  let horasFormated = null;
  let minutoFormated = null;
  let segundoFormated = null;
  if (horas < 10) horasFormated = `0${horas}`;
  else horasFormated = horas;
  if (minutos < 10) minutoFormated = `0${minutos}`;
  else minutoFormated = minutos;
  if (segundos < 10) segundoFormated = `0${segundos}`;
  else segundoFormated = segundos;

  R_DIGITAL.textContent = `${horasFormated}:${minutoFormated}:${segundoFormated}`;
};

// Rotação dos ponteiros.
const pPosition = (elemento, pos) => {
  elemento.style.setProperty("--pos", pos * 360);
};

// faz chama as outras funções
const setTime = () => {
  const data = new Date();
  switch (ZONE.value) {
    case "Brazil":
      break;
    case "Londres":
      data.setUTCHours(7);
      console.log(data.getHours());
      break;
    case "Japão":
      data.setUTCHours(15);
      console.log(data.getHours());
      break;
  }
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  // Set time zone

  pPosition(P_HORAS, (horas + minutos / 60) / 12);
  pPosition(P_MINUTOS, (minutos + segundos / 60) / 60);
  pPosition(P_SEGUNDOS, segundos / 60);

  rDigital(horas, minutos, segundos);
};

// Fica chamando a função em intervalos de 1s
setInterval(setTime, 1000);

document.getElementById("dark").innerHTML;

function darkTheme() {
  RELOGIO.style.backgroundColor = "#232323";
  RELOGIO.style.color = "#ffffff";
  P_HORAS.style.backgroundColor = "#fff";
  P_MINUTOS.style.backgroundColor = "#fff";
  P_HORAS.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.473) inset";
  P_MINUTOS.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.473) inset";
}

function lightTheme() {
  RELOGIO.style.backgroundColor = "#ffffff";
  RELOGIO.style.color = "#000000";
  P_HORAS.style.backgroundColor = "#000";
  P_MINUTOS.style.backgroundColor = "#000";
  P_HORAS.style.boxShadow = "2px 2px 4px rgba(255,255,255,0.473) inset";
  P_MINUTOS.style.boxShadow = "2px 2px 4px rgba(255,255,255,0.473) inset";
}
