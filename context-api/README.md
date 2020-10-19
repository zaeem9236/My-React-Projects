## 1st phase -> create context API in new folder:
* ###### import React,{createContext} from 'react';
* ###### const xyzContext = createContext(0);
* ###### export default xyzContext;
     </ul>

## 2nd phase -> wrap '**new folder name**' around root component
* ###### import React from 'react';
* ###### import 'new folder name' from './ 'new folder name' '
* ###### <'new folder name'.Provider>
* ###### </'new folder name'.Provider>

## 3rd phase -> use it in child
* ###### import React, {'useContext'}  from 'react'
* ###### import 'new folder name' from 'new folder name';
* ###### let value = useContext{'new folder name'}; 








