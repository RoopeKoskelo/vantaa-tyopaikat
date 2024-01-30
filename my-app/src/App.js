import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/layout/Header';
import Jobs from './components/layout/Jobs';
import Search from './components/layout/Search';


function App(){
	const initJobs = []
	const [jobs, setJobs] = useState(initJobs);

	const [filterText, setFilterText] = useState('');
	const [showAll, setShowAll] = useState(true)

 	const jobsToShow = showAll
        ? jobs
        : jobs.filter(job => job.tyotehtava.toUpperCase().includes(filterText.toUpperCase()))



	const handleFilter = (filteringText) => {
		setFilterText(filteringText);
		if (filteringText === ''){
		setShowAll(true);
		}
		else
		{
		setShowAll(false);
		}
	}


	useEffect(() => {
		fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
		.then(response => response.json())
		.then(json => setJobs([...json]));
	}, []);

	return(
		<div>
			<Header />
			<div className="box">
				<Search onFilter={handleFilter}/>
			</div>
			<div className="box">
				<Jobs jobs={jobsToShow}/>
			</div>
		</div>
	);
}
export default App;
