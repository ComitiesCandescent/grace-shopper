import createHistory from '../../../Library/Caches/typescript/2.9/node_modules/@types/history/createBrowserHistory'
import createMemoryHistory from '../../../Library/Caches/typescript/2.9/node_modules/@types/history/createMemoryHistory'

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

export default history
