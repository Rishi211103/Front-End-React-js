import React, { useEffect, useState } from "react";

function ApicallHook() {

    const [apiproducts, setapiproducts] = useState([])

    const handlefetch = async () => {
        let data = await fetch("https://fooapi.com/api/movies")
        let products = await data.json()
        setapiproducts(products)
        console.log(products)
    }
    useEffect(() => {
        handlefetch()
    }, [])
    return (
        <div>
            <h1>Products</h1>
            {apiproducts.map((data) => (
                <div>
                <h1>{data.title}</h1>
                </div> 


             )
            )

            }

        </div>
    )
}

export default ApicallHook