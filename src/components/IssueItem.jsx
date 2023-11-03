import React from 'react';

function IssueItem({ issue, onClick }) {
  return (
    <li>
      <button  className="button"    onClick={onClick}>{issue.title}</button>
    </li>
  );
}

export default IssueItem;