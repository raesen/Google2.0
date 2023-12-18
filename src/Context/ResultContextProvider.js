import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search74.p.rapidapi.com/api';

export const ResultContextProvider = ({ children }) => {
    const [ results, setResults ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ searchTerm, setSearchTerm ] = useState('isro');

    // /videos /search /news
    // functn for api calls
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch('${baseURL}${type}', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1a788e92eemsh51ab0340449a83ap14b1f2jsn4140bab9cedc',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            },
        });
        
        // get data from fetch
        const data = await response.json();

        console.log({type, data});
        if(type.includes('/news')){
            setResults(data.entries);
        }else if(type.includes('/images')) {
            setResults(data.image_results);
        }else {
            setResults(data.results);
        }

        setResults(data);
        setIsLoading(false);
    }
    return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
        {children}
    </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);