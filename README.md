## Bot-Army
### Phase-2: React-week-2-codeCallenge

This repository contains several React components that are part of a larger project related to an exciting bot collection. The components interact with each other to provide users with a captivating bot collection experience. Below, we provide a brief overview of each component and its purpose.

<<<<<<< HEAD

<li>Overview</li>
<a href="" target="blank"><img align="center" src="https://github.com/Bisinle/bot-Army/assets/121357281/7bb2db69-b4c1-4ec5-b0c3-4121a84037ff" height="300" width="600 /></a>


                            



                            
## <ins>Key Featurs</ins>





<li> Click on each card</li>


<li> View each bot's details</li>
<li> Delete a bot, deletes from the server</li>

<li> Enlist bot, add bot to your army</li>
<a href="" target="blank"><img align="center" src="https://github.com/Bisinle/bot-Army/assets/121357281/b6f3fc7e-5d85-4e49-b86c-96523ecf6be4" height="300" width="400 /></a> <br>





<li> Navigate back bot collection</li>
<a href="" target="blank"><img align="center" src="https://github.com/Bisinle/bot-Army/assets/121357281/aa236ee4-ac81-455f-87c1-d3c0a2dde945" height="300" width="400 /></a>







<li> Remove a bot from bot army</li>
<a href="" target="blank"><img align="center" src="https://github.com/Bisinle/bot-Army/assets/121357281/e076ab81-b728-45ad-8470-1cd75addf5d0" height="300" width="300 /></a>.  



=======
# <ins>Components Overview</ins>

### 1.DataContextProvider Component

The DataContextProvider,as the name suggest, provides context and manages the application's bot data and provides it to other components using React's context API. It fetches the bot data from a local API at http://localhost:4000/bots and stores it in the botData state. It also handles deleting bot cards from the local database when necessary. The data fetched and managed by this provider is shared with other components in the application.

### 2. App Component

The `App` component serves as the main container for other components and holds the overall layout and structure of the app. This component is primarily responsible for rendering the BotList component, which displays the collection of bot cards. It utilizes `FilterBar` and `SortBar` components to allow users to filter and sort the bot collection,It also handles the main routing of the Application, providing users with smooth navigation and an engaging experience.

### 3. BotList Component

The `BotList` component is where the magic happens! It `displays` the entire bot collection, showcasing each bot as a card. Users can interact with each bot card, clicking on them to navigate to the BotSpecs component, which provides detailed information about a specific bot. The BotList component also allows users to `filter` the collection based on `bot classes` using the `FilterBar` component and `sort` the bots by `health`, `damage`, or `armor` using the `SortBar` component. This enhances the user experience by providing them with better organization and access to the bots they love.

### 4. Bot Component

The `Bot component` is responsible for rendering a `single` bot card. It takes in bot data as props and displays captivating information about the bot, including its name, catchphrase, class, and various attributes such as health, damage, and armor. The class` icon is dynamically generated` based on the bot's class, giving each bot a unique and visually appealing representation.

### 5. BotSpecs Component

The` BotSpecs component` provides in-depth details about a specific bot selected from the bot collection. When a user clicks on a bot card in the BotList component, they are `redirected` to the BotSpecs page. Here, they can see the bot's avatar, name, catchphrase, class, and attributes. The `class icon is dynamically generated just like in the Bot component`. The user can also enlist the bot into their army, navigate back to the main collection page or delete the specific bot from their collection, whcih removes it from the back-end as well.

### 6. BotArmy Component

The BotArmy component is where the real fun begins! It enables users to create their `army of bots`. When users enlist a bot from the BotSpecs page, it gets added to their enlisted bots. The enlisted bots are displayed in the BotArmy component, and users can `remove bots` they no longer want in their army. This interactive and captivating feature allows users to create their dream team of bots for an epic battle!

### 7. FilterBar Component

The `FilterBar` component enhances the bot collection experience by allowing users to `filter bots based on their classes`. Users can `select one or more bot classes `from the dropdown list, and the bot collection will be filtered accordingly. The filtered bots are `displayed in real-time`, providing users with `immediate feedback `and a seamless filtering experience

### 8. SortBar Component

The SortBar component adds another layer of user-friendliness to the bot collection. Users can sort the bots based on their `health`, `damage`, or `armor` attributes by selecting the desired sorting option from the dropdown list. This functionality `enables` users to `find` the most `powerful` or most resilient bots with ease.

>>>>>>> 5dd5faf (updated the README file)
## Getting Started

To run the React App on your local machine, follow these steps:

1. Clone the repository: git clone https://github.com/Bisinle/Botania
2. Navigate to the project directory:` cd botania`
3. Install dependencies: `npm install`
4. Navigate to `src/data` to start the server : `json-server --watch ./src/data/botBase.json`
5. Start the development server: `npm start`
6. Open your browser and go to `http://localhost:3000 `to view the app.

# Contact

For any further questions or inquiries, please contact abdiwadud.mohamedd.@gmail.com.

# License

This code is developed by `Abdiwadud Mohamed` and is under the `Bisinle` License.
