window.onload = () => {
	
}

class CheckApi {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new CheckApi();
		}
		return this.#instance;
	}

	check() {
		$.ajax({
			async: false,
			type: "post",
			url: "http://localhost:8000/check",
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

class CheckService{
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new CheckService();
		}
		return this.#instance;
	}
	

}

class ComponetEvent {
	static #instance = null;
	static getInstance() {
		if(this.#instance == null) {
			this.#instance = new ComponetEvent();
		}
		return this.#instance;
	}
	addClickEventHomeButton() {
		const homeButton = document.querySelector(".home-button");

		homeButton.onclick = () => {
			
		}
	}

}
