## Modules

A custom user module system. Place a `.ts` file with the following template, it can be installed automatically if needed.

```js
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
	// do something
};

export default { install };
```
