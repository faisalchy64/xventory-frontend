import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container className="h-screen py-3">
        <Sidebar />
        <Outlet />
      </Container>
    </>
  );
}
