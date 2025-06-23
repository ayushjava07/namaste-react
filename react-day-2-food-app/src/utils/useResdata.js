import { useEffect, useState } from "react";
export const useResdata = ({ resid }) => {
    const [resdata, setresdata] = useState(null);
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=" + `${resid}`
        );
        const resjson = await response.json();
        setresdata(resjson);
        console.log(resjson);
    };

    return resdata;
}
