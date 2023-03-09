window.onclick = () => {
    ComponentEvent.getInstance().addClickEventReserveButton();
}

class ComponentEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ComponentEvent();
        }
        return this.#instance;
    }
    
    addClickEventReserveButton() {
        const reserveButton = document.querySelector(".reserve-button");

        reserveButton.onclick = () => {
            alert("클릭됨");
            
            var listVar1 = $('#reserve-number1').val();

            console.log(listVar1);
        }
    }
}

