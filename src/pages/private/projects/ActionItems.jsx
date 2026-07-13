import Button from "../../../components/common/Button";

export default function ActionItems() {
  return (
    <div className="project-admin card h-40 dropdown">
      <div className="card-body d-flex pb-0">
        <h5 className="card-title me-auto text-start">Action Items</h5>
        <h5 className="text-end">...</h5>
        <ul
          className="dropdown-menu shadow-lg m-0 p-0 w-100"
          aria-labelledby="dropdownMenu"
        >
          <li>
            <a className="dropdown-item">
              <Button
                colour="outline-red-btn"
                cn="rounded-pill p-3 pt-1 pb-1"
                text="ADD TASK"
              ></Button>
            </a>
          </li>
          <hr className="m-0" />
          <li>
            <a className="dropdown-item">
              <Button
                colour="outline-red-btn"
                cn="rounded-pill p-3 pt-1 pb-1"
                text="ADD ITEM"
              ></Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
