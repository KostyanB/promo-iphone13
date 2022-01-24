import { useState, useEffect, useCallback } from 'react';
import env from '../../env.json';

export const useGetMoviesDb = () => {

    const [ resonce, setResonce ] = useState(null);
    const [ resonceObj, setResponceObj ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleResonce = res => {
        const obj = {};

        res.forEach(item => {
            obj[item.id] = item;
        });

        setResonce(res);
        setResponceObj(obj);
    };

    const getFetch = useCallback(async () => {
        try {
            setLoading(true);
            const json = await fetch(env.backend.moviesDbUrl);
            const res = await json.json();
            handleResonce(res);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }, []);

    useEffect(() => getFetch(), [getFetch]);

    return {
        resonce,
        resonceObj,
        error,
        loading
    };
};