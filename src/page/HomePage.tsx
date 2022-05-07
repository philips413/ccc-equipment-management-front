import React, {useEffect, useState} from "react"
import {ClientMain, Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {equipmentList} from "../api/EquipmentApi";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle, Col,
  Form, FormGroup, Input, Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import {EquipmentRequest} from "../types/EquipmentType";


const HomePage = () => {
  const [equipments, setEquipments] = useState([] as any);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const [selectItem, setSelectItem] = useState({
    name: "",
    hasQty: 0,
    propose: "",
    hp: "",
    category: 1
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await equipmentList();
      setEquipments(data);
    }
    fetchData();
  }, [])

  const applyEquipmentMethod = (data: EquipmentRequest) => {
    setSelectItem(data);
    doModelToggle();
  }

  const doModelToggle = () => (setIsOpenToggle(!isOpenToggle));

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
      <Modal isOpen={isOpenToggle}>
        <ModalHeader>
          장비 반출 신청
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label
                for="categoryName"
                sm={2}
              >
                장비명
              </Label>
              <Col sm={4}>
                <Input
                  id="categoryName"
                  name="categoryName"
                  type="text"
                  disabled={true}
                  value={selectItem.name}
                />
              </Col>
              <Label
                for="description"
                sm={2}
              >
                반출 갯수
              </Label>
              <Col sm={4}>
                <Input
                  id="description"
                  name="description"
                  type="text"
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">
            Do Something
          </Button>
          &emsp;
          <Button onClick={e=> doModelToggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Footer />
    </React.Fragment>
  )
}


export default HomePage;
