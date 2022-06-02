import React from 'react'
import {HStack, Input,Button, useShortcut, useToast } from '@chakra-ui/react'
import {useState} from 'react'
import {nanoid} from 'nanoid'
function Addtodo({addTodo}) {
  
    const toast = useToast();   
   
   function handleSubmit ( e) {
     e.preventDefault();
     if(!content) {
       toast({
        title: 'No Content.',
        status: 'error',
        duration: 5000,
        isClosable: true,
       })   
       return
      }
                     
    
     const todo = {
      id : nanoid(),
      body : content,
     };
      
     addTodo(todo);
     setContent(''); 

    }
    const [content, setContent] = useState(''); 
   return <form onSubmit={ handleSubmit} >

     <HStack mt={8}>
        <Input variant='filled'  placeholder='Add Your Todo Here' value={content} onChange={(e) => setContent(e.target.value)}></Input>
        <Button colorScheme="blue" px='8' type='submit'> Add Todo </Button>
     </HStack>
          </form>
}

export default Addtodo