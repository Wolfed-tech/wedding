import { Step } from './Step'
import Photo1 from '.././../assets/photo1.jpg'
import Photo2 from '.././../assets/photo2_low.jpg'
import Photo3 from '.././../assets/photo3.jpg'

const ProgrammSection = () => {
  return (
    <section className='section'>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="max-w-xl mb-6">
                        <h4 className='font text-2xl font-bold tracking-tight text-gray-900 md:text-4xl text-center md:text-left'>Программа дня</h4>
                        <p className="mt-4 text-md text-gray-500">Дорогие гости, приглашаем Вас разделить с нами чудесный праздник, посвященный нашей свадьбе!</p>
                        <p className="mt-1 text-md text-gray-500">Никакой официальности, супер торжественных нарядов и суеты. Только природа, теплое общение и любовь!</p>
                        <Step />
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3 xs:overflow-hidden md:overflow-auto">
                        <img
                            className="object-cover mb-6 rounded-md shadow-lg 
                            h-96 w-96 
                            sm:h-96 sm:w-96 
                            xl:h-96 xl:w-96"
                            src={Photo1}
                            alt=""
                        />
                        <img
                            className="object-cover rounded-md shadow-lg  
                            h-32 w-32
                            sm:h-32 sm:w-32 
                            xl:h-60 xl:w-60"
                            src={Photo2}
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover rounded-md shadow-lg 
                            h-60 w-60 
                            sm:h-64  sm:w-64 
                            xl:h-96 xl:w-96"
                            src={Photo3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgrammSection