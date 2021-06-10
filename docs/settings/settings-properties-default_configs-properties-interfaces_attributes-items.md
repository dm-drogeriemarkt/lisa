# items Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes/items
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## items Type

`object` ([items](settings-properties-default_configs-properties-interfaces_attributes-items.md))

# items Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                              |
| :-------------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)                           | `string` | Optional | cannot be null | [base](settings-properties-default_configs-properties-interfaces_attributes-items-properties-type.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes/items/properties/type")                           |
| [computeAttributes](#computeattributes) | `object` | Optional | cannot be null | [base](settings-properties-default_configs-properties-interfaces_attributes-items-properties-computeattributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes/items/properties/computeAttributes") |

## type




`type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-interfaces_attributes-items-properties-type.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes/items/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | ----------- |
| `"interface"` |             |
| `"bmc"`       |             |
| `"bond"`      |             |
| `"bridge"`    |             |

### type Default Value

The default value is:

```json
"interface"
```

## computeAttributes




`computeAttributes`

-   is optional
-   Type: `object` ([computeAttributes](settings-properties-default_configs-properties-interfaces_attributes-items-properties-computeattributes.md))
-   cannot be null
-   defined in: [base](settings-properties-default_configs-properties-interfaces_attributes-items-properties-computeattributes.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes/items/properties/computeAttributes")

### computeAttributes Type

`object` ([computeAttributes](settings-properties-default_configs-properties-interfaces_attributes-items-properties-computeattributes.md))
