import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {  // escucha de nuestra entrada tomando el valor de la caja
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {   // evento para submit del formulario previene el refresh que tiene por default
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
