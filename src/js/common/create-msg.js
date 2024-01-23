import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconXUrl from '../../img/icons/bi-x-octagon.svg';
import iconOkUrl from '../../img/icons/bi_check.svg';

function createErrMsg(msg) {
  iziToast.show({
    message: msg,
    messageColor: '#fafafb',
    messageSize: '16px',
    backgroundColor: '#fc5a5a',
    position: 'topRight',
    closeOnEscape: true,
    close: true,
    icon: 'Icomoon',
    iconUrl: `${iconXUrl}`,
    iconColor: '#fafafb',
  });
}

function createOkMsg(msg) {
  iziToast.show({
    message: msg,
    messageColor: '#fafafb',
    messageSize: '16px',
    backgroundColor: '#82C43C',
    position: 'topRight',
    closeOnEscape: true,
    close: true,
    icon: 'Icomoon',
    iconUrl: `${iconOkUrl}`,
    iconColor: '#fafafb',
  });
}

export { createErrMsg, createOkMsg };
