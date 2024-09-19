export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3><label htmlFor="wd-name">Assignment Name</label></h3>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group </label>
          </td>
          <td>
            <select id="wd-group">
              <option value="Assignments">Assignments</option>
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="points">Points</option>
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Submission Type </label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
            </select>
            <br /><br />
            <label htmlFor="wd-online-options">Online Entry Options</label><br />
            <div id="wd-online-options">
              <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
              <input type="checkbox" id="wd-website-url" /> Website URL<br />
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
              <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
              <input type="checkbox" id="wd-file-upload" /> File Upload<br />
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td colSpan={2} align="center" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label><br />
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="right" valign="top">
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr>
        <br />
        <tr>
          <td>
          </td>
          <td>
            <label htmlFor="wd-available-from">Available from</label><br />
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label><br />
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
