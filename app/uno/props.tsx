interface Props {
    nombre: string;
}

export default function Props({nombre}: Props){
    return(
        <div>
            {nombre}
        </div>
    )
}