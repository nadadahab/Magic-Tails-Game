$(document).ready(function () {

    id = 0;
    arr = [];
    time = 500;
    interval = 0;
    arr2 = [];
    arr3 = [];
   
    $("#size").on("change", function () {
        
           $("#body").html("");
        sizee = $(this).val();
        size = parseInt(sizee)
        createTable(size); 
        
        
    });


    $("#time").on("change", function () {

        if(interval){
        time = ($(this).val()) ;
        clearInterval(interval);
        interval = setInterval(function () {
            getneighbour()
        },time);
        }
        

    });

    $("#reset").click(function () {
        $("#body").html("");
        id = 0;
        arr = [];
        time = 500;
        interval = 0;
        arr2 = [];
        arr3 = [];
   

        createTable(size);
    });

    $("#start").click(function () {

        if (start.innerHTML == "Start")
        {
            start.innerHTML = "Stop"
             
            interval = setInterval(function () {
                 arr3.push($('table').clone(true));
                getneighbour()
            }, time)
        } else {

            clearInterval(interval);
            start.innerHTML = "Start";
            interval = false;
        }
    });

    $("#next").click(function () {
        arr3.push($('table').clone(true)); 
        getneighbour();
     
    });
    
    $("#previous").click(function () {

        var temp=arr3.pop();
        console.log(arr3);
        if(arr3.length >0)
        {
            console.log(temp);
        	 $('#body').html("");
        	 $('#body').append(temp);
        }
       
    });


    function createTable(size)
    {

        var table = document.createElement("Table");
        $(table).attr("id", "table");

        table.align = "center";

        table.setAttribute('border', 1);
        for (var i = 0; i < size; i++)
        {
            var row = document.createElement("tr");


            for (var j = 0; j < size; j++)
            {

                var col = document.createElement("td");
                $(col).attr("class", "divvv");
                $(col).attr("id", id);

                row.appendChild(col);
                id++;
            }

            table.appendChild(row);
        }
        $("#body").append(table);

        $(".divvv").click(function () {
            var cell = String($(this).css('background-color'));

            if (cell == 'rgba(0, 0, 0, 0)')
            {
                $(this).css('background-color', 'red');

            } else
            {
                $(this).css('background-color', 'rgba(0 , 0, 0, 0)');

            }


        });
    }



    function getneighbour()
    {
        var bbb = 2;
        var aaa = 1;

         

        for (var i = 0; i < size * size; i++)
        {

            if (i == 0)
            {
                arr[i] = [i + 1, i + size, i + (size + 1)]
            } else if (i == (size - 1))
            {
                arr[i] = [i - 1, i + size, i + (size - 1)]
            } else if ((i == (size * size) - 1))
            {
                arr[i] = [i - 1, i - size, i - (size + 1)]
            } else if (i == (size * size) - size)
            {
                arr[i] = [i + 1, i - size, i - (size + 1)]
            } else if (((size - 1) > i) && (i > 0))
            {
                arr[i] = [i - 1, i + 1, i + size, i + (size + 1), i + (size - 1)]
            } else if ((((size * size) - size) < i) && (i < ((size * size) - 1)))
            {
                arr[i] = [i + 1, i - 1, i - size, i - (size + 1), i - (size - 1)]
            } else if (i == (aaa * size))
            {

                arr[i] = [i - size, i + size, i + (size + 1), i + 1, i - (size - 1)]
                aaa++;
            } else if (i == (bbb * (size) - 1))
            {
                arr[i] = [i - size, i + size, i - 1, i - (size + 1), i + (size - 1)]
            } else
            {
                arr[i] = [i - 1, i + 1, i + size, i - size, i + size + 1, i - size + 1, i + size - 1, i - size - 1];
            }




            var countactive = 0;

            for (var k = 0; k < arr[i].length; k++)
            {


                var ncell = $('#' + arr[i][k]);

                if ($(ncell).css('background-color') == 'rgb(255, 0, 0)')
                {
                    countactive++;

                }


            }



            if ($('#' + i).css('background-color') == 'rgb(255, 0, 0)')
            {
                if (countactive < 2)
                {
                    arr2[i] = 0;
                } else if ((countactive == 2) || (countactive == 3))
                {
                    arr2[i] = 1;
                } else if (countactive > 3)
                {
                    arr2[i] = 0;
                }

            } else
            {
                if (countactive == 3)
                {
                    arr2[i] = 1;
                } else {
                    arr2[i] = 0;
                }
            }


        }
        for (var j = 0; j < arr2.length; j++)
        {

            if (arr2[j] == 1)
            {
      
                $('#' + j).css('background-color', 'red');
            } else {
                $('#' + j).css('background-color', 'rgba(0 , 0, 0, 0)');
            }
         
        }
               

                  
    }

});