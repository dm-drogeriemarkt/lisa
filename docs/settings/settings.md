# root Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json](../../src/settings/settings.schema.json "open original schema") |

## root Type

`object` ([root](settings.md))

# root Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [auth](#auth)                         | `object` | Optional | cannot be null | [root](settings-properties-rootauth.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth")                         |
| [form\_settings](#form_settings)      | `object` | Required | cannot be null | [root](settings-properties-rootform_settings.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings")       |
| [default\_configs](#default_configs)  | `object` | Required | cannot be null | [root](settings-properties-rootdefault_configs.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs")   |
| [locations](#locations)               | `array`  | Required | cannot be null | [root](settings-properties-rootlocations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations")               |
| [operatingsystems](#operatingsystems) | `array`  | Required | cannot be null | [root](settings-properties-rootoperatingsystems.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems") |
| [app\_tiers](#app_tiers)              | `array`  | Required | cannot be null | [root](settings-properties-rootapp_tiers.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers")               |
| [fact\_names](#fact_names)            | `object` | Optional | cannot be null | [root](settings-properties-rootfact_names.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names")             |

## auth



`auth`

* is optional

* Type: `object` ([root.auth](settings-properties-rootauth.md))

* cannot be null

* defined in: [root](settings-properties-rootauth.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth")

### auth Type

`object` ([root.auth](settings-properties-rootauth.md))

## form\_settings



`form_settings`

* is required

* Type: `object` ([root.form\_settings](settings-properties-rootform_settings.md))

* cannot be null

* defined in: [root](settings-properties-rootform_settings.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/form_settings")

### form\_settings Type

`object` ([root.form\_settings](settings-properties-rootform_settings.md))

## default\_configs



`default_configs`

* is required

* Type: `object` ([root.default\_configs](settings-properties-rootdefault_configs.md))

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs")

### default\_configs Type

`object` ([root.default\_configs](settings-properties-rootdefault_configs.md))

## locations



`locations`

* is required

* Type: `object[]` ([root.locations.items](settings-properties-rootlocations-rootlocationsitems.md))

* cannot be null

* defined in: [root](settings-properties-rootlocations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations")

### locations Type

`object[]` ([root.locations.items](settings-properties-rootlocations-rootlocationsitems.md))

### locations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## operatingsystems



`operatingsystems`

* is required

* Type: `object[]` ([root.operatingsystems.items](settings-properties-rootoperatingsystems-rootoperatingsystemsitems.md))

* cannot be null

* defined in: [root](settings-properties-rootoperatingsystems.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems")

### operatingsystems Type

`object[]` ([root.operatingsystems.items](settings-properties-rootoperatingsystems-rootoperatingsystemsitems.md))

### operatingsystems Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## app\_tiers



`app_tiers`

* is required

* Type: `object[]` ([root.app\_tiers.items](settings-properties-rootapp_tiers-rootapp_tiersitems.md))

* cannot be null

* defined in: [root](settings-properties-rootapp_tiers.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers")

### app\_tiers Type

`object[]` ([root.app\_tiers.items](settings-properties-rootapp_tiers-rootapp_tiersitems.md))

### app\_tiers Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## fact\_names



`fact_names`

* is optional

* Type: `object` ([root.fact\_names](settings-properties-rootfact_names.md))

* cannot be null

* defined in: [root](settings-properties-rootfact_names.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/fact_names")

### fact\_names Type

`object` ([root.fact\_names](settings-properties-rootfact_names.md))
