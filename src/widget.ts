import { Company } from "./company"

export type Widget = {
  id: number
  name: string
  color: WidgetColor
  company: Pick<Company, 'id' | 'name'>
}

export type WidgetColor = 'red' | 'blue' | 'green'