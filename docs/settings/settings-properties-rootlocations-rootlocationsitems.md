# root.locations.items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([root.locations.items](settings-properties-rootlocations-rootlocationsitems.md))

# root.locations.items Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :---------------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                 | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/id")                                                   |
| [code](#code)                             | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-code.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/code")                                               |
| [name](#name)                             | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/name")                                               |
| [location](#location)                     | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-location.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/location")                                       |
| [country](#country)                       | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-country.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/country")                                         |
| [domain_name](#domain_name)               | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-domain_name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/domain_name")                                 |
| [label](#label)                           | `object` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/label")                           |
| [compute_attributes](#compute_attributes) | `object` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes") |
| [datastore_types](#datastore_types)       | `array`  | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types")       |
| [relations](#relations)                   | `object` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations")                   |

## id

Location global id from Foreman


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/id")

### id Type

`string`

## code

A unique code that is used to identify the location


`code`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-code.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/code")

### code Type

`string`

## name

Location name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/name")

### name Type

`string`

## location

This value will be used in the search query to filter subnets


`location`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-location.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/location")

### location Type

`string`

## country

Country code


`country`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-country.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/country")

### country Type

`string`

### country Examples

```json
"pl"
```

```json
"de"
```

## domain_name

Domain name


`domain_name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-domain_name.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/domain_name")

### domain_name Type

`string`

### domain_name Examples

```json
"example.com"
```

## label

These values will be visible on the host creation form


`label`

-   is required
-   Type: `object` ([root.locations.items.label](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md))
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/label")

### label Type

`object` ([root.locations.items.label](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemslabel.md))

## compute_attributes




`compute_attributes`

-   is required
-   Type: `object` ([root.locations.items.compute_attributes](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md))
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes")

### compute_attributes Type

`object` ([root.locations.items.compute_attributes](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemscompute_attributes.md))

## datastore_types




`datastore_types`

-   is required
-   Type: `object[]` ([root.locations.items.datastore_types.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems.md))
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types")

### datastore_types Type

`object[]` ([root.locations.items.datastore_types.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsdatastore_types-rootlocationsitemsdatastore_typesitems.md))

### datastore_types Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## relations




`relations`

-   is required
-   Type: `object` ([root.locations.items.relations](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md))
-   cannot be null
-   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations")

### relations Type

`object` ([root.locations.items.relations](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md))
