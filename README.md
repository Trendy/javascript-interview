# JavaScript Interview Application

A sample, vanilla JavaScript web application to be used for a pair programming style interview.

Have the candidate fork the repository, and fire up the application on their machine to get started.

## Scenario

We had an employee start a _*very important*_ project to display a list of photos on our web page. However, the employee was unable to finish before taking emergency leave, and we need _you_ to take a look at the source code and see if you can fix it for us!

## Requirements

- At least 25 photos should display initially.
- The photos should be numbered, and display in order with the title next to the number (I.E. "#2 Some Title Here").
- Below the numbered title should be the thumbnail image.
- The thumbnail image should link to the actual image.
- Optimize to load as quickly as possible.

### Example Output

![Example output](./assets/solution-first.png?raw=true)

## A few things about the source code

This source code is using vanilla JavaScript.

The mock API used is documented here: https://jsonplaceholder.typicode.com/

The mock API will return a document in this format:

```json
{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```

## Stretch Requirements (up to interviewers)

- Add a "Load More" button at the bottom of the list to fetch more photos.
- When the user reaches the end of the list, remove the load more button.
