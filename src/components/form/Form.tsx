import React from 'react'

const Form = () => {
  return (
    <>
    <form action="" method="post">
        <div>
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="name" id="email"/>
            </div>
            <div>
                <label htmlFor="number">Phone Number</label>
                <input type="number" name="name" id="number"/>
            </div>
        </div>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" id="message" />
        </div>
        <button type="button" title='Send messsage'>Send Message</button>
    </form>
    </>
  )
}

export default Form