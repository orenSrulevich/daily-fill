import React from "react";
import {Field, reduxForm} from "redux-form";
const provinces = ["North","West","EAST","SOUTH"]

const showResults = (data) => {
    return new Promise((res, rej) => {
            setTimeout(() => res(JSON.stringify(data)), 2000)
        }
    )
};

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required"
    }
    if (!values.lastName) {
        errors.lastName = "Required"
    }
    if (!values.email) {
        errors.email = "Required"
    }else
        if(values.email.indexOf("@")<0){
            errors.email = "Email Invalid"
        }
    if (!values.province) {
        errors.province = "Required"
    }
    return errors;
};

const createRenderer = render  => ({input, meta, label,...rest}) =>
    <div className={
        [
            meta.error && meta.touched ? 'error' : '',
            meta.active ? 'active' : ''
        ].join(' ')
    }>
        <label>
            {label}
        </label>
        {render(input,label,rest)}
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>

const RenderInput = createRenderer((input,label)=>
    <input {...input} placeholder={label}/>
)

const RenderSelect = createRenderer((input,label,{children})=>
    <select {...input}>
        <option/>
        {children}
    </select>
)

let DemoForm = ({handleSubmit, submitting}) =>
    <form onSubmit={handleSubmit(showResults)}>
        <Field name="firstName" label="First Name" component={RenderInput}/>
        <Field name="lastName" label="Last Name" component={RenderInput}/>
        <Field name="email" label="Email" component={RenderInput}/>
        <Field name="province" label="Province" component={RenderSelect}>
            {provinces.map( province=>
                <option key={province} value={province}>
                    {province}
                </option>
                )}
        </Field>
        <button type="submit" disabled={submitting}>Submit</button>
    </form>
;

DemoForm = reduxForm({
    form: 'demo',
    destroyOnUnmount: false,
    validate


})(DemoForm);

export default DemoForm;
