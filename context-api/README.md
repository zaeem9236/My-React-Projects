## 1st phase -> create context API in new folder:
* ###### import React,{createContext} from 'react';
* ###### const xyzContext = createContext(0);
* ###### export default xyzContext;
     </ul>

## 2nd phase -> wrap 'create context file name' around root component
* ###### import React from 'react';
* ###### import 'create context file name' from './ 'create context file name' '
* ###### <'create context file name'.Provider>
* ###### </'create context file name'.Provider>

## 3rd phase -> use it in child
* ###### import React, {'useContext'}  from 'react'
* ###### import 'create context file name' from 'create context file name';
* ###### let value = useContext{'create Context file name'}; 








