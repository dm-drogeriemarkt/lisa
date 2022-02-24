# root.locations.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.locations.items](settings-properties-rootlocations-rootlocationsitems.md))

# items Properties

| Property                                   | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                |
| :----------------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                  | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/id")                                                   |
| [code](#code)                              | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-code.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/code")                                               |
| [name](#name)                              | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/name")                                               |
| [location](#location)                      | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-location.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/location")                                       |
| [country](#country)                        | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-country.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/country")                                         |
| [domain\_name](#domain_name)               | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-domain_name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/domain_name")                                 |
| [label](#label)                            | `object` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/label")                           |
| [compute\_attributes](#compute_attributes) | `object` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes") |
| [datastore\_types](#datastore_types)       | `array`  | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types")       |
| [relations](#relations)                    | `object` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations")                   |

## id

Location global id from Foreman

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/id")

### id Type

`string`

## code

A unique code that is used to identify the location

`code`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-code.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/code")

### code Type

`string`

## name

Location name

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/name")

### name Type

`string`

## location

This value will be used in the search query to filter subnets

`location`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-location.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/location")

### location Type

`string`

## country

Country code

`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-country.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/country")

### country Type

`string`

### country Examples

```json
"pl"
```

```json
"de"
```

## domain\_name

Domain name

`domain_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-domain_name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/domain_name")

### domain\_name Type

`string`

### domain\_name Examples

```json
"example.com"
```

## label

These values will be visible on the host creation form

`label`

*   is required

*   Type: `object` ([root.locations.items.label](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md))

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/label")

### label Type

`object` ([root.locations.items.label](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md))

## compute\_attributes



`compute_attributes`

*   is required

*   Type: `object` ([root.locations.items.compute\_attributes](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md))

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes")

### compute\_attributes Type

`object` ([root.locations.items.compute\_attributes](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md))

## datastore\_types



`datastore_types`

*   is required

*   Type: `object[]` ([root.locations.items.datastore\_types.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems.md))

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types")

### datastore\_types Type

`object[]` ([root.locations.items.datastore\_types.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems.md))

### datastore\_types Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## relations



`relations`

*   is required

*   Type: `object` ([root.locations.items.relations](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md))

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations")

### relations Type

`object` ([root.locations.items.relations](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md))
