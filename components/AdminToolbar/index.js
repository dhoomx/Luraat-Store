import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkUserIsAdmin } from "../../Utils";
import "./styles.scss";

const mpasState = ({ user }) => ({
  currentUser: user.currentUser,
});
const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mpasState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="Admintoolbar">
      <ul>
        <li>
          <Link to="/admin">My admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminToolbar;
