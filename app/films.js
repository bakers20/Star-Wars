import GenericListScreen from "./GenericListScreen";

export default function FilmsScreen() {
  return (
    <GenericListScreen
      apiUrl="https://www.swapi.tech/api/films"
      titleKey="title"
    />
  );
}
