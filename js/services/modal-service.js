angular.module('app')
    .value('Modal', {value: false, data: {}})
    .service('modal', ['Modal', ModalService]);

function ModalService(Modal) {

    this.toggle = function () {
        return Modal.value = !Modal.value;
    }

    this.setData = function (data) {
        return Modal.data = data;
    }
}
