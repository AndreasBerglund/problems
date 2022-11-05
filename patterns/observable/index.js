import observable from "./observable.js";
import string from "./subscribers.js";

function somethingHappens() {
  observable.notify("something happened");
}

somethingHappens();
