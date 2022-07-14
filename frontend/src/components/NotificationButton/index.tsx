import icon from '../../Assets/img/notification-icon.svg' //importa a imagem para esse arquivo
//react o src tem que ser referenciado pelas chaves
import './styles.css' //mesma pasta -> .
function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notificar" />
            </div>
        </>

    )
}

export default NotificationButton