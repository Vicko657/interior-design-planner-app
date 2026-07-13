import Button from "../../../components/common/Button";

export default function ActionItems() {
  return (
    <div className="project-admin  card h-40">
      <div className="card-body d-flex">
        <h5 className="card-title me-auto text-start">Action Items</h5>
        <Button
          colour="outline-red-btn"
          cn="rounded-pill p-3 pt-1 pb-1 me-2"
          text="ADD TASK"
        ></Button>
        <Button
          colour="outline-red-btn"
          cn="rounded-pill p-3 pt-1 pb-1"
          text="ADD ITEM"
        ></Button>
      </div>
    </div>
  );
}
