# root.operatingsystems.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.operatingsystems.items](settings-properties-rootoperatingsystems-rootoperatingsystemsitems.md))

# items Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                          |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)               | `string` | Required | cannot be null | [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/id")                                        |
| [name](#name)           | `string` | Required | cannot be null | [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/name")                                    |
| [relations](#relations) | `object` | Required | cannot be null | [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations") |

## id

Operatingsystem global id from Foreman

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/id")

### id Type

`string`

### id Examples

```json
"MDE6T3BlcmF0aW5nc3lzdGVtLTE="
```

## name

Operating system name

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/name")

### name Type

`string`

### name Examples

```json
"RedHat 7.6"
```

## relations



`relations`

*   is required

*   Type: `object` ([root.operatingsystems.items.relations](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations.md))

*   cannot be null

*   defined in: [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations")

### relations Type

`object` ([root.operatingsystems.items.relations](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations.md))
