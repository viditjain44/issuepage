// import React, { useState } from 'react';
// import IssueItem from './IssueItem';
// import IssueDetail from './IssueDetail';

// const issuesData = [
//   { id: 1, title: 'Issue 1', description: 'Description for Issue 1' },
//   { id: 2, title: 'Issue 2', description: 'Description for Issue 2' },
//   { id: 3, title: 'Issue 3', description: 'Description for Issue 3' },
// ];

// function IssueList() {
//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleIssueClick = (issue) => {
//     setSelectedIssue(issue);
//   };

//   return (
//     <div>
//       <h1>Issue List</h1>
//       <ul>
//         {issuesData.map((issue) => (
//           <IssueItem
//             key={issue.id}
//             issue={issue}
//             onClick={() => handleIssueClick(issue)}
//           />
//         ))}
//       </ul>
//       {selectedIssue && <IssueDetail issue={selectedIssue} />}
//     </div>
//   );
// }

// export default IssueList;
// IssueList.js
// import React, { useEffect, useState } from 'react';
// import IssueItem from './IssueItem';

// function IssueList() {
//   // Define your issues state and set it to the fetched issues
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     // Fetch issues from GitHub API and set them in the state
//     const fetchIssues = async () => {
//       try {
//         const response = await fetch('https://api.github.com/repos/your_username/your_repository/issues');
//         if (response.ok) {
//           const issuesData = await response.json();
//           setIssues(issuesData);
//         } else {
//           console.error('Failed to fetch issues');
//         }
//       } catch (error) {
//         console.error('Error fetching issues:', error);
//       }
//     };

//     fetchIssues();
//   }, []);

//   return (
//     <div>
//       <h1>Issue List</h1>
//       <ul>
//         {issues.map((issue) => (
//           <IssueItem key={issue.id} issue={issue} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default IssueList;

// IssueList.js
import React, { useEffect, useState } from 'react';
import IssueItem from './IssueItem';
import IssueDetailPage from './IssueDetailPage'; // Import the IssueDetailPage component
import './IssueList.css';
function IssueList() {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/gitlabhq/gitlabhq/issues');
        if (response.ok) {
          const issuesData = await response.json();
          setIssues(issuesData);
        } else {
          console.error('Failed to fetch issues');
        }
      } catch (error) {
        console.error('Error fetching issues:', error);
      }
    };

    fetchIssues();
  }, []);

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
  };

  return (
    <div className="issue-list-container">
      <h1 className="issue-list-heading">Issue List</h1>
      <ul className="issue-list">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} onClick={() => handleIssueClick(issue)} />
        ))}
      </ul>
      <IssueDetailPage issue={selectedIssue} /> {/* Display IssueDetailPage */}
    </div>
  );
}

export default IssueList;
