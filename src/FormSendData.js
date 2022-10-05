import { useState } from "react"

const sendData = (data) => {
    fetch('/api', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

export default function AppForm(){

    const [email, setEmail] = useState('') //hook -> state
    const [comment, setComment] = useState('') //hook -> state

        return (
            <div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea onChange={(e) => setComment(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={() => sendData({
                    email, 
                    comment
                })}>send</button>
            </div>
        )
}