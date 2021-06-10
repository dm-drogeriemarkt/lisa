# relations Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## relations Type

`object` ([relations](settings-properties-app_tiers-items-properties-relations.md))

# relations Properties

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                          |
| :---------------------- | ------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [locations](#locations) | `array` | Required | cannot be null | [base](settings-properties-app_tiers-items-properties-relations-properties-locations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations") |

## locations




`locations`

-   is required
-   Type: `object[]` ([items](settings-properties-app_tiers-items-properties-relations-properties-locations-items.md))
-   cannot be null
-   defined in: [base](settings-properties-app_tiers-items-properties-relations-properties-locations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations")

### locations Type

`object[]` ([items](settings-properties-app_tiers-items-properties-relations-properties-locations-items.md))

### locations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
