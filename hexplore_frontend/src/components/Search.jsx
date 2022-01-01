import React, { useEffect, useState } from 'react';

import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
// import Spinner from './Spinner';
import loader from '../assets/Hexplore-animation.mp4';


const Search = ({ searchTerm }) => {
    const [pins, setPins] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(searchTerm) {
            setLoading(true);
            const query = searchQuery(searchTerm.toLowerCase());

            client.fetch(query)
            .then((data) => {
                setPins(data);
                setLoading(false)
            })
        } else {
            client.fetch(feedQuery)
            .then((data) => {
                setPins(data);
                setLoading(false)
            })
        }
    }, [searchTerm])

    return (
        <div>
            {loading && (
                <div>
                <video
                    src={loader}
                    // type='video/mp4'
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-16 h-16'
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '100px' }}
                />
                <p style={{ textAlign: 'center' }}>Searching for pins...</p>
            </div>
            )}
            {pins?.length !== 0 && <MasonryLayout pins={pins} />}
            {pins?.length !== 0 && searchTerm !== '' && !loading && (
                <div className="mt-10 text-center text-xl ">No Pins Found!</div>
            )}
        </div>
    )
}

export default Search
