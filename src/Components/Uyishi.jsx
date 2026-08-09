import React, { useState } from 'react'

const Uyishi = () => {
    const [yourName, setYourName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [yourMessage, setYourMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Your Name:", yourName)
        console.log("Email:", email)
        console.log("Subject:", subject)
        console.log("Your Message:", yourMessage)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 p-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-primary"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email address"
                    className="input input-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="input input-primary"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your Message"
                    className="input input-primary"
                    value={yourMessage}
                    onChange={(e) => setYourMessage(e.target.value)}
                />
                <button type="submit" className="btn btn-primary w-80">Submit</button>
            </div>
        </form>
    )
}

export default Uyishi