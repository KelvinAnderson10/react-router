import React from 'react'
import { Page1 } from './features/Page1/Page1'
import { Page2 } from './features/Page2'
import { Navigation } from './Navigation'
import { Routes, Route } from 'react-router-dom'
import { Page1Child1 } from './features/Page1/Page1Child1'
import { Page1Child2 } from './features/Page1/Page1Child2'
import { NoMatch } from './NoMatch'
import { LoginPage } from './features/login/LoginPage'
import { ProtectedPage } from './services/ProtectedPage'

export const AppRouter = () => {
    return (
    <Routes>
        <Route index element={<LoginPage></LoginPage>}></Route>
        <Route element={<ProtectedPage></ProtectedPage>}>
        <Route path='/home' element={<Navigation></Navigation>}>
            <Route path='page1' element={<Page1></Page1>}>
                <Route path='child1-1' element={<Page1Child1></Page1Child1>}></Route>
                <Route path='child1-2'element={<Page1Child2></Page1Child2>}></Route>
            </Route>
            <Route path='page2' element={<Page2></Page2>}>
                <Route path=':id' element={<Page2></Page2>}></Route>
            </Route>
        </Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
        </Route>
    </Routes>
    )
}
