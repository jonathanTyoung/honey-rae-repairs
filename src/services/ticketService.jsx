export const getAllTickets = () => {
    return fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`).then((res) => 
        res.json())
}

export const getEmployeeById = (employeeId) => {
    return fetch(
        `http://localhost:8088/employees/${employeeId}?_expand=user`
    ).then((res) => res.json())
}