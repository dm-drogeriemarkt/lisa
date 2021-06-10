# compute_attributes Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## compute_attributes Type

`object` ([compute_attributes](settings-properties-locations-items-properties-compute_attributes.md))

# compute_attributes Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                |
| :-------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [path_prefix](#path_prefix) | `string` | Required | cannot be null | [base](settings-properties-locations-items-properties-compute_attributes-properties-path_prefix.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes/properties/path_prefix") |

## path_prefix

A owner name will be added at the end of this value


`path_prefix`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-locations-items-properties-compute_attributes-properties-path_prefix.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/compute_attributes/properties/path_prefix")

### path_prefix Type

`string`

### path_prefix Examples

```json
"/Datencenter/Location/vm/Linux/"
```
