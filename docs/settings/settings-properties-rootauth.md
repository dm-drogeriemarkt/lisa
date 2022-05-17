# root.auth Schema

```txt
https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [settings.schema.json\*](../../src/settings/settings.schema.json "open original schema") |

## auth Type

`object` ([root.auth](settings-properties-rootauth.md))

# auth Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                             |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [foreman](#foreman) | `object` | Optional | cannot be null | [root](settings-properties-rootauth-properties-rootauthforeman.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/foreman") |
| [oidc](#oidc)       | `object` | Optional | cannot be null | [root](settings-properties-rootauth-properties-rootauthoidc.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc")       |

## foreman



`foreman`

*   is optional

*   Type: `object` ([root.auth.foreman](settings-properties-rootauth-properties-rootauthforeman.md))

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthforeman.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/foreman")

### foreman Type

`object` ([root.auth.foreman](settings-properties-rootauth-properties-rootauthforeman.md))

## oidc



`oidc`

*   is optional

*   Type: `object` ([root.auth.oidc](settings-properties-rootauth-properties-rootauthoidc.md))

*   cannot be null

*   defined in: [root](settings-properties-rootauth-properties-rootauthoidc.md "https://github.com/dm-drogeriemarkt/lisa/blob/master/src/settings/schema.json#/properties/auth/properties/oidc")

### oidc Type

`object` ([root.auth.oidc](settings-properties-rootauth-properties-rootauthoidc.md))
