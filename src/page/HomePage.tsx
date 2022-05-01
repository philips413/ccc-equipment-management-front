import React, {useEffect, useState} from "react"
import {Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {equipmentList} from "../api/EquipmentApi";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import styled from "styled-components";

const ClientMain = styled.main`
  margin-bottom: 90px;
  .card{
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

const HomePage = () => {

  const [equipments, setEquipments] = useState([] as any);
  useEffect(() => {
    const fetchData = async () => {
      const data = await equipmentList();
      setEquipments(data);
    }
    fetchData();
  })

  return (
    <React.Fragment>
      <Contents>
        <Header title={"홈"} />
        <ClientMain>
          <Card>
            <CardBody>
              <CardTitle tag={"h3"}>TEST</CardTitle>
              <CardText>TESTSETSTEST</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag={"h3"}>TEST</CardTitle>
              <CardText>TESTSETSTEST</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag={"h3"}>TEST</CardTitle>
              <CardText>TESTSETSTEST</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag={"h3"}>TEST</CardTitle>
              <CardText>TESTSETSTEST</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag={"h3"}>TEST</CardTitle>
              <CardText>TESTSETSTEST</CardText>
            </CardBody>
          </Card>
          {
            equipments.map((item: any, index: number) => {
              return (
                <Card>
                  <CardBody>
                    <CardTitle tag={"h3"}>
                      {item.name}
                    </CardTitle>
                    <CardText>
                      {item.description}
                    </CardText>
                  </CardBody>
                </Card>
              )
            })
          }
        </ClientMain>
      </Contents>
      <Footer />
    </React.Fragment>
  )
}


export default HomePage;
