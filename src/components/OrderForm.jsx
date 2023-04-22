import React, {useEffect, useState} from 'react';
import Select from "./Select.jsx";
import {services} from "../consts/orderConsts.js";
import {paymentTypes} from "../consts/orderConsts.js";

const OrderForm = ({serviceId}) => {
    const [price, setPrice] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("+7")
    const [email, setEmail] = useState("")
    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)

    const [nameError, setNameError] = useState("")
    const [surnameError, setSurnameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [emailError, setEmailError] = useState("")

    const [buttonState, setButtonState] = useState(true)


    useEffect(() => {
        if (serviceId !== undefined) {
            setPrice(serviceId)
        }
    }, [serviceId])

    useEffect(() => {
        if (!nameError && !surnameError && !phoneError && !emailError && price && paymentMethod) {
            setButtonState(false)
        } else setButtonState(true)
    }, [nameError, surnameError, phoneError, emailError, price, paymentMethod])

    const validateNotNull = (field, setField) => {
        if (!field) {
            return setField("поле не заполнено!")
        } else return true
    }

    function validateEmail(email) {
        if (validateNotNull(email, setEmailError))
            if (!email.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
            )) {
                return setEmailError('e-mail некорректен!')
            } else {
                setEmailError("")
            }
    }

    const validatePhone = (value) => {
        if (value === '+7') {
            return setPhoneError('поле не заполнено!')
        }
        if (!/^[\+7\(\d\d\d\)\s\d\d\d\s\d\d\s\d\d]{17}$/i.test(value)) {
            setPhoneError('Номер телефона некорректен!')
        } else {
            console.log("fine")
            setPhoneError("")
        }
    }

    const handlePhoneChange = (e, setField) => {
        const phoneFormat = (s, plus = true) => {
            const startsWith = plus ? '+7' : '8';
            let phone = s.slice(2).replace(/[^0-9]/g, '');
            return startsWith + phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `($1) $2 $3 $4`);
        }
        if (phoneFormat(e.target.value).length <= 17) {
            setField(phoneFormat(e.target.value))
            if (phoneDirty) {
                validatePhone(phoneFormat(e.target.value))
            }
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (emailDirty) {
            validateEmail(e.target.value)
        }
    }

    const handleStrChange = (e, setField, setError, dirty) => {
        setField(e.target.value)
        if (dirty) {
            validateString(e.target.value, setError)
        }
    }

    const validateString = (str, setError) => {
        if (validateNotNull(str, setError))
            if (!/[a-zа-яё]/i.test(str)) {
                setError('поле должно быть символьным!')
            } else {
                setError("")
            }
    }

    const onBlurHandler = (e, setDirty, setError) => {
        validateString(e.target.value, setError)
        setDirty(true)
    }

    const onBlurPhoneHandler = (e) => {
        validatePhone(e.target.value)
        setPhoneDirty(true)
    }

    const onBlurEmailHandler = (e) => {
        validateEmail(e.target.value)
        setEmailDirty(true)
    }

    const sendHandler = (e) => {
        e.preventDefault()
        if (price && paymentMethod)
            console.log("Отправено")
        else console.log("Заполните поля!")
    }

    return (
        <div className="order-form order-form__grid">
            <div className="order-form__head">
                <h2 className={"order-form__title"}>Заявка на услугу:</h2>
                {serviceId !== undefined
                    ? <p className={"order-form__service-title"}>{services[serviceId].name}</p>
                    : null
                }
            </div>

            <div className={"order-form__content"}>
                {serviceId !== undefined
                    ? null
                    : <div className={"order-form__step"}>
                        <p className={"order-form__step_info__number"}>01</p>
                        <p className={"order-form__step_info"}>Выберите услуги, которые вас интересуют</p>
                        <Select type={"service"} options={services} onChange={service => setPrice(service.target.value)}
                                placeholder={"Выберите услугу"}/>
                    </div>
                }
                <div className={"order-form__step"}>
                    <p className={"order-form__step_info__number"}>{serviceId !== undefined ? "01" : "02"}</p>
                    <p className={"order-form__step_info"}>Заполните форму для дальнейшей оплаты</p>
                    {nameError
                        ? <span className={"inputError"}>{nameError}</span> : null}
                    <input className={"order-from__input"} type="text" placeholder={"Ваше имя"}
                           onChange={e => handleStrChange(e, setName, setNameError, setNameDirty)}
                           onBlur={e => onBlurHandler(e, setNameDirty, setNameError)} value={name}/>
                    {surnameError
                        ? <span className={"inputError"}>{surnameError}</span> : null}
                    <input className={"order-from__input"} type="text" placeholder={"Ваша фамилия"}
                           onChange={e => handleStrChange(e, setSurname, setSurnameError, setSurnameDirty)}
                           onBlur={e => onBlurHandler(e, setSurnameDirty, setSurnameError)} value={surname}/>
                    {phoneError
                        ? <span className={"inputError"}>{phoneError}</span> : null}
                    <input className={"order-from__input"} type="tel" placeholder={"+7 (999)-999-99-99"}
                           onChange={e => handlePhoneChange(e, setPhone)}
                           onBlur={e => onBlurPhoneHandler(e, setPhoneDirty)} value={phone}/>
                    {emailError
                        ? <span className={"inputError"}>{emailError}</span> : null}
                    <input className={"order-from__input"} type="text" placeholder={"E-mail"}
                           onChange={e => handleEmailChange(e)} onBlur={e => onBlurEmailHandler(e)} value={email}/>

                </div>
                <div className={"order-form__step"}>
                    <p className={"order-form__step_info__number"}>{serviceId !== undefined ? "02" : "03"}</p>
                    <p className={"order-form__step_info"}>Оплата</p>
                    <Select type={"payment"} options={paymentTypes}
                            onChange={payment => setPaymentMethod(payment.target.value)}
                            placeholder={"Выберите метод оплаты"}/>
                </div>
                <div className={"order-form__result"}>
                    <h4 className={"order-form__result__title"}>Сумма</h4>
                    <h4 className={"order-form__result__price"}>{price !== null ? services[price].price : 0} ₽</h4>
                </div>
                <button
                    className={buttonState ? "order-form__btn btn-plain disabled" : "order-form__btn btn-plain "}
                    disabled={buttonState}
                    onClick={e => sendHandler(e)}
                >Оплатить
                </button>
            </div>
        </div>

    );
};

export default OrderForm;