import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [online, setOnline] = useState(true);
    useEffect(() => {

        const handleonline = () => setOnline(true);
        const handleofline = () => setOnline(false);
        window.addEventListener("online", handleonline);
        window.addEventListener("offline", handleofline);
        return()=>{ (window.removeEventListener("online",handleonline),
        window.removeEventListener("offline",handleofline))}
    }, [])
    return online;
}
export default useOnlineStatus;