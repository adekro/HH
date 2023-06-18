import React, { useEffect } from "react";
const Lands = () => {
  useEffect(() => {
    fetch(
      "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX=41.89666254472871287,12.47067418651901782,41.90105270407683236,12.47615685111776251&CRS=EPSG:4258&WIDTH=1089&HEIGHT=872&LAYERS=CP.CadastralZoning,strade,acque,CP.CadastralParcel,fabbricati,vestizioni&STYLES=default&FORMAT=image/png&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi:96&TRANSPARENT=TRUE"
    ).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <iframe src="https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX=41.89666254472871287,12.47067418651901782,41.90105270407683236,12.47615685111776251&CRS=EPSG:4258&WIDTH=1089&HEIGHT=872&LAYERS=CP.CadastralZoning,strade,acque,CP.CadastralParcel,fabbricati,vestizioni&STYLES=default&FORMAT=image/png&DPI=96&MAP_RESOLUTION=96&FORMAT_OPTIONS=dpi:96&TRANSPARENT=TRUE"></iframe>
    </>
  );
};
export default Lands;
