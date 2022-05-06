import AdminHeader from "./AdminHeader";
import {Button, Card, CardBody, CardText, CardTitle, Col, Form, FormGroup, Input, Label, Table} from "reactstrap";
import {useEffect, useState} from "react";
import {createUser, getUserList} from "../../api/UserApi";
import {UserRequest} from "../../types/UserType";

const UserListPage = () => {

  const [user, setUser] = useState({
    name: "",
    userId: "",
    password: "",
    passswordCorrect: "",
    nickName: ""
  });
  const [isPassPassword, setIsPassPassword] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    loadUserList();
  }, []);

  const loadUserList = async () => {
    const result = await getUserList();
    setUserList(result);
  }


  const verifyPassword = () => {
    const {password, passswordCorrect} = user;
    if (password !== passswordCorrect) {
      alert("비밀번호가 같지 않습니다.\n다시 확인하여 주시기 바랍니다.");
      setIsPassPassword(false);
      return;
    }
    setIsPassPassword(true);
  }


  const submitUser = async (e:any) => {
    e.preventDefault();
    const {userId, name, nickName, password} = user;
    if (userId === null || userId === "") {
      alert("아이디를 입력하여 주세요.");
      return;
    } else if (name === null || name === "") {
      alert("이름을 입력하여 주세요.");
      return;
    }

    if (!isPassPassword) {
      alert("비밀번호를 확인하여 주시기 바랍니다.");
      return;
    }

    if (nickName) {
      setUser((props) => ({...props, nickName: name}));
    }

    await createUser(user);
    await loadUserList();
  }

  return (
    <>
      <AdminHeader />
      <main>
        <Card>
          <CardBody>
            <CardTitle tag="h3">
              회원 등록
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
                      type="text"
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
                      type="text"
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
                      onBlur={verifyPassword}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={{
                    offset: 2,
                    size: 10
                  }}>
                    <Button type={"submit"} onClick={submitUser}>
                      등록
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardText>
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <CardTitle tag="h3">회원목록</CardTitle>
            <CardBody>
              <Table>
                <thead className={"table-dark"}>
                  <tr>
                    <td>No</td>
                    <td>회원명</td>
                    <td>회원아이디</td>
                    <td>닉네임</td>
                    <td>가입일자</td>
                  </tr>
                </thead>
                <tbody>
                {
                  userList.map((item: UserRequest, index) => {
                    return (
                      <tr key={`tr${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.userId}</td>
                        <td>{item.nickName}</td>
                        <td>{item.createdAt}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </Table>
            </CardBody>
          </CardBody>
        </Card>
      </main>
    </>
  )
}

export default UserListPage;
