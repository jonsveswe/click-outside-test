import { useRef, useEffect } from "react";

function useClickOutside(elRef, callback) {
    const callbackRef = useRef();
    callbackRef.current = callback;
    //console.log("Inside useClickOutside")

    useEffect(() => {
        const handleClickOutside = e => {
            console.log("Inside document click handler")
            console.log(callbackRef.current)
            //callbackRef.current();
            if (!elRef?.current?.contains(e.target) && callbackRef.current) {
                callbackRef.current();//call the onClickOutside handler.   
                                      //Original is callbackRef.current(e). Why have e there?             
            }
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        } 
    }, [callbackRef, elRef])
}

export default useClickOutside