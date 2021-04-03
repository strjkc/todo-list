/*let a = $(  `<li>
        <div>
            <input type="checkbox">
        </div>
        <p></p>
        <div>
            <img>
        </div>
    </li>`)
console.log(a)
*/
$(document).ready(() => {
    let ul  = $('.list-wrapper')
    const createTask = (textForTask) => {
        console.log('running')
        let listItem = $('<li></li>')
        let checkBoxWrapper = $('<div></div>')
                            .addClass('checkbox-wrapper')
        let inputElement = $('<input>')
                            .attr('type', 'checkbox')
                            .addClass('check-button')
                            .appendTo(checkBoxWrapper)
        let pTag = $('<p></p>')
                    .text(textForTask)
        let imgWrapper = $('<div></div>')
                        .addClass('img-wrapper')
        let imgTag = $('<img>')
                    .attr('src', 'Materials/trash.svg')
                    .appendTo(imgWrapper)
        listItem.append(checkBoxWrapper, pTag, imgWrapper)
        $('ul').append(listItem)
        console.log($('ul'))
    }
    
    $('.input-wrapper').submit(e => {
        e.preventDefault()
        let inputField = $('#task-input')
        if (!inputField.val())
            inputField.attr('placeholder', 'Please enter task name first') 
        else{
                createTask( inputField.val())
                inputField.val('')
                inputField.attr('placeholder', 'A task you want to complete')    
            }
            console.log($('.check-button'))
        })

    $('ul').on('change', 'input', function() {
        $(this).parent().next().toggleClass('done')
    })
    $('ul').on('click', '.img-wrapper', function(){
        $(this).parent().remove()
    })

    $('#tasks').sortable()
    
})
