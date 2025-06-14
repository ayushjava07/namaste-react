import { useRouteError } from "react-router";
const Error =()=>{
    const err=useRouteError();
    return (
        <div>
            <h1>APNA ROUTE CHECK KARLO BHAI😇</h1>
            <h2>OOOPS!!!</h2>
            <h1>{err.status}:{err.statusText}</h1>
        </div>
    )
}
export default Error;