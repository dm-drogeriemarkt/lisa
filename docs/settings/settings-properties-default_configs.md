# default_configs Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## default_configs Type

`object` ([default_configs](settings-properties-default_configs.md))

# default_configs Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :---------------------------------------------- | --------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [build](#build)                                 | `boolean` | Optional | cannot be null | [base](settings-properties-default_configs-properties-build.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/build")                                 |
| [enabled](#enabled)                             | `boolean` | Optional | cannot be null | [base](settings-properties-default_configs-properties-enabled.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/enabled")                             |
| [managed](#managed)                             | `boolean` | Optional | cannot be null | [base](settings-properties-default_configs-properties-managed.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/managed")                             |
| [organization_id](#organization_id)             | `string`  | Required | cannot be null | [base](settings-properties-default_configs-properties-organization_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/organization_id")             |
| [architecture_id](#architecture_id)             | `string`  | Required | cannot be null | [base](settings-properties-default_configs-properties-architecture_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/architecture_id")             |
| [compute_attributes](#compute_attributes)       | `object`  | Optional | cannot be null | [base](settings-properties-default_configs-properties-compute_attributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/compute_attributes")       |
| [interfaces_attributes](#interfaces_attributes) | `array`   | Optional | cannot be null | [base](settings-properties-default_configs-properties-interfaces_attributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes") |

## build




`build`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-build.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/build")

### build Type

`boolean`

## enabled




`enabled`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-enabled.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/enabled")

### enabled Type

`boolean`

## managed




`managed`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-managed.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/managed")

### managed Type

`boolean`

## organization_id

Organization global id from Foreman


`organization_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-organization_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/organization_id")

### organization_id Type

`string`

### organization_id Examples

```json
"MDE6T3JnYW5pemF0aW9uLTE="
```

## architecture_id

Architecture global id from Foreman


`architecture_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-architecture_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/architecture_id")

### architecture_id Type

`string`

### architecture_id Examples

```json
"MDE6QXJjaGl0ZWN0dXJlLTE="
```

## compute_attributes




`compute_attributes`

-   is optional
-   Type: `object` ([compute_attributes](settings-properties-default_configs-properties-compute_attributes.md))
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-compute_attributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/compute_attributes")

### compute_attributes Type

`object` ([compute_attributes](settings-properties-default_configs-properties-compute_attributes.md))

## interfaces_attributes




`interfaces_attributes`

-   is optional
-   Type: `object[]` ([items](settings-properties-default_configs-properties-interfaces_attributes-items.md))
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-interfaces_attributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes")

### interfaces_attributes Type

`object[]` ([items](settings-properties-default_configs-properties-interfaces_attributes-items.md))

### interfaces_attributes Constraints

**maximum number of items**: the maximum number of items for this array is: `1`

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
