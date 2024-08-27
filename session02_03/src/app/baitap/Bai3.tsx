import React from 'react'
import titleStyle from '../css/bai3.module.css'
import inputStyle from '../css/bai3.module.css'
import inputStyle2 from '../css/bai3.module.css'
import inputStyle3 from '../css/bai3.module.css'
import inputStyle4 from '../css/bai3.module.css'
import inputStyle5 from '../css/bai3.module.css'
import buttonStyle from '../css/bai3.module.css'
import containerStyles from '../css/bai3.module.css'




export default function Bai3() {
  return (
    <div className={containerStyles.container}>Bài 3
        <form action="">
            <h1 className={titleStyle.h1}>Form Sign Up</h1>
            <label>
                <p>Name:</p>
                <input type="text" name="name" placeholder='Your name' className={inputStyle.input}/>
            </label>
            <br />
            <label>
                <p>Email:</p>
                <input type="email" name="email" placeholder='you@company.com' className={inputStyle.input}/>
            </label>
            <br />
            <label>
                <p>Phone number:</p>
                <input type="tel" name="phone" placeholder='+84 (123) 456-789' className={inputStyle.input}/>
            </label>
            <br />
            <label>
                <p>Address:</p>
                <textarea name="" id="" rows={4} className={inputStyle.input}></textarea>
            </label>
            <br />
            <label>
                <p>Skill</p>
                <input type="checkbox" className={inputStyle2.input2}/>HTML
                <input type="checkbox" className={inputStyle3.input3}/>JavaScript
                <br />
                <input type="checkbox" />UX design
                <input type="checkbox" className={inputStyle4.input4}/>ReactJs
                <br />
                <input type="checkbox" />CSS
                <input type="checkbox" className={inputStyle5.input5}/>Java
            </label>
            <br />
            <button className={buttonStyle.button}>Signup</button>
        </form>
    
    </div>
  )
}
