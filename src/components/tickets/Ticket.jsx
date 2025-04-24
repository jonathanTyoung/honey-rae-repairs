import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/EmployeeService.jsx"
// import { getEmployeeById } from "../../services/TicketService.jsx"

export const Ticket = ({ ticket, currentUser }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    // useEffect(() => {
    //     if (ticket.employeeTickets.length) {
    //         getEmployeeById(ticket.employeeTickets[0].employeeId).then((employee) => {
    //             setAssignedEmployee(employee)
    //         })
    //     }
    // }, [ticket])

    useEffect(() => {
        getAllEmployees().then((employeesArray) => {
            setEmployees(employeesArray)
        })
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find(
            employee => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    return (
        <section className="ticket">
            <header className="ticketInfo">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">assignee</div>
                    <div>
                        {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
                    </div>
                </div>
                <div>
                    <div className="ticket-info">Emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
                <div className="btn-container">
                    {/* if the logged in user is an employee and there's no employee ticket associated with the service ticket,
                     then a button to claim the ticket should display */}
                    {currentUser.isStaff && !assignedEmployee ? (
                        <button className="btn btn-secondary">Claim</button>
                    ) : (
                        ""
                    )}
                    {/* if the logged in user is the assigned employee for the ticket and there is no dateCompleted,
                    the button to close the ticket should display */}
                    {assignedEmployee?.userId === currentUser.id && !ticket.dateCompleted ? (
                        <button className="btn btn-warning">Close</button>
                    ) : (
                        ""
                    )}
                </div>
            </footer>
        </section>
    )
}