import SingletonClass from "./singleton.js";

const singletonOne = SingletonClass.getInstance();
const singletonTwo = SingletonClass.getInstance();
const singletonThree = SingletonClass.getInstance();

singletonOne.printValue();
singletonTwo.printValue();
singletonThree.printValue();
