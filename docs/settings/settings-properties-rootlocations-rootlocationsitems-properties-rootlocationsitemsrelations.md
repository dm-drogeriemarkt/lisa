# root.locations.items.relations Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json*](../../src/settings/settings.schema.json "open original schema") |

## relations Type

`object` ([root.locations.items.relations](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations.md))

# relations Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                            |
| :------------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cluster](#cluster)                         | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-cluster.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/cluster")                         |
| [compute_resource_id](#compute_resource_id) | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-compute_resource_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/compute_resource_id") |
| [puppet_ca_proxy_id](#puppet_ca_proxy_id)   | `string` | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-puppet_ca_proxy_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/puppet_ca_proxy_id")   |
| [media](#media)                             | `array`  | Required | cannot be null | [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-rootlocationsitemsrelationsmedia.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media")  |

## cluster

Cluster name

`cluster`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-cluster.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/cluster")

### cluster Type

`string`

### cluster Examples

```json
"CLUSTER"
```

## compute_resource_id

ComputeResource global id from Foreman

`compute_resource_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-compute_resource_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/compute_resource_id")

### compute_resource_id Type

`string`

### compute_resource_id Examples

```json
"MDE6Q29tcHV0ZVJlc291cmNlLTI="
```

## puppet_ca_proxy_id

SmartProxy global id from Foreman

`puppet_ca_proxy_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-puppet_ca_proxy_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/puppet_ca_proxy_id")

### puppet_ca_proxy_id Type

`string`

### puppet_ca_proxy_id Examples

```json
"MDE6Q29tcHV0ZVJlc291cmNlLTI="
```

## media



`media`

*   is required

*   Type: `object[]` ([root.locations.items.relations.media.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-rootlocationsitemsrelationsmedia-rootlocationsitemsrelationsmediaitems.md))

*   cannot be null

*   defined in: [root](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-rootlocationsitemsrelationsmedia.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/relations/properties/media")

### media Type

`object[]` ([root.locations.items.relations.media.items](settings-properties-rootlocations-rootlocationsitems-properties-rootlocationsitemsrelations-properties-rootlocationsitemsrelationsmedia-rootlocationsitemsrelationsmediaitems.md))

### media Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
