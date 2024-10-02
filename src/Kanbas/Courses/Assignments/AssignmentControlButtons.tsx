import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import Borders from "../../../Labs/Lab2/Borders";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end d-flex align-items-center text-seconday">
            <div className="border border-dark rounded px-2 py-1 me-2 fs-6"    >
                40% of Total
            </div>
            <BsPlus className="fs-2 me-2" />
            <IoEllipsisVertical className="fs-4" />
        </div >
    );
}
