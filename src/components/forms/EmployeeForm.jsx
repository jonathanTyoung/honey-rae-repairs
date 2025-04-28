import { getEmployeeByUserId } from "../../services/EmployeeService.jsx"
import "./Form.css"
import { useEffect, useState } from "react"


export const EmployeeForm = ({ currentUser }) => {
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeByUserId(currentUser.id).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    }, [currentUser])


    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty:</label>
                    <input type="text"
                        value={employee?.specialty}
                        onChange={(event) => {
                            const copy = { ...employee }
                            copy.specialty = event.target.value
                            setEmployee(copy)
                        }}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate:</label>
                    <input type="number"
                        value={employee?.rate}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary">
                        Save Profile
                    </button>
                </div>
            </fieldset>
        </form>
    )
}