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
          <div className="col-3 text-end">
            <label htmlFor="wd-group">Assignment Group</label>
          </div>
          <div className="col-9 position-relative">
            <select id="wd-group" className="form-control">
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
            </select>
            <span className="position-absolute top-50 end-0 translate-middle-y pe-2">
              <i className="bi bi-caret-down-fill"></i>
            </span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-3 text-end">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </div>
          <div className="col-9 position-relative">
            <select id="wd-display-grade-as" className="form-control">
              <option value="points">Points</option>
              <option value="percentage">Percentage</option>
            </select>
            <span className="position-absolute top-50 end-0 translate-middle-y pe-2">
              <i className="bi bi-caret-down-fill"></i>
            </span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3 text-end">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </div>
          <div className="col-md-9">
            <div className="border border-gray p-3 rounded">

              <div className="mt-3">
                <select id="wd-submission-type" className="form-control">
                  <option value="online">Online</option>
                  <option value="paper">Paper</option>
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="wd-online-options"><b>Online Entry Options</b></label><br />
                <div id="wd-online-options" className="form-check">
                  <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label><br />
                  <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label><br />
                  <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label><br />
                  <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label><br />
                  <input type="checkbox" id="wd-website-url" className="form-check-input" checked />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label><br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3 text-end">
            <label htmlFor="wd-assignment-type" className="form-label">Assign</label>
          </div>
          <div className="col-md-9">
            <div className="border border-gray p-3 rounded">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
                <input id="wd-assign-to" type="text" className="form-control" defaultValue="Everyone" />
              </div>
              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                <input id="wd-due-date" type="date" className="form-control" defaultValue="2024-05-13" />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="wd-available-until" className="form-label">Available From</label>
                  <input id="wd-available-until" type="date" className="form-control" defaultValue="2024-05-13" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until" className="form-label">Until</label>
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
