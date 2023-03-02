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

	

        // responseData.forEach((data, index) => {
        //     bookListBody.innerHTML += `
        //         <tr>
        //             <td><input type="checkbox" class="delete-checkbox"></td>
        //             <td class="book-id">${data.bookId}</td>
        //             <td>${data.bookCode}</td>
        //             <td>${data.bookName}</td>
        //             <td>${data.author}</td>
        //             <td>${data.publisher}</td>
        //             <td>${data.publicationDate}</td>
        //             <td>${data.category}</td>
        //             <td>${data.rentalStatus == "Y" ? "대여중" : "대여가능"}</td>
        //             <td><a href="/templates/admin/book_modification.html?bookCode=${data.bookCode}"><i class="fa-solid fa-square-pen"></i></a></td>
        //         </tr>
        //     `;
        // });

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
