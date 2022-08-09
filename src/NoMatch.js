import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NoMatch = () => {
    const navigate = useNavigate();
    return (
        <div>Requested Page Not Found 404
            <button onClick={() => {navigate('/')}}>Go Back</button>
        </div>

    )
}
