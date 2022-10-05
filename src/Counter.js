import { useState } from "react"
import Child from './Child'

export default function Counter(){
    const [count, setValue] = useState(42) //hook -> state
    // const count = useState(42) //hook -> state
    const [name, setName] = useState('Mikhail') //hook -> state
    const [obj, setObj] = useState({
        foo: 'bar'
    })
/*
    useState -> [VALUE, FUNC]
    [count, setValue] = [VALUE, FUNC]
*/

    // DOM -> click, input, focus, blur, mouseMove
    console.log('render Counter')

    // setTimeout(() => {
    //     setValue(100)
    // }, 1500)

    return (
        <div className="border">
            <button onMouseEnter={() => console.log('Mouse is moving...')}>onMouseEnter</button>
            <input 
                onChange={() => console.log('change')}
                onInput={() => console.log('input')}/>
            {count}
            <button onClick={() => setValue(count+1)}>add +1</button>
            <button onClick={() => setValue(count-1)}>remove -1</button>
            <br/>
            {name}
            <button onClick={() => setName('Vasya')}>name = Vasya</button>
            <button onClick={() => setName('Petya')}>name = Petya</button>
            <Child data={count + ''}/>
        </div>
    )   
}