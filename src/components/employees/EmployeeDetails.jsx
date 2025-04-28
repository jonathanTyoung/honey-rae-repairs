import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getEmployeeByUserId } from "../../services/EmployeeService.jsx"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState([])
    const { employeeId } = useParams() // { employeeId: 3}

    useEffect(() => {
        getEmployeeByUserId(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [employeeId])

    // Function to format rate as USD
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount)
    }

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty : </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate : </span>
                {formatCurrency(employee.rate)} {/* formats this number to USD */}
            <div>
                <span className="employee-info">Tickets Assigned : </span>
                {employee.employeeTickets?.length} {/* Display the ticket count */}
            </div>
            </div>
        </section>
    )
}