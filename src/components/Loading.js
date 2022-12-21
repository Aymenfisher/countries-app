import React from "react";
import { Oval } from 'react-loader-spinner';


export const Loading = ({theme}) => {
    return(
        <div className='loading'><Oval
        height={80}
        width={80}
        color={theme === 'dark'?"white":"black"}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor={theme === 'dark'?"white":"black"}
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
    </div>
    )
}