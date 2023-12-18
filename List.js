export default function List()
{
   
    const animal=["dog","cat","lion","tiger"]

    const result=animal.map((ani,index)=><li key={index}>{index}=>{ani}</li>)
    return(
        <div>
            <ul type="none">
                {result}
                </ul>
                </div>
    )
}