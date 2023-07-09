const fetchData1 = async () => {
    const ceva =await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(ceva);
}

const fetchData2 = async () => {
    const ceva =await fetch("https://jsonplaceholder.typicode.com/posts").then(response =>{
        console.log(response);
    });
    console.log(ceva);
}

fetchData2();