import React, { Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({categoria}) => {
    // const [images,setImages] = useState([]);
    const {data:images,loading} = useFetchGifs(categoria);


    // useEffect(()=> {    // esta funcion se debe ejecutar una vez cuando se renderize la app
    //     getGifs(categoria).then(imgs => setImages(imgs));   // retorna una promesa que procesamos con then
    // },[categoria]);


    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn"> {categoria} </h3>
            {loading ? <p className="animate__animated animate__flash">Loading</p> : null}
            <div className="card-grid">
                {
                images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </Fragment> 
    )
}
