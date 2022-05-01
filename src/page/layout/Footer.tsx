import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  height: 80px;
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
        <div>장비목록</div>
        <div>나의 현황</div>
      </FooterDiv>
    </>
  )
}

export default Footer;
