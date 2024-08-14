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

<table style="width: 100%">
  <tr>
    <td style="width: 128px;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/archive.svg" alt="Archive" style="width: 128px;">
        <br>
        <strong>Archive</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/circle.svg" alt="Circle" style="width: 128px;">
        <br>
        <strong>Circle</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/cross.svg" alt="Cross" style="width: 128px;">
        <br>
        <strong>Cross</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/empty.svg" alt="Empty" style="width: 128px;">
        <br>
        <strong>Empty</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/euro.svg" alt="Euro" style="width: 128px;">
        <br>
        <strong>Euro</strong>
    </td>
  </tr>

  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/hamburger.svg" alt="Hamburger" style="width: 128px;">
        <br>
        <strong>Hamburger</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/hammer.svg" alt="Hammer" style="width: 128px;">
        <br>
        <strong>Hammer</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/image.svg" alt="Image" style="width: 128px;">
        <br>
        <strong>Image</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/iso-cube.svg" alt="Iso-cube" style="width: 128px;">
        <br>
        <strong>Iso cube</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/leave.svg" alt="Leave" style="width: 128px;">
        <br>
        <strong>Leave</strong>
      </td>
  </tr>

  
  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/move.svg" alt="Move" style="width: 128px;">
        <br>
        <strong>Move</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/question.svg" alt="Question" style="width: 128px;">
        <br>
        <strong>Question</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/speech-bubble.svg" alt="Speech bubble" style="width: 128px;">
        <br>
        <strong>Speech bubble</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/thoughts.svg" alt="Thoughts" style="width: 128px;">
        <br>
        <strong>Thoughts</strong>
      </td>
      <td style="width: 128px; text-align: center;">
          <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/wrench.svg" alt="Wrench" style="width: 128px;">
          <br>
          <strong>Wrench</strong>
      </td>
  </tr>
</table>


