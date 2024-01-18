import { Button, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link} from "react-router-dom";
import { IoMenu, IoMoon, IoSearch } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
const Header = () => {
  const [theme, settheme] = useState(true);
  const [drop, setdrop] = useState(false);
  //   const path = useLocation().pathname;
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  if (theme) {
    localStorage.theme = "light";
  } else {
    localStorage.theme = "dark";
  }
  // localStorage.removeItem('theme')
  return (
    <div>
      <Navbar className="border-2 border-slate-300 dark:text-white bg-cyan-200">
        <Link to={`/`} className=" font-bold flex items-center">
          <span className="p-1 px-2 text-xl text-white pl-10 rounded-lg bg-gradient-to-r from-blue-500 to-pink-600 border-[1px] border-slate-300">
            Sebi&apos;s
          </span>
          <p className="text-xl">Blogs</p>
        </Link>
        <form className="flex gap-1">
          <TextInput
            className=" max-sm:w-32  w-80 focus:outline-none"
            placeholder="Search"
            // rightIcon={IoSearch}
          />
          <Button pill>
            <IoSearch />
          </Button>
        </form>
        <Button
          pill
          className="max-lg:hidden"
          onClick={() => settheme((theme) => !theme)}
        >
          {theme ? <IoMoon /> : <IoSunny />}
        </Button>
        <div className="max-lg:hidden flex  gap-20 h-full">
          <Link to="/">Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <Link to={"/signup"}>
          <Button
            outline
            gradientDuoTone="purpleToBlue"
            className="font-bold max-lg:hidden"
          >
            SignUp
          </Button>
        </Link>

        <IoMenu
          onClick={() => setdrop((e) => !e)}
          className="hidden max-lg:block text-4xl rounded-full border-[1px] p-1 border-slate-200 dark:border-slate-700"
        />
      </Navbar>
      {drop ? (
        <div className="flex p-2 dark:bg-slate-800 dark:text-white flex-col gap-5 items-center justify-center font-bold">
          <Link className="m-2 w-full h-full text-center" to={`/`}>
            Home
          </Link>
          <Link className="m-2 w-full h-full text-center" to={`/about`}>
            About
          </Link>
          <Link className="m-2 w-full h-full text-center" to={`/projects`}>
            Projects
          </Link>
          <Button
            outline
            gradientDuoTone="purpleToBlue"
            className="mb-2 w-full"
          >
            Sign In
          </Button>
          <Button
            outline
            gradientDuoTone="purpleToBlue"
            className="w-full"
            onClick={() => settheme((theme) => !theme)}
          >
            {theme ? <IoMoon /> : <IoSunny />}
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
