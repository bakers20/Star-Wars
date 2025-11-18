import GenericListScreen from "./GenericListScreen";

export default function SpaceshipsScreen() {
  return (
    <GenericListScreen
      apiUrl="https://www.swapi.tech/api/starships"
      titleKey="name"
    />
  );
}
