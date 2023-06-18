import React, { useEffect, useRef } from "react";
import {
  defaults as defaultControls,
  MousePosition,
  OverviewMap,
} from "ol/control.js";
import Map from "ol/Map.js";
import { Vector as VectorSource, OSM, TileWMS } from "ol/source.js";
import { fromLonLat, Projection, transform } from "ol/proj";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { Vector as VectorLayer } from "ol/layer.js";
import classes from "./WordMap.module.css";
import { getCenter } from "ol/extent";

import { Polygon } from "ol/geom";
import { Feature } from "ol";
import { styled } from "@mui/material";
import proj4 from "proj4";
import { useGeolocation } from "../../hooks/useGeolocation";

export const DEFAULT_CENTER = [9.0953328, 45.4628246];

const layers = [];

export const ResponsiveMap = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw;",
  },
}));

const coordinates = [
  [7.692358133362127, 45.08833234561746],
  [7.688839075134591, 45.08536137340374],
  [7.699934925482711, 45.086347726598774],
  [7.6936263698796825, 45.08892455464803],
  [7.692358133362127, 45.08833234561746],
];

const WorldMap = () => {
  const mapRef = useRef(null);
  const { position } = useGeolocation();
  let map, source;
  const ETRS89Extent = [5.93, 34.76, 18.99, 47.1];

  proj4.defs(
    "EPSG:6706",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs"
  );

  const ETRS89proj = new Projection({
    code: "EPSG:6706",
    extent: ETRS89Extent,
  });

  const initMap = () => {
    source = new VectorSource({ wrapX: false });

    /*     layers.push(
      new TileLayer({
        visible: true,
        preload: Infinity,
        source: new BingMaps({
          key: `${process.env.REACT_APP_MAP_KEY}`,
          imagerySet: "AerialWithLabelsOnDemand",
          // use maxZoom 19 to see stretched tiles instead of the BingMaps
          // "no photos at this zoom level" tiles
          // maxZoom: 19
        }),
      })
    ); */

    layers.push(
      new TileLayer({
        source: new OSM(),
      })
    );

    layers.push(
      new TileLayer({
        title: "province",
        visible: false,
        source: new TileWMS({
          projection: ETRS89proj,
          url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
          params: {
            LAYERS: "province",
            VERSION: "1.1.1",
          },
          serverType: "mapserver",
        }),
      })
    );

    const transformedCoords = coordinates.map((coord) => fromLonLat(coord));

    const geometry = new Polygon([transformedCoords]);
    const polygon = new Feature({
      type: "Polygon",
      geometry: geometry,
    });

    const pointInsideTheField = geometry.getInteriorPoint();

    const polygonLayer = new VectorLayer({
      source: new VectorSource({
        // features: new GeoJSON().readFeatures(geojsonObject),
        features: [polygon],
      }),
      style: {
        "fill-color": "rgba(255, 255, 255, 0.2)",
        "stroke-color": "#ffcc33",
        "stroke-width": 2,
        "circle-radius": 7,
        "circle-fill-color": "#ffcc33",
      },
    });

    layers.push(
      new TileLayer({
        title: "particelle",
        visible: true,
        source: new TileWMS({
          projection: ETRS89proj,
          url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
          params: {
            LAYERS: "CP.CadastralParcel",
            VERSION: "1.1.1",
          },
          serverType: "mapserver",
        }),
      })
    );
    layers.push(
      new TileLayer({
        title: "strade",
        visible: false,
        source: new TileWMS({
          projection: ETRS89proj,
          url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
          params: {
            LAYERS: "strade",
            VERSION: "1.1.1",
          },
          serverType: "mapserver",
        }),
      })
    );

    layers.push(polygonLayer);

    map = new Map({
      layers: layers,
      target: mapRef.current.id,
      view: new View({
        center: transform(getCenter(ETRS89Extent), ETRS89proj, "EPSG:3857"),
        zoom: 6,
      }),
      controls: defaultControls({
        attribution: false,
      }).extend([new MousePosition(), new OverviewMap()]),
    });
  };

  useEffect(() => {
    if (position) {
      initMap();
    }

    return () => {
      // Important to cleanup the map after unmounting the components
      if (map) {
        map.setTarget(undefined);
      }
    };
  }, [initMap, position]);

  return position ? (
    <div>
      <div id="genMap" className={classes.genMap}>
        <ResponsiveMap
          id="map"
          ref={mapRef}
          className={classes.map}
        ></ResponsiveMap>
      </div>
    </div>
  ) : (
    <div>caricamento</div>
  );
};

export default WorldMap;
