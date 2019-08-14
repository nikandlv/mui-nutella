# Mui-Nutella

> An awesome and delicious notification system

With nutella you can have awesome notification without wasting your time. its truly a delicious experience

![Nutella boi](./icon.png)

## Installation

```console
nikandlv@nikandlv.ir:~$ npm i mui-nutella
```

## Setup

```javascript
// import it
import Nutella from "mui-nutella";

// Add it to your wrapper
function Wrapper() {
  return (
    <div>
      <Nutella.View variant={absolute ? "absolute" : "fixed"} />
    </div>
  );
}

const config = {};
const actions = [<Button>My Button!</Button>];
const notification = {};
const position = "top-left";

function test() {
  Nutella.push("my-notification-key", type, notification, actions, config);
}
```
