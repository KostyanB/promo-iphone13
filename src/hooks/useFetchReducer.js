import React, { useState, useEffect, useReducer } from 'react';

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'FETCH_OK':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAIL':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({
                type: 'FETCH_INIT'
            });

            try {
                const responce = await fetch(url);
                const result = await responce.json();
                dispatch({
                    type: 'FETCH_OK',
                    payload: result
                });
            } catch (error) {
                dispatch({
                    type: 'FETCH_FAIL'
                });
            }
        };

        fetchData();
    }, [url]);

    return [state, setUrl];
};

//********  use this hook ***********/
function App() {
    const [
        template,
        setTemplate
    ] = useState('');
    const [
        query,
        setQuery
    ] = useState('redux');
    const [
        {
            data,
            isLoading,
            isError
        },
        setUrl
    ] = useDataApi(
        'https://hn.algolia.com/api/v1/search?query=redux',
        {
            hits: []
        },
    );

    const sendQuery = e => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`, );
    };

    const cangeInput = e => {
        setTemplate(e.target.value);
        setQuery(e.target.value);
    };

    return (
        <>
        <form onSubmit = {sendQuery}>
            <input type = "text"
                value ={template}
                onChange ={cangeInput}
            />
            <button type = "submit">Search</button>
        </form>

        {isError && <div> Something went wrong... </div>}
        {isLoading ?
            (<div> Loading... </div>) :
            (<ul>
                {data.hits.map(item =>
                    (
                        <li key = {item.objectID}>
                            <a href = {item.url}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>)
        }
        </>
    );
}
export default App;