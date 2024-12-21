import { useEffect, useState } from "react";

export default function useFetchRates(date) {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            const url = window.location.href + 'api/rates/1';
            const formattedDate = date.toISOString().split('T')[0];

            setIsLoading(true);
            setError('');

            try {
                // For testing purpose
                // await new Promise(resolve => setTimeout(resolve, 2000));
                const res = await fetch(url + '?date=' + formattedDate);
                if (!res.ok) {
                    throw new Error(res.statusText || 'what error');
                }
                const resJson = await res.json();

                setData(resJson);
                setIsLoading(false);
            } catch (error) {
                setError(String(error));
            }
            setIsLoading(false);
        }
        fetchData();
    }, [date]);

    return { data, isLoading, error };
}