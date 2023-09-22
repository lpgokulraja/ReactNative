import React from "react";
import Modal11 from "./Modal11";



export default function Index11(){
    let status = false;
    return(

        <Modal11 
        title={"Login !"}
        subtitle={"Login Sucessfull !"}
        BackgroundColor={(status)?'green':'red'}
        textcolor={'white'}
        LeftBorderColor={(status)?'red':'green'}
        
        /> 
        )
}