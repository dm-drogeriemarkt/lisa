# root.fact_names Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json*](../../src/settings/settings.schema.json "open original schema") |

## fact_names Type

`object` ([root.fact_names](settings-properties-rootfact_names.md))

# fact_names Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu)       | `string` | Optional | cannot be null | [root](settings-properties-rootfact_names-properties-cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names/properties/cpu")       |
| [memory](#memory) | `string` | Optional | cannot be null | [root](settings-properties-rootfact_names-properties-memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names/properties/memory") |
| [disk](#disk)     | `string` | Optional | cannot be null | [root](settings-properties-rootfact_names-properties-disk.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names/properties/disk")     |

## cpu



`cpu`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootfact_names-properties-cpu.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names/properties/cpu")

### cpu Type

`string`

### cpu Default Value

The default value is:

```json
"processors::count"
```

## memory



`memory`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootfact_names-properties-memory.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names/properties/memory")

### memory Type

`string`

### memory Default Value

The default value is:

```json
"memorysize_mb"
```

## disk



`disk`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootfact_names-properties-disk.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names/properties/disk")

### disk Type

`string`

### disk Default Value

The default value is:

```json
"blockdevice_sda_size"
```
