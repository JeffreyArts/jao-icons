# JAO icon set

Pixel-based icon set made by Jeffrey Arts, based on binary 2-dimensional arrays. This module will generate SVG icons, based on the available icons in the set `Icon(<size/name>)`


### Installation

```
npm install --save jao-icons

yarn add jao-icons
```


### How to use

#### 1. Generate SVG elements

```ts
import { Icon } from "jao-icons"

Icon("small/cross")

// Output: SVG domElement
```

#### 2. Get the binary array

```ts

import { iconMap } from "jao-icons"

console.log(iconMap.small.cross)

// Output: 2-Dimensional array
// [
// 	[1,0,0,0,1],
// 	[0,1,0,1,0],
// 	[0,0,1,0,0],
// 	[0,1,0,1,0],
// 	[1,0,0,0,1]
// ]
```


#### Icons

##### Large

| ![archive](https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/archive.svg) | ![circle](https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/circle.svg) | ![cross](https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/cross.svg) | ![empty](https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/empty.svg) |
|:--------------------------:|:--------------------------:|:--------------------------:|:--------------------------:|
| **Archive**                | **Cirlce**                 | **Cross**                  | **empty 2**                |