import { Container, Table, Button } from "react-bootstrap";

export default function AdminManageProducts() {
  return (
    <Container fluid className="px-0 my-2">
      <h3 className="my-3">Manage Products</h3>

      <Table striped bordered hover responsive className="my-0">
        <thead>
          <tr>
            <th>SUPPLIER ID</th>
            <th>PRODUCT ID</th>
            <th className="text-nowrap">PRODUCT NAME</th>
            <th className="text-nowrap">PRICE ($)</th>
            <th className="text-nowrap">QUANTITY (KG)</th>
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
            <td>
              <Button variant="danger" size="sm" className="bg-gradient">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
