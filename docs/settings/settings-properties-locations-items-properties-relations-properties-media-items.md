# items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([items](settings-properties-locations-items-properties-relations-properties-media-items.md))

# items Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                          |
| :---------------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [id](#id)                                 | `string` | Required | cannot be null | [base](settings-properties-locations-items-properties-relations-properties-media-items-properties-id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media/items/properties/id")                                 |
| [operatingsystem_id](#operatingsystem_id) | `string` | Required | cannot be null | [base](settings-properties-locations-items-properties-relations-properties-media-items-properties-operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media/items/properties/operatingsystem_id") |

## id

Medium global id from Foreman


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-locations-items-properties-relations-properties-media-items-properties-id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media/items/properties/id")

### id Type

`string`

### id Examples

```json
"MDE6TWVkaXVtLTEw"
```

## operatingsystem_id

A reference to the [operating system](#operatingsystems)


`operatingsystem_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-locations-items-properties-relations-properties-media-items-properties-operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media/items/properties/operatingsystem_id")

### operatingsystem_id Type

`string`
