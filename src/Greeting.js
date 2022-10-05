import Child from './Child'

export default function Greeting(props) {
    return (
        <div>
            <div> Hello, {props.name}</div>
            <Child data={props.name} handleClick={(eventData) => console.log('click from child', eventData)}/>
        </div>
    )
}