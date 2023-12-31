import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"

function App() {

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className={`w-screen h-screen flex items-center justify-center bg-fixed bg-[url('assets/bg.jpg')] bg-cover bg-center hover:bg-top grayscale text-slate-100`}>
                <div className="bg-white/10 backdrop-blur-md text-5xl sm:text-8xl text-slate-300 p-12 border-2 border-slate-500 shadow-2xl rounded-xl select-none lg:transition lg:duration-500 lg:hover:scale-110">Olá mundo!</div>
            </div>
            <div className="h-screen w-full bg-slate-950 px-8 py-8 table text-slate-400 text-2xl">
                <div className="max-w-75rem mx-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda labore maxime nam nisi libero deleniti ratione voluptate voluptatum, cumque neque similique enim ullam ut provident, accusantium magni optio vel? Distinctio similique eum sunt, laudantium explicabo at asperiores natus quis consequatur odio veniam libero sint earum nesciunt reprehenderit dolores sit voluptatum quibusdam temporibus saepe a aperiam atque sequi repellendus! Vitae. Eaque, non! Quaerat repellat atque quidem excepturi explicabo ullam ea aperiam ad rerum consequatur expedita aliquam, architecto tempora tenetur quod labore facilis voluptas sapiente eaque odio neque quos? Dicta, quos!</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda labore maxime nam nisi libero deleniti ratione voluptate voluptatum, cumque neque similique enim ullam ut provident, accusantium magni optio vel? Distinctio similique eum sunt, laudantium explicabo at asperiores natus quis consequatur odio veniam libero sint earum nesciunt reprehenderit dolores sit voluptatum quibusdam temporibus saepe a aperiam atque sequi repellendus! Vitae. Eaque, non! Quaerat repellat atque quidem excepturi explicabo ullam ea aperiam ad rerum consequatur expedita aliquam, architecto tempora tenetur quod labore facilis voluptas sapiente eaque odio neque quos? Dicta, quos!</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda labore maxime nam nisi libero deleniti ratione voluptate voluptatum, cumque neque similique enim ullam ut provident, accusantium magni optio vel? Distinctio similique eum sunt, laudantium explicabo at asperiores natus quis consequatur odio veniam libero sint earum nesciunt reprehenderit dolores sit voluptatum quibusdam temporibus saepe a aperiam atque sequi repellendus! Vitae. Eaque, non! Quaerat repellat atque quidem excepturi explicabo ullam ea aperiam ad rerum consequatur expedita aliquam, architecto tempora tenetur quod labore facilis voluptas sapiente eaque odio neque quos? Dicta, quos!</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda labore maxime nam nisi libero deleniti ratione voluptate voluptatum, cumque neque similique enim ullam ut provident, accusantium magni optio vel? Distinctio similique eum sunt, laudantium explicabo at asperiores natus quis consequatur odio veniam libero sint earum nesciunt reprehenderit dolores sit voluptatum quibusdam temporibus saepe a aperiam atque sequi repellendus! Vitae. Eaque, non! Quaerat repellat atque quidem excepturi explicabo ullam ea aperiam ad rerum consequatur expedita aliquam, architecto tempora tenetur quod labore facilis voluptas sapiente eaque odio neque quos? Dicta, quos!</p>
                    <br/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
