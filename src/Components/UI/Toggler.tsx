import { useThemeStore } from "../../Store"

const Toggler = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div onClick={toggleTheme} className="h-6 w-6 flex justify-center items-center align-middle z-10 rounded-full bg-black dark:bg-white fixed bottom-5 right-5">
      
    </div>
  )
}

export default Toggler;
