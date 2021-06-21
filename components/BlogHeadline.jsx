/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';


export default function BlogHeadline() {
  return (
    <>
      <Wrapper>  
        <div className="logo">일상의 기록</div>                
      </Wrapper>
      <Spacer />
    </>
  )
}

const Wrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 3rem;
    font-weight: 700; 
    width: 100%;
    text-align: center;
  }
`;
const Spacer = styled.div`
  height: 4rem;
`;

