import React from 'react';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>Vantaan Työpaikat</h1>
        </header>
    )
}
const headerStyle ={
    background:'#333333',
    color:'#ffffff',
    padding:'10px'
}
export default Header