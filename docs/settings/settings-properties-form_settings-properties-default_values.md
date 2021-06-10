# default_values Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## default_values Type

`object` ([default_values](settings-properties-form_settings-properties-default_values.md))

# default_values Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                    |
| :------------------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu)                                 | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/cpu")                                 |
| [memory](#memory)                           | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/memory")                           |
| [size](#size)                               | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/size")                               |
| [operatingsystem_id](#operatingsystem_id)   | `string` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/operatingsystem_id")   |
| [location_code](#location_code)             | `string` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-location_code.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/location_code")             |
| [compute_resource_id](#compute_resource_id) | `string` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-compute_resource_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/compute_resource_id") |
| [puppet_master_id](#puppet_master_id)       | `string` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-puppet_master_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_master_id")       |
| [datastore_type_id](#datastore_type_id)     | `string` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-datastore_type_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/datastore_type_id")     |
| [puppet_env_id](#puppet_env_id)             | `string` | Required | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-puppet_env_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_env_id")             |
| [puppetclass_ids](#puppetclass_ids)         | `array`  | Required | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-puppetclass_ids.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppetclass_ids")         |
| [app_tier_name](#app_tier_name)             | `string` | Optional | cannot be null | [base](settings-properties-form_settings-properties-default_values-properties-app_tier_name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/app_tier_name")             |

## cpu

Number of CPUs


`cpu`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/cpu")

### cpu Type

`number`

### cpu Default Value

The default value is:

```json
1
```

## memory

Memory size


`memory`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/memory")

### memory Type

`number`

### memory Default Value

The default value is:

```json
4
```

## size

Disk size


`size`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/size")

### size Type

`number`

### size Default Value

The default value is:

```json
50
```

## operatingsystem_id

A reference to the [operating system](#operatingsystems)


`operatingsystem_id`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/operatingsystem_id")

### operatingsystem_id Type

`string`

### operatingsystem_id Default Value

The default value is:

```json
"Id of the first operatingsystem from operatingsystems"
```

## location_code

A reference to the [location](#locations-1)


`location_code`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-location_code.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/location_code")

### location_code Type

`string`

### location_code Default Value

The default value is:

```json
"Code of the first location from locations"
```

## compute_resource_id

A reference to the [compute resource](#compute_resource_id-1)


`compute_resource_id`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-compute_resource_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/compute_resource_id")

### compute_resource_id Type

`string`

### compute_resource_id Default Value

The default value is:

```json
"It will be taken from the attributes of the default location"
```

## puppet_master_id

A reference to the [puppet master](#puppet_ca_proxy_id)


`puppet_master_id`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-puppet_master_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_master_id")

### puppet_master_id Type

`string`

### puppet_master_id Default Value

The default value is:

```json
"It will be taken from the attributes of the default location"
```

## datastore_type_id

A reference to the [datastore type](#datastore_types)


`datastore_type_id`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-datastore_type_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/datastore_type_id")

### datastore_type_id Type

`string`

### datastore_type_id Default Value

The default value is:

```json
"It will be taken from the attributes of the default location"
```

## puppet_env_id

Environment global id from Foreman


`puppet_env_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-puppet_env_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_env_id")

### puppet_env_id Type

`string`

### puppet_env_id Examples

```json
"MDE6RW52aXJvbm1lbnQtMQ=="
```

## puppetclass_ids

Puppetclass global ids from Foreman


`puppetclass_ids`

-   is required
-   Type: `string[]`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-puppetclass_ids.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppetclass_ids")

### puppetclass_ids Type

`string[]`

### puppetclass_ids Constraints

**minimum**: the value of this number must greater than or equal to: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### puppetclass_ids Examples

```json
"MDE6UHVwcGV0Y2xhc3MtMQ=="
```

## app_tier_name

App tier name


`app_tier_name`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values-properties-app_tier_name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/app_tier_name")

### app_tier_name Type

`string`

### app_tier_name Default Value

The default value is:

```json
"Name of the first app tier from app tiers"
```
