import {Checkbox, FormControlLabel, FormGroup, TextField, Typography} from "@mui/material";

interface Task{
    id:number,
    title:string,
    isDone:boolean
}

interface TodolistProps{
    tasks:Task[],
    title:string
}

export const Todolist = (props:TodolistProps) =>{
    return (
        <div className="todolist">
            <Typography variant={'h6'}>{props.title}</Typography>
            <hr/>
            <TextField/>
            <ul className="todolist__tasks">
                {props.tasks.map((task)=>{
                    return (
                        <li key={task.id} className="todolist__task__item" >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={task.isDone}/>} label={task.title}/>
                            </FormGroup>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
