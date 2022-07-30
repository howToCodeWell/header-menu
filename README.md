# How To Code Well header-menu
The header menu of How To Code Well which is shared across multiple sites

# Install
```bash
$ npm install --save @howtocodewell/header-menu
```

## Usage
1) Create the following config file in `<project_root>/src/config/headerMenu.json` and change `name` and `url` values.

```json
{
  "items": [
    {
      "name": "Overriden",
      "url": "https://howtocodewell.net/merch"
    },
    {
      "name": "Courses",
      "url": "https://howtocodewell.net/shop"
    },
    {
      "name": "Tutorials",
      "url": "https://howtocodewell.net/courses"
    },
    {
      "name": "Orders",
      "url": "https://codechallenges.howtocodewell.net"
    }
  ]
}
```

2) Import the module and config
```javascript
import HeaderMenu from  "@howtocodewell/header-menu"
import menu from "./config/headerMenu.json"
```
3) Load the `HeaderMenu` and pass the menu property
```javascript
<HeaderMenu menu={menu} />
```