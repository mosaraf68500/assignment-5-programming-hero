
document.getElementById('text')
.addEventListener('keyup', function(){

    const answer=addParagraph('text');


})



function addParagraph(text) {
    // Create a new <p> element
    let newParagraph = document.createElement('p');
    
    // Create a text node with the text content
    let text = document.createTextNode('This is a new paragraph.');
    
    // Append the text to the <p> element
    newParagraph.appendChild(text);
    
    // Append the <p> element to the <div> element
    document.getElementById('text').appendChild(newParagraph);
}
