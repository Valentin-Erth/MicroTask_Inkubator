import React, { useState } from "react"
// type MoneyType = {
//     moneyBanknot: Array<BanknotaType>
// }
// type BanknotaType = {
//     banknots: string
//     value: number
//     number: string
// }
export const Money = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    let currentMoney = money.filter(el => el.banknots === "RUBLS")
    return (
        <><ul>
            {currentMoney.map((el, index) => {
                return (
                    <li key={index}>
                        <span>  {el.banknots}</span>
                        <span>  {el.value}</span>
                        <span>  {el.number}</span>
                    </li>

                )

            })}
        </ul>
        </>
    );
}