const szamJegyOsszeadas = (szam) => {
  debugger;
  if (szam % 1 != 0) {
    szam += "";
    szam.replace(".", "");
    parseInt(szam);
  }
  if (szam < 0) {
    szam *= -1;
  }
  let osszeg = 0;
  while (szam > 0) {
    let maradek = szam % 10;
    osszeg += maradek;
    szam = Math.floor(szam / 10);
  }
  return osszeg;
};

export default szamJegyOsszeadas;
