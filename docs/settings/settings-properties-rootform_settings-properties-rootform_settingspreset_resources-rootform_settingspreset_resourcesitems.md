# root.form\_settings.preset\_resources.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.form\_settings.preset\_resources.items](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems.md))

# items Properties

| Property                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                   |
| :----------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu)                                | `number` | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/cpu")                               |
| [memory](#memory)                          | `number` | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/memory")                         |
| [size](#size)                              | `number` | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/size")                             |
| [operatingsystem\_id](#operatingsystem_id) | `string` | Required | cannot be null | [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-operatingsystem_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/operatingsystem_id") |

## cpu

Number of CPUs

`cpu`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/cpu")

### cpu Type

`number`

## memory

Memory size

`memory`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/memory")

### memory Type

`number`

## size

Disk size

`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-size.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/size")

### size Type

`number`

## operatingsystem\_id

A reference to the [operating system](#operatingsystems)

`operatingsystem_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootform_settings-properties-rootform_settingspreset_resources-rootform_settingspreset_resourcesitems-properties-operatingsystem_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings/properties/preset_resources/items/properties/operatingsystem_id")

### operatingsystem\_id Type

`string`
