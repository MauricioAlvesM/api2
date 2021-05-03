fetch('https://my-json-server.typicode.com/MauricioAlvesM/api2/produtos')
  .then(response => response.json())
  .then(json => {
    const div = document.getElementById("conteudo");
    div.innerText = JSON.stringify(json)
    //div.innerText = JSON.stringify(json.title)
  })