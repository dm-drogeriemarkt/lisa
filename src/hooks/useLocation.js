import { locations } from 'settings'

const useLocation = (locationId) => locations.find(({ id }) => id === locationId)

export default useLocation
