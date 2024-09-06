import React from 'react'

const Card = ({ children, bg = 'bg-gray-100', title, description }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 mb-4">
                {description}
            </p>
            {children}
        </div>
    )
}

export default Card