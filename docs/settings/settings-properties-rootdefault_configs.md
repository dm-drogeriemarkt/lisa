# root.default\_configs Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## default\_configs Type

`object` ([root.default\_configs](settings-properties-rootdefault_configs.md))

# default\_configs Properties

| Property                                         | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                          |
| :----------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [build](#build)                                  | `boolean` | Optional | cannot be null | [root](settings-properties-rootdefault_configs-properties-build.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/build")                                                    |
| [enabled](#enabled)                              | `boolean` | Optional | cannot be null | [root](settings-properties-rootdefault_configs-properties-enabled.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/enabled")                                                |
| [managed](#managed)                              | `boolean` | Optional | cannot be null | [root](settings-properties-rootdefault_configs-properties-managed.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/managed")                                                |
| [organization\_id](#organization_id)             | `string`  | Required | cannot be null | [root](settings-properties-rootdefault_configs-properties-organization_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/organization_id")                                |
| [architecture\_id](#architecture_id)             | `string`  | Required | cannot be null | [root](settings-properties-rootdefault_configs-properties-architecture_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/architecture_id")                                |
| [compute\_attributes](#compute_attributes)       | `object`  | Optional | cannot be null | [root](settings-properties-rootdefault_configs-properties-rootdefault_configscompute_attributes.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/compute_attributes")       |
| [interfaces\_attributes](#interfaces_attributes) | `array`   | Optional | cannot be null | [root](settings-properties-rootdefault_configs-properties-rootdefault_configsinterfaces_attributes.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes") |

## build



`build`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-build.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/build")

### build Type

`boolean`

## enabled



`enabled`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-enabled.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/enabled")

### enabled Type

`boolean`

## managed



`managed`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-managed.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/managed")

### managed Type

`boolean`

## organization\_id

Organization global id from Foreman

`organization_id`

* is required

* Type: `string`

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-organization_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/organization_id")

### organization\_id Type

`string`

### organization\_id Examples

```json
"MDE6T3JnYW5pemF0aW9uLTE="
```

## architecture\_id

Architecture global id from Foreman

`architecture_id`

* is required

* Type: `string`

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-architecture_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/architecture_id")

### architecture\_id Type

`string`

### architecture\_id Examples

```json
"MDE6QXJjaGl0ZWN0dXJlLTE="
```

## compute\_attributes



`compute_attributes`

* is optional

* Type: `object` ([root.default\_configs.compute\_attributes](settings-properties-rootdefault_configs-properties-rootdefault_configscompute_attributes.md))

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-rootdefault_configscompute_attributes.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/compute_attributes")

### compute\_attributes Type

`object` ([root.default\_configs.compute\_attributes](settings-properties-rootdefault_configs-properties-rootdefault_configscompute_attributes.md))

## interfaces\_attributes



`interfaces_attributes`

* is optional

* Type: `object[]` ([root.default\_configs.interfaces\_attributes.items](settings-properties-rootdefault_configs-properties-rootdefault_configsinterfaces_attributes-rootdefault_configsinterfaces_attributesitems.md))

* cannot be null

* defined in: [root](settings-properties-rootdefault_configs-properties-rootdefault_configsinterfaces_attributes.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/default_configs/properties/interfaces_attributes")

### interfaces\_attributes Type

`object[]` ([root.default\_configs.interfaces\_attributes.items](settings-properties-rootdefault_configs-properties-rootdefault_configsinterfaces_attributes-rootdefault_configsinterfaces_attributesitems.md))

### interfaces\_attributes Constraints

**maximum number of items**: the maximum number of items for this array is: `1`

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
