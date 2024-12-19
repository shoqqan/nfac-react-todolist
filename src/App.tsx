import './App.css'
import {Todolist} from "./components/todolist/todolist.tsx";
import {useState} from "react";
import {TextField, Typography} from "@mui/material";

interface Task{
    id:number,
    title:string,
    isDone:boolean
}

interface Todolist{
    id:number,
    tasks:Task[],
    title:string
}

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todolists, setTodolists] = useState<Todolist[]>(
        [
            {
                id:1,
                title:'Список дел на понедельник',
                tasks:[
                    {id:10, title:'Помыть посуду', isDone:false}, {
                    id:20, title:'Погулять с собакой', isDone:true}
                ]
            },
            {
                id:2,
                title:'Список дел на вторник',
                tasks:[
                    {id:30, title:'Помыть посуду', isDone:false}, {
                        id:40, title:'Погулять с собакой', isDone:true}
                ]
            },
            ]
    )

    const createTodolist = (title:string) =>{
        const newTodolist:Todolist={
            id: new Date().getMilliseconds(),
            title: title,
            tasks:[]
        }
        const newState = [
            ...todolists,
            newTodolist
        ]
        setTodolists(newState)
    }
  return (
      <div className={'app'}>
          {/*<Header/>*/}
          <header className={'header'}>
              <Typography variant={"h3"}>Todolist</Typography>
              <TextField
                  label={"Что будем сегодня делать?"}
                  value={inputValue}
                  onKeyUp={(event) => {
                      if (event.key === 'Enter') {
                          createTodolist(inputValue);
                      }
                  }}
                  onChange={(event) => {
                      setInputValue(event.target.value)
                  }}
              />
          </header>
          <main className={"todolist_container"}>
              {todolists.map((todolist) => {
                  return <Todolist key={todolist.id} title={todolist.title} tasks={todolist.tasks}/>
              })}
          </main>
      </div>
  )
}

export default App
