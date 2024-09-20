const button = document.getElementById("btn");

async function calculateResult(){
    // Fetch input values inside the function to get updated values
    const input1 = document.getElementById("principle").value;
    const input2 = document.getElementById("rate").value;
    const input3 = document.getElementById("time").value;

    const url = `http://localhost:5000/si?a=${input1}&b=${input2}&c=${input3}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Invalid input or server error");
        }
        const data = await response.text();
        document.getElementById("display").innerHTML = `Simple interest is ${data}`;
    } catch (error) {
        console.log(error);
        document.getElementById("display").innerHTML = `Error : ${error.message}`;
    }
}

button.addEventListener("click", calculateResult);