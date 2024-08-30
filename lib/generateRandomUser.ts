export const generateRandomUsername = (length = 8) => {
  const adjectives = [
    "Bright",
    "Funny",
    "Silent",
    "Clever",
    "Brave",
    "Happy",
    "Sly",
    "Wise",
    "Bold"
  ]

  const nouns = [
    "Lion",
    "Tiger",
    "Elephant",
    "Monkey",
    "Dog",
    "Cat",
    "Mouse",
    "Horse",
    "Cow",
    "Falcon"
  ]

  const randomItem = (array: any) => array[Math.floor(Math.random() * array.length)]

  let username = ''

  username += randomItem(adjectives)
  username += randomItem(nouns)
  username += Math.floor(Math.random() * 10000)

  if (username.length > length) {
    username = username.substring(0, length)
  }

  return username
}
