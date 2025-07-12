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


# Icons
--------

## Large

<table style="width: 100%">
  <tr>
    <td style="width: 128px; text-align:center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/archive.svg" style="width: 128px;">
        <br>
        <strong>Archive</strong>
    </td>
    <td style="width: 128px; text-align:center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/camera.svg" style="width: 128px;">
        <br>
        <strong>Camera</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/circle.svg" style="width: 128px;">
        <br>
        <strong>Circle</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/cross.svg" style="width: 128px;">
        <br>
        <strong>Cross</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/document.svg" style="width: 128px;">
        <br>
        <strong>Document</strong>
    </td>
  </tr>

  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/empty.svg" style="width: 128px;">
        <br>
        <strong>Empty</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/euro.svg" style="width: 128px;">
        <br>
        <strong>Euro</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/forbidden.svg" style="width: 128px;">
        <br>
        <strong>Forbidden</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/globe.svg" style="width: 128px;">
        <br>
        <strong>Globe</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/graph.svg" style="width: 128px;">
        <br>
        <strong>Graph</strong>
    </td>
  </tr>
  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/hamburger.svg" style="width: 128px;">
        <br>
        <strong>Hamburger</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/home.svg" style="width: 128px;">
        <br>
        <strong>Home</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/hammer.svg" style="width: 128px;">
        <br>
        <strong>Hammer</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/image.svg" style="width: 128px;">
        <br>
        <strong>Image</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/instagram.svg" style="width: 128px;">
        <br>
        <strong>Instagram</strong>
    </td>
  </tr>
  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/iso-cube.svg" style="width: 128px;">
        <br>
        <strong>Iso cube</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/leave.svg" style="width: 128px;">
        <br>
        <strong>Leave</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/mail.svg" style="width: 128px;">
        <br>
        <strong>Mail</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/move.svg" style="width: 128px;">
        <br>
        <strong>Move</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/phone.svg" style="width: 128px;">
        <br>
        <strong>Phone</strong>
    </td>
  </tr>
  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/printer.svg" style="width: 128px;">
        <br>
        <strong>Printer</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/question.svg" style="width: 128px;">
        <br>
        <strong>Question</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/speech-bubble.svg" style="width: 128px;">
        <br>
        <strong>Speech bubble</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/thoughts.svg" style="width: 128px;">
        <br>
        <strong>Thoughts</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/user.svg" style="width: 128px;">
        <br>
        <strong>User</strong>
    </td>
  </tr>
  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/user-outline.svg" style="width: 128px;">
        <br>
        <strong>User Outline</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/wrench.svg" style="width: 128px;">
        <br>
        <strong>Wrench</strong>
    </td>
  </tr>
</table>


## Medium

<table style="width: 100%">
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/camera.svg" style="width: 128px;">
            <br>
            <strong>Camera</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/checkbox-checked.svg" checked" style="width: 128px;">
            <br>
            <strong>Checkbox checked</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/checkbox-cross.svg" " style="width: 128px;">
            <br>
            <strong>Checkbox cross</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/checkbox.svg" style="width: 128px;">
            <br>
            <strong>Checkbox</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/christmas-tree.svg" " style="width: 128px;">
            <br>
            <strong>Christmas tree</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/circle.svg" style="width: 128px;">
            <br>
            <strong>Circle</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/comment.svg" style="width: 128px;">
            <br>
            <strong>Comment</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/cross.svg" style="width: 128px;">
            <br>
            <strong>Cross</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/download.svg" style="width: 128px;">
            <br>
            <strong>Download</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/document.svg" style="width: 128px;">
            <br>
            <strong>Document</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/empty.svg" style="width: 128px;">
            <br>
            <strong>Empty</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/euro.svg" style="width: 128px;">
            <br>
            <strong>Euro</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/expand-with-border.svg" alt="expand with border" style="width: 128px;">
            <br>
            <strong>Expand + border</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/expand.svg" style="width: 128px;">
            <br>
            <strong>Expand</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/external-link.svg" style="width: 128px;">
            <br>
            <strong>External link</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/eye.svg" style="width: 128px;">
            <br>
            <strong>Eye</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/fullscreen.svg" style="width: 128px;">
            <br>
            <strong>Fullscreen</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/graph.svg" style="width: 128px;">
            <br>
            <strong>Graph</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/heart-outline.svg" style="width: 128px;">
            <br>
            <strong>Heart outline</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/heart.svg" style="width: 128px;">
            <br>
            <strong>Heart</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/logo.svg" style="width: 128px;">
            <br>
            <strong>Logo</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/move.svg" style="width: 128px;">
            <br>
            <strong>Move</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/off.svg" style="width: 128px;">
            <br>
            <strong>Off</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/on.svg" style="width: 128px;">
            <br>
            <strong>On</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/play.svg" style="width: 128px;">
            <br>
            <strong>Play</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/plus.svg" style="width: 128px;">
            <br>
            <strong>Plus</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/question.svg" style="width: 128px;">
            <br>
            <strong>Question</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/smiley.svg" style="width: 128px;">
            <br>
            <strong>Smiley</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/upload.svg" style="width: 128px;">
            <br>
            <strong>Upload</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/user.svg" style="width: 128px;">
            <br>
            <strong>User</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/terminal.svg" style="width: 128px;">
            <br>
            <strong>Terminal</strong>
        </td>
    </tr>
</table>



## Small
<table>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-top.svg" style="width: 128px;">
            <br>
            <strong>chevron-top</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-right.svg" style="width: 128px;">
            <br>
            <strong>chevron-right</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron.svg" style="width: 128px;">
            <br>
            <strong>chevron</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-left.svg" style="width: 128px;">
            <br>
            <strong>chevron-left</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-top-fat.svg" style="width: 128px;">
            <br>
            <strong>chevron-top-fat</strong>
        </td>
    <tr>
    </tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-right-fat.svg" style="width: 128px;">
            <br>
            <strong>chevron-right-fat</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-fat.svg" style="width: 128px;">
            <br>
            <strong>chevron-fat</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/chevron-left-fat.svg" style="width: 128px;">
            <br>
            <strong>chevron-left-fat</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/circle.svg" style="width: 128px;">
            <br>
            <strong>Circle</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/cross.svg" style="width: 128px;">
            <br>
            <strong>Cross</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/empty.svg" style="width: 128px;">
            <br>
            <strong>Empty</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/expand.svg" style="width: 128px;">
            <br>
            <strong>Expand</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/fullscreen.svg" style="width: 128px;">
            <br>
            <strong>Fullscreen</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/graph.svg" style="width: 128px;">
            <br>
            <strong>Graph</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/hamburger.svg" style="width: 128px;">
            <br>
            <strong>Hamburger</strong>
        </td>
    <tr>
    </tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/heart-outline.svg" style="width: 128px;">
            <br>
            <strong>Heart outline</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/heart.svg" style="width: 128px;">
            <br>
            <strong>Heart</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/play.svg" style="width: 128px;">
            <br>
            <strong>Play</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/square.svg" style="width: 128px;">
            <br>
            <strong>Square</strong>
        </td>
    </tr>
</table>
