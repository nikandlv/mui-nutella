# Mui-Nutella

> An awesome and delicious notification system

With nutella you can have awesome notification without wasting your time. its truly a delicious experience

![Nutella boi](./icon.png)

## Demo

#### [Demo and notification builder](http://nikandlv.github.io/mui-nutella)

## Install it

```console
nikandlv@nikandlv.ir:~$ npm i mui-nutella
```

## Import it

```javascript
import Nutella from "mui-nutella";
```

## Wrap it

```javascript
function Wrapper() {
  return (
    <div>
      <Nutella.View />
    </div>
  );
}
```

## Push it

```javascript
const config = {};
const actions = [<Button>My Button!</Button>];
const notification = {};
const position = "top-left";

function pushMe() {
  Nutella.push("my-notification-key", type, notification, actions, config);
}
```

## Dismiss it

```javascript
function goAway() {
  Nutella.dismiss("my-notification-key");
}
```
