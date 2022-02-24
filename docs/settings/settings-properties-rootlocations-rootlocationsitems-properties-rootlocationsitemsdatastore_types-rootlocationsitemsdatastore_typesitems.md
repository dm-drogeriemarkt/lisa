# root.locations.items.datastore\_types.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.locations.items.datastore\_types.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems.md))

# items Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                               |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems-properties-id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/id")             |
| [name](#name)         | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/name")         |
| [template](#template) | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems-properties-template.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/template") |

## id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems-properties-id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/id")

### id Type

`string`

### id Examples

```json
"Mirror"
```

## name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/name")

### name Type

`string`

### name Examples

```json
"Mirror"
```

## template

`#DC` will be replaced with datastore datacenter number (1 or 2) and will be send in the request as `storage_pod` attribute

`template`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems-properties-template.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/template")

### template Type

`string`

### template Examples

```json
"PL-#DC#-LAN"
```
