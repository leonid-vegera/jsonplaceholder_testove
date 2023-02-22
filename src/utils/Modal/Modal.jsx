import './modal.scss';
import classNames from "classnames";

export const Modal = ({active, setActive, children}) => {
  const modalCloseHandler = () => {
    setActive(false);
    // eslint-disable-next-line no-restricted-globals
    history.back();
  }
  return (
    <div
      className={classNames('modal', {'modal--active': active})}
      onClick={modalCloseHandler}
    >
      <div
        className={classNames('modal__field', {'modal__field--active': active})}
        onClick={(event) => {
          event.stopPropagation();
          window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
              console.log('event.key', event.key)
              return modalCloseHandler();
            }
          })
        }}
      >
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}
