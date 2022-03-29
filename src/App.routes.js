import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HOME } from 'config/path'

const Home = lazy(() => import('./view/home/index'))

function AppRoutes() {
  return (
    <Suspense fallback={<p>Cargarndo...</p>}>
      <Routes>
        <Route exact path={HOME} element={<Home />}></Route>
        <Route element={<h1>Ocurrio algo Mal</h1>}></Route>
      </Routes>
    </Suspense>
  )
}
export default React.memo(AppRoutes)
