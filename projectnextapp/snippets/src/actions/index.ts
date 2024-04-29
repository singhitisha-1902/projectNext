'use server';


import { db } from '../db/index';
import {redirect} from 'next/navigation';

export async function editSnippet(id: number,code:string){
    await db.snippet.update({
        where: {id},
        data:{code}
    });

    redirect(`/snippets/${id}`);
    
}

export async function deleteSnippet(id:number){
    await db.snippet.delete({
        where:{id},
    });
    redirect('/');
}

export async function createSnippet(formState:{message:string},formData: FormData ){
    //to add anything to database we need prasma client

    //this needs to be a server action
 

    //check the users inputs and make sure they're valid
    const title =formData.get('title') as string;
    const code =formData.get('code') as string;
     if(typeof title!=='string'|| title.length<3){
        return{
            message:'Title must be longer'
        }
     }
     

     if(typeof code!=='string'|| code.length<3){
        return{
            message:'code must be longer'
        }
     }
//     //create a new record in the database
   const snippet=  await db.snippet.create({
        data:{
            title:title,
            code:code
        }
    });
    console.log(snippet)

//     //redirect the user back to the root route
    redirect('/');

}