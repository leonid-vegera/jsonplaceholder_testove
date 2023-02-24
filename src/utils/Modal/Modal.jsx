import './modal.scss';
import classNames from "classnames";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Modal = ({active, setActive, children}) => {
  const navigate = useNavigate();
  const modalCloseHandler = () => {
    setActive(false);
    navigate('/');
  }

  const closeOnEscape = (event) => {
    if (event.key === 'Escape') {
      return modalCloseHandler();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    }
  }, [])

  return (
    <div
      className={classNames('modal', {'modal--active': active})}
      onClick={modalCloseHandler}
    >
      <div
        className={classNames('modal__field', {'modal__field--active': active})}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  )
}
