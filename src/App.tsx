// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ManageCourses from './components/manageCourses'
import { Toaster } from "@/components/ui/sonner"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManageCourses />} />
      </Routes>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  )
}
