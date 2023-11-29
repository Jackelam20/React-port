// Create navigation tabs to be applied to a header
function Navigation({ currentPage, handlePageChange }) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']

  return (
    <ul className="nav nav-tabs flex mr-5">
      {pages.map((page) => (
        <li className="nav-item mx-3" key={page}>
              <a
                href={`#${page}`}
                onClick={() => handlePageChange(page)}
                className={`${currentPage === page ? 'nav-link active' : 'nav-link'} hover:text-slate-500`}
              >
                {page}
              </a>
            </li>
      ))}
    </ul>
  );
}

export default Navigation;
