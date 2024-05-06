import Widgets from './widgets'
import Copyright from './copyright'
import { footer } from './data'
const { widgets, payment } = footer

const Footer: React.FC = () => (
  <footer className='border-b-4 border-heading pt-9 md:pt-11 lg:pt-16 3xl:pt-20 2xl:pt-2 bg-black'>
    <Widgets widgets={widgets} />
    <Copyright payment={payment} />
  </footer>
)

export default Footer
