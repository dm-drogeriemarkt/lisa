# root.app_tiers.items.relations.locations.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.app_tiers.items.relations.locations.items](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems.md))

# root.app_tiers.items.relations.locations.items Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [code](#code)                   | `string` | Required | cannot be null | [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems-properties-code.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations/items/properties/code")                   |
| [resource_pool](#resource_pool) | `string` | Required | cannot be null | [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems-properties-resource_pool.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations/items/properties/resource_pool") |

## code

A reference to the [location](#locations-1)


`code`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems-properties-code.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations/items/properties/code")

### code Type

`string`

### code Examples

```json
"LAN"
```

## resource_pool




`resource_pool`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems-properties-resource_pool.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations/items/properties/resource_pool")

### resource_pool Type

`string`

### resource_pool Examples

```json
"default"
```

```json
"prod"
```
