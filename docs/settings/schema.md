# Schema

```
https://github.com/dm-drogeriemarkt-de/lisa/blob/master/src/settings/schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Forbidden             |            |

# Properties

| Property                              | Type       | Required     | Nullable | Defined by    |
| ------------------------------------- | ---------- | ------------ | -------- | ------------- |
| [app_tiers](#app_tiers)               | `object[]` | **Required** | No       | (this schema) |
| [default_configs](#default_configs)   | `object`   | **Required** | No       | (this schema) |
| [fact_names](#fact_names)             | `object`   | Optional     | No       | (this schema) |
| [form_settings](#form_settings)       | `object`   | **Required** | No       | (this schema) |
| [locations](#locations)               | `object[]` | **Required** | No       | (this schema) |
| [operatingsystems](#operatingsystems) | `object[]` | **Required** | No       | (this schema) |

## app_tiers

`app_tiers`

- is **required**
- type: `object[]`
- defined in this schema

### app_tiers Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `name`      | string | **Required** |
| `relations` | object | **Required** |

#### name

App tier name

`name`

- is **required**
- type: `string`

##### name Type

`string`

##### name Example

```json
development
```

#### relations

`relations`

- is **required**
- type: `object`

##### relations Type

`object` with following properties:

| Property    | Type  | Required     |
| ----------- | ----- | ------------ |
| `locations` | array | **Required** |

#### locations

`locations`

- is **required**
- type: `object[]`\* at least `1` items in the array

##### locations Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property        | Type   | Required     |
| --------------- | ------ | ------------ |
| `code`          | string | **Required** |
| `resource_pool` | string | **Required** |

#### code

A reference to the [location](#locations-1)

`code`

- is **required**
- type: `string`

##### code Type

`string`

##### code Example

```json
LAN
```

#### resource_pool

`resource_pool`

- is **required**
- type: `string`

##### resource_pool Type

`string`

##### resource_pool Examples

```json
default
```

```json
prod
```

## default_configs

`default_configs`

- is **required**
- type: `object`
- defined in this schema

### default_configs Type

`object` with following properties:

| Property                | Type    | Required     | Default |
| ----------------------- | ------- | ------------ | ------- |
| `architecture_id`       | string  | **Required** |         |
| `build`                 | boolean | Optional     | `false` |
| `compute_attributes`    | object  | Optional     |         |
| `enabled`               | boolean | Optional     | `false` |
| `interfaces_attributes` | array   | **Required** |         |
| `managed`               | boolean | Optional     | `false` |
| `organization_id`       | string  | **Required** |         |

#### architecture_id

Architecture global id from Foreman

`architecture_id`

- is **required**
- type: `string`

##### architecture_id Type

`string`

##### architecture_id Example

```json
MDE6QXJjaGl0ZWN0dXJlLTE=
```

#### build

`build`

- is optional
- type: `boolean`
- default: `false`

##### build Type

`boolean`

#### compute_attributes

`compute_attributes`

- is optional
- type: `object`

##### compute_attributes Type

`object` with following properties:

| Property                 | Type    | Required | Default |
| ------------------------ | ------- | -------- | ------- |
| `corespersocket`         | boolean | Optional | `false` |
| `cpu_hot_add_enabled`    | boolean | Optional | `false` |
| `memory_hot_add_enabled` | boolean | Optional | `false` |
| `start`                  | boolean | Optional | `false` |

#### corespersocket

`corespersocket`

- is optional
- type: `boolean`
- default: `false`

##### corespersocket Type

`boolean`

#### cpu_hot_add_enabled

`cpu_hot_add_enabled`

- is optional
- type: `boolean`
- default: `false`

##### cpu_hot_add_enabled Type

`boolean`

#### memory_hot_add_enabled

`memory_hot_add_enabled`

- is optional
- type: `boolean`
- default: `false`

##### memory_hot_add_enabled Type

`boolean`

#### start

`start`

- is optional
- type: `boolean`
- default: `false`

##### start Type

`boolean`

#### enabled

`enabled`

- is optional
- type: `boolean`
- default: `false`

##### enabled Type

`boolean`

#### interfaces_attributes

`interfaces_attributes`

- is **required**
- type: `object[]`\* between `1` and `1` items in the array

##### interfaces_attributes Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property            | Type   | Required     |
| ------------------- | ------ | ------------ |
| `computeAttributes` | object | **Required** |

#### computeAttributes

`computeAttributes`

- is **required**
- type: `object`

##### computeAttributes Type

`object` with following properties:

| Property | Type   | Required     |
| -------- | ------ | ------------ |
| `type`   | string | **Required** |

#### type

`type`

- is **required**
- type: `string`

##### type Type

`string`

##### type Example

```json
VirtualVmxnet1
```

#### managed

`managed`

- is optional
- type: `boolean`
- default: `false`

##### managed Type

`boolean`

#### organization_id

Organization global id from Foreman

`organization_id`

- is **required**
- type: `string`

##### organization_id Type

`string`

##### organization_id Example

```json
MDE6T3JnYW5pemF0aW9uLTE=
```

## fact_names

`fact_names`

- is optional
- type: `object`
- defined in this schema

### fact_names Type

`object` with following properties:

| Property | Type   | Required | Default                  |
| -------- | ------ | -------- | ------------------------ |
| `cpu`    | string | Optional | `"processors::count"`    |
| `disk`   | string | Optional | `"blockdevice_sda_size"` |
| `memory` | string | Optional | `"memorysize_mb"`        |

#### cpu

`cpu`

- is optional
- type: `string`
- default: `"processors::count"`

##### cpu Type

`string`

#### disk

`disk`

- is optional
- type: `string`
- default: `"blockdevice_sda_size"`

##### disk Type

`string`

#### memory

`memory`

- is optional
- type: `string`
- default: `"memorysize_mb"`

##### memory Type

`string`

## form_settings

`form_settings`

- is **required**
- type: `object`
- defined in this schema

### form_settings Type

`object` with following properties:

| Property                 | Type   | Required     | Default |
| ------------------------ | ------ | ------------ | ------- |
| `default_values`         | object | **Required** |         |
| `host_creation_duration` | number | Optional     | `10000` |
| `mark_step_cpu`          | number | Optional     | `1`     |
| `mark_step_memory`       | number | Optional     | `16`    |
| `mark_step_size`         | number | Optional     | `300`   |
| `max_cpu_value`          | number | Optional     | `8`     |
| `max_host_count_value`   | number | Optional     | `10`    |
| `max_memory_value`       | number | Optional     | `64`    |
| `max_size_value`         | number | Optional     | `900`   |
| `min_cpu_value`          | number | Optional     | `1`     |
| `min_memory_value`       | number | Optional     | `4`     |
| `min_size_value`         | number | Optional     | `50`    |
| `preset_resources`       | array  | Optional     | `[]`    |
| `step_cpu`               | number | Optional     | `1`     |
| `step_memory`            | number | Optional     | `4`     |
| `step_size`              | number | Optional     | `50`    |

#### default_values

`default_values`

- is **required**
- type: `object`

##### default_values Type

`object` with following properties:

| Property              | Type   | Required     | Default                                                          |
| --------------------- | ------ | ------------ | ---------------------------------------------------------------- |
| `app_tier_name`       | string | Optional     | `"Name of the first app tier from app tiers"`                    |
| `compute_resource_id` | string | Optional     | `"It will be taken from the attributes of the default location"` |
| `cpu`                 | number | Optional     | `1`                                                              |
| `datastore_type_id`   | string | Optional     | `"It will be taken from the attributes of the default location"` |
| `location_code`       | string | Optional     | `"Code of the first location from locations"`                    |
| `memory`              | number | Optional     | `4`                                                              |
| `operatingsystem_id`  | string | Optional     | `"Id of the first operatingsystem from operatingsystems"`        |
| `puppet_env`          | string | **Required** |                                                                  |
| `puppet_master_id`    | string | Optional     | `"It will be taken from the attributes of the default location"` |
| `puppetclass_ids`     | array  | **Required** |                                                                  |
| `size`                | number | Optional     | `50`                                                             |

#### app_tier_name

App tier name

`app_tier_name`

- is optional
- type: `string`
- default: `"Name of the first app tier from app tiers"`

##### app_tier_name Type

`string`

#### compute_resource_id

A reference to the [compute resource](#compute_resource_id-1)

`compute_resource_id`

- is optional
- type: `string`
- default: `"It will be taken from the attributes of the default location"`

##### compute_resource_id Type

`string`

#### cpu

Number of CPUs

`cpu`

- is optional
- type: `number`
- default: `1`

##### cpu Type

`number`

#### datastore_type_id

A reference to the [datastore type](#datastore_types)

`datastore_type_id`

- is optional
- type: `string`
- default: `"It will be taken from the attributes of the default location"`

##### datastore_type_id Type

`string`

#### location_code

A reference to the [location](#locations-1)

`location_code`

- is optional
- type: `string`
- default: `"Code of the first location from locations"`

##### location_code Type

`string`

#### memory

Memory size

`memory`

- is optional
- type: `number`
- default: `4`

##### memory Type

`number`

#### operatingsystem_id

A reference to the [operating system](#operatingsystems)

`operatingsystem_id`

- is optional
- type: `string`
- default: `"Id of the first operatingsystem from operatingsystems"`

##### operatingsystem_id Type

`string`

#### puppet_env

Environment global id from Foreman

`puppet_env`

- is **required**
- type: `string`

##### puppet_env Type

`string`

##### puppet_env Example

```json
MDE6RW52aXJvbm1lbnQtMQ==
```

#### puppet_master_id

A reference to the [puppet master](#puppet_ca_proxy_id)

`puppet_master_id`

- is optional
- type: `string`
- default: `"It will be taken from the attributes of the default location"`

##### puppet_master_id Type

`string`

#### puppetclass_ids

Puppetclass global ids from Foreman

`puppetclass_ids`

- is **required**
- type: `string[]`

##### puppetclass_ids Type

Array type: `string[]`

All items must be of the type: `string`

##### puppetclass_ids Example

```json
MDE6UHVwcGV0Y2xhc3MtMQ==
```

#### size

Disk size

`size`

- is optional
- type: `number`
- default: `50`

##### size Type

`number`

#### host_creation_duration

`host_creation_duration`

- is optional
- type: `number`
- default: `10000`

##### host_creation_duration Type

`number`

#### mark_step_cpu

The step that the CPUs label should appear on the form

`mark_step_cpu`

- is optional
- type: `number`
- default: `1`

##### mark_step_cpu Type

`number`

#### mark_step_memory

The step that the memory size label should appear on the form

`mark_step_memory`

- is optional
- type: `number`
- default: `16`

##### mark_step_memory Type

`number`

#### mark_step_size

The step that the disk size label should appear on the form

`mark_step_size`

- is optional
- type: `number`
- default: `300`

##### mark_step_size Type

`number`

#### max_cpu_value

The maximum number of CPUs that can be assigned to the host

`max_cpu_value`

- is optional
- type: `number`
- default: `8`

##### max_cpu_value Type

`number`

#### max_host_count_value

`max_host_count_value`

- is optional
- type: `number`
- default: `10`

##### max_host_count_value Type

`number`

#### max_memory_value

The maximum memory that can be assigned to the host

`max_memory_value`

- is optional
- type: `number`
- default: `64`

##### max_memory_value Type

`number`

#### max_size_value

The maximum disk size that can be assigned to the host

`max_size_value`

- is optional
- type: `number`
- default: `900`

##### max_size_value Type

`number`

#### min_cpu_value

The minimum number of CPUs that can be assigned to the host

`min_cpu_value`

- is optional
- type: `number`
- default: `1`

##### min_cpu_value Type

`number`

#### min_memory_value

The minimum memory that can be assigned to the host

`min_memory_value`

- is optional
- type: `number`
- default: `4`

##### min_memory_value Type

`number`

#### min_size_value

The minimum disk size that can be assigned to the host

`min_size_value`

- is optional
- type: `number`
- default: `50`

##### min_size_value Type

`number`

#### preset_resources

A set of attributes that can be assigned to a host with one click on a form element

`preset_resources`

- is optional
- type: `object[]`
- default: `[]`

##### preset_resources Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property             | Type   | Required     |
| -------------------- | ------ | ------------ |
| `cpu`                | number | **Required** |
| `memory`             | number | **Required** |
| `operatingsystem_id` | string | **Required** |
| `size`               | number | **Required** |

#### cpu

Number of CPUs

`cpu`

- is **required**
- type: `number`

##### cpu Type

`number`

#### memory

Memory size

`memory`

- is **required**
- type: `number`

##### memory Type

`number`

#### operatingsystem_id

A reference to the [operating system](#operatingsystems)

`operatingsystem_id`

- is **required**
- type: `string`

##### operatingsystem_id Type

`string`

#### size

Disk size

`size`

- is **required**
- type: `number`

##### size Type

`number`

#### step_cpu

The step of the CPUs number on the form

`step_cpu`

- is optional
- type: `number`
- default: `1`

##### step_cpu Type

`number`

#### step_memory

The step of the memory size on the form

`step_memory`

- is optional
- type: `number`
- default: `4`

##### step_memory Type

`number`

#### step_size

The step of the disk size on the form

`step_size`

- is optional
- type: `number`
- default: `50`

##### step_size Type

`number`

## locations

`locations`

- is **required**
- type: `object[]`
- at least `1` items in the array
- defined in this schema

### locations Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property             | Type   | Required     |
| -------------------- | ------ | ------------ |
| `code`               | string | **Required** |
| `compute_attributes` | object | **Required** |
| `country`            | string | **Required** |
| `datastore_types`    | array  | **Required** |
| `domain_name`        | string | **Required** |
| `id`                 | string | **Required** |
| `label`              | object | **Required** |
| `location`           | string | **Required** |
| `name`               | string | **Required** |
| `relations`          | object | **Required** |

#### code

A unique code that is used to identify the location

`code`

- is **required**
- type: `string`

##### code Type

`string`

#### compute_attributes

`compute_attributes`

- is **required**
- type: `object`

##### compute_attributes Type

`object` with following properties:

| Property      | Type   | Required     |
| ------------- | ------ | ------------ |
| `path_prefix` | string | **Required** |

#### path_prefix

A owner name will be added at the end of this value

`path_prefix`

- is **required**
- type: `string`

##### path_prefix Type

`string`

##### path_prefix Example

```json
/Datencenter/Location/vm/Linux/
```

#### country

Country code

`country`

- is **required**
- type: `string`

##### country Type

`string`

##### country Examples

```json
pl
```

```json
de
```

#### datastore_types

`datastore_types`

- is **required**
- type: `object[]`\* at least `1` items in the array

##### datastore_types Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property   | Type   | Required     |
| ---------- | ------ | ------------ |
| `id`       | string | **Required** |
| `name`     | string | **Required** |
| `template` | string | **Required** |

#### id

`id`

- is **required**
- type: `string`

##### id Type

`string`

##### id Example

```json
Mirror
```

#### name

`name`

- is **required**
- type: `string`

##### name Type

`string`

##### name Example

```json
Mirror
```

#### template

`#DC` will be replaced with datastore datacenter number (1 or 2) and will be send in the request as `storage_pod`
attribute

