"use client"
import { sendEmail } from "@/app/EmailJS";
import { useTranslations } from "next-intl";
import { ChangeEvent, FC, KeyboardEvent, useState } from "react"

const ContactForm: FC = () => {

    const t = useTranslations('form');

    const [ hasSent , setHasSent] = useState(false);
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ textMessage, setTextMessage] = useState('');

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, dispatcher: Function) => {
        dispatcher(e.target.value)
    }

    const resetForm = (): void => {
        setName('');
        setEmail('');
        setTextMessage('');
    }

    return (
        <div className="form_container">
            {
                hasSent ?
                <div className="welcome_container">
                    <h2>
                        { t('thanksMsg') }
                    </h2>
                    <h3>{ t('respondMsg') }</h3>
                </div>
                 :
                <form className="form_wrapper" onSubmit={e => {
                    sendEmail(e, setHasSent);
                    resetForm();
                    }}>
                    <div className="input_wrapper">
                        <label>
                        { t('name') }:
                        </label>
                        <input type="text" value={name} onChange={e => handleChange(e, setName)}
                        placeholder={ t('placeholder.name') } name="name" autoComplete='off' required/>
                    </div>
                    <div className="input_wrapper">
                        <label>
                        { t('email') }:
                        </label>
                        <input type="email" value={email} onChange={e => handleChange(e, setEmail)}
                        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
                        placeholder={ t('placeholder.email') } name="email" autoComplete='off' required/>
                    </div>
                    <div className="input_wrapper">
                        <label>
                        { t('message') }:
                        </label>
                        <textarea placeholder={ t('placeholder.message') } name="message"
                        autoComplete='off' value={textMessage} onChange={e => handleChange(e, setTextMessage)} required/>
                    </div>
                    <button className="blue-btn">
                        { t('submit') }
                    </button>
                </form>
            }
        </div>
    )
}

export default ContactForm;