// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ManageCourses from './components/manageCourses'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManageCourses />} />
      </Routes>
    </BrowserRouter>
  )
}
