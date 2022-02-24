# root.operatingsystems.items.relations Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## relations Type

`object` ([root.operatingsystems.items.relations](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations.md))

# relations Properties

| Property                                                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                                                  |
| :------------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [guest\_operatingsystem\_id](#guest_operatingsystem_id) | `string` | Required | cannot be null | [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations-properties-guest_operatingsystem_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/guest_operatingsystem_id") |
| [ptable\_id](#ptable_id)                                | `string` | Required | cannot be null | [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations-properties-ptable_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/ptable_id")                               |

## guest\_operatingsystem\_id



`guest_operatingsystem_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations-properties-guest_operatingsystem_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/guest_operatingsystem_id")

### guest\_operatingsystem\_id Type

`string`

### guest\_operatingsystem\_id Examples

```json
"rhel7_64Guest"
```

## ptable\_id

Ptable global id from Foreman

`ptable_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootoperatingsystems-rootoperatingsystemsitems-properties-rootoperatingsystemsitemsrelations-properties-ptable_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/relations/properties/ptable_id")

### ptable\_id Type

`string`

### ptable\_id Examples

```json
"MDE6UHRhYmxlLTEwNw=="
```
