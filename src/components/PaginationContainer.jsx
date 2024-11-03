import { Pagination } from "react-bootstrap";

export default function PaginationContainer({
  total,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = total / 6;
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const prev = () => {
    if (currentPage > 1) {
      return setCurrentPage(currentPage - 1);
    }

    setCurrentPage(totalPages);
  };

  console.log(currentPage);

  const next = () => {
    if (totalPages > currentPage) {
      return setCurrentPage(currentPage + 1);
    }

    setCurrentPage(1);
  };

  return (
    <Pagination className="d-flex justify-content-center mx-auto my-4">
      <Pagination.Prev onClick={prev} />
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={next} />
    </Pagination>
  );
}
