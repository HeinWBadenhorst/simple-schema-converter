import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';

import {FormGroup} from 'uniforms-antd-extended';
var JSON5 = require('json5');

/*
//Sample of JSON String Field

JSONTextString: {
  type: String,
  label: "JSON Text String",
  defaultValue: "{}",
  uniforms: LongTextField,
  custom: function () {
    if (Meteor.isClient && this.isSet) {
      try{
        jsonParsed = Modules.both.parsePipeline(this.value.trim());
      }catch(err){
        return "invalidJSON";
      }
    }
  }
},

//add this for error message return if invalid
SimpleSchema.messages({
  "invalidJSON": "Invalid JSON Syntax"
});


//Sample of JSON Object Field

JSONObject: {
  type: Object,
  label: "JSON Test Object",
  blackbox: true,
  uniforms: {
      component : JSONObjectField,
      rowCount : 5
  },
  autoValue: function() {
    try{
      var JSON5 = require('json5');
      if (this.isSet){
          if (typeof this.value === 'object'){
            return this.value;
          } else {
            return JSON5.parse(this.value);
          }
      }
    }
    catch(err){
        return false;
    }
  }
},

*/

const renderJSONObject = props =>
        <textarea
            className={classnames(props.inputClassName, 'form-control', {'form-control-danger': props.error})}
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={event => props.onChange(event.target.value)}
            placeholder={props.placeholder}
            ref={props.inputRef}
            value={(typeof props.value === 'object') ? JSON5.stringify(props.value) : props.value}
            rows={props.rowCount}
        />
;

const JSONObjectField = props =>
    <FormGroup feedbackable {...props} bsClass='form-group-html'>
      {renderJSONObject(props)}
    </FormGroup>
;

JSONObjectField.defaultProps = {
    type: 'text'
};

export default connectField(JSONObjectField);
