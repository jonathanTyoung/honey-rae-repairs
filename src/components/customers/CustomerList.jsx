import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])
}