import "./App.css"
import { CustomerList } from "./components/customers/CustomerList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { TicketList } from "./components/tickets/ticketList.jsx"

export const App = () => {
  return (
  <>
  {/* <TicketList/> */}
  {/* <CustomerList /> */}
  <EmployeeList />
  </>
  )
}
