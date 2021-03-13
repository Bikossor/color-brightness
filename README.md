# color-brightness
Calculates the perceived brightness of a color

## Installing
### Node.js environment
```
npm i color-brightness --save
```

### Browser environment
Download the latest version of color-brightness [here](https://github.com/Bikossor/color-brightness/releases/latest).

## Usage
### Node.js environment

```javascript
const colorBrightness = require("color-brightness");

console.log(colorBrightness.getBrightness(0, 0, 0));
//=> 0

console.log(colorBrightness.getBrightness(255, 255, 255));
//=> 255

console.log(colorBrightness.getBrightness(30, 200, 50));
//=> 117.88006998640608
```

## Changelog
You can read the changelog [here](CHANGELOG.md).

## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/bikossor/color-brightness/tags) on this repository. 

## Authors
- [Bikossor](https://github.com/Bikossor)

See also the list of [contributors](https://github.com/bikossor/color-brightness/contributors) who participated in this project.

## License
This project is licensed under the GPL-3.0 License - see [here](LICENSE) for more details.