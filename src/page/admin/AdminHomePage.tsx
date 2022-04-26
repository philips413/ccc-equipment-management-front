import AdminHeader from "./AdminHeader";
import {Contents} from "./AdminPage";
import {Button, Card, CardBody, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";

const AdminHomePage = () => {
  return (
    <>
      <AdminHeader />
      <Contents>
        <Card>
          <CardBody>
            <CardTitle tag={"h4"}>
              로그인
            </CardTitle>
            <Form inline>
              <FormGroup floating>
                <Input
                  id="userId"
                  name="userId"
                  placeholder="ID"
                  type="text"
                />
                <Label for="userId">
                  ID
                </Label>
              </FormGroup>
              {' '}
              <FormGroup floating>
                <Input
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
                <Label for="password">
                  Password
                </Label>
              </FormGroup>
              {' '}
              <Button>
                로그인
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Contents>
    </>
  )
}

export default AdminHomePage;
