import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data:imagenes, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading...</p>}

            <div className="card-grid animate__animated animate__fadeIn">
                { imagenes.map((img) => (
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                )) }
            </div>
        </>
    );
}
