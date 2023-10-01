
function newImage(url ,left,bottom ){     //created a function named newImage which the parameters are url,left, bottom
    let object = document.createElement('img')
    object.src = url 
    object.style.position = 'fixed' //here we are linking to our CSS with style im guessing... 
    object.style.left = left + 'px' //here we are adding 'px' due to 100px not being recognized as a number of pixels by java script. 
    object.style.bottom = bottom + 'px' //same as above, when trying to add 100px to newImage('assets...gif' , 100px,100px) and stoped seeing it as a number
    document.body.append(object) //shows object on the screen
    return object
    
}
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450,200)
newImage('assets/tree.png', 200,300)
newImage('assets/pillar.png', 350,100)
newImage('assets/crate.png', 150,200)
newImage('assets/well.png', 500,425)


// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'    //remember to add style without it it does not work . 
// sword.style.bottom = '405px'
// document.body.append(sword)



function newItem (url,left,bottom){
    let object = newImage(url, left, bottom)  //this is so much easier

    object.addEventListener('dblclick', () => {      
        object.remove()
    })


    // let object = document.createElement('img') 
    // object.src = url
    // object.style.position = 'fixed'
    // object.style.left = left + 'px'
    // object.style.bottom = bottom + 'px'
    // document.body.append(object)
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)



//   let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)  









// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)