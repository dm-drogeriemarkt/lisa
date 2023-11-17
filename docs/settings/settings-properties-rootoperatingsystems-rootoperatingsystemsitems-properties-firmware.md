# Untitled string in root Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/operatingsystems/items/properties/firmware
```

Firmware

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## firmware Type

`string`

## firmware Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"automatic"` |             |
| `"bios"`      |             |
| `"efi"`       |             |
| `"uefi"`      |             |

## firmware Examples

```json
"automatic"
```

```json
"efi"
```
