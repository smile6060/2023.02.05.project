window.onload = () => {
	CheckService.getInstance().loadReserveData();
	ComponentEvent.getInstance().addClickEventDeleteButton();
}

const URLSearch = new URLSearchParams(location.search);

class CheckApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new CheckApi();
		}
		return this.#instance;
	}

	getReserveData() {
		let returnData = null;

		$.ajax({
			async: false,
			type: "get",
			url: "http://localhost:8000/api/search/contents",
			data: {
				reserveId : URLSearch.get("reserveId"),
				number : URLSearch.get("number")
			},
			dataType: "json",
			success: response => {
				console.log(response);
                returnData = response.data;
			},
			error: error => {
				console.log(error);
			}
		});

		return returnData;
	}

}

class CheckService{
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new CheckService();
		}
		return this.#instance;
	}

	loadReserveData() {
		const responseData = CheckApi.getInstance().getReserveData();
		const reserveContents1 = document.querySelector(".reserve-contents1 tbody");
		const reserveContents2 = document.querySelector(".reserve-contents2 tbody");
		const reserveContents3 = document.querySelector(".reserve-contents3 tbody");
		reserveContents1.innerHTML = "";
		reserveContents2.innerHTML = "";
		reserveContents3.innerHTML = "";

		responseData.forEach(data => {
			reserveContents1.innerHTML += `
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
		responseData.forEach(data => {
			reserveContents2.innerHTML += `
				<tr>                       
					<th>예약일</th> 
					<td>${data.reserveDate}</td>
				</tr>
				<tr>
					<th>예약시간</th>
					<td>${data.reserveTime}</td>
				</tr>
			`;
		});
		responseData.forEach(data => {
			reserveContents3.innerHTML += `
				<tr> 
					<th>대인</th>
					<td>${data.adult}명</td>
				</tr>
				<tr>
					<th>소인</th>
					<td>${data.child}명</td>
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

	addClickEventDeleteButton() {
		const deleteButton = document.querySelector(".delete-button");

		deleteButton.onclick = () => {
			alert("정말로 예약을 취소하시겠습니까?");
		}
	}
}
