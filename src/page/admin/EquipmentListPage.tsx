import AdminHeader from "./AdminHeader";
import {Contents} from "./AdminPage";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Table
} from "reactstrap";
import {useEffect, useState} from "react";
import {categoryList} from "../../api/CategoryApi";
import {createEquipment, equipmentList} from "../../api/EquipmentApi";
import {CategoryRequest} from "../../types/CategoryType";

const EquipmentListPage = () => {

  const [equipment, setEquipment] = useState({
    name: "",
    category: -1,
    description: "",
    qty: 1,
    minUseQty: 1,
    maxUseQty: 1
  })
  const [categorys, setCategorys] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    loadCategoryList();
    loadEquipmentList();
  }, []);

  const loadCategoryList = async () => {
    const result = await categoryList();
    setCategorys(result);
  }

  const loadEquipmentList = async () => {
    const result = await equipmentList();
    setEquipments(result);
  }

  const changeQty = (evt:any) => {
    const data = {
      qty: Number(evt.target.value),
      maxUseQty: Number(evt.target.value)
    }
    setEquipment((props) => {
      return {
        ...props,
        ...data
      }
    })
  }

  async function submitEquipment(e:any) {
    e.preventDefault();
    if (equipment.name === "") {
      alert("장비 명을 입력하여 주세요.");
      return false;
    }
    if (equipment.description === "") {
      alert("설명을 입력하여 주세요");
      return false;
    }
    if (equipment.category < 0) {
      alert("카테고리를 선택하여 주세요.");
      return false;
    }
    await createEquipment(equipment);
    loadEquipmentList();
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
                <Form>
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
                        onChange={(e) => setEquipment((props) => ({...props, category: Number(e.target.value)}))}
                      >
                        <option value={-1}>::카테고리를 선택해주세요::</option>
                        {
                          categorys.map((item:CategoryRequest, index: number) => (<option key={`option_${index}`} value={item.categoryId}>{item.categoryName}</option>))
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
                  <FormGroup row>
                    <Col sm={{
                      offset: 2,
                      size: 10
                    }}>
                      <Button type={"submit"} onClick={submitEquipment}>
                        등록
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
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
                  <tbody>
                  {
                    equipments.map((item:any, index:number) => {
                      return (
                        <tr key={`tr_${index}`}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.category}</td>
                          <td>{item.description}</td>
                          <td>{item.qty}</td>
                          <td>{item.minUseQty}</td>
                          <td>{item.maxUseQty}</td>
                          <td>{item.createdAt}</td>
                          <td>{item.createdId}</td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
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
