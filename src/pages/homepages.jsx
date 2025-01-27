import React from "react";
import Hero from "../components/hero";
import HomeCards from '../components/homecard'
import Joblistings from '../components/jobListing'
import ViewAllJobs from '../components/viewAllJobs'

const Homepages = () => {
  return (
    <>
      <Hero />
      <HomeCards />\
      <Joblistings />
      <ViewAllJobs />
    </>
  );
};

export default Homepages;
