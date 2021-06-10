# preset_resources Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([preset_resources](settings-properties-form_settings-properties-preset_resources-preset_resources.md))

# preset_resources Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                             |
| :---------------------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu)                               | `number` | Required | cannot be null | [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/cpu")                               |
| [memory](#memory)                         | `number` | Required | cannot be null | [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/memory")                         |
| [size](#size)                             | `number` | Required | cannot be null | [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/size")                             |
| [operatingsystem_id](#operatingsystem_id) | `string` | Required | cannot be null | [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/operatingsystem_id") |

## cpu

Number of CPUs


`cpu`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-cpu.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/cpu")

### cpu Type

`number`

## memory

Memory size


`memory`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-memory.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/memory")

### memory Type

`number`

## size

Disk size


`size`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-size.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/size")

### size Type

`number`

## operatingsystem_id

A reference to the [operating system](#operatingsystems)


`operatingsystem_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-form_settings-properties-preset_resources-preset_resources-properties-operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/operatingsystem_id")

### operatingsystem_id Type

`string`
