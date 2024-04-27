import Widgets from './widgets'
import Copyright from './copyright'
import { footerContemporary } from './data'
const { widgets, payment } = footerContemporary

const FooterTwo: React.FC = () => {
  return (
    <footer className=' border-heading pt-9 md:pt-11 lg:pt-16 3xl:pt-20  2xl:pt-2 bg-black'>
      <Widgets widgets={widgets} variant='contemporary' />
      <Copyright payment={payment} variant='contemporary' />
    </footer>
  )
}
export default FooterTwo
