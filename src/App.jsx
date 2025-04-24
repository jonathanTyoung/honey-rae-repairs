import "./App.css"
import { Routes, Route, Outlet } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./views/ApplicationViews.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    
      <Route path="*" 
      element={
        // Check if user is authorized
        <Authorized>
          {/* ApplicationViews is the child component of Authorized */}
          <ApplicationViews />
        </Authorized>
      }
      />
    </Routes>
  )

}