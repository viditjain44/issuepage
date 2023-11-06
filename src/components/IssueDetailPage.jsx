import React from 'react';

function IssueDetailPage({ issue }) {
  if (!issue) {
    return <div>No issue selected</div>;
  }

  return (
    <div>
      <h1>Issue Details</h1>
      <h2> <a href="details.jsx">{issue.title} </a></h2>
      
    </div>
  );
}

export default IssueDetailPage;