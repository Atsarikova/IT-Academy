1.
interface User {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number,
  }

  
  const users: User[] = [
    {
    name:  'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2,
}
  ];

2.
interface User {
  name: string;
  age: number;
  occupation: string;
}
 
interface Admin {
  name: string;
  age: number;
  role: string;
}
 
export type Person = User | Admin;
 
export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },

3.

export class ObjectManipulator<T> {
  constructor(protected obj: T) {
    this.obj = obj;
  }
  public set<K extends string, V>(
    key: K,
    value: V
  ): ObjectManipulator<T & { [k in K]: V }> {
    return new ObjectManipulator({
      ...this.obj,
      [key]: value,
    }) as ObjectManipulator<T & { [k in K]: V }>;
  }
 
  public get<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }
 
  public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }
 
  public getObject(): T {
    return this.obj;
  }
}

4.
export function map<T>(mapper: (el: T, index: number, arr: T[]) => void, input: T[]) {
  if (arguments.length === 0) {
      return map;
  }
  if (arguments.length === 1) {
      return function subFunction(subInput: T[]) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return subInput.map(mapper);
      };
  }
  return input.map(mapper);
 
}


export function filter<T>(filterer: (el: T, index: number, arr: T[]) => boolean, input: T[]) {
  if (arguments.length === 0) {
      return filter;
  }
  if (arguments.length === 1) {
      return function subFunction(subInput: T[]) {
          if (arguments.length === 0) {
              return subFunction;
          }
          return subInput.filter(filterer);
      };
  }
  return input.filter(filterer);
}

export function add(a: number, b: number): number | typeof add | ((a1: number) => number);
export function add(a: string, b: string): string;
export function add(a: any, b: any) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: any) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}



