import { locations } from '../settings';

export function label(location, with_explanation = false) {
  if (!location) { return '' }

  const matchedLocation = locations.find(({ id }) => id === location.id);
  if (matchedLocation) {
    const { label: { location: name, explanation }} = matchedLocation;
    return with_explanation ? `${name}, ${explanation}` : name;
  } else {
    return location.name;
  }
}

export function country(location) {
  if (!location) { return null }

  const matchedLocation = locations.find(({ id }) => id === location.id);
  if (matchedLocation) {
    return matchedLocation.country
  } else {
    return null
  }
}
