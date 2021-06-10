# form_settings Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## form_settings Type

`object` ([form_settings](settings-properties-form_settings.md))

# form_settings Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                      |
| :------------------------------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [max_host_count_value](#max_host_count_value)     | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-max_host_count_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_host_count_value")     |
| [host_creation_duration](#host_creation_duration) | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-host_creation_duration.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/host_creation_duration") |
| [min_cpu_value](#min_cpu_value)                   | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-min_cpu_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_cpu_value")                   |
| [max_cpu_value](#max_cpu_value)                   | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-max_cpu_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_cpu_value")                   |
| [step_cpu](#step_cpu)                             | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-step_cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_cpu")                             |
| [mark_step_cpu](#mark_step_cpu)                   | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-mark_step_cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_cpu")                   |
| [min_memory_value](#min_memory_value)             | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-min_memory_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_memory_value")             |
| [max_memory_value](#max_memory_value)             | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-max_memory_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_memory_value")             |
| [step_memory](#step_memory)                       | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-step_memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_memory")                       |
| [mark_step_memory](#mark_step_memory)             | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-mark_step_memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_memory")             |
| [min_size_value](#min_size_value)                 | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-min_size_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_size_value")                 |
| [max_size_value](#max_size_value)                 | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-max_size_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_size_value")                 |
| [step_size](#step_size)                           | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-step_size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_size")                           |
| [mark_step_size](#mark_step_size)                 | `number` | Optional | cannot be null | [base](settings-properties-form_settings-properties-mark_step_size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_size")                 |
| [preset_resources](#preset_resources)             | `array`  | Optional | cannot be null | [base](settings-properties-form_settings-properties-preset_resources.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources")             |
| [default_values](#default_values)                 | `object` | Required | cannot be null | [base](settings-properties-form_settings-properties-default_values.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values")                 |

## max_host_count_value




`max_host_count_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-max_host_count_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_host_count_value")

### max_host_count_value Type

`number`

### max_host_count_value Default Value

The default value is:

```json
10
```

## host_creation_duration




`host_creation_duration`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-host_creation_duration.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/host_creation_duration")

### host_creation_duration Type

`number`

### host_creation_duration Default Value

The default value is:

```json
10000
```

## min_cpu_value

The minimum number of CPUs that can be assigned to the host


`min_cpu_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-min_cpu_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_cpu_value")

### min_cpu_value Type

`number`

### min_cpu_value Default Value

The default value is:

```json
1
```

## max_cpu_value

The maximum number of CPUs that can be assigned to the host


`max_cpu_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-max_cpu_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_cpu_value")

### max_cpu_value Type

`number`

### max_cpu_value Default Value

The default value is:

```json
8
```

## step_cpu

The step of the CPUs number on the form


`step_cpu`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-step_cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_cpu")

### step_cpu Type

`number`

### step_cpu Default Value

The default value is:

```json
1
```

## mark_step_cpu

The step that the CPUs label should appear on the form


`mark_step_cpu`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-mark_step_cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_cpu")

### mark_step_cpu Type

`number`

### mark_step_cpu Default Value

The default value is:

```json
1
```

## min_memory_value

The minimum memory that can be assigned to the host


`min_memory_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-min_memory_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_memory_value")

### min_memory_value Type

`number`

### min_memory_value Default Value

The default value is:

```json
4
```

## max_memory_value

The maximum memory that can be assigned to the host


`max_memory_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-max_memory_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_memory_value")

### max_memory_value Type

`number`

### max_memory_value Default Value

The default value is:

```json
64
```

## step_memory

The step of the memory size on the form


`step_memory`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-step_memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_memory")

### step_memory Type

`number`

### step_memory Default Value

The default value is:

```json
4
```

## mark_step_memory

The step that the memory size label should appear on the form


`mark_step_memory`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-mark_step_memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_memory")

### mark_step_memory Type

`number`

### mark_step_memory Default Value

The default value is:

```json
16
```

## min_size_value

The minimum disk size that can be assigned to the host


`min_size_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-min_size_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/min_size_value")

### min_size_value Type

`number`

### min_size_value Default Value

The default value is:

```json
50
```

## max_size_value

The maximum disk size that can be assigned to the host


`max_size_value`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-max_size_value.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/max_size_value")

### max_size_value Type

`number`

### max_size_value Default Value

The default value is:

```json
900
```

## step_size

The step of the disk size on the form


`step_size`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-step_size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/step_size")

### step_size Type

`number`

### step_size Default Value

The default value is:

```json
50
```

## mark_step_size

The step that the disk size label should appear on the form


`mark_step_size`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-mark_step_size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/mark_step_size")

### mark_step_size Type

`number`

### mark_step_size Default Value

The default value is:

```json
300
```

## preset_resources

A set of attributes that can be assigned to a host with one click on a form element


`preset_resources`

-   is optional
-   Type: `object[]` ([preset_resources](settings-properties-form_settings-properties-preset_resources-preset_resources.md))
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-preset_resources.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources")

### preset_resources Type

`object[]` ([preset_resources](settings-properties-form_settings-properties-preset_resources-preset_resources.md))

### preset_resources Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### preset_resources Default Value

The default value is:

```json
[]
```

## default_values




`default_values`

-   is required
-   Type: `object` ([default_values](settings-properties-form_settings-properties-default_values.md))
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-default_values.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/default_values")

### default_values Type

`object` ([default_values](settings-properties-form_settings-properties-default_values.md))
