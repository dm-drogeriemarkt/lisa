# LISA

[<img src="https://opensourcelogos.aws.dmtech.cloud/dmTECH_opensource_logo.svg" height="21" width="130">](https://www.dmtech.de/)

LISA, the lovely interface for sysadmins, is an opinionated UI for [Foreman](https://theforeman.org/). While the Foreman UI was made for infrastructure teams, LISA was made for users who want to create hosts without needing to know how that is done in detail.
This README outlines the details of collaborating on this React.js application.

## Compatibility

| Foreman Version |
| --------------- |
| >= 1.24         |

LISA is known to work with Node version >= 8 and < 12.

## Installation

```
$ npm install
```

## Configuration

### Environment variables

```
$ cp .env.example .env.local
```

### Settings file

To start using LISA you have to define:

- [default attributes](docs/settings/schema.md#default_configs-type) for new hosts
- [default values](docs/settings/schema.md#default_values-type) for the hosts creation form
- at least one [location](docs/settings/schema.md#locations-type-1)
- at least one [operatingsystem](docs/settings/schema.md#operatingsystems-type)
- at least one [app tier](docs/settings/schema.md#app_tiers-type)

You can also define [preset resources](docs/settings/schema.md#preset_resources) that can be used to easily set predefined attributes for a new host.

You can use `example.json` to build the settings file, copy the file and replace the settings with your own.

```
$ cp src/settings/example.json src/settings/development.json
```

Use global IDs as a reference to Foreman resources. To get the global ID, start rails console and use the following command:

```
irb(main):001:0> Foreman::GlobalId.for(Location.find_by(name: 'My-Location'))
=> "MDE6TG9jYXRpb24tMg=="
```

Run the following command to validate your settings:

```
$ npx ajv -d src/settings/development.json -s src/settings/schema.json
```

Please also update the app tiers locales file. (`src/locales/appTiers.en.json`)

## Run tests

```
$ npm test
```

## Running / Development

```
$ npm start
```

## Copyright

Copyright (c) 2018-present dmTECH GmbH, [dmtech.de](https://www.dmtech.de/)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
