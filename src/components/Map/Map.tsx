// import {
//   YMapDefaultFeaturesLayer,
//   YMapDefaultSchemeLayer,
//   YMapMarker,
// } from "@/lib/ymaps";

// import { reactify } from "@/lib/ymaps";

// import { YMap } from "@/lib/ymaps";
// import React from "react";


// const LOCATION = {
//     center: [37.588144, 55.733842],
//     zoom: 9
//   };

// const Map = () => {
//   return (
//     <div style={{ width: "600px", height: "400px" }}>
//       <YMap location={reactify.useDefault(LOCATION)}>
//         <YMapDefaultSchemeLayer />
//         <YMapDefaultFeaturesLayer />

//         <YMapMarker
//           coordinates={reactify.useDefault([
//             37.588144, 55.733842,
//           ])}
//           draggable={true}
//         >
//           <section>
//             <h1>You can drag this header</h1>
//           </section>
//         </YMapMarker>
//       </YMap>
//     </div>
//   );
// };

// export default Map;
