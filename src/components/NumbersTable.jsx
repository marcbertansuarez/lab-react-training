import React from "react";

const NumbersTable = ({limit}) => {

    const rows = [];

    for (let i = 0; i <= limit; i++ ) {
        const color = i % 2 === 0 ? 'red' : 'white';
        rows.push(
            <tr key={i}>
                <td style={{ backgroundColor: color}}>{i}</td>
            </tr>
        )
    }
    return (
        <table className="table">
            <tbody>{rows}</tbody>
        </table>
    )
}

export default NumbersTable;