import styled from "styled-components";

const HeaderDiv = styled.header`
  background: #333;
  color: #FFF;
  padding: 15px;
`

const Header = (props: any) => {


  return (
    <>
      <HeaderDiv>
        {props.title}
      </HeaderDiv>
    </>
  )
}

export default Header;
