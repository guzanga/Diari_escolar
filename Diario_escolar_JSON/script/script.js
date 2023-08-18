var criar = document.getElementById("criar")
var expor =  document.getElementById("expor")
var materias = JSON.parse(localStorage.getItem("materia")) || []

// criar
criar.addEventListener("click", function(){
    var conteudo = document.getElementById("novaTarefa")

    var novadiv = document.createElement ("div")
    var divmostrar = document.createElement ("div")
    novadiv.className = "tarefa"

    var input1 = document.createElement("input")
    input1.type = "text"
    input1.className ="input"
    input1.placeholder = "Matéria: "
    var input2 = document.createElement("input")
    input2.type = "text"
    input2.className ="input"
    input2.placeholder = "Anotações: "
    var input3 = document.createElement("input")
    input3.type = "text"
    input3.className ="input"
    input3.placeholder = "Nota: "

    var input4 = document.createElement("input")
    input4.type = "date"
    input4.className ="input"

    var botao = document.createElement("button")
    botao.textContent = "Enviar"

    botao.onclick = function() {

        var obj = {
            materia: input1.value,
            anotação: input2.value,
            nota: input3.value,
            data: input4.value
        }

        materias.push(obj)


        var string = JSON.stringify(materias)
        localStorage.setItem("materia", string)
    }


    var deletar = document.createElement("button")
    deletar.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    deletar.className = "deletar"
    deletar.onclick = function(){
        novadiv.style.display = "none"
    }

    conteudo.appendChild(novadiv);
    novadiv.appendChild(input1);
    novadiv.appendChild(input2);
    novadiv.appendChild(input3);
    novadiv.appendChild(input4)
    novadiv.appendChild(botao); 
    novadiv.appendChild(deletar);

})


function carregarRegistros() {
    for (var item of materias) {
        var conteudo = document.getElementById("novaTarefa")

        var novadiv = document.createElement ("div")
        novadiv.setAttribute("id", "id_"+materias.indexOf(item))

        var divmostrar = document.createElement ("div")
        novadiv.className = "tarefa"

        var input1 = document.createElement("input")
        input1.type = "text"
        input1.className ="input"
        input1.placeholder = "Matéria: "
        input1.value = item.materia
        input1.id = "id_inp1_"+materias.indexOf(item)

        var input2 = document.createElement("input")
        input2.type = "text"
        input2.className ="input"
        input2.placeholder = "Anotações: "
        input2.value = item.anotação
        input2.id = "id_inp2_"+materias.indexOf(item)

        var input3 = document.createElement("input")
        input3.type = "text"
        input3.className ="input"
        input3.placeholder = "Nota: "
        input3.value = item.nota
        input3.id = "id_inp3_"+materias.indexOf(item)

        var input4 = document.createElement("input")
        input4.type = "date"
        input4.className ="input"
        input4.value = item.data
        input4.id = "id_inp4_"+materias.indexOf(item)

        var botao = document.createElement("button")
        botao.textContent = "Enviar"




        var deletar = document.createElement("button")
        deletar.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
        deletar.className = "deletar"
        deletar.setAttribute("data-index", materias.indexOf(item))
        deletar.onclick = function(){
            var index = this.getAttribute("data-index")

            console.log(index, materias[index])
            materias.splice(index, 1)

            var string = JSON.stringify(materias)
            localStorage.setItem("materia", string)

            conteudo.innerHTML = ""
            carregarRegistros()
        }

        var editar = document.createElement("button")
        editar.textContent = "Editar"
        editar.setAttribute("id", "edita")
        editar.setAttribute("data-index", materias.indexOf(item))
        editar.onclick = function(){
            var index = this.getAttribute("data-index")
            var elemento = materias[index]

            console.log()

            elemento.materia = document.querySelector("#id_inp1_" + index).value
            elemento.anotação = document.querySelector("#id_inp2_" + index).value
            elemento.nota = document.querySelector("#id_inp3_" + index).value
            elemento.data = document.querySelector("#id_inp4_" + index).value

            var string = JSON.stringify(materias)
            localStorage.setItem("materia", string)
        }

            
        conteudo.appendChild(novadiv);
        novadiv.appendChild(input1);
        novadiv.appendChild(input2);
        novadiv.appendChild(input3);
        novadiv.appendChild(input4);
        novadiv.appendChild(editar);
        novadiv.appendChild(deletar);
        divmostrar.appendChild(expor)
    }
}

expor.addEventListener("click", carregarRegistros)