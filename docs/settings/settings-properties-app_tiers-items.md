# items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([items](settings-properties-app_tiers-items.md))

# items Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :---------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)           | `string` | Required | cannot be null | [base](settings-properties-app_tiers-items-properties-name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/name")           |
| [relations](#relations) | `object` | Required | cannot be null | [base](settings-properties-app_tiers-items-properties-relations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations") |

## name

App tier name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-app_tiers-items-properties-name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/name")

### name Type

`string`

### name Examples

```json
"development"
```

## relations




`relations`

-   is required
-   Type: `object` ([relations](settings-properties-app_tiers-items-properties-relations.md))
-   cannot be null
-   defined in: [base](settings-properties-app_tiers-items-properties-relations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations")

### relations Type

`object` ([relations](settings-properties-app_tiers-items-properties-relations.md))
