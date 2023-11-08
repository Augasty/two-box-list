import { createContext, useState } from 'react'
const initial = [
    {isLeft:false,isSelected:false,text:'testing'},
    {isLeft:false,isSelected:false,text:'trying 2'},
    {isLeft:true,isSelected:false,text:'testing left'}

]
export const ListContext = createContext()

const Context = ({children}) =>{
    const [list,setList] = useState(initial)

    return (
        <ListContext.Provider value={{list,setList}}>
            {children}
        </ListContext.Provider>
    )
}

export default Context

