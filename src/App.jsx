import "./App.css"
import { CustomerList } from "./components/customers/CustomerList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { TicketList } from "./components/tickets/ticketList.jsx"
import { Routes, Route, Outlet } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees" element={<EmployeeList />} />
      </Route>
    </Routes>
  )
}
