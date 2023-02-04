import React, { useState } from "react"
type MoneyType = {
    moneyBanknot: Array<BanknotaType>
}
type BanknotaType = {
    banknots: string
    value: number
    number: string
}
type FilterType = "all" | "RUBLS" | "Dollars"

export const Money = (props: MoneyType) => {

    const [filter, setFilter] = useState<FilterType>("all")
    let currentMoney = props.moneyBanknot;
    if (filter === "RUBLS") {
        currentMoney = props.moneyBanknot.filter(el => el.banknots === "RUBLS");
    }
    if (filter === "Dollars") {
        currentMoney = props.moneyBanknot.filter(el => el.banknots === "Dollars");
    }

    const onClicFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
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
            <div style={{ marginLeft: "35px" }}>
                <button onClick={() => onClicFilterHandler("all")}>all</button>
                <button onClick={() => onClicFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => onClicFilterHandler("Dollars")}>Dollars</button>
            </div>
        </>
    );
}