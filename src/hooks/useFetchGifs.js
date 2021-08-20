import { useState,useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
    const [state,setState]= useState({
        data:[],
        loading:true
    });

    useEffect(() => {   // realizar una vez se renderice el componente 
        getGifs(categoria)
            .then(imgs => {
                setState({
                    data:imgs,
                    loading: false
                });
            })
    }, [categoria]);

    

    return state; // {data:[], loading:true}
}