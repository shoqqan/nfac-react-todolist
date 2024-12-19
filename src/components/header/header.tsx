import {TextField, Typography} from "@mui/material";
import {useState} from "react";
import './header.css'

interface HeaderProps{

}

export const Header = () =>{
    const [inputValue, setInputValue] = useState("");
    return (
        <header className={'header'}>
            <Typography variant={"h3"}>Todolist</Typography>
            <TextField
                label={"Что будем сегодня делать?"}
                       value={inputValue}
                       onKeyUp={(event) => {
                           if (event.key === 'Enter') {
                               console.log(inputValue)
                           }
                       }}
                       onChange={(event) => {
                           setInputValue(event.target.value)
                       }}
            />
        </header>
    )
}
