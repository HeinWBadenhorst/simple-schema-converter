import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';

import {Select} from 'uniforms-antd-extended';
import {composeWithTracker} from 'react-komposer';

import {ErrorPlainComponent} from '../globals/ErrorComponents.jsx'
import {LoadingIboxSmall} from '../globals/LoadingIbox.jsx';

import {ForeignKeyFieldComposer} from './composers/ForeignKeyFieldComposer.js';

// SCHEMA PROTOTYPE
/*
groups: {
  type: String,
  label: "E-Mail project to which the survey is linked.",
  uniforms: {
              component: ForeignKeyContainer,
              collectionname: 'EMailProjects',
              filter: {company: true},
              valuefield: '_id',
              textfield: 'projectname'
            }
},
*/

function compileOptions(data,value,text){
    options = [];
    data.forEach(obj => {
        options.push({value: obj[value], label: obj[text]});
    });
    return options;
}

const ForeignKey = ({
    fielddata,
    errorMessage,
    disabled,
    fieldType,
    id,
    inputRef,
    label,
    name,
    onChange,
    placeholder,
    required,
    showInlineError,
    transform,
    value,
    defaultValue,
    info,
    valuefield,
    textfield,
}) =>{
    options = compileOptions(fielddata, valuefield, textfield);

    return(
        <Select
            options={options}
            errorMessage={errorMessage}
            disabled={disabled}
            fieldType={fieldType}
            id={id}
            inputRef={inputRef}
            label={label}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            showInlineError={showInlineError}
            transform={transform}
            value={value}
            defaultValue={defaultValue}
            info={info}
        />
    )
}

;
/*
    <select
        className={classnames(props.inputClassName, 'form-control', {'form-control-danger': props.error})}
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={event => props.onChange(event.target.value)}
        ref={props.inputRef}
        value={props.value}
    >

        <option>...</option>
        {props.fielddata ? props.fielddata.map(field =>
            <option key={field[props.valuefield]} value={field[props.valuefield]}>
                 {field[props.textfield]}
            </option>
        ) : ''}
    </select>
;
*/

export const ForeignKeyContainer = composeWithTracker( ForeignKeyFieldComposer, LoadingIboxSmall, ErrorPlainComponent )( ForeignKey );
export default connectField(ForeignKeyContainer);
