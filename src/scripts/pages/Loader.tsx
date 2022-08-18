import '../../styles/loader.css'
 
 export interface IALoader  {}

 export const Loader:React.FunctionComponent<IALoader>= ()=>{
        return(
<div className="loader"></div>
        )
 }
