import {Link, useNavigate, Outlet } from 'react-router-dom'
import React from 'react'


export const Page1 = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Page 1</h1>
            <button onClick={() => {navigate('child1-1')}}>To Child 1</button>
            <button onClick={() => {navigate('child1-2')}}>To Child 2</button>
            <Outlet></Outlet>
        </>
    )
}
