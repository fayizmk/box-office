import React, { useEffect, useState } from 'react';
import { MainPageLayout } from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';

const Star = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {isLoading && <div> shows are still loaing</div>}
      {error && <div> error occured: {error}</div>}
      {!isLoading && !shows && <div>Nothing to display</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Star;
