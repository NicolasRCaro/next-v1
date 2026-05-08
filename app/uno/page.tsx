"use client"
import { useAppContext } from "../contexto/appcontext";
export default function Uno(){
    const {nombre} = useAppContext();
  return(
    <div>
        Uno
        {nombre}
    </div>
  )
}