import React from "react"

type ButtonType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonType) => {
    // const myFirstSubscriber1 = (event: MouseEvent<HTMLButtonElement>) => {
    //   console.log("Hello! Im VASA!")
    // }
    // const myFirstSubscriber2 = (event: MouseEvent<HTMLButtonElement>) => {
    //   console.log("Hello! Im IVAN!")
    // }
    // const onClickHandler = (name: string) => {
    //   console.log(name)
    // }
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <>
            {/* <div>
        <button onClick={(event: MouseEvent<HTMLButtonElement>) => { console.log("Hello!") }}>MyYuoTubeChanel-1</button>
        <button onClick={() => onClickHandler("VASA!")}>MyYuoTubeChanel-1</button>
        <button onClick={() => onClickHandler("IVAN!")}>MyYuoTubeChanel-2</button>
      </div > */}
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}