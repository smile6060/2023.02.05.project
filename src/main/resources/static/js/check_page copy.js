window.onload = () => {
	ComponentEvent.getInstance().addClickEventReserveButton();
	ReserveInquireService.getInstance().loadReserveData();

	ReserveInquireService.getInstance().onLoadCheck();
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

class ReserveInquireApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new ReserveInquireApi();
		}
		return this.#instance();
	}

	getReserveData() {
		$.ajax({
			async: false,
			type: "post",
			url: "http://localhost:8000/check/page",
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

class ReserveInquireService {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new ReserveInquireService();
		}
		return this.#instance();
	}

	// setReserveId() {
	// 	const URLInqire = new URLInqireParams(location.search);

	// 	reserveObj.reserveId = URLInqire.get("reserveId");
	// }

	onLoadCheck() {
        const URLSearch = new URLSearchParams(location.check);
        if(URLSearch.has("reserveId")){
            const reserveId = URLSearch.get("reserveId");
            if(reserveId == "") {
                return;
            }
            const inputOne = document.querySelector(".input-one");
            inputOne.value = reserveId;
			const inputTwo = document.querySelector(".input-two");
            inputTwo.value = reserveId;
            const reserveButton = document.querySelector(".reserve-button");
            reserveButton.click();
        }
    }

// 이거 지금 이벤트에 추가 안했음
	loadErrorMessage() {
		const responseData = ReserveInquireApi.getInstance().getReserveData();

		if(responseData.dinningMst == null) {
			alert("등록되지 않은 예약 정보입니다.");
			history.back();
			return;
		}

		// const inputOne = document.querySelectorAll(".input-one")
		// inputOne.values = responseData.dinningMst.reserveId;

		// const inputTwo = document.querySelectorAll(".input-two")
		// inputTwo.values = responseData.dinningMst.reserveName;
		// inputTwo.values = responseData.dinningMst.number;

		// if(responseData.reservePage != null) {
		// 	reserveObj.reserveId = responseData.reservePage.reserveId;
		// 	reserveObj.reserveName = responseData.reservePage.reserveName;
		// 	reserveObj.number = responseData.reservePage.number;
		// }
	}

    loadReserveData() {
		const reserveData = document.querySelector(".reserve-data");

		const responseData = ReserveInquireApi.getInstance().getReserveCheck();
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
        const inputOne = document.querySelector(".input-one");
        const inputTwo = document.querySelector(".input-two");
        reserveButton.onclick = () => {
			if(inputOne.value == "") {
				alert("예약번호를 입력해주세요.")

				return false;
			}
			if(inputTwo.value == "") {
				alert("전화번호 또는 이름을 입력해주세요.")

				return false;
			}
			location.href = `http://localhost:8000/check?reserveId=${inputOne.value}`;
			inputOne.onkeyup = () => {
				if (window.event.keyCode == 13) {
					reserveButton.click();
				}
            }
			ReserveInquireService.getInstance().loadReserveData();
        }
    }

}

