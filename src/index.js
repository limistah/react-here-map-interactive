import React from "react";
import ReactDOM from "react-dom";
import HMap from "./components/HMap";
import HMapPolyLine from "./components/objects/PolyLine";
import HMapPolygon from "./components/objects/Polygon";
import HMapMarker from "./components/objects/Marker";

var points = [
  { lat: 52.5309825, lng: 13.3845921 },
  { lat: 52.5311923, lng: 13.3853495 },
  { lat: 52.5313532, lng: 13.3861756 },
  { lat: 52.5315142, lng: 13.3872163 },
  { lat: 52.5316215, lng: 13.3885574 },
  { lat: 52.5320399, lng: 13.3925807 },
  { lat: 52.5321472, lng: 13.3935785 },
  { lat: 52.5323832, lng: 13.395499 },
  { lat: 52.5324261, lng: 13.3959818 },
  { lat: 52.5325012, lng: 13.397795 },
  { lat: 52.5325656, lng: 13.3986318 },
  { lat: 52.5326192, lng: 13.3989215 },
  { lat: 52.5325119, lng: 13.3989751 },
  { lat: 52.5323081, lng: 13.3991039 }
];

const icon =
  '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">H</text></svg>';

const polygonOptions = {
  style: {
    fillColor: "#FFFFCC",
    strokeColor: "#829",
    lineWidth: 8
  }
};

const polygonPoints = [52, 13, 100, 48, 2, 100, 48, 16, 100, 52, 13, 100];
ReactDOM.render(
  <HMap
    style={{
      height: "400px",
      width: "800px"
    }}
    appId="2Ts3vDUTLPW8kNUtyFRY"
    appCode="MDivMVFtNkpim-dWuetlWw"
    mapOptions={{ center: { lat: 52.5321472, lng: 13.3935785 } }}
  >
    {/* <HMapPolyLine points={points} /> */}
    {/* <HMapPolygon points={polygonPoints} options={polygonOptions} /> */}
    <HMapMarker coords={{ lat: 52.5321472, lng: 13.3935785 }} icon={icon} />
  </HMap>,
  document.getElementById("app")
);
module.hot.accept();
