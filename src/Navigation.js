import {Link , Outlet} from 'react-router-dom'
import React from 'react'

export const Navigation = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{
                width: '10%',
                backgroundColor: 'LightBlue',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '10px'
            }}>
                <h2>Navigation</h2>
                <Link to='page1'>Page 1</Link>
                <Link to='page2'>Page 2</Link>
            </div>
            <div style={{padding: '10px'}}>
                <Outlet/>
            </div>
        </div>

    )
}
