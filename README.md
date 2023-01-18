# Universities
Universities search website

This is a simple explanation about the project

the project work on XAMPP version 3.3.0 and Google Version 109.0.5414.74 (Official Build) (64-bit)

The folder 1 needs to be moved inside the htdocs folder of XAMPP and the project will work correctly

index.html is the home page also connected to "HOME" on the top of the page

![image](https://user-images.githubusercontent.com/105315872/213169154-63a1c40e-2d38-4e1a-9eb4-f2d4cb6a9f15.png)


uni_page.php is the second page, with the search tool for the universities is located
also connected to "SEARCH UNI" on top of the page, and to "SEARCH" in the home page

code_page.php is the third page, with the search tool for country name and codes,
also connected to "SEARCH CODE" on top of the page
This page was ideated, becauuse our previous uni_page.php was based on a different data source, which listed the country codes instead of the names of the country,
Later on, we founded our current source, therefore this page wasn't anymore necessary, but we decided to keep it in the code as another reference.

world_map.php is the 4th page, listing an interactive map with the number of universities on every country,
also connected to "MAP" on top of the page
For this page we used 2 javascript file to generate a json file, listing all the names, codes and universities numbers,
we transformed the json file into csv, to finally use it as a base source for the interactive map (universities.csv)
(universities1.csv comes from our previous page, listing the number of universities from the old data source)

"GOOGLE MAPS" comes as a 5th page, it's connected to the original Google Map from google,
That is meant to be used to locate a university.

index2.html is the 6th page, Where is possible to add a favourite university on new universities.
The data is stored in the local storage, thereffore even if refreshed, it's not gonna disappear.
It's possible to add or to delete the new university.
also connected to "ADD UNI" on top of the page.

cal.html is the 7th and last page, with a personal calendar to add eventual deadlines of the university.
Also this page store the data in the local storage.
also connected to "CALENDAR" on top of the page.


If the are some file not used, they have been left on purpose to show the growth of the project


Home page:
-index.html
    connected to:
            script.js                         (connection to all the pages)
            script3.js                          (trasparent world map)
            https://d3js.org/d3.v3.min.js       (trasparent world map)
            https://d3js.org/topojson.v0.min.js (trasparent world map)
            style.css                           (style of the page)


Search uni page:
-uni_page.html
    connected to:
            script.js                               (connection to all the pages)
            style.css                               (style of the page)
            uni_page.css                            (style for this page)
            world_universities_and_domains.json     (source of the json file from github: https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json )
            universities.json                       (NOT USED ANYMORE) from old source

Search code page:
-code_page.php
    connected to:
            script.js                         (connection to all the pages)
            style.css                           (style of the page)
            uni_page.css                        (style of the page)
            country.json                        (source of the table)

Map page:
-world_map.html
    connected to:
            script.js                               (connection to all the pages)
            world_map.css                           (style of the page)
            assets/countries.geojson                (all the country for the map)
            assets/universities.csv                 (country names, uni and number of uni)

Google Map page:
connected from script.js


Add Uni page:
-index2.html
    connected to:
            script.js                         (connection to all the pages)
            index.js                         (add uni tables and local storage)
            style4.css                         (style of the page)
            style1.css                         (style of the page)
            also bootstrap for the stile (linked in the page)

Calendar page:
-cal.html
    connected to:
            script.js                         (connection to all the pages)
            cal.js                         (calendar and local storage)
            cal.css                         (style of the page)
            style.css                         (style of the page)


folder:
\code-country name-amount
used to generate the data of the world map

folder:
\assets
data for the world map


