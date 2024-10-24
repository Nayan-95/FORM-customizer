import React, { useState } from 'react'
import './Page.css';
const Page = () => {
    const [select, setSelect] = useState('');
    const [text, setText] = useState('');
    const [element, setElement] = useState([]);
    function clicked(e) {
        setSelect(e.target.value);
        console.log(e.target.value);
    }
    function written(e) {
        setText(e.target.value);
        console.log(...text,e.target.value);
    }
    function submit() {
        setElement([...element, { type: select, placeholder: text }]);
    }
    return (
        <div className='main'>
            <div className='zero'>
                Customize Your Form
            </div>
            <div className='first'>
                <select className='button' onChange={clicked}>
                    <option value="" disabled selected>Select an option</option>
                    <option value='question'> Question</option>
                    <option value='Text-Box'>Text-Box</option>
                    <option value='Radio'>Radio</option>
                    <option value='Check-Box'>Check-Box</option>
                </select>
                <input className='button' placeholder='write place holder' onChange={written}>
                </input>
                <button onClick={submit}>ADD</button>
            </div>
            <div className='second' id='form'>
                {element.map((el, index) => {
                    if (el.type === 'Text-Box') {
                        return <input key={index} placeholder={el.placeholder} className='added' />;
                    }

                    if (el.type === 'Radio') {
                        return (
                            <div className='added'>
                                <input key={index} type="radio" id="html" name="fav_language" value="HTML" />
                                <label htmlFor="html">{el.placeholder}</label>
                                <br />
                            </div>
                        );
                    }
                    if (el.type === 'Check-Box') {
                        return (
                            <div className='added'>
                                <input key={index} type="checkbox" id="html" name="fav_language" value="HTML" />
                                <label htmlFor="html">{el.placeholder}</label>
                                <br />
                            </div>
                        )
                    }
                    if (el.type === 'question') {
                        return (
                            <div className='added'>
                                {el.placeholder}
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default Page;
