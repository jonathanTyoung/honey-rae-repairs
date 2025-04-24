import { Route, Outlet, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { EmployeeDetails } from "../components/employees/EmployeeDetails.jsx"
import { EmployeeList } from "../components/employees/EmployeeList.jsx"
import { TicketList } from "../components/tickets/ticketList.jsx"
import { CustomerList } from "../components/customers/CustomerList.jsx"
import { CustomerDetails } from "../components/customers/CustomerDetails.jsx"

export const ApplicationViews = () => {
  return (
    <Routes>
    <Route
      path="/"
      element={
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
        <Route path=":employeeId" element={<EmployeeDetails />} />
      </Route>
      <Route path="customers">
        <Route index element={<CustomerList />} />
        <Route path=":customerId" element={<CustomerDetails />} />
      </Route>
    </Route>
    </Routes>
  )
}
