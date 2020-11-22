export const makeIngredientsList = (list: ListType) => {
  return (list as ListItem[]).map(
    (x: ListItem) => x.node.ingredients?.ingredients
  )
}

export const uniqueList = (list: string[]): string[] =>
  list.filter((item, index) => list.indexOf(item) === index)

export const getIngredientList = (
  burgers: NodeType<Burger>[],
  sides: NodeType<Side>[]
) => {
  const burgersIngredients = makeIngredientsList(burgers)
  const sideIngredients = makeIngredientsList(sides)

  const xs = [...burgersIngredients, ...sideIngredients].flat() as string[]

  return uniqueList(xs)
}

export const filterListByIngredient = (selectedIngredient: string) => (
  list: ListType
) =>
  (list as ListItem[])
    .map(
      (x: ListItem) =>
        x.node.ingredients?.ingredients.includes(selectedIngredient) && x
    )
    .filter(Boolean)

export const renderList = (selectedIngredient: string) => (
  originalList: ListType,
  filteredList: ListType
) => (selectedIngredient.length === 0 ? originalList : filteredList)
