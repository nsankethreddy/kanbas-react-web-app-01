import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div className="d-flex justify-content-center align-items-start vh-100">
      <div id="wd-assignments-editor" className="container my-4">
        <h3><label htmlFor="wd-name">Assignment Name</label></h3>
        <input id="wd-name" className="form-control" value="A1" /><br /><br />

        <textarea id="wd-description" className="form-control" rows={10} cols={50}>
          {`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.

    The landing page should include the following:
    - Your full name and section
    - Links to each of the lab assignments
    - Link to the Kanbas application
    - Links to all relevant source code repositories

    The Kanbas application should include a link to navigate back to the landing page.`}
        </textarea>
        <br /><br />

        <div className="row mb-3">
          <div className="col-3 text-end">
            <label htmlFor="wd-points">Points</label>
          </div>
          <div className="col-9">
            <input id="wd-points" className="form-control" value={100} />
          </div>
        </div>


        <div className="row mb-3">
          <div className="col-md-3 text-end">
            <label htmlFor="wd-assignment-type" className="form-label">Assign</label>
          </div>
          <div className="col-md-9">
            <div className="border border-gray p-3 rounded">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label"><b>Assign To</b></label>
                <input id="wd-assign-to" type="text" className="form-control" defaultValue="Everyone" />
              </div>
              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label"><b>Due Date</b></label>
                <input id="wd-due-date" type="date" className="form-control" defaultValue="2024-05-13" />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="wd-available-until" className="form-label"><b>Available From</b></label>
                  <input id="wd-available-until" type="date" className="form-control" defaultValue="2024-05-13" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                  <input id="wd-available-until" type="date" className="form-control" defaultValue="2024-05-13" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="text-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}
