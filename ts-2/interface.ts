interface Computer {
  readonly cpu: string;
  ram: number;
  hdd?: number;

  method1: () => void;
}

const computerExample: Computer = {
  cpu: "i5",
  ram: 8,
  hdd: 500,

  method1() {
    return `${computerExample.cpu} ${computerExample.ram} ${computerExample.hdd}`;
  },
};

function getDetails(comuter: Computer) {
  return `${comuter.cpu} ${comuter.ram} ${comuter.hdd}`;
}
//////////////////////////////////////////

interface Song {
  name: string;
  singerName: string;
  printSongInfo(name: string, singerName: string): string;
}

const song1: Song = {
  name: "kkkkkkkkk",
  singerName: "sounds good",
  printSongInfo: (name, singerName) => {
    return `Info: ${name} by ${singerName}`;
  },
};

console.log(song1.printSongInfo("winds", "feels nice"));

///////////////////////////////////////

//original interface
interface Vehicle {
  type: string;
  startEngine(): void;
}

//declaraion merging interface extending
interface Vehicle {
  brand: string;
  stopEngine(): void;
}

const newCar: Vehicle = {
  brand: "nissan",
  type: "sedan",
  startEngine() {
    console.log("Car is starting");
  },
  stopEngine() {
    console.log("Car is stopping");
  },
};

console.log(newCar);
newCar.startEngine();

// class Car implements Vehicle {
//   startEngine(): void {
//     console.log("Car is starting");
//   }
//   stopEngine(): void {
//     console.log("Car is stopping");
//   }
// }
// const car = new Car();
// car.startEngine();
// car.stopEngine();
////////////////////////////////////////////////////
interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let format: StringFormat;
// console.log(format)
format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("hi", true));

let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase("Hi", false));

////////////////////////////////////////////
//* generic interface

interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    // console.log(index);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}
// console.log(list);
// list.remove(5);
// console.log(list);

///////////////////////
//*Generic interfaces that describe index types
interface ThemeOptions {
  [name: string]: string;
}

const defaultTheme: ThemeOptions = {
  primaryColor: "#007bff",
  secondaryColor: "#6c757d",
  backgroundColor: "#f8f9fa",
};

const customTheme: ThemeOptions = {
  primaryColor: "#ff0000",
  secondaryColor: "#00ff00",
  backgroundColor: "#0000ff",
};

const applyTheme = (theme: ThemeOptions) => {
  // Apply the theme to your application
  console.log("Applying theme:", theme);
};

// applyTheme(defaultTheme);
applyTheme(customTheme);
