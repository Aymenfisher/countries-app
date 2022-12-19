import React  from 'react';


export const Header = ({theme,setTheme}) => {
    const handleChangeTheme = () =>{
        theme ==='light' ? setTheme('dark') : setTheme('light')
        return
    }
    return (
        <>
            <p id='title'>Where in the world?</p>
            <div className='theme-switch' onClick={handleChangeTheme}>
                <button id='theme-button'></button>
                <p id='theme-text'>{theme ==='dark' ? 'Light' : 'Dark'} Mode</p>
            </div>
        </>
    )
}