import styled from 'styled-components';
export const SourceLink=styled.a.attrs({
    href:'https://github.com/global-input/mobile-encryption',
    rel:'noreferrer noopener',
    target:'_blank'})`
    color: #153E85;
    font-weight: 100;
    font-family: Georgia, Times, Serif;
    font-size: 0.8em;
    @media screen and (min-height:200px){
        font-size:1em;
        margin-bottom:10px;
    }
    @media screen and (min-height:400px){
        font-size:1.5em;
    }
   @media print{
       display:none;
   }
    `;


    export const AppTitle=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 1em;
    color: #445566;
    font-family: Georgia, Times, Serif;
    @media screen and (min-height:200px){
        font-size:1.5em;
    }

    @media screen and (min-height:400px){
        font-size:2em;
        margin-bottom:10px;
    }
    @media print{
        display:none;
    }
},`;

export const Title=styled(AppTitle)`
    color: #445566;
    justify-content: flex-start;


`;
