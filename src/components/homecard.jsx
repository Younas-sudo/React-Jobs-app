import React from "react";
import Card from "./cards";
import { Link } from 'react-router-dom'

const homecard = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Job Seekers 👨‍💼</h2>
            <p className="mt-2 mb-4">
              🔍 Explore thousands of job opportunities and apply with ease.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              🚀 Browse Jobs →
            </Link>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              📢 Post jobs, find the best candidates, and grow your team effortlessly.
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-sky-500 text-white rounded-lg px-4 py-2 hover:bg-sky-600"
            >
              👔 Post a Job →
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default homecard;
