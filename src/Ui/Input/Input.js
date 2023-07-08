import React from 'react';
import { InputT } from './Input.style';

function Input({children , placeholder}) {
    return (
       <InputT placeholder={placeholder}>
            {children}
       </InputT>
    );
}

export default Input;