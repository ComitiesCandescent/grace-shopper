import createHistory from 'createBrowserHistory'
import createMemoryHistory from 'createMemoryHistory'

const history =
  process.env.NODE_ENV === 'test' ? createMemoryHistory() : createHistory()

export default history
