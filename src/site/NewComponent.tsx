import React from "react"
type NewComponentType = {
    students: Array<StudentType>
    Cars: Array<CarsType>
    // students: StudentType[]
}
type CarsType = {
    manufacturer: string
    model: string
}
type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    // debugger


    return (
        <>
            <ul>
                {props.students.map((el: StudentType, index: number) => {

                    return (
                        <li key={el.id}>
                            <span>{el.name}</span>
                            <span> age: {el.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    <th>Index:</th>
                    <th>Brend:</th>
                    <th>Model:</th>
                </tr>
                {props.Cars.map((el: CarsType, index: number) => {
                    return (
                        <>
                            <tr key={index}>
                                <td> <span>{index + 1}</span></td>
                                <td> <span>{el.manufacturer}</span></td>
                                <td> {el.model}</td>
                            </tr>

                        </>
                    )
                })}
                {/* <tr>
                    <th>manufacturer</th><th>index</th><th>model</th>
                </tr> */}

            </table>
        </>
    )
}