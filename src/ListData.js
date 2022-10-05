
import {useEffect, useState} from 'react'

export default function Data(){

    const [result, setResult] = useState([])
    const [isLoading, setLoading] = useState(false)

    //hook
    useEffect(() => {

        // setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (data) => {
                setResult(data)
                // setLoading(false)
            })
        })

    return (
        <div>
            
            {isLoading && <div>loading...</div> }
            {isLoading ? <div>loading...</div> : null }

            {/* <div v-if="isLoading">
            <div *if="isLoading">
                loading...
            </div>
            <div v-else>
            <div *Else>
            </div> */}

            {!isLoading && JSON.stringify(result)}
        </div>
    )
}