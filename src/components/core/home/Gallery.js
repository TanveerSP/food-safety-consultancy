import React from 'react'
import { images } from '../../../data/gallery';

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                    <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="object-cover w-full h-full transform transition duration-500 hover:scale-105"
                    />
                </div>
            ))}
        </div>
    )
}

export default Gallery