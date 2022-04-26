import AdminHeader from "./AdminHeader";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col, Form,
  FormGroup,
  Input,
  Label,
  Table
} from "reactstrap";
import {Contents} from "./AdminPage";
import {useEffect, useState} from "react";
import {categoryList, createCategory} from "../../api/CategoryApi";

const CategoryPage = () => {

  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    loadCategoryList();
  }, []);

  const loadCategoryList = async () => {
    const result = await categoryList();
    setCategorys(result);
  }


  const submitCategory = async (e:any) => {
    e.preventDefault();
    if (categoryName == null || categoryName == '') {
      alert("카테고리명을 입력해주세요");
      return false;
    }
    const setData = {categoryName, description};
    await createCategory(setData);
    await loadCategoryList();
  }

  return (
    <>
      <AdminHeader />
      <Contents>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              카테고리 등록
            </CardTitle>
            <CardText>
              <Form>
                <FormGroup row>
                  <Label
                    for="categoryName"
                    sm={2}
                  >
                    카테고리 명
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="categoryName"
                      name="categoryName"
                      placeholder="카테고리명을 입력해주세요"
                      type="text"
                      onChange={(e) => setCategoryName(e.target.value)}
                      value={categoryName}
                    />
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={{
                    offset: 2,
                    size: 10
                  }}>
                    <Button type={"submit"} onClick={submitCategory}>
                      등록
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardText>
          </CardBody>
        </Card>
        <br/>
        <Card>
          <CardBody>
            <CardTitle tag="h5">카테고리 목록</CardTitle>
            <CardBody>
              <Table>
                <thead className={"table-dark"}>
                  <tr>
                    <th>No</th>
                    <th>카테고리명</th>
                    <th>설명</th>
                    <th>등록일자</th>
                    <th>등록자</th>
                  </tr>
                </thead>
                <tbody>
                {
                  categorys.map((item:any, index: number) => {
                    return (
                      <tr key={`tr${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.categoryName}</td>
                        <td>{item.description}</td>
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
    </>
  )
}

export default CategoryPage;
