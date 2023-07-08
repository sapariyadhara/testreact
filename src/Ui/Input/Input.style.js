import { styled } from "styled-components";


export const InputT = styled.input`
    width : 100% ;
    height : 40px;
    margin-top :  10px ;
    background : #fff;
    outline : none ;
    border : 2px solid #002884 ;
    color : #002884;
    &:focus{
        border : 2px solid #002884 ;
        background :#002884 ;;
        outline : #002884 ;
        color : #fff ;
        &::placeholder{
            color : #fff ;
        }
    }
    &::placeholder{
        color : #002884;
    }
   
`;