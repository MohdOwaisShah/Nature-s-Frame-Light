//display faq using json data
import React, { useState } from 'react'
import "./Faq.css"
import Heading from '../../UI-elments/Heading'
import faqData from '../../../../json-data/faqData.json'

const Faq = () => {
    const [active, setActive] = useState(null)

    const handleToggle = (index) => {
        setActive(index===active ? null : index)
        console.log(active)
    }

    return (
        <div className="sec-3-container">
            <Heading text={"FAQ"} />
            <div className="qna-container" key={1}>
            {faqData.map((data,index) => {
                return <>
                <h2 onClick={() => handleToggle(index)} className='question'>{data.question}{index===active ? <i class="fa-solid fa-minus"/> : <i class="fa-solid fa-plus"/>}</h2>

                {index===active ? <p className='answer' style={{width:data.answerSize}} >{data.answer}</p> : ""}
                </>
            })}
            </div>
        </div>
    )
}

export default Faq