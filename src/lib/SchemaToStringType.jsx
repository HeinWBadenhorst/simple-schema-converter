let showObject = (obj) => {
  var result = "";
  for (var p in obj) {
    if( obj.hasOwnProperty(p) ) {
      result += p + " , Name=  " + obj[p].getName() + '\n';
    }
  }
  return result;
}

let objectToStringTypes = (obj) => {
  for (var k in obj)
  {
    if (typeof obj[k] == "object" && obj[k] !== null) {
      objectToStringTypes(obj[ k ]);
    } else {
      if((k === 'type') || (k === 'component') || (k === 'uniforms')) {
        try {
          for (var key in obj[k]) {
            if( obj[k].hasOwnProperty(key) ) {
              //result += p + " , " + obj[p] + "\n";
              alert("Obj key =" + key + ' Val=' + obj[k][key].getName());
              //obj[k][key] = obj[k][key].getName();
            }
          }
        } catch (e) {
          obj[k] = obj[k];
        }
      }
    }
  }
}

Modules.both.convertObjectsToStringTypes = objectToStringTypes;
Modules.both.showObject = showObject;
