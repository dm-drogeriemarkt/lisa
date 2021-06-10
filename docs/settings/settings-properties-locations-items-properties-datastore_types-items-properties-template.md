# Untitled string in base Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/locations/items/properties/datastore_types/items/properties/template
```

`#DC` will be replaced with datastore datacenter number (1 or 2) and will be send in the request as `storage_pod` attribute


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## template Type

`string`

## template Examples

```json
"PL-#DC#-LAN"
```
