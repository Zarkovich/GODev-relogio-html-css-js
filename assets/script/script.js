const BODY = document.querySelector("body");
const P_HORAS = document.querySelector(".horas");
const P_MINUTOS = document.querySelector(".minutos");
const P_SEGUNDOS = document.querySelector(".segundos");
const R_DIGITAL = document.querySelector(".digital");

// Muda o Background de Acordo com as horas
const changeBackgroud = (horas) => {
  if (horas >= 0 && horas < 6) {
    BODY.style.backgroundImage = "url('assets/img/nigth.jpg')";
  } else if (horas >= 6 && horas < 12) {
    BODY.style.backgroundImage = "url('assets/img/manha.jpg')";
  } else BODY.style.backgroundImage = "url('assets/img/tarde.jpg')";
};

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
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();

  changeBackgroud(horas);

  pPosition(P_HORAS, (horas + minutos / 60) / 12);
  pPosition(P_MINUTOS, (minutos + segundos / 60) / 60);
  pPosition(P_SEGUNDOS, segundos / 60);

  rDigital(horas.toPrecision(1), minutos, segundos);
};

// Fica chamando a função em intervalos de 1s
setInterval(setTime, 1000);
