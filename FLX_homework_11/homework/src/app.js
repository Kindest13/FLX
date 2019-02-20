// creation
const createElement = (tag, attributes, innerText) => {
    const newElem = document.createElement(tag);
    if(Object.keys(attributes).length) {
        for(let prop in attributes) {
            if(attributes.hasOwnProperty(prop)) {
                newElem.setAttribute(prop, attributes[prop]);
            }
        }
    }

    if(innerText) {
        newElem.appendChild(document.createTextNode(innerText));
    }

    return newElem;
}

const rootNode = document.querySelector('section');
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const listIsFull = createElement('p', {'class': 'fullListMsg'}, 'Maximum item per list are created');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const maxItems = 10;
let countItems = 0;


header.insertBefore(listIsFull, h1.nextSibling);

input.addEventListener('input', () => {
    button.disabled = false;
} );

button.addEventListener('click', () => {
    addNewItem(input.value.trim());
} );





function addNewItem(text) {
    const listItem = createElement('li', {'class': 'todo-cat_list-item', draggable: true});
    const textAction = createElement('span', {}, text);
    const markAction = createElement('i', {'class': 'material-icons mark-item'}, 'check_box_outline_blank');
    const deleteAction = createElement('i', {'class': 'material-icons remove-item'}, 'delete');

    let marked = true;
    markAction.addEventListener('click', () => {
        if(marked) {
            markAction.innerText = 'check_box';
            marked = false;
        } else {
            markAction.innerText = 'check_box_outline_blank';
            marked = true;
        }
    } );

    deleteAction.addEventListener('click', () => {
        list.removeChild(deleteAction.parentElement);
        countItems--;
		input.disabled = false;
		listIsFull.style.display = 'none';
    } );

    listItem.appendChild(markAction);
    listItem.appendChild(textAction);
    listItem.appendChild(deleteAction);
  
    dragndrop(list);
    
    if(++countItems >= maxItems) {
        input.disabled = true;
		listIsFull.style.display = 'block';
    }

    button.disabled = true;
    input.value = '';

    list.appendChild(listItem);
}



// Dragging
function dragndrop(list) {
    let dragged = null;


    list.addEventListener('dragstart', function( event ) {
        // store a ref. on the dragged elem
        dragged = event.target;
    } );  
    /* events fired on the drop targets */
    list.addEventListener('dragover', function( event ) {
        // prevent default to allow drop
        if ( event.target.className === 'todo-cat_list-item' ) {
            event.preventDefault();   
            const bounding = event.target.getBoundingClientRect();
            const ZERO = 0;
            const HALF = 2;
            const offset = bounding.y + bounding.height / HALF;
            if(event.clientY - offset > ZERO) {
                event.target.style.borderBottom = '2px dashed #ccc';
                event.target.style.borderTop = '';
            } else {
                event.target.style.borderTop = '2px dashed #ccc';
                event.target.style.borderBottom = '';
            }
        }
    } );

    list.addEventListener('dragleave', function( event ) {
        event.target.style.border = ''; 
    });

    list.addEventListener('drop', function( event ) {
    // prevent default action (open as link for some elements)
        // move dragged elem to the selected drop target
        if ( event.target.className === 'todo-cat_list-item' ) {
            event.preventDefault();

            if(event.target.style.borderTop) {
                event.target.style.borderTop = '';
                list.insertBefore(dragged, event.target);    
            } else if(event.target.style.borderBottom) {
                event.target.style.borderBottom = '';
                list.insertBefore(dragged, event.target.nextSibling);
            }
        }
    } );
}
