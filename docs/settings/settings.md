# base Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json](../../src/settings/settings.schema.json "open original schema") |

## base Type

`object` ([base](settings.md))

# base Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [form_settings](#form_settings)       | `object` | Required | cannot be null | [base](settings-properties-form_settings.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings")       |
| [default_configs](#default_configs)   | `object` | Required | cannot be null | [base](settings-properties-default_configs.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs")   |
| [locations](#locations)               | `array`  | Required | cannot be null | [base](settings-properties-locations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations")               |
| [operatingsystems](#operatingsystems) | `array`  | Required | cannot be null | [base](settings-properties-operatingsystems.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems") |
| [app_tiers](#app_tiers)               | `array`  | Required | cannot be null | [base](settings-properties-app_tiers.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers")               |
| [fact_names](#fact_names)             | `object` | Optional | cannot be null | [base](settings-properties-fact_names.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names")             |

## form_settings




`form_settings`

-   is required
-   Type: `object` ([form_settings](settings-properties-form_settings.md))
-   cannot be null
-   defined in: [base](settings-properties-form_settings.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings")

### form_settings Type

`object` ([form_settings](settings-properties-form_settings.md))

## default_configs




`default_configs`

-   is required
-   Type: `object` ([default_configs](settings-properties-default_configs.md))
-   cannot be null
-   defined in: [base](settings-properties-default_configs.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs")

### default_configs Type

`object` ([default_configs](settings-properties-default_configs.md))

## locations




`locations`

-   is required
-   Type: `object[]` ([items](settings-properties-locations-items.md))
-   cannot be null
-   defined in: [base](settings-properties-locations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations")

### locations Type

`object[]` ([items](settings-properties-locations-items.md))

### locations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## operatingsystems




`operatingsystems`

-   is required
-   Type: `object[]` ([items](settings-properties-operatingsystems-items.md))
-   cannot be null
-   defined in: [base](settings-properties-operatingsystems.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems")

### operatingsystems Type

`object[]` ([items](settings-properties-operatingsystems-items.md))

### operatingsystems Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## app_tiers




`app_tiers`

-   is required
-   Type: `object[]` ([items](settings-properties-app_tiers-items.md))
-   cannot be null
-   defined in: [base](settings-properties-app_tiers.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers")

### app_tiers Type

`object[]` ([items](settings-properties-app_tiers-items.md))

### app_tiers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## fact_names




`fact_names`

-   is optional
-   Type: `object` ([fact_names](settings-properties-fact_names.md))
-   cannot be null
-   defined in: [base](settings-properties-fact_names.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names")

### fact_names Type

`object` ([fact_names](settings-properties-fact_names.md))
