import React from 'react';

function IssueDetailPage({ issue }) {
  if (!issue) {
    return <div>No issue selected</div>;
  }

  return (
    <div>
      <h1>Issue Details</h1>
      <h2>{issue.title}</h2>
      <p>{issue.description}</p>
    </div>
  );
}

export default IssueDetailPage;