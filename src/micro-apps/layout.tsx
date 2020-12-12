import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height:100vh;
  background-color: rgba(169, 200, 230, 0.3);
`;

export const Content=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex: 1;
    width: 95%;
    max-width:1100px;
`;

export const Loader = styled.div`
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid #3498db;
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
`;
