import {HiddenField} from 'uniforms-antd-extended';
import ForeignKeyContainer from './components/ForeignKeyField.js';


let evalObjectTypes = (obj) => {
  for (var k in obj)
  {
    if (typeof obj[k] == "object" && obj[k] !== null) {
      evalObjectTypes(obj[ k ]);
    } else {
      if((k === 'type') || (k === 'uniforms') || (k === 'component') || (k === 'filter')) {
        try {
          var val = eval(obj[k]);
          obj[k] = val;
        } catch (e) {
          obj[k] = obj[k];
        }
      }
    }
  }
}

let convertStringTypeToSchema = (obj) => {
  var strJSONObj = EJSON.stringify(obj, {indent: true});
  var jsonObj = EJSON.parse(strJSONObj);
  evalObjectTypes(jsonObj);
  return new SimpleSchema(jsonObj);
}

let attachSchemaToCollection = (collection, schemaDef) => {
  collection.attachSchema( schemaDef );
}

Modules.both.convertStringTypeToSchema = convertStringTypeToSchema;
Modules.both.attachSchemaToCollection = attachSchemaToCollection;
