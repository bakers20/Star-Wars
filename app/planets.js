import GenericListScreen from "./GenericListScreen";

export default function PlanetsScreen() {
  return (
    <GenericListScreen
      apiUrl="https://www.swapi.tech/api/planets"
      titleKey="name"
    />
  );
}
