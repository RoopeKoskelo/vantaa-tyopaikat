import React from 'react';

function Jobs({ jobs }) {
    const rows = () => jobs.map(job =>{
        return <p key={job.id} className="card"><input id="job" type="checkbox"></input>{job.tyotehtava}, {job.osoite}, <a href={job.linkki}>LISÄTIETOA</a></p>
    })
    return (
        <div>
            {rows()}
        </div>
    )
}

export default Jobs;