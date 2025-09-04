# root.app\_tiers.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.app\_tiers.items](settings-properties-rootapp_tiers-rootapp_tiersitems.md))

# items Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                              |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)           | `string` | Required | cannot be null | [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/name")                             |
| [relations](#relations) | `object` | Required | cannot be null | [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations") |

## name

App tier name

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/name")

### name Type

`string`

### name Examples

```json
"development"
```

## relations



`relations`

* is required

* Type: `object` ([root.app\_tiers.items.relations](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations.md))

* cannot be null

* defined in: [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations")

### relations Type

`object` ([root.app\_tiers.items.relations](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations.md))
