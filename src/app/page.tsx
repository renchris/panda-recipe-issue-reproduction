import { css } from '@styled-system/css'
import { ItemTable } from 'components/ItemTable'

const Home = () => (
  <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
    Hello 🐼!
    <ItemTable size="md" />
  </div>
)

export default Home
