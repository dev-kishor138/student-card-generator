const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;

    inputField.value = '';
    return inputValue;
}

const preview = document.getElementById("preview");
function loadImage(event){
    const image = document.getElementById('imgDisplayed');
    image.src = URL.createObjectURL(event.target.files[0]);
}
preview.addEventListener('click', () => {
    const name = getInputValue('name');
    const email = getInputValue('email');
    const address = getInputValue('address');
    const contact = getInputValue('number');

    

    const cardContainer = document.querySelector('.students');
    cardContainer.innerHTML = `
        <div class="card">
            <div class="img-box">
                <img src='function loadImage(event){
                    const image = document.getElementById('imgDisplayed');
                    image.src = URL.createObjectURL(event.target.files[0]);
                }' alt="Student Picture">
            </div>
            <div class="text-box">
                <h3>${name}</h3>
                <p>${email}</p>
                <p>${address}</p>
                <p>${contact}</p>
            </div>
        </div>
    `;
})
// const getAllData = () => {
//     const name = getInputValue('name');
//     const email = getInputValue('email');
//     const address = getInputValue('address');
//     const contact = getInputValue('number');
//     const img = getInputValue('file');

//     const cardContainer = document.querySelector('.students');
//     cardContainer.innerHTML = `
//         <div class="card">
//             <div class="img-box">
//                 <img src="${img}" alt="Student Picture">
//             </div>
//             <div class="text-box">
//                 <h3>${name}</h3>
//                 <p>${email}</p>
//                 <p>${address}</p>
//                 <p>${contact}</p>
//             </div>
//         </div>
//     `;
// }

// const inName = document.getElementById("inName").value;
// const inBirth = document.getElementById("inBirth").value;
// const inField = document.getElementById("inField").value;
// const inYear = document.getElementById("inYear").value;
// const inNum = document.getElementById("inNum").value;





// function prev(){
//     const name = document.getElementById("name");
//     const birth = document.getElementById("birth");
//     const fieldYear = document.getElementById("fieldYear");
//     const num = document.getElementById("num");
//     console.log(inName);
//     name.innerHTML = inName;
//     birth.innerHTML = inBirth;
//     fieldYear.innerHTML = inField + inYear;
//     num.innerHTML = inNum;
// }
