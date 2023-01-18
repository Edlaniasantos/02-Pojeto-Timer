import { Routes, Route } from 'react-router-dom'
import { DefaultLayouts } from './layouts/DefaltLayout'
import { History } from './pages/History/History'
import { Home } from './pages/Home'

export function Routei() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
