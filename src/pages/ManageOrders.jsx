import { Container, Table, Button } from "react-bootstrap";

export default function ManageOrders() {
  return (
    <Container fluid className="px-0 my-2">
      <h3 className="my-3">Manage Orders</h3>

      <Table striped bordered hover responsive className="my-0">
        <thead>
          <tr>
            <th>USER ID</th>
            <th>ORDER ID</th>
            <th className="text-nowrap">PRODUCT NAME</th>
            <th className="text-nowrap">TOTAL PRICE ($)</th>
            <th className="text-nowrap">TOTAL QUANTITY (KG)</th>
            <th className="text-nowrap">STATUS</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle">670ec6036f2a33e87419e249</td>
            <td className="align-middle">670fa4d86f2a33e87419e25d</td>
            <td className="text-capitalize align-middle">Green Apple</td>
            <td className="align-middle">5.00</td>
            <td className="align-middle">90</td>
            <td className="align-middle">Pending</td>
            <td className="d-flex gap-2">
              <Button variant="success" size="sm" className="bg-gradient">
                Delivered
              </Button>
              <Button variant="danger" size="sm" className="bg-gradient">
                Cancelled
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
