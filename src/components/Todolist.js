import { Badge, HStack, IconButton, Spacer, StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaTrash} from 'react-icons/fa'


function Todolist ({todos,deleteTodo}) {
   
if (!todos.length) {
return(
<Badge colorScheme='red' p="4" m="4" borderRadius='lg'>
No Todos, yah !!!
</Badge>
)
}
  return (
    <VStack 
       divider={<StackDivider/>} borderColor="black.500" borderWidth="4px" p="4" borderRadius="lg" w="100%"
       maxW={{base:'90vw' , sm:'80vw' , lg:'60vw' , xl:'40vw' }} alignItems="stretch"
       >
       
      {
        todos.map((todo) => (
          <HStack hey= {todo.Id}>
            <text> {todo.body}</text>
             <Spacer/>
             <IconButton icon = {<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)}/>    
          </HStack>
        
      ))}

    </VStack>
  )
}

export default Todolist
