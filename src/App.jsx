import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Layout from "./utils/Layout"
import Github, { getGithubData } from "./components/Github"
import User from "./components/User"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" loader={getGithubData} element={<Github />}></Route>
        <Route path="user/" element={<User />} >
            <Route path=":userId" element={<User />} />
        </Route>
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
