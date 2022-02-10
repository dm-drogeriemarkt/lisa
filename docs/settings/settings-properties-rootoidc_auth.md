# root.oidc\_auth Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## oidc\_auth Type

`object` ([root.oidc\_auth](settings-properties-rootoidc_auth.md))

# oidc\_auth Properties

| Property                 | Type     | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :----------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)            | `string` | Optional | cannot be null | [root](settings-properties-rootoidc_auth-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth/properties/name")           |
| [client\_id](#client_id) | `string` | Required | cannot be null | [root](settings-properties-rootoidc_auth-properties-client_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth/properties/client_id") |
| [authority](#authority)  | `string` | Required | cannot be null | [root](settings-properties-rootoidc_auth-properties-authority.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth/properties/authority") |

## name

Name of OIDC/OAuth2 provider

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [root](settings-properties-rootoidc_auth-properties-name.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth/properties/name")

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

*   defined in: [root](settings-properties-rootoidc_auth-properties-client_id.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth/properties/client_id")

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

*   defined in: [root](settings-properties-rootoidc_auth-properties-authority.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/oidc_auth/properties/authority")

### authority Type

`string`

### authority Examples

```json
"http://localhost:8080/auth/realms/master/"
```
