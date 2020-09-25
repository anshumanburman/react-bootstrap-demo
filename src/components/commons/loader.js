import React, { useEffect, useRef } from 'react';
import { changeBg } from '../../assets/js/custom';


const Loader = ({loader, refValue}) => {
    let refLoad =useRef()
    useEffect(()=>{
        // setTimeout(() => {
        //     setLoader(true)
        //     setLoader(false)
        // }, 5000);
        // console.log("loader refValue ::: ", refLoad.current);
        // console.log("loader refValue ::: ", refLoad.current.id);
        // setTimeout(() => {
            
        // }, 5000);
        //changeBg("red");
        //console.log("loader component :::: ", loader);
        changeBg(loader);
            },[loader])
    return (
        <>
        {loader &&<div id="preloader" ref={refLoad}>
            <div className="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>}
        </>
    )
}

export default Loader;