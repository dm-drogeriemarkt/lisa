# root Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json](../../src/settings/settings.schema.json "open original schema") |

## root Type

`object` ([root](settings.md))

# root Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :------------------------------------ | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [form_settings](#form_settings)       | `object` | Required | cannot be null | [root](settings-properties-rootform_settings.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings")       |
| [default_configs](#default_configs)   | `object` | Required | cannot be null | [root](settings-properties-rootdefault_configs.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs")   |
| [locations](#locations)               | `array`  | Required | cannot be null | [root](settings-properties-rootlocations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations")               |
| [operatingsystems](#operatingsystems) | `array`  | Required | cannot be null | [root](settings-properties-rootoperatingsystems.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems") |
| [app_tiers](#app_tiers)               | `array`  | Required | cannot be null | [root](settings-properties-rootapp_tiers.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers")               |
| [fact_names](#fact_names)             | `object` | Optional | cannot be null | [root](settings-properties-rootfact_names.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names")             |

## form_settings




`form_settings`

-   is required
-   Type: `object` ([root.form_settings](settings-properties-rootform_settings.md))
-   cannot be null
-   defined in: [root](settings-properties-rootform_settings.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings")

### form_settings Type

`object` ([root.form_settings](settings-properties-rootform_settings.md))

## default_configs




`default_configs`

-   is required
-   Type: `object` ([root.default_configs](settings-properties-rootdefault_configs.md))
-   cannot be null
-   defined in: [root](settings-properties-rootdefault_configs.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs")

### default_configs Type

`object` ([root.default_configs](settings-properties-rootdefault_configs.md))

## locations




`locations`

-   is required
-   Type: `object[]` ([root.locations.items](settings-properties-rootlocations-rootlocationsitems.md))
-   cannot be null
-   defined in: [root](settings-properties-rootlocations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations")

### locations Type

`object[]` ([root.locations.items](settings-properties-rootlocations-rootlocationsitems.md))

### locations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## operatingsystems




`operatingsystems`

-   is required
-   Type: `object[]` ([root.operatingsystems.items](settings-properties-rootoperatingsystems-rootoperatingsystemsitems.md))
-   cannot be null
-   defined in: [root](settings-properties-rootoperatingsystems.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems")

### operatingsystems Type

`object[]` ([root.operatingsystems.items](settings-properties-rootoperatingsystems-rootoperatingsystemsitems.md))

### operatingsystems Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## app_tiers




`app_tiers`

-   is required
-   Type: `object[]` ([root.app_tiers.items](settings-properties-rootapp_tiers-rootapp_tiersitems.md))
-   cannot be null
-   defined in: [root](settings-properties-rootapp_tiers.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers")

### app_tiers Type

`object[]` ([root.app_tiers.items](settings-properties-rootapp_tiers-rootapp_tiersitems.md))

### app_tiers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## fact_names




`fact_names`

-   is optional
-   Type: `object` ([root.fact_names](settings-properties-rootfact_names.md))
-   cannot be null
-   defined in: [root](settings-properties-rootfact_names.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names")

### fact_names Type

`object` ([root.fact_names](settings-properties-rootfact_names.md))
