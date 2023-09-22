import React, { useState } from "react";
import Modal14 from "./Modal14";



export default function Index14(){
    const [visible, setVisible] = useState(true);
    return(

        <Modal14
        visible = {visible}
        onClose={()=>{setVisible(false)}}
        /> 
        )
}