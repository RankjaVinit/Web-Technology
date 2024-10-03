import { useState, useEffect } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({});

    // https://v6.exchangerate-api.com/v6/c3f0fbc3fcd59e172c9e876c/latest/${currency}

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c3f0fbc3fcd59e172c9e876c/latest/${currency}`)
        .then(res => res.json())
        .then((res) => {
            setData(res.conversion_rates);
        })
    }, [currency]);

    return data;

}

export default useCurrencyInfo;