# items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([items](settings-properties-operatingsystems-items.md))

# items Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                              |
| :---------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)               | `string` | Required | cannot be null | [base](settings-properties-operatingsystems-items-properties-id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/id")               |
| [name](#name)           | `string` | Required | cannot be null | [base](settings-properties-operatingsystems-items-properties-name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/name")           |
| [relations](#relations) | `object` | Required | cannot be null | [base](settings-properties-operatingsystems-items-properties-relations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations") |

## id

Operatingsystem global id from Foreman


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-operatingsystems-items-properties-id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/id")

### id Type

`string`

### id Examples

```json
"MDE6T3BlcmF0aW5nc3lzdGVtLTE="
```

## name

Operating system name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-operatingsystems-items-properties-name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/name")

### name Type

`string`

### name Examples

```json
"RedHat 7.6"
```

## relations




`relations`

-   is required
-   Type: `object` ([relations](settings-properties-operatingsystems-items-properties-relations.md))
-   cannot be null
-   defined in: [base](settings-properties-operatingsystems-items-properties-relations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations")

### relations Type

`object` ([relations](settings-properties-operatingsystems-items-properties-relations.md))
