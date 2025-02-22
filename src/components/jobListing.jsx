import { useState, useEffect} from 'react'
import React from "react";

import JobListing from './joblist';
import Spinner from './spinner'


const jobListings = ({ isHome = false}) => {

  const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
  
  
  const [ jobs , setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchJobs = async () => {

      try {

      const res = await fetch(apiUrl )
      const data = await res.json();
      setJobs(data);
      
      }catch (error) {
        console.log('Error Fetching data', error)
      }finally {
        setLoading(false);
      }
    }

    fetchJobs()
  }, [])
 return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-sky-400 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { loading ? (<Spinner loading={loading} />) : (
              <>
                {jobs.map((job) => (
                  <JobListing key={job.id} job={job} /> 
                ))}
              </>
            ) }

          </div>
        </div>
      </section>
    </div>
  );
};

export default jobListings;
