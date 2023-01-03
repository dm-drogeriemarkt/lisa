import { locations } from '../settings'

const useLocation = (locationCode) => locations.find(({ code }) => code === locationCode)

export default useLocation
