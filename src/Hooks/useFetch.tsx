import { useState, useEffect } from 'react';

interface useFetchProps {
    url: string;
    method?: string;
    body?: any;
    headers?: any;
}

export const useFetch = ({ url, method = 'GET', body = null, headers = {} }: useFetchProps) => {
    
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [controller, setController] = useState<AbortController | null>(null);

    useEffect(() => {
        const abortController: any = new AbortController();
        setController(abortController);
        setLoading(true);
        fetch(url, {
            method,
            body,
            headers,
            signal: abortController.signal
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then((data) => {
            setData(data.body);
            setError(null);
            setLoading(false);
        }).catch((error) => {
            if (error.name !== 'AbortError') {
                setError(error);
                setLoading(false);
            }
        }).finally(() => setLoading(false));

        return () => abortController.abort();
    })

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError('Request aborted');
        }
    }

    return { data, error, loading, handleCancelRequest };


}