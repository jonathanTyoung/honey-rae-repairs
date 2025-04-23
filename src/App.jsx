import "./App.css"
import { CustomerList } from "./components/customers/CustomerList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { TicketList } from "./components/tickets/ticketList.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
import { Welcome } from "./components/welcome/Welcome.jsx"
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx"
import { EmployeeDetails } from "./components/employees/EmployeeDetails.jsx"

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
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          {/* <Route path=":employeeId" element={<EmployeeDetails />} /> */}
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  )
  
}