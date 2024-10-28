import { Form, InputGroup, Button } from "react-bootstrap";

export default function ProductSearch() {
  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching...");
  };

  return (
    <Form className="form ms-auto" onSubmit={handleSearch}>
      <InputGroup>
        <Form.Control
          type="search"
          name="search"
          placeholder="Search products"
        />
        <Button type="submit" variant="primary" className="bg-gradient">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}
