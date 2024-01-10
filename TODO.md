- [x] UI dashboard
- [ ] Authentication
	- [ ] AUTH : https://dev.to/rafaelmagalhaes/authentication-in-nuxt-3-375o
	- [X] login : Token
	- [ ] User Keep Authorized
	- [ ] Pinia : State Management Of User


---

# Middleware

```js
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  }, { global: true })

  addRouteMiddleware('named-test', () => {
    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  })
})
```

# Cokkiee
```
Cookie “strapi_jwt” does not have a proper “SameSite” attribute value. Soon, cookies without the “SameSite” attribute or with an invalid value will be treated as “Lax”. This means that the cookie will no longer be sent in third-party contexts. If your application depends on this cookie being available in such contexts, please add the “SameSite=None“ attribute to it. To know more about the “SameSite“ attribute, read https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite composables:100:22
```

# 