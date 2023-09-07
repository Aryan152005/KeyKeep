var selectedRow = null;

//  Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector("main");
    const main = document.querySelector(".login-section");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

// Clear All Fields
function clearFields(){
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#nickname").value = "";
}

//  Add data
document.querySelector(".form-details").addEventListener("submit", (e) => {
    e.preventDefault();

    // get values 
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const nickname = document.querySelector("#nickname").value;



// 
if( username === "" || password === "" || nickname === ""){
    showAlert("Please fill in Details","danger")
} else{
    if (selectedRow == null){
        const list = document.querySelector("#user-list");
        const row = document.createElement("tr");
    
        row.innerHTML = `
            <td>${username}</td>
            <td>${password}</td>
            <td>${nickname}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm Delete">Delete</a>
            </td>
        `;
        list.appendChild(row);
        selectedRow = null;
        showAlert("Details Added","success");
    }
    else{ 
        selectedRow.children[0].textContent = username;
        selectedRow.children[1].textContent = password;
        selectedRow.children[2].textContent = nickname;
        showAlert("Information Edited","info");
    } 
    clearFields();
}
});


