'use client';
//we cant define server actions in client components directly
//so we can pass as a prop of client components in server components 
//or we can make a file of various server actions we can export it from there
//and then import in client components
import  type {Snippet} from '@prisma/client';
import Editor from '@monaco-editor/react'
import {useState} from 'react';
import * as actions from '../actions';

interface SnippetEditFormProps{
    snippet:Snippet;           
}

export default function SnippetEditform({snippet}:SnippetEditFormProps){
  const [code, setCode]= useState(snippet.code);
  const handleEditorChange=(value:string="")=>{
      setCode(value);
  }; 


  const editSnippetAction = actions.editSnippet.bind(null,snippet.id,code);
  return (<div>
    <Editor
    height ="40vh"
    theme="vs-dark"
    language="javascript"
    defaultValue={snippet.code}
    options={{minimap:{enabled:false}}}
    onChange={handleEditorChange}/>
    <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
            Save
        </button>
    </form>

  </div>
  );
}