import React, { MouseEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Footer } from './site/Footer';
import { NewComponent } from './site/NewComponent';
import { Button } from './site/Button';
import { Money } from './site/MoneyB';

function App() {
  const students = [
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ];
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ];

  const Button1Foo = (subscriber: string, age: number, adress: string) => {
    console.log(subscriber, age, adress)
  }
  const Button2Foo = (subscriber: string) => {
    console.log(subscriber)
  }
  const Button3Foo = () => {
    console.log("Im stupid button")
  }
  // 
  let [a, setA] = useState(1)
  const onClickHandler1 = () => {
    setA(a++);
    console.log(a)
  }
  const onClickHandler2 = () => {
    setA(a = 0);
    console.log(a)
  }
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
  return (
    <>
      {/* <div>
        <Header title={"New body "} />
        <Body titleForBody={"New Body"} />
        <NewComponent students={students} Cars={topCars} />
        <Footer titleForFooter={"New Footer"} />
      </div> */}
      {/* <Button name={"MyYuoTubeChanel-1"} callBack={() => Button1Foo("Im Vasya", 21, "live in Perm")} />
      <Button name={"MyYuoTubeChanel-2"} callBack={() => Button2Foo("Im Ivan")} />
      <Button name={"Stupid Button"} callBack={Button3Foo} /> */}
      <div>
        <h1>{a}</h1>
        <button onClick={onClickHandler1}>number</button>
        <button onClick={onClickHandler2}>0</button>
      </div>
      <div>
        <Money moneyBanknot={money} />
      </div>
    </>
  );
}

export default App;
