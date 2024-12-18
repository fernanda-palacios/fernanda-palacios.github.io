export const projects = [
  {
    "title": "Personal Shopping App",
    "description":
      `
      A full-stack shopping list application which enabled a functional minimum viable product for the startup team Donavi at UofT’s Engineering Hatchery Summer Program.

      It also contains a multi-step onboarding flow to gather user information for a personalized shopping recommendation engine.
      
        `,
    "prog_lang": 'Javascript',
    "technologies": "React, MaterialUI, MongoDB, Express",
    "links": [
      {
        "href": "https://github.com/fernanda-palacios/personal-shopping-app",
        "name": "Source Code"
      }
    ],
    "category": "Javascript"
  },
  {
    "title": `
        City of Toronto Project`,
    "description":
      `
      In CSC301 Software Engineering, our group developed a web application for the City of 
      Toronto's Transportation Data & Analytics team. This application allows consultants to
       efficiently query Toronto’s extensive traffic data through a complex and intuitive map
        interface.
        `,
    "prog_lang": 'Javascript, Python',
    "technologies": "React, Material UI, Mapbox, Django, PostgreSQL, DynamoDB",
    "links": [
      {
        "name": "Demo",
        "href": "https://drive.google.com/file/d/193mDXXobLwnQvw623UFuNAhlt1OURabk/view?usp=sharing"
      }
    ],
    "category": "Javascript, Python"
  },
  {
    "title": "IoT password manager",
    "description":
      `
        This project was part of CSC454 Business of Software / CSC491 Capstone Design Project. It
         detects IoT devices in the network with compromised passwords by leveraging Pwned Passwords’
          API, and allows users to easily and securely manage their IoT devices' passwords through a web application.
        `,
    "prog_lang": "Python",
    "technologies": "HTML, Jekyll",
    "links": [
      { "name": "Demo (Scanner)", "href": "https://drive.google.com/drive/folders/1SwSdDjxPFChVg55GNZlQpSCcS5aKwm3x?usp=sharing" },
      { "name": "Source Code (Web App Prototype)", "href": "https://github.com/fernanda-palacios/soteria-app" },
      { "name": "Live Demo (Web App Prototype)", "href": "https://fernanda-palacios.github.io/iot-password-manager.github.io/" }
    ],
    "category": "Python"
  },
  {
    "title": "Interpreters",
    "description": `An implementation of three different interpreters or evaluators using Racket
    for an extended Lambda Calculus. The first one is an  Eager By-Value Algebraic Evaluator (EVA) 
    where evaluation consists primarily of a function's body substitution with the argument value 
    (for function calls). The second one is an Eager By-Value Environmental Evaluator (EVE) which 
    extends this to include environments and scopes. The third one is an Eager By-Value Stateful Evaluator 
    (EVO) which further extends the latter, incorporating variable mutation.`,
    "prog_lang": "Racket",
    onRequest: true,
    "category": "Racket"
  },
  {
    "title": "Router ",
    "description":
      `      
      A router implementation in a simulated mininet network topology using C.
       The implementation followed the internet protocols: Ethernet, IP, ICMP, ARP, TCP/UDP
        to perform the routing logic such as sending replies, forwarding packets, validating packets,
         and managing an ARP cache.
        `,
    "prog_lang": "C",
    "technologies": "Mininet",
    onRequest: true,
    "category": "C"
  },
  {
    "title": "Virtual Memory ",
    "description":
      `      
      Peformed an analysis of memory access patterns of virtual pages for several programs using Python.
       Also implemented the operation of virtual memory translation through a three-level pagetable in C.
        Lastly, implemented several page replacement algorithms such as  FIFO, LRU, MRU, CLOCK that could
         be used as part of the translation process and compared their performance  in terms of their hit
          rate and number of evictions.      
        `,
    "prog_lang": "Python, C",
    onRequest: true,
    "category": "Python, C"
  },
  {
    "title": "Queues Synchronization",
    "description":
      `      
      Completed the implementation of a message queue system by adding the necessary locks and condition variables
       operations to synchronize access to a message queue. This system could be used in many 
       settings including the creation of multiple queues with any number of reader and/or writer
        handles acting on a given queue. Also implemented I/O multiplexing functionality for the message queues,
         modeled after the poll() system call. 
      
        `,
    "prog_lang": 'C',
    onRequest: true,
    "category": "C"
  },
  {
    "title": "File system",
    "description":
      `      
        A design and implementation of an extent-based, ext2 file system in C. Used FUSE to mount the file system and supported the following operations:


        formatting a disk image,
        creating and deleting directories, 
        creating and deleting files, 
        displaying metadata about a file or directory, 
        setting the size of a file, and
        writing data to files as well as reading data from files.
      
        `,
    "prog_lang": 'C',
    "technologies": "FUSE",
    onRequest: true,
    "category": "C"
  },
  {
    "title": "Data analysis: Covid in South Korea",
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
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/kaggle-covid-south-korea" }
    ],
    "category": "SQL"
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
    "prog_lang": "Javascript",
    "technologies": "HTML, CSS, Bootstrap, Express, MongoDB",
    "links": [
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/movie-review-app" }      
    ],
    "category": "Javascript"
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
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/indivisualize" }
    ],
    "category": "R"
  },
  {
    "title": "Image organizer app",
    "description":
      `
      A JavaFX desktop app where users can upload and manage their photos. 
      For example, users can group photos into folders, tag photos and search by tags.  
      The app also contains a logging system and allows users to view their past activity 
      or revert changes. The focus was on using a Model-View-Control Framework as well as 
      Objected-Oriented Design Patterns such as Observers/Observables and Factory Classes.

        `,
    "prog_lang": "Java",
    "technologies": "JavaFX, FXML",
    "links": [
      { "name": "Source Code", "href": "https://github.com/fernanda-palacios/image-organizer-app" },
      { "name": "Demo", href: "https://drive.google.com/file/d/1WkAoYL-t4U9RjNTO6sXe3ABuXzbNkw2V/view?usp=sharing" }

    ],
    "category": "Java"
  }
  // ,
  // {
  //   "title": "Pizza Parlour CLI app",
  //   "description":
  //     `
  //       A CLI app where users can place orders from a pizza parlour. 
  //       The entire workflow is implemented for users to view the menu, 
  //       start an order, add any pizzas / toppings / drinks as well as 
  //       check out and choose a delivery method.

  //       `,
  //   "prog_lang": "Python",
  //   "technologies": "Click, Flask",
  //   "links": [
  //     { "name": "Source Code", "href": "https://github.com/fernanda-palacios/pizza-parlour-cli " }
  //   ],
  //   "category": "Python"
  // }
  // ,
  // {
  //   "title": "Mancala game",
  //   "description":
  //     `
  //     A mancala CLI game application where users can connect to a server and play 
  //     the famous and fun game of mancala. Implemented the application in C and 
  //     used sockets as the medium of communication between players.
  //       `,
  //   "prog_lang": "C",
  //   "links": [
  //     { "name": "Source Code", "href": "https://github.com/fernanda-palacios/mancala-game" }
  //   ],
  //   "category": "C"
  // },
  // {
  //   "title": "Music Visualizer",
  //   "description":
  //     `
  //       A music visualizer which connects to Altera's DE1-Soc board FPGA (VGA display)
  //        and is implemented in Verilog. This music visualizer changes the length and colour
  //         of its sound waves in response to the volume and pace of the beat.
  //       `,
  //   "technologies": "Verilog (Hardware Description Language)",
  //   "links": [
  //     { "name": "Source Code", "href": "https://github.com/fernanda-palacios/music-visualizer" }
  //   ],
  //   "category": "Verilog"
  // },
  // {
  //   "title": "Airbnb package",
  //   "description":
  //     `
  //     An R package which uses a dataset of Airbnb listings in Amsterdam and 
  //     provides travellers with information regarding housing options 
  //     under different criteria. For instance, it can list out Airbnb's average 
  //     prices per neighbourhood or listings in a given price range and with a given 
  //     number of bedrooms.
  //       `,
  //   "prog_lang": "R",
  //   "links": [
  //     { "name": "Source Code", "href": "https://github.com/fernanda-palacios/airbnb-r-package" }
  //   ],
  //   "category": "R"
  // },
  // {
  //   "title": "Text sentiment analysis",
  //   "description":
  //     `
  //       A tidy text mining project where text sentiment is analyzed in two of 
  //       Sigmund Freud’s books. The main tones and emotions present in the books 
  //       are determined and plotted with ggplot2.
  //       `,
  //   "prog_lang": "R",
  //   "technologies": "Tidytext, ggplot2",
  //   "links": [
  //     { "name": "Source Code", "href": "https://github.com/fernanda-palacios/text-sentiment-analysis" }
  //   ],
  //   "category": "R"
  // }
]