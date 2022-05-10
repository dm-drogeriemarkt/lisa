# root.auth.oidc Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## oidc Type

`object` ([root.auth.oidc](settings-properties-rootauth-properties-rootauthoidc.md))

# oidc Properties

| Property                       | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :----------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [enabled](#enabled)            | `boolean` | Optional | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc-properties-enabled.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/enabled")           |
| [name](#name)                  | `string`  | Optional | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/name")                 |
| [client\_id](#client_id)       | `string`  | Required | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc-properties-client_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/client_id")       |
| [authority](#authority)        | `string`  | Required | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc-properties-authority.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/authority")       |
| [username\_key](#username_key) | `string`  | Optional | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc-properties-username_key.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/username_key") |
| [scope](#scope)                | `string`  | Optional | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc-properties-scope.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/scope")               |

## enabled



`enabled`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc-properties-enabled.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/enabled")

### enabled Type

`boolean`

## name

Name of OIDC/OAuth2 provider

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/name")

### name Type

`string`

### name Examples

```json
"Keycloak"
```

## client\_id

Your client application's identifier as registered with the OIDC/OAuth2 provider

`client_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc-properties-client_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/client_id")

### client\_id Type

`string`

### client\_id Examples

```json
"account"
```

## authority

The URL of the OIDC/OAuth2 provider

`authority`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc-properties-authority.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/authority")

### authority Type

`string`

### authority Examples

```json
"http://localhost:8080/auth/realms/master/"
```

## username\_key

The key to the username value

`username_key`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc-properties-username_key.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/username_key")

### username\_key Type

`string`

### username\_key Default Value

The default value is:

```json
"profile.preferred_username"
```

## scope

List of required permissions

`scope`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc-properties-scope.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc/properties/scope")

### scope Type

`string`

### scope Default Value

The default value is:

```json
"openid"
```
