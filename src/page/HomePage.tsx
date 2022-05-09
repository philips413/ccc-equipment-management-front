import React, {useCallback, useEffect, useState} from "react"
import {ClientMain, Contents} from "../page/ClientPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {equipmentList} from "../api/EquipmentApi";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import {ApplyEquipmentRequest, EquipmentResponse} from "../types/EquipmentType";
import {applyEquipmentApi} from "../api/EquipmentManagerApi";


const HomePage = () => {
  const [applyEquipment, setApplyEquipment] = useState<ApplyEquipmentRequest>({
    equipmentId: -1,
    qty: 0,
    userId: 0,
    propose: "",
    category: -1,
    name: "",
    hp: ""
  });
  const [equipments, setEquipments] = useState([] as any);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const [selectItem, setSelectItem] = useState({
    equipmentId: "",
    name: "",
    category: 1,
    qty: 10,
    useQty: 1,
    hp: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await equipmentList();
      setEquipments(data);
    }
    fetchData();
  }, [])

  const applyEquipmentMethod = (data: EquipmentResponse) => {
    setSelectItem((props: any) => ({...props, ...data}));
    setApplyEquipment(props => ({
      ...props,
      category: data.category,
      equipmentId: data.equipmentId,
      userId: 1
    }))
    doModelToggle();
  }

  const doModelToggle = () => (setIsOpenToggle(!isOpenToggle));
  const createOptionDom = ((qty: number) => {
    let optionDom = [];
    for(let i = 1 ; i <= qty ; i++) {
      optionDom.push(<option key={`option${i}`} value={i}>{i}</option>)
    }
    return optionDom;
  })

  function submitApplyEquipment() {
    alert("TEST")
    applyEquipmentApi(applyEquipment);
  }

  return (
    <React.Fragment>
      <Contents>
        <Header title={"홈"} />
        <ClientMain>
          {
            equipments.map((item: EquipmentResponse, index: number) => {
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
                      반출 가능 수량 : {item.qty - item.useQty} <br />
                      <Button disabled={item.qty - item.useQty <= 0 ? true : false} onClick={e => applyEquipmentMethod(item)} size={"sm"}>반출신청</Button>
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
              <Label for="equipmentName" sm={2}>장비명</Label>
              <Col sm={4}>
                <Input id="equipmentName" name="equipmentName" type="text" disabled={true} value={selectItem.name} onChange={e => {
                  setApplyEquipment((props) => ({...props, name: e.target.value}));
                }}/>
              </Col>
              <Label for="categoryName" sm={2}>카테고리</Label>
              <Col sm={4}>
                {selectItem.category}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="useQty" sm={2}>반출 갯수</Label>
              <Col sm={4}>
                <Input id="useQty" name="useQty" type="select" onChange={(e) => {
                  setApplyEquipment((props) => ({...props, qty: Number(e.target.value)}));
                }}>
                  {createOptionDom(selectItem.qty - selectItem.useQty)}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="hp" sm={2}>연락처</Label>
              <Col sm={10}>
                <Input id="hp" name="hp" type="text" defaultValue={selectItem.hp} onChange={(e) => {
                  setApplyEquipment((props) => ({...props, hp: e.target.value}))
                }}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="propose" sm={2}>목적</Label>
              <Col sm={10}>
                <Input id="propose" name="propose" type="textarea" onChange={e => {
                  setApplyEquipment((props) => ({...props, propose: e.target.value}))
                }}/>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={e => submitApplyEquipment()}>
            반출신청
          </Button>
          &emsp;
          <Button onClick={e=> doModelToggle()}>
            닫기
          </Button>
        </ModalFooter>
      </Modal>
      <Footer />
    </React.Fragment>
  )
}


export default HomePage;
