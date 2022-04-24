import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  textAlign: "center";
  max-width: 750px;
  width: 100%;
  bottom: 0px;
  position: fixed;
  display: flex;
  div {
    width: 100%;
    text-align: center;
    padding: 20px;
    background: #333;
    color: #FFF;
  }
  div:first-child {
    border-right: #555;
    border-right-style: solid;
    border-right-width: 1px;
  }
  div:last-child {
    border-left-color: #555;
    border-left-style: solid;
    border-left-width: 1px;
  }
`

const Footer = () => {
  return (
    <>
      <FooterDiv className={"contentMenu"}>
        <div>HOME</div>
        <div>LIST</div>
        <div>MYPAGE</div>
      </FooterDiv>
    </>
  )
}

export default Footer;
