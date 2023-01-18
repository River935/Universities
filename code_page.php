<!DOCTYPE html>
<html lang="en">
    <!--THIRD PAGE OF country code-->
<head>
    <title>ListOfUni</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="uni_page.css">
</head>
<body bgcolor="#f0fae6">

    <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">Universities</h2>
            </div>
            

            <div class="menu">
                <ul>
                    <li><a href="#" id="allEvents">HOME</a></li>
                    <li><a href="#"id="other1">SEARCH UNI</a></li>
                    <li><a href="#"id="other2">SEARCH CODE</a></li>
                    <li><a href="#" id="map2">MAP</a></li>
                    <li><a href="#" id="map1">GOOGLE MAPS</a></li>
                    <li><a href="#" id="add">ADD UNI</a></li>
                    <li><a href="#" id="cal">CALENDAR</a></li>
                    
                    
                </ul>
            </div>

</head>

<body onload="initNumberOfElements()">
    <!--<script>
        console.log("Hi from the console!");
        function checkPassword () {
            const password = document.getElementById("password").value;
            if (password === "different") {
                console.log("Congratulations! Welcome to my amazing website!");
            } else {
                console.log("Sorry, wrong password.");
            }
        }
    </script>
    <input id="password" label="password" onchange="checkPassword()" />
    <br />-->
    <div class="tabella">
    <h1>
        List of country codes
    </h1>

    <label for="fname">Search for country:</label>
    <input type="search" id="fname" name="fname" onsearch="mySearchFunction()" /><br /><br />

    <label for="cname">Search for code:</label>
    <input type="search" id="cname" name="cname" onsearch="mySearchFunction()" /><br /><br />

    <p>
        Number of elements: <span id="total"></span>
    </p>
    <br />

    <div>


<script>
    function initNumberOfElements () {
        const table = document.getElementById("table");
        const rows = table.getElementsByTagName("tr");
        const numberOfElements = document.getElementById("total");
        console.log(rows, rows.length)
        numberOfElements.innerHTML = rows.length;
    }
    function mySearchFunction () {
        const searchUniversity = document.getElementById("fname").value;
        const searchCountry = document.getElementById("cname").value;
        const table = document.getElementById("table");
        const rows = table.getElementsByTagName("tr");
        const numberOfElements = document.getElementById("total");
        var total = 0;
        if (!searchUniversity && !searchCountry) {
            for (i = 0; i < rows.length; i++) {
                rows[i].style.display = "";
                total++;
            }
        } else {
            for (i = 0; i < rows.length; i++) {
                const fields = rows[i].getElementsByTagName("td");
                if (fields[1]) {
                    const university = fields[1].textContent || fields[1].innerText;
                    const country = fields[0].textContent || fields[0].innerText;
                    if (searchUniversity && searchCountry) {
                        if (university.toLowerCase().includes(searchUniversity.toLowerCase()) &&
                            country.toLowerCase().includes(searchCountry.toLowerCase())) {
                            rows[i].style.display = "";
                            total++;
                        } else {
                            rows[i].style.display = "none";
                        }
                    } else if (searchUniversity && !searchCountry) {
                        if (university.toLowerCase().includes(searchUniversity.toLowerCase())) {
                            rows[i].style.display = "";
                            total++;
                        } else {
                            rows[i].style.display = "none";
                        }
                    } else if (!searchUniversity && searchCountry) {
                        if (country.toLowerCase().includes(searchCountry.toLowerCase())) {
                            rows[i].style.display = "";
                            total++;
                        } else {
                            rows[i].style.display = "none";
                        }
                    }
                }
            }
        }
        numberOfElements.innerHTML = total;
    }
</script>

    
    </table>
    <table id="table">
        <tr>
            <th>code</th>
            <th>name of the country</th>
        </tr>
    <?php
        $filename1 = "country.json";
        $universities1 = json_decode(file_get_contents($filename1), true);
        foreach ($universities1 as $element1 => $value1) {
            echo "<tr>";
            echo "<td>";
            echo $value1['code'];
            echo "</td>";
            echo "<td>";
            echo $value1['countryname'];
            echo "</td>";
            echo "</tr>";
        }
    ?> 
    </table>
</body>
<script src="./script.js"></script>


</html>

