function Header() {
  return (
    <div className="title">
      <div className="title-left">
        <h1>HRnet</h1>
      </div>
      <div className="title-right">
        <h3 className="btn-title">
          <a href="/" target="blank">
            Create Employee Tool
          </a>
        </h3>
        <h3 className="btn-title">
          <a href="/employees-list" target="blank">
            View Current Employees
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Header;
