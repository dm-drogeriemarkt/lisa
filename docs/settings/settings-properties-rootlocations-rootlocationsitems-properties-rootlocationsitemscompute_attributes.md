# root.locations.items.compute\_attributes Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## compute\_attributes Type

`object` ([root.locations.items.compute\_attributes](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md))

# compute\_attributes Properties

| Property                     | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                              |
| :--------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [path\_prefix](#path_prefix) | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes-properties-path_prefix.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes/properties/path_prefix") |

## path\_prefix

A owner name will be added at the end of this value

`path_prefix`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes-properties-path_prefix.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes/properties/path_prefix")

### path\_prefix Type

`string`

### path\_prefix Examples

```json
"/Datencenter/Location/vm/Linux/"
```
