import React from 'react';
import { CustomButton } from './ButtonCustom';

function Button({cildren}) {
    return (
    
            <CustomButton>
                {cildren}
            </CustomButton>
    
    );
}

export default Button;