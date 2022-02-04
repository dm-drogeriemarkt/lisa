# root.app_tiers.items.relations Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json*](../../src/settings/settings.schema.json "open original schema") |

## relations Type

`object` ([root.app_tiers.items.relations](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations.md))

# relations Properties

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                   |
| :---------------------- | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [locations](#locations) | `array` | Required | cannot be null | [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations") |

## locations



`locations`

*   is required

*   Type: `object[]` ([root.app_tiers.items.relations.locations.items](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems.md))

*   cannot be null

*   defined in: [root](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/app_tiers/items/properties/relations/properties/locations")

### locations Type

`object[]` ([root.app_tiers.items.relations.locations.items](settings-properties-rootapp_tiers-rootapp_tiersitems-properties-rootapp_tiersitemsrelations-properties-rootapp_tiersitemsrelationslocations-rootapp_tiersitemsrelationslocationsitems.md))

### locations Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
