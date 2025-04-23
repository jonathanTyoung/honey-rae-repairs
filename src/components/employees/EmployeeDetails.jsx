import { useParams } from "react-router-dom"

export const EmployeeDetails = () => {
// employees/3
// path="/employees/:employeeId"

const { employeeId } = useParams() // { employeeId: 3}

return <div>Customer #{employeeId}</div>

}