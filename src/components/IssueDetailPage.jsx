import React from 'react';

function IssueDetailPage({ issue }) {
  if (!issue) {
    return <div>No issue selected</div>;
  }

  return (
    <div>
      <h1>Issue Details</h1>
      <h2> <a href="https://github.com/viditjain44/issuepage">{issue.title}</a></h2>
      
    </div>
  );
}

export default IssueDetailPage;