`template`

- is **required**
- type: `string`

##### template Type

`string`

##### template Example

```json
PL-#DC#-LAN
```

#### domain_name

Domain name

`domain_name`

- is **required**
- type: `string`

##### domain_name Type

`string`

##### domain_name Example

```json
example.com
```

#### id

Location global id from Foreman

`id`

- is **required**
- type: `string`

##### id Type

`string`

#### label

These values will be visible on the host creation form

`label`

- is **required**
- type: `object`

##### label Type

`object` with following properties:

| Property              | Type    | Required     |
| --------------------- | ------- | ------------ |
| `explanation`         | string  | Optional     |
| `location`            | string  | **Required** |
| `reduced_performance` | boolean | Optional     |

#### explanation

`explanation`

- is optional
- type: `string`

##### explanation Type

`string`

#### location

`location`

- is **required**
- type: `string`

##### location Type

`string`

#### reduced_performance

`reduced_performance`

- is optional
- type: `boolean`

##### reduced_performance Type

`boolean`

#### location

This value will be used in the search query to filter subnets

`location`

- is **required**
- type: `string`

##### location Type

`string`

#### name

Location name

`name`

- is **required**
- type: `string`

##### name Type

`string`

#### relations

`relations`

- is **required**
- type: `object`

##### relations Type

