import React, { useState, useEffect } from 'react';

const WorkHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [workHistory, setWorkHistory] = useState({
    daysWorked: 0,
    leavesTaken: 0,
    breaks: 0,
    projectsCompleted: 0,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual API call or data fetching logic
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/work-history');
        if (!response.ok) {
          throw new Error('Error fetching work history data');
        }
        const data = await response.json();
        setWorkHistory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading work history...</div>;
  }

  if (error) {
    return <div>Error: {error}. Please try again later.</div>;
  }

  const { daysWorked, leavesTaken, breaks, projectsCompleted } = workHistory;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Work History</h1>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium mb-2">Days Worked</h3>
            <p className="text-xl font-bold">{daysWorked}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium mb-2">Leaves Taken</h3>
            <p className="text-xl font-bold">{leavesTaken}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium mb-2">Breaks</h3>
            <p className="text-xl font-bold">{breaks}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-2 mb-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium mb-2">Completed Projects</h3>
            <p className="text-xl font-bold">{projectsCompleted}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
