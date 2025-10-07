# root.form\_settings Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## form\_settings Type

`object` ([root.form\_settings](settings-properties-rootform_settings.md))

# form\_settings Properties

| Property                                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                          |
| :-------------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [max\_host\_count\_value](#max_host_count_value)    | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-max_host_count_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_host_count_value")          |
| [host\_creation\_duration](#host_creation_duration) | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-host_creation_duration.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/host_creation_duration")      |
| [min\_cpu\_value](#min_cpu_value)                   | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-min_cpu_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_cpu_value")                        |
| [max\_cpu\_value](#max_cpu_value)                   | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-max_cpu_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_cpu_value")                        |
| [step\_cpu](#step_cpu)                              | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-step_cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_cpu")                                  |
| [mark\_step\_cpu](#mark_step_cpu)                   | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-mark_step_cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_cpu")                        |
| [min\_memory\_value](#min_memory_value)             | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-min_memory_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_memory_value")                  |
| [max\_memory\_value](#max_memory_value)             | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-max_memory_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_memory_value")                  |
| [step\_memory](#step_memory)                        | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-step_memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_memory")                            |
| [mark\_step\_memory](#mark_step_memory)             | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-mark_step_memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_memory")                  |
| [min\_size\_value](#min_size_value)                 | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-min_size_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_size_value")                      |
| [max\_size\_value](#max_size_value)                 | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-max_size_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_size_value")                      |
| [step\_size](#step_size)                            | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-step_size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_size")                                |
| [mark\_step\_size](#mark_step_size)                 | `number` | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-mark_step_size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_size")                      |
| [preset\_resources](#preset_resources)              | `array`  | Optional | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources") |
| [default\_values](#default_values)                  | `object` | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values")     |

## max\_host\_count\_value



`max_host_count_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-max_host_count_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_host_count_value")

### max\_host\_count\_value Type

`number`

### max\_host\_count\_value Default Value

The default value is:

```json
10
```

## host\_creation\_duration



`host_creation_duration`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-host_creation_duration.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/host_creation_duration")

### host\_creation\_duration Type

`number`

### host\_creation\_duration Default Value

The default value is:

```json
10000
```

## min\_cpu\_value

The minimum number of CPUs that can be assigned to the host

`min_cpu_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-min_cpu_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_cpu_value")

### min\_cpu\_value Type

`number`

### min\_cpu\_value Default Value

The default value is:

```json
1
```

## max\_cpu\_value

The maximum number of CPUs that can be assigned to the host

`max_cpu_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-max_cpu_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_cpu_value")

### max\_cpu\_value Type

`number`

### max\_cpu\_value Default Value

The default value is:

```json
8
```

## step\_cpu

The step of the CPUs number on the form

`step_cpu`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-step_cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_cpu")

### step\_cpu Type

`number`

### step\_cpu Default Value

The default value is:

```json
1
```

## mark\_step\_cpu

The step that the CPUs label should appear on the form

`mark_step_cpu`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-mark_step_cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_cpu")

### mark\_step\_cpu Type

`number`

### mark\_step\_cpu Default Value

The default value is:

```json
1
```

## min\_memory\_value

The minimum memory that can be assigned to the host

`min_memory_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-min_memory_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_memory_value")

### min\_memory\_value Type

`number`

### min\_memory\_value Default Value

The default value is:

```json
4
```

## max\_memory\_value

The maximum memory that can be assigned to the host

`max_memory_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-max_memory_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_memory_value")

### max\_memory\_value Type

`number`

### max\_memory\_value Default Value

The default value is:

```json
64
```

## step\_memory

The step of the memory size on the form

`step_memory`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-step_memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_memory")

### step\_memory Type

`number`

### step\_memory Default Value

The default value is:

```json
4
```

## mark\_step\_memory

The step that the memory size label should appear on the form

`mark_step_memory`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-mark_step_memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_memory")

### mark\_step\_memory Type

`number`

### mark\_step\_memory Default Value

The default value is:

```json
16
```

## min\_size\_value

The minimum disk size that can be assigned to the host

`min_size_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-min_size_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_size_value")

### min\_size\_value Type

`number`

### min\_size\_value Default Value

The default value is:

```json
50
```

## max\_size\_value

The maximum disk size that can be assigned to the host

`max_size_value`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-max_size_value.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_size_value")

### max\_size\_value Type

`number`

### max\_size\_value Default Value

The default value is:

```json
900
```

## step\_size

The step of the disk size on the form

`step_size`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-step_size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_size")

### step\_size Type

`number`

### step\_size Default Value

The default value is:

```json
50
```

## mark\_step\_size

The step that the disk size label should appear on the form

`mark_step_size`

* is optional

* Type: `number`

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-mark_step_size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_size")

### mark\_step\_size Type

`number`

### mark\_step\_size Default Value

The default value is:

```json
300
```

## preset\_resources

A set of attributes that can be assigned to a host with one click on a form element

`preset_resources`

* is optional

* Type: `object[]` ([root.form\_settings.preset\_resources.items](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems.md))

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources")

### preset\_resources Type

`object[]` ([root.form\_settings.preset\_resources.items](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems.md))

### preset\_resources Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### preset\_resources Default Value

The default value is:

```json
[]
```

## default\_values



`default_values`

* is required

* Type: `object` ([root.form\_settings.default\_values](settings-properties-rootform_settings-properties-rootform_settingsdefault_values.md))

* cannot be null

* defined in: [root](settings-properties-rootform_settings-properties-rootform_settingsdefault_values.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values")

### default\_values Type

`object` ([root.form\_settings.default\_values](settings-properties-rootform_settings-properties-rootform_settingsdefault_values.md))
