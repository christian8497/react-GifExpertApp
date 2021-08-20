import React,{Fragment, useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';


export const GifExpertApp = () => {

    const [categorias,setCategorias] = useState(['Fast and furious']);

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid 
                            key={categoria}
                            categoria={categoria}
                        />
                    ))
                }
            </ol>
        </Fragment>
    );
}