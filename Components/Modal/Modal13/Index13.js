import React, { useState } from "react";
import Modal13 from "./Modal13";



export default function Index13(){
    const [visible, setVisible] = useState(true);
    return(

        <Modal13
        visible = {visible}
        onClose={()=>{setVisible(false)}}
        /> 
        )
}