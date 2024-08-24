import peopleData from "$lib/utils/data.json";

export function load() {
  return {
    people: peopleData.map((people) => ({
      slug: people.name,
      title: people.name,
    })),
  };
}
