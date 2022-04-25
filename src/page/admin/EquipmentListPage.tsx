import AdminHeader from "./AdminHeader";
import {Contents} from "./AdminPage";
import {Card, CardBody, CardFooter, CardText, CardTitle, Col, FormGroup, Input, Label, Table} from "reactstrap";
import {useEffect, useState} from "react";
import {Category, categoryList} from "../../api/CategoryApi";

const EquipmentListPage = () => {

  const [equipment, setEquipment] = useState({
    name: "",
    category: "-1",
    description: "",
    qty: "1",
    minQty: 1,
    maxQty: "1"
  })
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    loadCategoryList();
  }, []);

  const loadCategoryList = async () => {
    const result = await categoryList();
    setCategorys(result);
  }

  const changeQty = (evt:any) => {
    const data = {
      qty: evt.target.value,
      maxQty: evt.target.value
    }
    setEquipment((props) => {
      return {
        ...props,
        ...data
      }
    })
  }

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
                      defaultValue={equipment.name}
                      onChange={(e) => setEquipment((props) => ({...props, name: e.target.value}))}
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
                      defaultValue={equipment.category}
                      onChange={(e) => setEquipment((props) => ({...props, category: e.target.value}))}
                    >
                      <option value={-1}>::카테고리를 선택해주세요::</option>
                      {
                        categorys.map((item:Category, index: number) => (<option key={`option_${index}`} value={item.categoryId}>{item.categoryName}</option>))
                      }
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
                      defaultValue={equipment.description}
                      onChange={(e) => setEquipment((props) => ({...props, description: e.target.value}))}
                      type="text"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="qty"
                    sm={2}
                  >
                    보유수량
                  </Label>
                  <Col sm={2}>
                    <Input
                      id="qty"
                      name="qty"
                      placeholder="보유수량을 입력하여 주세요"
                      defaultValue={equipment.qty}
                      onChange={changeQty}
                      type="text"
                    />
                  </Col>
                </FormGroup>
              </CardText>
            </CardBody>
            <CardFooter style={{textAlign: "right"}}>
            </CardFooter>
          </Card>
          <br/>
          <Card>
            <CardBody>
              <CardTitle tag="h5">장비 목록</CardTitle>
              <CardBody>
                <Table>
                  <thead className={"table-dark"}>
                  <tr>
                    <th>No</th>
                    <th>장비명</th>
                    <th>카테고리</th>
                    <th>설명</th>
                    <th>보유수량</th>
                    <th>최소반출 수량</th>
                    <th>최대반출 수량</th>
                    <th>등록일자</th>
                    <th>등록자</th>
                  </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </CardBody>
            </CardBody>
          </Card>
        </Contents>
      </main>
    </>
  )
}

export default EquipmentListPage;
