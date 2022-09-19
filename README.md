# Project management system using MERN stack (Mongodb, Express.js, React.js and Node.js) 



## Setup instruction

- Step 1: install dependencies/node_module
  - Go to /backend directory for backend setup and run `npm install`

  - Go to /frontend directory for frontend setup and run `npm install`

- Step 2: Configure mongodb connection url
Go to backend directory and create .env file 
and put into `MONGODB_PATH=your-mongodb-connection-url`

- Step 3:  Change server port and cors origin (Optional)
by default your server running in port `http://localhost:9000` and cors origin/frontend url is`http://localhost:3000` , you can change port and cors, simply put this key into your .env
`SERVER_PORT=your-port` and` CORS_ORIGIN=-your-client-origin`

- Step 4: Run project
in your backend `npm run serve` for start node server and `npm run start` for frontend

## Packages used
- Tailwindcss
- Headlessui
- React router
- Axios
- UUID
- Joi
- Cors
- Dotenv


## Project Screenshot
#### Todo board quick preview
![React-App](https://user-images.githubusercontent.com/96901635/191009449-0083044c-c961-45cd-9da4-7184289b9573.gif)
#### Todo board
![image](https://user-images.githubusercontent.com/96901635/191006996-0c185cdd-5834-47c6-8927-2e7d539866a7.png)
#### Task insert
![image](https://user-images.githubusercontent.com/96901635/191007092-eb25cfc8-c056-4be2-a898-00ad29d65785.png)
#### Edit task
![image](https://user-images.githubusercontent.com/96901635/191008217-6a0175e6-d5a9-4d98-8951-4a528d2bef99.png)
#### Edit project
![image](https://user-images.githubusercontent.com/96901635/191008043-8c9113a1-700f-42bb-9f87-e68db159c4dc.png)




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