`object` with following properties:

| Property              | Type   | Required     |
| --------------------- | ------ | ------------ |
| `cluster`             | string | **Required** |
| `compute_resource_id` | string | **Required** |
| `media`               | array  | **Required** |
| `puppet_ca_proxy_id`  | string | **Required** |

#### cluster

Cluster name

`cluster`

- is **required**
- type: `string`

##### cluster Type

`string`

##### cluster Example

```json
CLUSTER
```

#### compute_resource_id

ComputeResource global id from Foreman

`compute_resource_id`

- is **required**
- type: `string`

##### compute_resource_id Type

`string`

##### compute_resource_id Example

```json
MDE6Q29tcHV0ZVJlc291cmNlLTI=
```

#### media

`media`

- is **required**
- type: `object[]`\* at least `1` items in the array

##### media Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property             | Type   | Required     |
| -------------------- | ------ | ------------ |
| `id`                 | string | **Required** |
| `operatingsystem_id` | string | **Required** |

#### id

Medium global id from Foreman

`id`

- is **required**
- type: `string`

##### id Type

`string`

##### id Example

```json
MDE6TWVkaXVtLTEw
```

#### operatingsystem_id

A reference to the [operating system](#operatingsystems)

`operatingsystem_id`

- is **required**
- type: `string`

##### operatingsystem_id Type

`string`

#### puppet_ca_proxy_id

SmartProxy global id from Foreman

`puppet_ca_proxy_id`

- is **required**
- type: `string`

##### puppet_ca_proxy_id Type

`string`

##### puppet_ca_proxy_id Example

```json
MDE6Q29tcHV0ZVJlc291cmNlLTI=
```

## operatingsystems

`operatingsystems`

- is **required**
- type: `object[]`
- at least `1` items in the array
- defined in this schema

### operatingsystems Type

Array type: `object[]`

All items must be of the type: `object` with following properties:

| Property    | Type   | Required     |
| ----------- | ------ | ------------ |
| `id`        | string | **Required** |
| `name`      | string | **Required** |
| `relations` | object | **Required** |

#### id

Operatingsystem global id from Foreman

`id`

- is **required**
- type: `string`

##### id Type

`string`

##### id Example

```json
MDE6T3BlcmF0aW5nc3lzdGVtLTE=
```

#### name

Operating system name

`name`

- is **required**
- type: `string`

##### name Type

`string`

##### name Example

```json
RedHat 7.6
```

#### relations

`relations`

- is **required**
- type: `object`

##### relations Type

`object` with following properties:

| Property                   | Type   | Required     |
| -------------------------- | ------ | ------------ |
| `guest_operatingsystem_id` | string | **Required** |
| `ptable_id`                | string | **Required** |

#### guest_operatingsystem_id

`guest_operatingsystem_id`

- is **required**
- type: `string`

##### guest_operatingsystem_id Type

`string`

##### guest_operatingsystem_id Example

```json
rhel7_64Guest
```

#### ptable_id

Ptable global id from Foreman

`ptable_id`

- is **required**
- type: `string`

##### ptable_id Type

`string`

##### ptable_id Example

```json
MDE6UHRhYmxlLTEwNw==
```
