window.onload = () => {
    ComponentEvent.getInstance().addChangeNameEvent();
}

class ComponentEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ComponentEvent();
        }
        return this.#instance;
    }

    addChangeNameEvent = () => {
        const reservationChange2 = document.getElementById("reservation-change2");

        reservationChange2.onclick = () => {
            const changeName1 = document.querySelector(".change-name1");

            if(changeName1.display == 'block') {
                changeName1.display = 'none';
            }
        }

    } 
}