export const projects = [
  {
    "title": "Personal Shopping App",
    "description":
      `
        A web application where users can create and organize their personal shopping lists by categories 
        as well as create wish lists of the products they like (similar to ‘Amazon Lists’).
        `,
    "prog_lang": 'Javascript, Nodejs',
    "technologies": "React, MaterialUI, MongoDB, Express",
    "links": ["https://github.com/fernanda-palacios/personal-shopping-app"]
  },
  {
    "title": `
        Project for the City of Toronto`,
    "description":
      `
        This project was part of CSC301 Software Engineering where our team built an application 
        for the Transportation Data & Analytics team at the City of Toronto. 
         It is a web application where consultants can acquire traffic data from 
         street segments in Toronto.  Users can create traffic data requests by drawing 
         complex routes on a map and specifying date ranges or metrics to be included.  
         Queries are automatically validated and modified based on available traffic data 
         from the team’s big data repositories, and users can then download their requested 
         CSV formatted datasets.`,
    "prog_lang": 'Javascript, Python',
    "technologies": "React, Material UI, Mapbox, Django, PostgreSQL, DynamoDB",
    "links": ["https://drive.google.com/file/d/193mDXXobLwnQvw623UFuNAhlt1OURabk/view?usp=sharing"]
  },
  {
    "title": "Checkout calculator",
    "description":
      `
        A checkout calculator to calculate the total price of a group of items based on
         their respective quantities, prices. A user can also specify a tax or discount
          rate to be applied at checkout. Implemented a web app version and a mobile app
          version of such calculator.

        `,
    "prog_lang": 'Javascript (web and mobile)',
    "technologies": "React, Firebase (web) / React Native, Firebase (mobile)",
    "links": [
      "https://github.com/fernanda-palacios/checkout-calc-web",
      "https://github.com/fernanda-palacios/checkout-calc-mobile"
    ]
  },
  {
    "title": "Data analysis - Covid in South Korea",
    "description":
      `
        This project was based on a Dataset from Kaggle, from KCDC 
        (Korea Centers for Disease Control & Prevention) and local 
        governments. It used SQL queries to analyze the data and answer 
        questions such as which groups of people have been most affected 
        y covid, how have the implemented policies influenced the number 
        of cases and what has been the internet search trend of people over 
        time during the pandemic.
        `,
    "technologies": "SQL",
    "links": [
      "https://github.com/fernanda-palacios/kaggle-covid-south-korea ",
    ]
  },
  {
    "title": "Movie review app",
    "description":
      `
        A web application where users can engage in movie discussions threads, 
        rate movies and find trending movies. An admin dash is also available 
        where the admin can manage the platform, add new movies from The Movie 
        Database (TMDb)’s API or view a dashboard with metrics such as the most 
        discussed movies.
        `,
    "prog_lang": "Javascript, Nodejs",
    "technologies": "HTML, CSS, Bootstrap, Express, MongoDB",
    "links": [
      "https://github.com/fernanda-palacios/movie-review-app "
    ]
  },
  {
    "title": "Pizza Parlour CLI app",
    "description":
      `
        A CLI app where users can place orders from a pizza parlour. 
        The entire workflow is implemented for users to view the menu, 
        start an order, add any pizzas / toppings / drinks as well as 
        check out and choose a delivery method.

        `,
    "prog_lang": "Python",
    "technologies": "Click, Flask",
    "links": [
      "https://github.com/fernanda-palacios/pizza-parlour-cli "
    ]
  },
  {
    "title": "Indivisualize",
    "description":
      `
        An R shiny app where users can visualize their interests and 
        sentiments over time based on their social media. A user can use 
        the app to automatically scrape their social media profiles and 
        perform data analysis to visualize their individual usage of these over time.

        `,
    "prog_lang": "R",
    "technologies": "Shiny, Tidytext",
    "links": [
      "https://github.com/fernanda-palacios/indivisualize"
    ]
  },
  {
    "title": "Image organizer app",
    "description":
      `
        A JavaFX desktop app where users can upload and manage their photos. 
        For example, users can group photos into folders, tag photos and search by tags.
          The app also contains a logging system and allows users to view their past 
          activity or revert changes. 

        `,
    "prog_lang": "Java",
    "technologies": "JavaFX, FXML",
    "links": [
      "https://github.com/fernanda-palacios/image-organizer-app"
    ]
  },
  {
    "title": "Mancala game",
    "description":
      `
        A mancala CLI game application where users can connect to a server
         and play the famous and fun game of mancala. The app is built with C
          and uses sockets to establish the connection and communication between players.
        `,
    "prog_lang": "C",
    "links": [
      "https://github.com/fernanda-palacios/mancala-game"
    ]
  },
  {
    "title": "Music Visualizer",
    "description":
      `
        A music visualizer which connects to Altera's DE1-Soc board FPGA (VGA display)
         and is implemented in Verilog. This music visualizer changes the length and colour
          of its sound waves in response to the volume and pace of the beat.
        `,
    "technologies": "Verilog (Hardware Description Language)",
    "links": [
      "https://github.com/fernanda-palacios/music-visualizer"
    ]
  },
  {
    "title": "Text sentiment analysis",
    "description":
      `
        A tidy text mining project where text sentiment is analyzed in two of 
        Sigmund Freud’s books. The main tones and emotions present in the books 
        are determined and plotted with ggplot2.
        `,
    "prog_lang": "R",
    "technologies": "Tidytext, ggplot2",
    "links": [
      "https://github.com/fernanda-palacios/text-sentiment-analysis"
    ]
  },
  {
    "title": "IoT password manager",
    "description":
      `
        A secure password manager for IoT devices. This project 
        was part of CSC454 Business of Software / CSC491 Capstone Design Project. 
        It is a software service that detects IoT devices in the network with 
        compromised passwords. It leverages Pwned Passwords’ API, a database with more than 
        600m real-world passwords previously exposed in data breaches. The project also 
        contains a web application prototype where users can easily manage their IoT devices’ passwords.
        `,
    "prog_lang": "Python",
    "technologies": "HTML, Jekyll",
    "links": [
      "https://drive.google.com/drive/folders/1SwSdDjxPFChVg55GNZlQpSCcS5aKwm3x?usp=sharing",
      "https://github.com/fernanda-palacios/soteria-app"
    ]
  },
  {
    "title": "Airbnb R package",
    "description":
      `
      This project uses a dataset of Airbnb listings in Amsterdam and 
      it provides travellers with information regarding housing options 
      under different criteria. For instance, it can list out Airbnb's average 
      prices per neighbourhood or listings in a given price range and with a given 
      number of bedrooms.
        `,
    "prog_lang": "R",
    "links": [
      "https://github.com/fernanda-palacios/airbnb-r-package"
    ]
  },
  {
    "title": "UoftT Connect",
    "description":
      `
      This project was part of CSC318 Design of Interactive 
      Computational Media and its goal was to enhance the social fabric 
      across the student community.  We designed a mobile app for students to 
      find and join groups for studying, socializing or extracurricular activities. 
      Throughout the design process, we conducted user research, developed and tested 
      various prototypes and developed a high-fidelity prototype using Framer. 
        `,
    "technologies": "Framer",
    "links": [
      "https://drive.google.com/file/d/1P5lD8agcqHJ9reJ3zWBdJHzZUqsFQuBJ/view?usp=sharing"
    ]
  }
]