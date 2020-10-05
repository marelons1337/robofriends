import React from 'react';
import './SearchBox.css';

const Searchbox = ({searchChange}) => {
    return (
        <div>
            <input type='search'
            className= 'input-reset white bg-navy b--navy pa2 mb2'
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
    );
}
 
export default Searchbox;