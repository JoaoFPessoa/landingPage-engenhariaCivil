import './style'
import { Logo } from './style'
import whatsapp from '../../assets/images/whatsapp.png'

export default function WhatsAppLogo(){
    return (
        <a href="https://web.whatsapp.com/send?phone=5511999001074">
        <Logo src={whatsapp} alt="whatsapp" />
        </a>
    )
}