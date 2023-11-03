//  IssueDetail.js
 import React from 'react';

function IssueDetail({ issue }) {
  return (
    <div>
       <h2>Issue Details</h2>
     <h3>Title: {issue.title}</h3>
     <p>Description: {issue.description}</p>
   </div>
   );
}

 export default IssueDetail;



