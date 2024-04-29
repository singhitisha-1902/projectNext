//this file will help in interacting with the database fetching details from the server like that
 import {PrismaClient} from '@prisma/client';


 //use this object in several different ways to save delete fetch
 export const db = new PrismaClient();

 db.snippet.create({
    data:{
        title: 'Title!',
        code:'const abc= ()=>{}'
    }
 })

 

 

