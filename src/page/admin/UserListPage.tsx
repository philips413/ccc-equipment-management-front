import AdminHeader from "./AdminHeader";
import {Button, Card, CardBody, CardText, CardTitle, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";

const UserListPage = () => {

  const [user, setUser] = useState({
    name: "",
    userId: "",
    password: "",
    passswordCorrect: "",
    nickName: ""
  });

  return (
    <>
      <AdminHeader />
      <main>
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
                    사용자 명
                  </Label>
                  <Col sm={4}>
                    <Input
                      id="categoryName"
                      name="categoryName"
                      value={user.name}
                      onChange={(e) => setUser((props) => ({...props, name: e.target.value}))}
                      type="text"
                    />
                  </Col>
                  <Label
                    for="description"
                    sm={2}
                  >
                    닉네임
                  </Label>
                  <Col sm={4}>
                    <Input
                      id="description"
                      name="description"
                      type="password"
                      value={user.nickName}
                      onChange={(e) => setUser((props) => ({...props, nickName: e.target.value}))}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="description"
                    sm={2}
                  >
                    아이디
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="description"
                      name="description"
                      type="password"
                      value={user.userId}
                      onChange={(e) => setUser((props) => ({...props, userId: e.target.value}))}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="description"
                    sm={2}
                  >
                    비밀번호
                  </Label>
                  <Col sm={4}>
                    <Input
                      id="description"
                      name="description"
                      type="password"
                      value={user.password}
                      onChange={(e) => setUser((props) => ({...props, password: e.target.value}))}
                    />
                  </Col>
                  <Label
                    for="description"
                    sm={2}
                  >
                    비밀번호 확인
                  </Label>
                  <Col sm={4}>
                    <Input
                      id="description"
                      name="description"
                      type="password"
                      value={user.passswordCorrect}
                      onChange={(e) => setUser((props) => ({...props, passswordCorrect: e.target.value}))}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={{
                    offset: 2,
                    size: 10
                  }}>
                    <Button type={"submit"}>
                      등록
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardText>
          </CardBody>
        </Card>
      </main>
    </>
  )
}

export default UserListPage;