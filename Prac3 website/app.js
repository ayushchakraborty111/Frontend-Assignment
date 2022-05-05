
function myFunc()
{
    if(document.getElementById('select').checked)
    {
        alert('Please write email id');
    }
    if(document.getElementById('select1').checked)
    {
        alert('Please select phone number');
        func1();
    }
}

function func1()
{
    const inp1 = document.getElementById('select1'); 
    if(typeof(inp1.value) == Number)
    {
        document.getElementById('span1').innerText = "Valid input";
    }
    else
    {
        document.getElementById('span1').innerText = "Invalid input";    
    }
    if(inp1.value ==="" //|| inp1.value.length<10
    )
    {
        document.getElementById('span1').innerText = "Please enter correct number"
    }
    if(inp1.value.length == 10)
    {
        document.getElementById('span1').innerText = "Correct Value";
    }
}