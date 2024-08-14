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
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/archive.svg" alt="Archive" style="width: 128px;">
        <br>
        <strong>Archive</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/circle.svg" alt="Circle" style="width: 128px;">
        <br>
        <strong>Circle</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/cross.svg" alt="Cross" style="width: 128px;">
        <br>
        <strong>Cross</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/empty.svg" alt="Empty" style="width: 128px;">
        <br>
        <strong>Empty</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/euro.svg" alt="Euro" style="width: 128px;">
        <br>
        <strong>Euro</strong>
    </td>
  </tr>

  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/forbidden.svg" alt="Forbidden" style="width: 128px;">
        <br>
        <strong>Forbidden</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/hamburger.svg" alt="Hamburger" style="width: 128px;">
        <br>
        <strong>Hamburger</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/hammer.svg" alt="Hammer" style="width: 128px;">
        <br>
        <strong>Hammer</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/image.svg" alt="Image" style="width: 128px;">
        <br>
        <strong>Image</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/iso-cube.svg" alt="Iso-cube" style="width: 128px;">
        <br>
        <strong>Iso cube</strong>
    </td>
  </tr>

  
  <tr>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/leave.svg" alt="Leave" style="width: 128px;">
        <br>
        <strong>Leave</strong>
      </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/move.svg" alt="Move" style="width: 128px;">
        <br>
        <strong>Move</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/question.svg" alt="Question" style="width: 128px;">
        <br>
        <strong>Question</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/speech-bubble.svg" alt="Speech bubble" style="width: 128px;">
        <br>
        <strong>Speech bubble</strong>
    </td>
    <td style="width: 128px; text-align: center;">
        <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/thoughts.svg" alt="Thoughts" style="width: 128px;">
        <br>
        <strong>Thoughts</strong>
      </td>
  </tr>
</table>


## Medium

<table style="width: 100%">
    <tr>
        <td style="width: 128px; text-align: center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/large/wrench.svg" alt="Wrench" style="width: 128px;">
            <br>
            <strong>Wrench</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/checkbox-checked.svg" alt="checkbox-checked" style="width: 128px;">
            <br>
            <strong>Checkbox checked</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/checkbox-cross.svg" alt="checkbox-cross" style="width: 128px;">
            <br>
            <strong>Checkbox cross</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/checkbox.svg" alt="checkbox" style="width: 128px;">
            <br>
            <strong>Checkbox</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/christmas-tree.svg" alt="christmas tree" style="width: 128px;">
            <br>
            <strong>Christmas tree</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/circle.svg" alt="circle" style="width: 128px;">
            <br>
            <strong>Circle</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/comment.svg" alt="comment" style="width: 128px;">
            <br>
            <strong>Comment</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/cross.svg" alt="cross" style="width: 128px;">
            <br>
            <strong>Cross</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/empty.svg" alt="empty" style="width: 128px;">
            <br>
            <strong>empty</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/euro.svg" alt="euro" style="width: 128px;">
            <br>
            <strong>Euro</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/expand-with-border.svg" alt="expand with border" style="width: 128px;">
            <br>
            <strong>Expand + border</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/expand.svg" alt="expand" style="width: 128px;">
            <br>
            <strong>Expand</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/eye.svg" alt="eye" style="width: 128px;">
            <br>
            <strong>Eye</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/fullscreen.svg" alt="fullscreen" style="width: 128px;">
            <br>
            <strong>Fullscreen</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/heart-outline.svg" alt="heart outline" style="width: 128px;">
            <br>
            <strong>Heart outline</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/heart.svg" alt="heart" style="width: 128px;">
            <br>
            <strong>Heart</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/logo.svg" alt="logo" style="width: 128px;">
            <br>
            <strong>Logo</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/move.svg" alt="move" style="width: 128px;">
            <br>
            <strong>Move</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/off.svg" alt="off" style="width: 128px;">
            <br>
            <strong>Off</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/on.svg" alt="on" style="width: 128px;">
            <br>
            <strong>On</strong>
        </td>
    </tr>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/play.svg" alt="play" style="width: 128px;">
            <br>
            <strong>Play</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/plus.svg" alt="plus" style="width: 128px;">
            <br>
            <strong>Plus</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/question.svg" alt="question" style="width: 128px;">
            <br>
            <strong>Question</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/smiley.svg" alt="smiley" style="width: 128px;">
            <br>
            <strong>Smiley</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/medium/terminal.svg" alt="terminal" style="width: 128px;">
            <br>
            <strong>Terminal</strong>
        </td>
    </tr>
</table>



## Small
<table>
    <tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/circle.svg" alt="circle" style="width: 128px;">
            <br>
            <strong>Circle</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/cross.svg" alt="cross" style="width: 128px;">
            <br>
            <strong>Cross</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/empty.svg" alt="empty" style="width: 128px;">
            <br>
            <strong>Empty</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/expand.svg" alt="expand" style="width: 128px;">
            <br>
            <strong>Expand</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/fullscreen.svg" alt="fullscreen" style="width: 128px;">
            <br>
            <strong>Fullscreen</strong>
        </td>
    <tr>
    </tr>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/heart-outline.svg" alt="heart" style="width: 128px;">
            <br>
            <strong>Heart outline</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/heart.svg" alt="heart" style="width: 128px;">
            <br>
            <strong>Heart</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/play.svg" alt="play" style="width: 128px;">
            <br>
            <strong>Play</strong>
        </td>
        <td style="width: 128px; text-align:center;">
            <img src="https://raw.githubusercontent.com/JeffreyArts/jao-icons/main/images/small/square.svg" alt="square" style="width: 128px;">
            <br>
            <strong>Square</strong>
        </td>
    </tr>
</table>
