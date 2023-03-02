window.onload = () => {
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
			url: "http://localhost:8000/api/reserve/Page/{reserveId}",
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
		console.log("api 정상 작동");
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
			console.log("온로드체크 정상작동");
        }
		this.setReserveData();
		
    }

    setReserveData() {
		const responseData = ReservePageApi.getInstance().reserveObj();
		const reserveData = document.querySelector(".reserve-data");
		reserveData=innerHTML = ``;
		
		responseData.forEach(data => {
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
			console.log("reserveButton 버튼 인식함");
			if(inputOne.value == "") {
				alert("예약번호를 입력해주세요.")
				return false;
			} else {
				location.reload();
			}
			if(inputTwo.value == "") {
				alert("전화번호 또는 이름을 입력해주세요.")
				return false;
			} else {
				location.reload();
			}

			location.href = `http://localhost:8000/check?reserveId=${inputOne.value}`;
			inputOne.onkeyup = () => {
				if (window.event.keyCode == 13) {
					reserveButton.click();
				}
            }
			ReservePageService.getInstance().setReserveData();
			ReservePageService.getInstance().onLoadCheck();
			console.log("ReservePageService 작동됨");
        }
    }

}

