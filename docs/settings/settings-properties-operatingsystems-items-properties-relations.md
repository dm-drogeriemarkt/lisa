# relations Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## relations Type

`object` ([relations](settings-properties-operatingsystems-items-properties-relations.md))

# relations Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                      |
| :---------------------------------------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [guest_operatingsystem_id](#guest_operatingsystem_id) | `string` | Required | cannot be null | [base](settings-properties-operatingsystems-items-properties-relations-properties-guest_operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/guest_operatingsystem_id") |
| [ptable_id](#ptable_id)                               | `string` | Required | cannot be null | [base](settings-properties-operatingsystems-items-properties-relations-properties-ptable_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/ptable_id")                               |

## guest_operatingsystem_id




`guest_operatingsystem_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-operatingsystems-items-properties-relations-properties-guest_operatingsystem_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/guest_operatingsystem_id")

### guest_operatingsystem_id Type

`string`

### guest_operatingsystem_id Examples

```json
"rhel7_64Guest"
```

## ptable_id

Ptable global id from Foreman


`ptable_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [base](settings-properties-operatingsystems-items-properties-relations-properties-ptable_id.md "https&#x3A;//github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/ptable_id")

### ptable_id Type

`string`

### ptable_id Examples

```json
"MDE6UHRhYmxlLTEwNw=="
```
