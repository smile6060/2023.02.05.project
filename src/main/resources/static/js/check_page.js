window.onload = () => {
	ComponentEvent.getInstance().addClickEventReserveButton();

	// ReservePageService.getInstance().onLoadCheck();
	// ReservePageService.getInstance().setReserveData();
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

const reserveObj = {
	reserveId: "",
	reserveName: "",
	number: ""
}

class ReservePageApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new ReservePageApi();
		}
		return this.#instance();
	}

	setCheckPage() {
		$.ajax({
			async: false,
			type: "post",
			url: "http://localhost:8000/api/reserve/page/{reserveId}",
			contentType: "application/json",
			data: JSON.stringify(),
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

	setReserveCheck() {
		$.ajax({
			async: false,
			type: "post",
			url: "http://localhost:8000/api/reserve/check",
			contentType: "application/json",
			data: JSON.stringify(),
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

class ReservePageService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ReservePageService();
        }
        return this.#instance;
    }

	onLoadCheck() {
        const URLSearch = new URLSearchParams(location.check);
        if(URLSearch.has("reserveId")){
            const reserveId = URLSearch.get("reserveId");
            if(reserveId == "") {
                return;
            }
            const inputOne = document.querySelector(".input-one");
            inputOne.value = reserveId;

            const reserveButton = document.querySelector(".reserve-button");
            reserveButton.click();
        }
		this.setReserveData();
		
    }

    setReserveData() {
		const responseData = ReservePageApi.getInstance().reserveObj();
		const reserveData = document.querySelector(".reserve-data");
		reserveData=innerHTML = ``;
		
		responseData.forEach((data, index) => {
			reserveData.innerHTML += `
				<tr>                       
					<th>성명(한글)</th>
					<td>${data.reserveName}</td> 
				</tr>
				<tr>                       
					<th>예약번호</th>
					<td>${data.reserveId}</td>
				</tr>
				<tr>
					<th>연락처</th>
					<td>${data.number}</td>
				</tr>        
				<tr>
					<th>이메일</th>
					<td>${data.email}</td>
				</tr>  
			`;
		});
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
		/*var inputResv = document.getElementById("reserve-number1").value;
		var inputTel = document.getElementById("telephone-name1").value;*/

		var listVar1 = $('#reserve-number1').val();
		var listVar2 = $('#telephone-name1').val();

		/*const inputOne = document.querySelectorAll("reserve-number1");
		const inputTwo = document.querySelectorAll("telephone-name1");*/

        reserveButton.onclick = () => {
			console.log(listVar1);
			console.log(listVar2);

	

			if(listVar1.value == null) {
				return false;
			} else {
				location.reload();
			}
			if(listVar2.value == null) {
				return false;
			} else {
				location.reload();
			}

			location.href = `http://localhost:8000/check?reserveId=${listVar1.value}`;
			listVar1.onkeyup = () => {
				if (window.event.keyCode == 13) {
					reserveButton.click();
				}
            }
			ReservePageService.getInstance().onLoadCheck();
			ReservePageService.getInstance().setReserveData();
        }
    }

}

