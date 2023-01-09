import { appTiers } from '../settings'

export function label(domain) {
  if (!domain) {
    return '';
  }

  let domainname = domain.name;
  let app_tier = domainname.split('.')[0];

  if(appTiers.map(({ name }) => name).includes(app_tier)) {
    return app_tier;
  } else {
    return '';
  }
}
