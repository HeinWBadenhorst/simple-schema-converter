import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';

import {FormGroup} from 'uniforms-antd-extended';

/*
JSONTextString: {
  type: String,
  label: "JSON Text String",
  defaultValue: "{}",
  uniforms: LongTextField,
  custom: function () {
    if (Meteor.isClient && this.isSet) {
      try{
        jsonParsed = Modules.both.parsePipeline(this.value.trim())
      }catch(err){
        return "invalidJSON";
      }
    }
  }
},

SimpleSchema.messages({
  "invalidJSON": "Invalid JSON Syntax"
});
*/

const renderJSONString = props =>
        <textarea
            className={classnames(props.inputClassName, 'form-control', {'form-control-danger': props.error})}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={event => props.onChange(event.target.value)}
            placeholder={props.placeholder}
            ref={props.inputRef}
            value={props.value}
        />
;

const JSONStringField = props =>
    <FormGroup feedbackable {...props} bsClass='form-group-html'>

      {renderJSONString(props)}

    </FormGroup>
;

JSONStringField.defaultProps = {
    type: 'text'
};

export default connectField(JSONStringField);
