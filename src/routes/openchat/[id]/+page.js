import peopleData from "$lib/utils/data.json";

export function load({ params }) {
  const people = peopleData.find(
    (people) => people.name.toLowerCase() === params.id.toLowerCase()
  );
  console.log(params.id);
  return {
    people,
  };
}
