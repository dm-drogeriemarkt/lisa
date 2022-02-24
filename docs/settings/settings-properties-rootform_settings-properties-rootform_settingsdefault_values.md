# root.form\_settings.default\_values Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## default\_values Type

`object` ([root.form\_settings.default\_values](settings-properties-rootform_settings-properties-rootform_settingsdefault_values.md))

# default\_values Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                           |
| :-------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu)                                   | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/cpu")                                                        |
| [memory](#memory)                             | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/memory")                                                  |
| [size](#size)                                 | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/size")                                                      |
| [operatingsystem\_id](#operatingsystem_id)    | `string` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-operatingsystem_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/operatingsystem_id")                          |
| [location\_code](#location_code)              | `string` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-location_code.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/location_code")                                    |
| [compute\_resource\_id](#compute_resource_id) | `string` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-compute_resource_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/compute_resource_id")                        |
| [puppet\_master\_id](#puppet_master_id)       | `string` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-puppet_master_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_master_id")                              |
| [datastore\_type\_id](#datastore_type_id)     | `string` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-datastore_type_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/datastore_type_id")                            |
| [puppet\_env\_id](#puppet_env_id)             | `string` | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-puppet_env_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_env_id")                                    |
| [puppetclass\_ids](#puppetclass_ids)          | `array`  | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-rootform_settingsdefault_valuespuppetclass_ids.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppetclass_ids") |
| [app\_tier\_name](#app_tier_name)             | `string` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-app_tier_name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/app_tier_name")                                    |

## cpu

Number of CPUs

`cpu`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/cpu")

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

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/memory")

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

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/size")

### size Type

`number`

### size Default Value

The default value is:

```json
50
```

## operatingsystem\_id

A reference to the [operating system](#operatingsystems)

`operatingsystem_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-operatingsystem_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/operatingsystem_id")

### operatingsystem\_id Type

`string`

### operatingsystem\_id Default Value

The default value is:

```json
"Id of the first operatingsystem from operatingsystems"
```

## location\_code

A reference to the [location](#locations-1)

`location_code`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-location_code.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/location_code")

### location\_code Type

`string`

### location\_code Default Value

The default value is:

```json
"Code of the first location from locations"
```

## compute\_resource\_id

A reference to the [compute resource](#compute_resource_id-1)

`compute_resource_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-compute_resource_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/compute_resource_id")

### compute\_resource\_id Type

`string`

### compute\_resource\_id Default Value

The default value is:

```json
"It will be taken from the attributes of the default location"
```

## puppet\_master\_id

A reference to the [puppet master](#puppet_ca_proxy_id)

`puppet_master_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-puppet_master_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_master_id")

### puppet\_master\_id Type

`string`

### puppet\_master\_id Default Value

The default value is:

```json
"It will be taken from the attributes of the default location"
```

## datastore\_type\_id

A reference to the [datastore type](#datastore_types)

`datastore_type_id`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-datastore_type_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/datastore_type_id")

### datastore\_type\_id Type

`string`

### datastore\_type\_id Default Value

The default value is:

```json
"It will be taken from the attributes of the default location"
```

## puppet\_env\_id

Environment global id from Foreman

`puppet_env_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-puppet_env_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppet_env_id")

### puppet\_env\_id Type

`string`

### puppet\_env\_id Examples

```json
"MDE6RW52aXJvbm1lbnQtMQ=="
```

## puppetclass\_ids

Puppetclass global ids from Foreman

`puppetclass_ids`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-rootform_settingsdefault_valuespuppetclass_ids.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/puppetclass_ids")

### puppetclass\_ids Type

`string[]`

### puppetclass\_ids Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### puppetclass\_ids Examples

```json
"MDE6UHVwcGV0Y2xhc3MtMQ=="
```

## app\_tier\_name

App tier name

`app_tier_name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values-properties-app_tier_name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values/properties/app_tier_name")

### app\_tier\_name Type

`string`

### app\_tier\_name Default Value

The default value is:

```json
"Name of the first app tier from app tiers"
```
