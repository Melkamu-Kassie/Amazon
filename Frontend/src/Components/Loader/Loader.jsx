 import React from 'react'
 import { FadeLoader } from "react-spinners";
 function Loader() {
   return (
     <div
       style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         width: "100%",
         height: "100vh",
         backgroundColor: "transparent", 
       }}
     >
       <FadeLoader color="#14f09c" loading={true} size={15} />
     </div>
   );
 }
 
 export default Loader