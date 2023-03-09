window.onclick = () => {
    ComponentEvent.getInstance().addClickEventReserveButton();
}

$(document).ready(function(){
	
	$('ul.reserve-search li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.reserve-search li').removeClass('current');
		$('.serve-container').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

class ReservePageApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new ReservePageApi();
		}
		return this.#instance();
	}

    
    check(checkReserve) {
        $.ajax({
            async: false,
            type: "post",
            url: "http://localhost:8000/api/reserve/page/{reserveId}",
            contentType: "application/json",
            data: JSON.stringify(checkReserve),
            dataType: "json",
            success: response => {
                responseData = response.data;
                alert(responseData);
            },
            error: error => {
                console.log(error);
                alert(error);
            }
        });
        return responseData;
    }
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
            const reserveIdValue = document.querySelectorAll(".input-contents")[0].value;
            const numberValue = document.querySelectorAll(".input-contents")[1].value;
            const reserveNameValue = document.querySelectorAll(".input-contents")[3].value;
       
            const checkReserve = new CheckReserve(reserveIdValue, reserveNameValue, numberValue);

            console.log(checkReserve);

            location.href = `http://localhost:8000/check?reserveId=${reserveIdValue}&number=${numberValue}`;
            
            ReservePageApi.getInstance().check(checkReserve);
        }
    }
}

class CheckReserve {
    reserveId = null;
	reserveName = null;
	number = null;

    constructor(reserveId, reserveName, number) {
        this.reserveId = reserveId;
        this.reserveName = reserveName;
        this.number = number;
    }
}


