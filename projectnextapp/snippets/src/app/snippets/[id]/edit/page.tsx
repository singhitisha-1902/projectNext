
import {notFound} from 'next/navigation';
import {db} from '../../../../db/index'

import SnippetEditForm from '../../../../components/snippet-edit-form';

interface SnippetEditPageProps{
    params:{
        id:string;
    };
}
export default async function SnippetEditPageProps(props:SnippetEditPageProps){

    const id=parseInt(props.params.id);
    const snippet= await db.snippet.findFirst({
        where: {id},
    });
    if(!snippet){
        return notFound();
    }

    return <div>
       <SnippetEditForm snippet={snippet}/>
    </div>;

}