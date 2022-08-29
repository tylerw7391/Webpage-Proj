function displayText(a, e)
{
    a.innerHTML = e.length;
}

function addCell(num)
{
    var table = document.getElementById("theTable");
    var row = table.insertRow();
   
    //this function accepts a number (stored in the HTML file), 
    //then uses that number to assign a unique ID to each row. 
    //This way, each output object can be referenced individually
    row.innerHTML = '<tr> ' +
                '<td><input type="text" id="textInput' + num.number + '" size="20" placeholder="Enter Input:" oninput="displayText(document.getElementById(\'output' + num.number +
                '\')' +
                ', this.value)"</td>' +
                '<td><p id="output' + num.number +
                '" >0</p></td>' +
            '</tr>';
    num.number++;
}

function removeCell(num)
{
    var table = document.getElementById("theTable");
    if(table.rows.length >= 3)
    {
        table.deleteRow(num.number);
        num.number--;
    }
}

function sort()
{
    var table = document.getElementById("theTable");
    var rows = table.rows;
    var numStor = [rows.length];
    
    console.log('rows length: ' + rows.length);
    
    //seperate out the contents of the textboxes before the sort.
    //otherwise, the data will be lost.
    for(i = 0; i < rows.length-1; i++)
    {
        numStor[i] = document.getElementById("textInput"+i).value;
        console.log('value:' + document.getElementById("textInput"+i).value);
    }
    
    //sort is by the length of input, lowest to highest
    //below is a simple insertion sort
    //it sorts all columns into numerical length of input. lowest to highest.
    
    var z = 1;
    while(z < rows.length)
    {
        var x = z;
        while(x > 1 && parseInt(rows[x-1].cells.item(1).textContent) > parseInt(rows[x].cells.item(1).textContent))
        {
            var temp = rows[x].innerHTML;
            rows[x].innerHTML = rows[x-1].innerHTML;
            rows[x-1].innerHTML = temp;
            x--;
        }
        //console.log('helloouter, values: x = ' + x + ' z = ' + z + ' comparison: ' + parseInt(rows[x-1].cells.item(1).textContent) + ' > ' + parseInt(rows[x].cells.item(1).textContent));
        z++;
    }
    
    //post-sort, reunite the textboxes with their long-lost data values.
    for(i = 0; i < rows.length-1; i++)
    {
        document.getElementById("textInput"+i).value = numStor[i];
        console.log('value:' + document.getElementById("textInput"+i).value);
    }
}