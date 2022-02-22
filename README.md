## Reduce exercises

Try to do the previous exercises of each chapter again, but this time use `reduce` instead of `map`/`filter`/`find`.

### 1. Transform names

Take this list of names and transform them into a list of objects using this type. Leave out the last name if they don't have any. Also capitalize the first letters of the first and last name.

```ts
  interface Person {
    firstname: string;
    lastname?: string;
  }
```

data:

```json
  ["frodo baggins", "samwise gamgee", "gandalf", "aragorn", "legolas greenleaf", "gimli"]
```

```ts
  const arr = ['frodo baggins', 'samwise gamgee', 'gandalf', 'aragorn', 'legolas greenleaf', 'gimli'];

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const reduceMap = arr.reduce((previousItem: Person[], currentItem) => {
    const [first, last] = currentItem.split(' ');
    const person = { firstname: capitalize(first) };
    if (last) person.lastname = capitalize(last);
    return [...previousItem,person]
  },[]);

  console.log('reduceMap', reduceMap) // [{firstname: 'Frodo', lastname: 'Baggins'}, {firstname: 'Samwise', lastname: 'Gamgee'}, {firstname: 'Gandalf'}, {firstname: 'Aragorn'}, {firstname: 'Legolas', lastname: 'Greenleaf'}, {firstname: 'Gimli'}]
```

### 2. Create JSX from an array

JSX is just JavaScript, so that means it works with the `map` method. Create a component that shows a list of pokemon names

```json
  [
    {
      "id": 1,
      "name": "bulbasaur"
    },
    {
      "id": 4,
      "name": "charmander"
    },
    {
      "id": 7,
      "name": "squirtle"
    }
  ]
```

```tsx
  const Page = () => (
    <ul>
      {pokemon.reduce((previousItem:any, currentItem) => {
        return [...previousItem,<li key={currentItem.id}>{currentItem.name}</li>]
      },[])}
    </ul>
  );
```

## Filter exercises

### 1. Odd and even numbers

Take the following array and filter out all odd numbers. The resulting array should only contain even numbers.

```json
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```ts
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduceFilter = arr.reduce((previousItem:number[], currentItem) => {
  if(currentItem % 2 == 0){
      return [...previousItem,currentItem]
  }else{
      return previousItem
  }
},[]);

console.log('reduceFilter',reduceFilter); // [2, 4, 6, 8, 10]
```

### 2. Chaining array functions

Since functions like `map` and `filter` return arrays, you can chain them. Take the same numbers from the last exercise, multiply all of them by 3 and again filter out all odd numbers, leaving only the even number in the new array.

```json
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```ts
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const reduceFilter = arr.reduce((previousItem:number[], currentItem) => {
    let multipliedNumber = currentItem * 3
    if(multipliedNumber % 2 == 0){
        return [...previousItem,multipliedNumber]
    }else{
        return previousItem
    }
  },[]);

  console.log('reduceFilter',reduceFilter); // [6, 12, 18, 24, 30]
```
### 3. Searching for a name

Take the names from Lord of the Rings which we used in the `map` exercise en find all characters with an 'a' in their name.

```json
  ["frodo baggins", "samwise gamgee", "gandalf", "aragorn", "legolas greenleaf", "gimli"]
```

```ts
  const arr = ['frodo baggins', 'samwise gamgee', 'gandalf', 'aragorn', 'legolas greenleaf', 'gimli'];

  const reduceFilter = arr.reduce((previousItem:string[], currentItem) => {
    if(currentItem.includes('a')){
        return [...previousItem,currentItem]
    }else{
        return previousItem
    }
  },[]);

  console.log('reduceFilter', reduceFilter) // ["frodo baggins", "samwise gamgee", "gandalf", "aragorn", "legolas greenleaf"]
```

## Find exercises

### 1. Searching for a name again

Just like the execise we did in filter, but now find the _last_ person in the array with the letter 'a' in his/her name.

```json
  ["frodo baggins", "samwise gamgee", "gandalf", "aragorn", "legolas greenleaf", "gimli"]
```

```ts
  const arr = ['frodo baggins', 'samwise gamgee', 'gandalf', 'aragorn', 'legolas greenleaf', 'gimli'];

  const reduceFind = arr.reduce((previousItem:string[] | undefined, currentItem) => {
    if(currentItem.includes('a')){
      return currentItem
    }else{
      return previousItem
    }
  },undefined);

  console.log('reduceFind', reduceFind) // 'legolas greenleaf'
```