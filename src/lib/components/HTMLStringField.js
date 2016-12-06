import React          from 'react';
import classnames     from 'classnames';
import {connectField} from 'uniforms';
import ReactQuill from 'react-quill';

import {FormGroup} from 'uniforms-antd-extended';

// SCHEMA PROTOTYPE
/*
htmlField: {
  type: String,
  label: "HTML Field",
  uniforms: {
              component: HTMLStringField,
              theme: 'snow'
            }
},
*/

const renderHTMLString = props =>
        <ReactQuill
            className={classnames(props.inputClassName,'form-group-html', 'form-control', {'form-control-danger': props.error})}
            theme={ props.theme }
            disabled={props.disabled}
            id={props.id}
            name={props.name}
            onChange={event => props.onChange(event)}
            ref={props.inputRef}
            value={props.value}
        />
    ;

const HTMLStringField = props =>
    <FormGroup feedbackable {...props} bsClass='form-group-html'>

      {renderHTMLString(props)}

    </FormGroup>
;

HTMLStringField.defaultProps = {
    type: 'text'
};

export default connectField(HTMLStringField);
