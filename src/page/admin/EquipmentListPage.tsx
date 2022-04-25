import AdminHeader from "./AdminHeader";
import {Contents} from "./AdminPage";
import {Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";

const EquipmentListPage = () => {

  const [category, setCategory] = useState([]);

  return (
    <>
      <AdminHeader/>
      <main>
        <Contents>
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                장비 등록
              </CardTitle>
              <CardText>
                <FormGroup row>
                  <Label
                    for="equipmentName"
                    sm={2}
                  >
                    장비 명
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="equipmentName"
                      name="equipmentName"
                      placeholder="장비 명"
                      type="text"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="category"
                    sm={2}
                  >
                    카테고리
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="category"
                      name="category"
                      placeholder="설명 입력해주세요"
                      type="select"
                    >
                      <option value={1}>1111</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="description"
                    sm={2}
                  >
                    설명
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="description"
                      name="description"
                      placeholder="설명 입력해주세요"
                      type="text"
                    />
                  </Col>
                </FormGroup>
              </CardText>
            </CardBody>
            <CardFooter style={{textAlign: "right"}}>
            </CardFooter>
          </Card>

        </Contents>
      </main>
    </>
  )
}

export default EquipmentListPage;