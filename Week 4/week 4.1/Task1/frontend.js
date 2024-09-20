const button = document.getElementById("btn");

async function calculateResult(){
    // Fetch input values inside the function to get updated values
    const input1 = document.getElementById("fnumber").value;
    const input2 = document.getElementById("snumber").value;

    console.log(typeof input1); // This will now reflect updated value
    console.log(typeof input2);

    const url = `http://localhost:8080/sum?a=${input1}&b=${input2}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Invalid input or server error");
        }
        const data = await response.text();
        document.getElementById("display").innerHTML = `Sum of ${input1} and ${input2} is ${data}`;
    } catch (error) {
        console.log(error);
        document.getElementById("display").innerHTML = error.message;
    }
}

button.addEventListener("click", calculateResult);