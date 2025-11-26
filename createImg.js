// Create imag Element
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const createPtag = document.createElement('p')

// createPtag.innerText = 'hello this Element created by java script '
// createPtag.classList.add('pClass')
// container.append(createPtag)



btn.addEventListener('click', () => {

    let myhtml = ''

    for (let i = 1; i <= input.value; i++) {

        // first method 

        // const imgDiv = document.createElement('div')
        // const imgTag = document.createElement('img')
        // const ptag = document.createElement('p')
        // imgTag.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
        // ptag.innerText = i
        // imgDiv.classList.add('img-contain')
        // ptag.classList.add('p')

        // imgDiv.append(imgTag, ptag)
        // container.append(imgDiv)


        // second method 

        myhtml += `    <div class='img-contain' >
            <img class="" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="">
        <p class='p' >${i}</p>

        </div>`


    }
    container.innerHTML = myhtml

})
