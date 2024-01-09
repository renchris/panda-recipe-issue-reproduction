import { defineSlotRecipe } from '@pandacss/dev'

const table = defineSlotRecipe({
  className: 'table',
  slots: ['root', 'body', 'cell', 'footer', 'head', 'header', 'row', 'caption'],
  jsx: ['ItemTable'],
  base: {
    cell: {
      verticalAlign: 'middle',
      backgroundColor: 'red',
    },
  },
})

export default table
