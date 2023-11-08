import { createContext, useState } from 'react'
const initial = [
    {isLeft:false,isSelected:false,text:'One'},
    {isLeft:false,isSelected:false,text:'Two'},
    {isLeft:true,isSelected:false,text:'Three'}

]
let ListContext
export default ListContext = createContext()

export const Context = ({children}) =>{
    const [list,setList] = useState(initial)

    return (
        <ListContext.Provider value={{list,setList}}>
            {children}
        </ListContext.Provider>
    )
}


