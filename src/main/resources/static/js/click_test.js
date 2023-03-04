window.onclick = () => {
    ComponentEvent.getInstance().addClickEventReserveButton();
}

class ReservePageApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new ReservePageApi();
		}
		return this.#instance();
	}

    /*check(checkReserve) {
		$.ajax({
			async: false,
			type: "post",
            url: "http://localhost:8000/api/reserve/page/{reserveId}",
			contentType: "application/json",
			data: JSON.stringify(checkReserve),
			dataType: "json",
			success: response => {
                console.log(response);
				alert("예약정보 확인 완료. 예약조회 페이지로 이동합니다.");
                location.replace("/check");
			},
			error: error => {
				console.log(error);
			}
		})
	}*/
    
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
            },
            error: error => {
                console.log(error);
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
            const reserveNameValue = document.querySelectorAll(".input-contents")[1].value;
            const numberValue = document.querySelectorAll(".input-contents")[2].value;
       
            const checkReserve = new CheckReserve(reserveIdValue, reserveNameValue, numberValue);

            console.log(checkReserve);

            location.href = `http://localhost:8000/check?reserveId=${reserveIdValue.value}`;

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


