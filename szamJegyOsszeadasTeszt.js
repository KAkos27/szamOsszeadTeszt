import szamJegyOsszeadas from "./szamJegyOsszeadas.js";
import tesztesetek from "./tesztesetek.js";

const szamJegyOsszeadasTeszt = () => {
  tesztesetek.forEach((teszteset) => {
    console.assert(
      szamJegyOsszeadas(teszteset.ertek) === teszteset.vart,
      `Hibás: ${teszteset.ertek} => vart: ${
        teszteset.vart
      } | kapott: ${szamJegyOsszeadas(teszteset.ertek)}`
    );
  });
};

export default szamJegyOsszeadasTeszt;
