import React, {useEffect, useState} from "react"
import {ClientMain, Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {equipmentList} from "../api/EquipmentApi";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import {applyEquipment} from "../api/EquipmentManagerApi";
import {EquipmentRequest} from "../types/EquipmentType";


const HomePage = () => {
  const [equipments, setEquipments] = useState([] as any);
  useEffect(() => {
    const fetchData = async () => {
      const data = await equipmentList();
      setEquipments(data);
    }
    fetchData();
  }, [])

  const applyEquipmentMethod = (data: EquipmentRequest) => {
  }

  return (
    <React.Fragment>
      <Contents>
        <Header title={"홈"} />
        <ClientMain>
          {
            equipments.map((item: EquipmentRequest, index: number) => {
              return (
                <Card key={`mainCard${index}`}>
                  <CardBody>
                    <CardTitle tag={"h3"}>
                      {item.name}
                    </CardTitle>
                    <CardText>
                      {item.description}
                    </CardText>
                    <CardText color={"primary"}>
                      반출 가능 수량 : {item.qty} <br />
                      <Button onClick={e => applyEquipmentMethod(item)} size={"sm"}>반출신청</Button>
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
