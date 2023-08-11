import Rubric from "./rubric";

export default interface Topics {
  id: number,
  image: string,
  title: string,
  content: string,
  subTopics: Rubric[]
}