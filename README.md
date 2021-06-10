# LISA

[<img src="https://opensourcelogos.aws.dmtech.cloud/dmTECH_opensource_logo.svg" height="21" width="130">](https://www.dmtech.de/)

LISA, the lovely interface for sysadmins, is an opinionated UI for [Foreman](https://theforeman.org/). While the Foreman UI was made for infrastructure teams, LISA was made for users who want to create hosts without needing to know how that is done in detail.
This README outlines the details of collaborating on this React.js application.

## Compatibility

| Foreman Version |
| --------------- |
| >= 1.24         |

LISA is known to work with Node version >= 8 and <= 14.

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

- [default attributes](docs/settings/settings.md#default_configs-type) for new hosts
- [default values](docs/settings/settings-properties-form_settings.md#default_values) for the hosts creation form
- at least one [location](docs/settings/settings.md#locations-Type)
- at least one [operatingsystem](docs/settings/settings.md#operatingsystems-type)
- at least one [app tier](docs/settings/settings.md#app_tiers-type)

You can also define [preset resources](docs/settings/settings-properties-form_settings.md#preset_resources) that can be used to easily set predefined attributes for a new host.

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

## Running in Docker / Production

Create src/settings/production.json file. (See above)
Then build the docker image.

```
$ docker build -t my-lisa-image .
```

This multi-stage docker build will install all dependencies,
build the production bundle and copy it to a ngninx container.

Then you can run it.

```
$ docker run -p 8080:8080 my-lisa-image
```

LISA will be accessible on `localhost:8080`.

## Copyright

Copyright (c) 2018-present dmTECH GmbH, [dmtech.de](https://www.dmtech.de/)

This project is licensed under the MIT License - see the LICENSE file for details
