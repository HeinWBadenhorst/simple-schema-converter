import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';

import {Select} from 'uniforms-antd-extended';
import {composeWithTracker} from 'react-komposer';

import {ErrorPlainComponent} from '../globals/ErrorComponents.jsx'
import {LoadingIboxSmall} from '../globals/LoadingIbox.jsx';

import {ForeignKeyFieldComposer} from './composers/ForeignKeyFieldComposer.js';
//import Select from 'react-select';

// SCHEMA PROTOTYPE
/*
groups: {
  type: [Object],
  label: "User Group Access",
  blackbox: true,
  defaultValue: ['users'],
  uniforms: {
              component: ForeignKeyMultiSelectContainer,
              collectionname: 'Groups',
              filter: {company: true},
              valuefield: 'groupname',
              textfield: 'groupname',
              forceDefault: true
            }
},
*/


class ForeignKeyMultiSelect extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      }
  }
  componentWillMount(){
    if(this.props.defaultValue){
      if(this.props.forceDefault){
        values = []
        this.props.defaultValue.forEach((val)=>{
          val.clearableValue = false;
          values.push(val);
        });
        this.props.onChange(values)
      }else{
        this.props.onChange(this.props.defaultValue)
      }
    }
  }
  genereateOptions(){
      vals = [];
        this.props.fielddata.map((field)=>{
            vals.push({value: field[this.props.valuefield], label: field[this.props.textfield]})
        })
        return vals;
  }

  changeValue(val){
      if(this.props.forceDefault){
        this.props.defaultValue.forEach(v=>{
            val.unshift(v)
        })
      }
      cleanArray = $.unique(val);
      this.props.onChange(cleanArray);
  }


render(){
    values = this.genereateOptions();
    const {
            props: {allowedValues,
            checkboxes,
            disabled,
            errorMessage,
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
            options,
            defaultValue,
            info,
        },
        props
        } = this;
    return(
        <Select
            options={values}
            errorMessage={errorMessage}
            disabled={disabled}
            checkboxes={checkboxes}
            fieldType={fieldType}
            id={id}
            inputRef={inputRef}
            label={label}
            name={name}
            onChange={this.changeValue.bind(this)}
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
}




export const ForeignKeyMultiSelectContainer = composeWithTracker( ForeignKeyFieldComposer, LoadingIboxSmall, ErrorPlainComponent )( ForeignKeyMultiSelect );
export default connectField(ForeignKeyMultiSelectContainer);
