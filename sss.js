	document.querySelectorAll(".accordion__header").forEach((item)=> {
		item.addEventListener("click", ()=> {
			const parent = item.parentNode;

			if (parent.classList.contains("active")) {
				parent.classList.toggle("active");
			} else {
				document.querySelectorAll(".accordion__header")
				.forEach((child) => child.classList.remove("active"))
				parent.classList.add("active");
			}
		})
	})
	
	
	const slider = document.querySelector(".reviews__container");
	let offSet = 0;






		document.querySelector(".reviews__btn--next").addEventListener("click", function () {
			offSet = offSet + 1000;
			if (offSet > 1000) {
				offSet = 0;
			}
			slider.style.left = -offSet + "px";
		})	

		document.querySelector(".reviews__btn--prev").addEventListener("click", function () {
			offSet = offSet - 1000;
			if (offSet < 0) {
				offSet = 1000;
			}
			slider.style.left = -offSet + "px";
		})
	
		let offSet2 = 0;
		const slider2 = document.querySelector(".reviews__container2");

		document.querySelector(".reviews__btn--next2").addEventListener("click", function () {
			offSet2 = offSet2 + 1000;
			if (offSet2 > 1000) {
				offSet2 = 0;
			}
			slider2.style.left = -offSet2 + "px";
		})	

		document.querySelector(".reviews__btn--prev2").addEventListener("click", function () {
			offSet2 = offSet2 - 1000;
			if (offSet2 < 0) {
				offSet2 = 1000;
			}
			slider2.style.left = -offSet2 + "px";
		})
	

	document.querySelector('.email').addEventListener("click", function () {
		this.classList.add("magic");	
	})
   	

	let nav_links = document.querySelectorAll(".nav__link");

	nav_links.forEach((item) => {
		item.addEventListener("click", function () {
			
			let data = event.target.dataset["class"];

			alert(data);
		});
	});







































































































































































