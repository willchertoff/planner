/* eslint-disable no-confusing-arrow */
import React from 'react';

/* Components */
import Card from '../../components/Card';

/* Helpers */
export const emptyString = str => str.length === 0;
export const search = (term, dat) =>
  dat.filter(d =>
    d.title.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  );

/* DataPresentation */
export const renderTripCards = (trps, active) =>
  trps.map(trip =>
    <Card
      id={trip.id}
      active={trip.id === active}
      key={trip.id}
      title={trip.title}
      dates={trip.date}
      people={trip.people}
    />,
  );

export const searchAndRenderTrips = finder =>
  emptyString(finder) ? (
    group =>
      renderTripCards(group.trips, group.active)
  ) : (
    group =>
      renderTripCards(search(finder, group.trips), group.active)
  );
