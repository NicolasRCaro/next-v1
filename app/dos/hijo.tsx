import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default function Hijo({children}: Props){
    return(
        <div>
            Ese es mi hijo {children} no estoy orgulloso de él.
        </div>
    )
}